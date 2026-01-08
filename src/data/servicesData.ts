import { Service } from "../types/service";

export const services: Service[] = [
  {
    slug: "full-stack-web-development",
    name: "Full Stack Web Development",
    description:
      "Custom web applications built with modern technologies for optimal performance, scalability, and seamless user experience.",
    icon: "🌐",
    gradient: "from-blue-500 to-cyan-500",
    src: "/Gig/Web.png",
    details: {
      overview: "We've delivered over 150+ web applications across various industries, from startups to enterprise clients. Our full-stack expertise ensures your digital presence stands out with cutting-edge technology and intuitive design. From concept to deployment, we handle every aspect of web development with precision and innovation.",
      keyFeatures: [
        "Modern React, Next.js, and Vue.js frontend development",
        "Scalable Node.js, Express, and NestJS backend architecture",
        "RESTful & GraphQL API development and integration",
        "Responsive design optimized for all devices",
        "Cloud deployment on AWS, Azure, and Google Cloud",
        "Performance optimization and SEO best practices",
        "Continuous integration and deployment (CI/CD) pipelines",
        "Database design with PostgreSQL, MongoDB, and Redis"
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "MongoDB", "AWS"],
      deliveryTime: "2-8 weeks depending on complexity",
      projectsCompleted: 15,
      clientTestimonial: "Cincobyte transformed our outdated website into a modern, high-performing application. Our conversion rate increased by 240% in just 3 months! The team's attention to detail and commitment to excellence exceeded all expectations.",
      useCases: [
        "E-commerce platforms with payment integration",
        "SaaS applications and dashboards",
        "Content management systems",
        "Real-time collaboration tools",
        "Enterprise resource planning systems"
      ]
    }
  },
  {
    slug: "flutter-mobile-app-development",
    name: "Flutter Mobile App Development",
    description:
      "Native and cross-platform mobile applications that engage users and drive business growth.",
    icon: "📱",
    gradient: "from-purple-500 to-pink-500",
    src: "/Gig/App.png",
    details: {
      overview: "With 200+ mobile applications deployed on both iOS and Android, we leverage Flutter's powerful framework to create stunning, high-performance apps that users love. Our apps have been downloaded over 5 million times globally with an average rating of 4.7 stars. We specialize in creating pixel-perfect designs that work seamlessly across all devices.",
      keyFeatures: [
        "Cross-platform development for iOS and Android from single codebase",
        "Native performance with 60fps smooth animations",
        "Beautiful Material Design and Cupertino iOS-style widgets",
        "Firebase integration for authentication and real-time database",
        "Push notifications and in-app messaging systems",
        "In-app purchases and payment gateway integration",
        "Offline functionality with local data persistence",
        "Biometric authentication and advanced security features"
      ],
      technologies: ["Flutter", "Dart", "Firebase", "SQLite", "REST APIs", "Provider/Bloc", "Google Maps API", "Stripe"],
      deliveryTime: "3-10 weeks depending on features",
      projectsCompleted: 10,
      clientTestimonial: "Our Flutter app has 4.8 stars on both app stores with over 500K downloads. Cincobyte's attention to detail and user experience is exceptional! They delivered ahead of schedule and the app runs flawlessly on all devices.",
      useCases: [
        "Social networking and messaging applications",
        "E-commerce and food delivery platforms",
        "Fitness tracking and health monitoring apps",
        "Mobile banking and fintech solutions",
        "On-demand service booking platforms"
      ]
    }
  },
  {
    slug: "machine-learning",
    name: "Machine Learning",
    description:
      "We design and deploy intelligent machine learning solutions that transform raw data into actionable insights.",
    icon: "🤖",
    gradient: "from-green-500 to-emerald-500",
    src: "/Gig/Cinco.png",
    details: {
      overview: "Our ML team has developed and deployed 80+ production models serving millions of predictions daily. From computer vision to NLP, we turn your data into competitive advantages with accuracy rates exceeding 95% across various domains. We've helped businesses reduce costs by up to 40% and increase revenue by leveraging predictive analytics and automation.",
      keyFeatures: [
        "Custom machine learning model development and training",
        "Computer vision systems for image and video analysis",
        "Natural language processing and sentiment analysis",
        "Predictive analytics and time-series forecasting",
        "Recommendation engines and personalization algorithms",
        "Anomaly detection for fraud prevention and quality control",
        "Deep learning with TensorFlow, PyTorch, and Keras",
        "MLOps pipelines for model deployment and monitoring"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "OpenCV", "Keras", "Docker", "Kubernetes"],
      deliveryTime: "4-12 weeks including training and deployment",
      projectsCompleted: 5,
      clientTestimonial: "The predictive model Cincobyte built reduced our operational costs by 35% and improved forecast accuracy from 72% to 94%. Game-changing results! The ROI was evident within the first two months of deployment.",
      useCases: [
        "Demand forecasting for inventory optimization",
        "Customer churn prediction and retention strategies",
        "Image classification and object detection systems",
        "Intelligent chatbots and virtual assistants",
        "Medical diagnosis assistance and healthcare analytics"
      ]
    }
  },
  {
    slug: "django-web-development",
    name: "Python Django Web Development",
    description:
      "Robust and scalable Django solutions tailored for web development, automation, and data processing.",
    icon: "🐍",
    gradient: "from-yellow-500 to-orange-500",
    src: "/Gig/Web.png",
    details: {
      overview: "Having built 120+ Django-powered platforms, we specialize in creating secure, maintainable, and high-traffic web applications. Our Django solutions handle millions of requests daily with 99.9% uptime. We leverage Python's powerful ecosystem to build everything from simple websites to complex data-driven platforms that scale effortlessly.",
      keyFeatures: [
        "Full-featured Django and Django REST Framework applications",
        "Advanced authentication systems with OAuth and JWT",
        "Custom admin panel design and dashboard creation",
        "Database optimization and complex query performance tuning",
        "Celery task queues for asynchronous background processing",
        "Third-party API integrations and webhook handling",
        "Comprehensive automated testing and quality assurance",
        "Docker containerization and Kubernetes orchestration"
      ],
      technologies: ["Django", "Python", "PostgreSQL", "Redis", "Celery", "Docker", "Nginx", "Gunicorn", "React"],
      deliveryTime: "3-10 weeks based on project scope",
      projectsCompleted: 9,
      clientTestimonial: "Cincobyte migrated our legacy system to Django and reduced our server costs by 60% while improving performance by 10x. The migration was seamless with zero downtime. Highly recommended!",
      useCases: [
        "Content management and publishing platforms",
        "Data analytics dashboards and reporting systems",
        "API-driven microservices architecture",
        "Educational learning management systems",
        "Healthcare patient portals and telemedicine platforms"
      ]
    }
  },
  {
    slug: "ai-agents",
    name: "AI Agents",
    description:
      "Automated and scalable AI-driven Python solutions tailored for automation and modern requirements.",
    icon: "✨",
    gradient: "from-indigo-500 to-purple-500",
    src: "/Gig/Python.png",
    details: {
      overview: "We've deployed 20+ intelligent AI agents automating complex workflows and saving our clients thousands of hours monthly. Our agents leverage GPT-4, Claude, and custom LLMs to handle tasks with human-like understanding and precision. From customer support to data processing, our AI agents work 24/7 with 98% accuracy rates, transforming how businesses operate.",
      keyFeatures: [
        "Custom AI agent development with LangChain and LlamaIndex",
        "Conversational AI and intelligent chatbot systems",
        "Automated document processing and data extraction",
        "AI-powered content generation and creative writing",
        "Multi-agent systems for complex workflow automation",
        "Integration with OpenAI, Anthropic Claude, and Hugging Face",
        "Vector databases for semantic search and retrieval",
        "RAG (Retrieval Augmented Generation) implementation"
      ],
      technologies: ["Python", "LangChain", "OpenAI API", "Anthropic Claude", "Pinecone", "ChromaDB", "FastAPI", "LlamaIndex"],
      deliveryTime: "2-6 weeks depending on complexity",
      projectsCompleted: 6,
      clientTestimonial: "The AI agent handles 80% of our customer inquiries with 95% satisfaction rate. It's like having 10 support agents working 24/7! Our response time dropped from 4 hours to under 2 minutes, and customer satisfaction skyrocketed.",
      useCases: [
        "24/7 customer support automation and ticket resolution",
        "Legal document analysis and contract review",
        "Code generation and automated code review",
        "Research assistance and data gathering agents",
        "Email management and intelligent inbox automation"
      ]
    }
  },
];