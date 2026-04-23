export default [
    {
      name: "Libris",
      tools: ["Nuxt.js", "Flask", "Supabase", "Websockets"],
      description: [
        "Network Architecture: Hyperlocal peer-to-peer marketplace powered by a scalable Flask backend and Supabase for secure, relational data persistence.",
        "Transaction Engine: Real-time digital wallet system utilizing full-duplex WebSockets for instantaneous balance top-ups and live transaction status synchronization.",
        "User Interface: Cross-device compatible Nuxt.js frontend optimized for high-performance community trading and seamless navigation."
      ],
      image: "https://res.cloudinary.com/ddholly8f/image/upload/v1776950931/Libris_prizuw.png",
      github: "https://github.com/xbryan25/libris-github"
    },
    {
      name: "Dentica",
      tools: ["Python", "PyQt6", "MySQL"],
      description: [
        "Client Application: Centralized healthcare administration interface built with PyQt6 and Python, engineered to digitize and unify legacy clinical workflows.",
        "Data Architecture: Secure MySQL relational database structured for high-integrity storage of comprehensive patient dossiers, treatment timelines, and financial ledgers.",
        "Operational Subsystems: Integrated modules for real-time analytics reporting and automated patient scheduling, optimizing clinic efficiency and resource allocation."
      ],
      image: "https://res.cloudinary.com/ddholly8f/image/upload/v1776950930/Dentica_t6iovv.png",
      github: "https://github.com/NightsProject/Dentica"
    },
    {
      name: "Veridia",
      tools: ["Vue.js", "Flask", "Supabase"],
      description: [
        "Data Architecture: Normalized Supabase relational database enforcing strict referential integrity for institutional academic records.",
        "Backend Infrastructure: RESTful Flask service facilitating complex state management, efficient data retrieval, and full-cycle CRUD operations.",
        "Administrative Interface: Responsive Vue.js dashboard engineered to centralize and streamline the management of students, programs, and colleges."
      ],
      image: "https://res.cloudinary.com/ddholly8f/image/upload/v1776950929/Veridia_ut3psj.png",
      github: "https://github.com/Ordinary33/CCC181-Web-SSIS"
    },
    {
      name: "Personal Portfolio RAG Chatbot",
      tools: ["Python", "LangChain", "FastAPI", "Ollama", "Streamlit"],
      description: [
        "AI Engine: Local Retrieval-Augmented Generation (RAG) pipeline powered by LangChain and Ollama, grounding LLM inferences in embedded personal domain data.",
        "Inference API: Asynchronous FastAPI backend managing low-latency vector database retrieval and context-aware natural language generation.",
        "Client Interface: Interactive Streamlit frontend engineered for real-time querying of academic, technical, and project-based experience."
      ],
      image: "https://res.cloudinary.com/ddholly8f/image/upload/v1776950930/RAG_giimjx.png",
      github: "https://github.com/Ordinary33/portfolio-chatbot"
    },
    {
      name: "Real-Time ASL Translator",
      tools: ["Python", "PyTorch", "OpenCV", "MediaPipe"],
      description: [
        "Vision System: Real-time computer vision application classifying 26 distinct American Sign Language alphabetic gestures from live video streams.",
        "Neural Architecture: PyTorch-based ResNet18 model fine-tuned for robust feature extraction, achieving 99% validation accuracy on complex gesture datasets.",
        "Inference Pipeline: Low-latency OpenCV processing layer delivering continuous sub-50ms frame execution for seamless gesture translation."
      ],
      image: "",
      github: "https://github.com/Ordinary33/ASL-Classifier-CNN"
    },
    {
      name: "CatBoost Loan Approval System",
      tools: ["Python", "Scikit-Learn", "FastAPI", "Gradio"],
      description: [
        "Predictive Engine: Highly optimized CatBoost classification algorithm achieving an ROC-AUC score of 0.98 for financial risk assessment.",
        "Data Pipeline: Comprehensive feature engineering workflow processing 50,000 banking records to isolate high-risk financial profile indicators.",
        "Deployment Architecture: High-performance FastAPI REST endpoint coupled with an interactive Gradio interface for real-time automated decision-making."
      ],
      image: "https://res.cloudinary.com/ddholly8f/image/upload/v1776950930/loanapproval_egd8xx.png",
      github: "https://github.com/Ordinary33/Realistic-Loan-Approval-Classifier-Model"
    },
    {
      name: "Neural Collaborative Recommendation System",
      tools: ["Python", "PyTorch", "FastAPI", "Streamlit"],
      description: [
        "Core Algorithm: PyTorch-based neural collaborative filtering architecture designed to map complex, non-linear user-item interactions.",
        "Model Performance: Cross-domain training system achieving 0.70 MSE on cinematic datasets (10k items) and 3.19 MSE on literary datasets (271k+ items).",
        "Delivery System: Scalable FastAPI inference pipeline and Streamlit dashboard serving dynamic, personalized recommendations with sub-second latency."
      ],
      image: "https://res.cloudinary.com/ddholly8f/image/upload/v1776950932/recommender_fpxuxm.png",
      github: "https://github.com/Ordinary33/Collaborative-Filtering-Recommender-System"
    },
    {
      name: "Synthetic Image Forensic Detector",
      tools: ["PyTorch", "ONNX", "FastAPI", "Gradio"],
      description: [
        "Forensic Neural Network: Architected a specialized CNN from the ground up to identify high-frequency diffusion noise patterns, bypassing standard transfer learning to strictly isolate microscopic AI artifacts.",
        "Inference Engine: Engineered an ONNX-optimized CPU inference pipeline featuring strict CenterCrop spatial preprocessing to prevent artifact degradation during image normalization.",
        "Microservice Architecture: Deployed a fully decoupled forensic analysis system utilizing a FastAPI backend and interactive Gradio frontend for high-fidelity media verification."
      ],
      image: "https://res.cloudinary.com/ddholly8f/image/upload/v1776950933/syntheticimage_p50aql.png",
      github: "https://github.com/Ordinary33/Synthetic-Image-Detector" 
    }
  ];