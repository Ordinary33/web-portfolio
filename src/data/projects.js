export default [
    {
      name: "Libris",
      tools: ["Nuxt.js", "Flask", "Supabase", "Websockets"],
      description: [
        "Co-developed a hyperlocal peer-to-peer book marketplace, architecting a scalable backend using Flask and Supabase for secure relational data management.",
        "Engineered a real-time digital wallet and transaction system utilizing WebSockets to simulate instant top-ups and seamless status updates.",
        "Built a responsive frontend interface with Nuxt.js to ensure a seamless cross-device user experience for community trading."
      ],
      image: "/gifs/projects/libris.gif",
      github: "https://github.com/xbryan25/libris-github"
    },
    {
      name: "Dentica",
      tools: ["Python", "PyQt6", "MySQL"],
      description: [
        "Engineered a centralized healthcare management system using Python and PyQt6 to eliminate data inconsistencies in paper-based clinic workflows.",
        "Designed a robust MySQL database architecture to securely manage comprehensive patient records, long-term treatment histories, and financial operations.",
        "Developed real-time reporting analytics and automated scheduling modules to drive data-driven insights and operational efficiency."
      ],
      image: "/gifs/projects/dentica.gif",
      github: "https://github.com/NightsProject/Dentica"
    },
    {
      name: "Veridia",
      tools: ["Vue.js", "Flask", "Supabase"],
      description: [
        "Architected a normalized relational database in Supabase, enforcing strict foreign key constraints to maintain institutional data integrity for academic administration.",
        "Engineered a RESTful backend with Flask to handle complex CRUD operations, state management, and efficient data retrieval.",
        "Developed a responsive academic management platform using Vue.js to streamline the administration of students, programs, and colleges."
      ],
      image: "/gifs/projects/veridia.gif",
      github: "https://github.com/Ordinary33/CCC181-Web-SSIS"
    },
    {
      name: "RAG Chatbot",
      tools: ["Python", "LangChain", "FastAPI", "Ollama", "Streamlit"],
      description: [
        "Architected a Retrieval-Augmented Generation (RAG) pipeline using LangChain and a local LLM via Ollama to create an interactive GenAI conversational agent grounded in personal resume and project data.",
        "Developed a decoupled backend with FastAPI to handle asynchronous vector retrieval and natural language generation, ensuring low-latency, context-aware query responses.",
        "Built an interactive Streamlit interface that allows recruiters to seamlessly query project details, technical skills, and academic experience in real-time."
      ],
      image: "/gifs/projects/rag-chatbot.gif",
      github: "https://github.com/Ordinary33/portfolio-chatbot"
    },
    {
      name: "Real-Time ASL Translator",
      tools: ["Python", "PyTorch", "OpenCV", "MediaPipe"],
      description: [
        "Developed a computer vision application for real-time translation of American Sign Language, classifying 26 distinct alphabetic gestures from live video feeds.",
        "Fine-tuned a pretrained ResNet18 model in PyTorch, attaining a 99% validation accuracy by optimizing for robust feature extraction.",
        "Engineered a low-latency inference pipeline using OpenCV, achieving an average model execution time of < 50 ms per frame to ensure seamless continuous processing."
      ],
      image: "/gifs/projects/asl-translator.gif",
      github: "https://github.com/Ordinary33/ASL-Classifier-CNN"
    },
    {
      name: "CatBoost Loan Approval System",
      tools: ["Python", "Scikit-Learn", "FastAPI", "Gradio"],
      description: [
        "Engineered a loan approval predictive model using CatBoost, achieving an ROC-AUC score of 0.98 through extensive hyperparameter optimization.",
        "Conducted comprehensive exploratory data analysis and feature engineering on a dataset of 50,000 banking records, significantly improving the model’s ability to identify high-risk financial profiles.",
        "Deployed a high-performance REST API via FastAPI and an interactive Gradio web interface, enabling real-time risk assessment and automated decision-making."
      ],
      image: "/gifs/projects/loan-approval.gif",
      github: "https://github.com/Ordinary33/Realistic-Loan-Approval-Classifier-Model"
    },
    {
      name: "Neural Collaborative Recommendation System",
      tools: ["Python", "PyTorch", "FastAPI", "Streamlit"],
      description: [
        "Engineered a PyTorch-based neural collaborative filtering architecture for cross-domain personalized recommendations, effectively capturing complex user-item interactions.",
        "Trained and evaluated the model on two distinct domains, achieving an MSE of 0.70 on a dataset of 10,000 movies, and an MSE of 3.19 on 271,360 books.",
        "Designed a scalable inference pipeline via FastAPI and an interactive Streamlit frontend, serving real-time, dynamically filtered recommendations in under 1000 ms."
      ],
      image: "/gifs/projects/neural-filtering.gif",
      github: "https://github.com/Ordinary33/Collaborative-Filtering-Recommender-System"
    }
  ];