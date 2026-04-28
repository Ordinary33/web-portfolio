
export const playHoverSound = () => {
    const audio = new Audio('/sfx/tick.wav');
    audio.volume = 0.15;
    audio.play().catch(err => console.log("Audio blocked:", err));
  };


export const playClickSound = () => {
    const clickSound = new Audio('/sfx/tabswitch.wav');
    clickSound.volume = 0.4; 
    clickSound.play().catch(err => console.log("Audio blocked:", err));
  };

export const playStaticSound = () => {
    const clickSound = new Audio('/sfx/radio_static.wav');
    clickSound.volume = 0.3; 
    clickSound.play().catch(err => console.log("Audio blocked:", err));
};