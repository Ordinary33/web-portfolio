import { useState, useRef, useEffect } from 'react';
import '../Terminal.css';

export default function Terminal() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM\nCOPYRIGHT 2075-2077 ROBCO INDUSTRIES\n-Server 1-\n\nHusnie Archive Unit standing by. Awaiting query...' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesContainerRef = useRef(null);
  const inputRef = useRef(null)

  const [sessionId] = useState(() => Math.random().toString(36).substring(7));

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  useEffect(() => {
    if (!isTyping && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isTyping]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setMessages((prev) => [...prev, { role: 'bot', text: '' }]);

    try {
      const response = await fetch('https://portfolio-chatbot-s1ta.onrender.com/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input, session_id: sessionId }),
      });

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value, { stream: true });

        for (let i = 0; i < chunkValue.length; i++) {
          setMessages((prev) => {
            const newMessages = [...prev];
            const lastIndex = newMessages.length - 1;
            newMessages[lastIndex] = {
              ...newMessages[lastIndex],
              text: newMessages[lastIndex].text + chunkValue[i], 
            };
            return newMessages;
          });
          
          await new Promise(resolve => setTimeout(resolve, 15)); 
        }
      }

    } catch (error) {
      console.error("Terminal connection lost:", error);
      setMessages((prev) => [...prev, { role: 'bot', text: 'ERROR: CONNECTION TO ARCHIVE LOST.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="terminal-wrapper">
      <div className="scanlines"></div>

      <div className="terminal-container">
        <div className="terminal-messages" ref={messagesContainerRef}>
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
              {msg.role === 'user' && <span className="prompt">{'> '}</span>}
              <span className="text" style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</span>
            </div>
          ))}
          {isTyping && messages[messages.length - 1]?.text === '' && (
            <div className="message bot typing">Processing...</div>
          )}
        </div>

        <form onSubmit={sendMessage} className="terminal-input-form">
          <span className="prompt">{'> '}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isTyping}
            autoFocus
            spellCheck="false"
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
}