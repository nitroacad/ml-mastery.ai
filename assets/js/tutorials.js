/**
 * ML Mastery.ai - Central Tutorial Metadata Dataset
 */
window.MLTutorials = [
  // TRACK 00 - Start Here / Foundations
  {
    id: "foundations-ai-ml-dl-eng",
    title: "AI, Machine Learning, Deep Learning, and AI Engineering Defined",
    slug: "guides/foundations/ai-ml-dl-eng.html",
    track: "Start Here",
    trackSlug: "foundations",
    difficulty: "Beginner",
    readingTime: "10 min",
    tags: ["Foundations", "AI Engineering", "Roadmap", "Overview"],
    description: "Understand the structural differences between AI Research, Data Science, ML Engineering, and modern AI Engineering.",
    prerequisites: ["None"]
  },
  {
    id: "foundations-roadmap",
    title: "The Production AI/ML Engineer Learning Roadmap",
    slug: "guides/foundations/roadmap.html",
    track: "Start Here",
    trackSlug: "foundations",
    difficulty: "Beginner",
    readingTime: "12 min",
    tags: ["Foundations", "Roadmap", "Career"],
    description: "A comprehensive step-by-step roadmap for mastering AI/ML engineering from foundations to production-grade MLOps.",
    prerequisites: ["None"]
  },

  // TRACK 01 - Mathematics
  {
    id: "math-linear-algebra",
    title: "Linear Algebra & Matrix Operations for Machine Learning",
    slug: "guides/mathematics/linear-algebra.html",
    track: "Mathematics",
    trackSlug: "mathematics",
    difficulty: "Intermediate",
    readingTime: "15 min",
    tags: ["Mathematics", "Linear Algebra", "Embeddings", "Tensors"],
    description: "Tensors, matrix multiplication, projections, eigenvalues, and cosine similarity with python/numpy representations.",
    prerequisites: ["Basic Algebra"]
  },
  {
    id: "math-calculus-optimization",
    title: "Calculus, Gradients & Optimization Mechanics",
    slug: "guides/mathematics/calculus-optimization.html",
    track: "Mathematics",
    trackSlug: "mathematics",
    difficulty: "Intermediate",
    readingTime: "15 min",
    tags: ["Mathematics", "Calculus", "Gradient Descent", "Optimization"],
    description: "Partial derivatives, direction gradients, computational graphs, and loss function landscapes.",
    prerequisites: ["Linear Algebra"]
  },

  // TRACK 02 & 03 - Data & EDA
  {
    id: "data-engineering-quality",
    title: "Data Preparation, Feature Engineering & Data Lineage",
    slug: "guides/data/engineering-quality.html",
    track: "Data Fundamentals",
    trackSlug: "data",
    difficulty: "Intermediate",
    readingTime: "14 min",
    tags: ["Data", "Feature Engineering", "Data Drift", "Validation"],
    description: "Ingestion, cleaning, handling missing values, leakage prevention, and automated validation pipelines.",
    prerequisites: ["Python Basics"]
  },

  // TRACK 04 & 05 - Classical ML & Evaluation
  {
    id: "ml-model-evaluation",
    title: "Model Evaluation: Offline vs Online Metrics & Benchmarking",
    slug: "guides/machine-learning/model-evaluation.html",
    track: "Model Evaluation",
    trackSlug: "machine-learning",
    difficulty: "Intermediate",
    readingTime: "16 min",
    tags: ["Evaluation", "Metrics", "ROC-AUC", "Precision-Recall"],
    description: "Classification, regression, ranking metrics, ROC vs PR curves, calibration, and why accuracy misleads.",
    prerequisites: ["Data Fundamentals"]
  },

  // TRACK 06 - Deep Learning
  {
    id: "dl-neural-networks",
    title: "Deep Neural Networks, Backpropagation & Optimizers",
    slug: "guides/deep-learning/neural-networks.html",
    track: "Deep Learning",
    trackSlug: "deep-learning",
    difficulty: "Intermediate",
    readingTime: "18 min",
    tags: ["Deep Learning", "Backpropagation", "PyTorch", "Optimizers"],
    description: "Perceptrons, loss landscapes, Adam vs SGD, learning rate schedulers, and gradient vanishing/exploding controls.",
    prerequisites: ["Calculus & Optimization"]
  },

  // TRACK 09 - LLM Engineering
  {
    id: "llm-architecture-inference",
    title: "LLM Architecture, Context Windows & Inference Mechanics",
    slug: "guides/llm-engineering/architecture-inference.html",
    track: "LLM Engineering",
    trackSlug: "llm-engineering",
    difficulty: "Advanced",
    readingTime: "20 min",
    tags: ["LLM", "Transformers", "Tokens", "Inference", "Quantization"],
    description: "Tokenizer algorithms, context window mechanics, temperature/top-p sampling, KV cache, and throughput trade-offs.",
    prerequisites: ["Deep Learning"]
  },

  // TRACK 10 & 11 - Prompting & RAG
  {
    id: "rag-architecture-retrieval",
    title: "Production RAG Architecture: Chunking, Hybrid Search & Reranking",
    slug: "guides/rag/architecture-retrieval.html",
    track: "RAG Engineering",
    trackSlug: "rag",
    difficulty: "Advanced",
    readingTime: "22 min",
    tags: ["RAG", "Vector Search", "Hybrid Search", "Reranking", "Embeddings"],
    description: "End-to-end RAG architecture, chunking strategies, dense/sparse hybrid search, cross-encoders, and evaluation.",
    prerequisites: ["LLM Engineering"]
  },

  // TRACK 13 - AI Agents
  {
    id: "agents-architectures-tools",
    title: "Autonomous AI Agents: Tool Calling, Memory & State Execution",
    slug: "guides/agents/architectures-tools.html",
    track: "AI Agents",
    trackSlug: "agents",
    difficulty: "Advanced",
    readingTime: "20 min",
    tags: ["Agents", "Tool Calling", "Execution Loops", "Guardrails"],
    description: "Agent execution loops, ReAct patterns, structured output schemas, state graphs, retry handling, and human-in-the-loop.",
    prerequisites: ["LLM Engineering", "RAG"]
  },

  // TRACK 14 & 15 - MLOps & System Design
  {
    id: "mlops-pipelines-deployment",
    title: "MLOps Pipelines: Experimentation to Production CI/CD",
    slug: "guides/mlops/pipelines-deployment.html",
    track: "MLOps",
    trackSlug: "mlops",
    difficulty: "Advanced",
    readingTime: "22 min",
    tags: ["MLOps", "Model Registry", "Drift Detection", "CI/CD", "Serving"],
    description: "Model registries, continuous training, drift monitoring (data/concept), canary deployments, and shadow testing.",
    prerequisites: ["Model Evaluation"]
  },

  // TRACK 17 & 18 - Security & Responsible AI
  {
    id: "security-prompt-injection-guardrails",
    title: "AI System Security: Prompt Injection, Exfiltration & Threat Modeling",
    slug: "guides/security/prompt-injection-guardrails.html",
    track: "AI Security",
    trackSlug: "security",
    difficulty: "Advanced",
    readingTime: "18 min",
    tags: ["Security", "Prompt Injection", "Threat Model", "Guardrails"],
    description: "Direct vs indirect prompt injection, data exfiltration attacks, adversarial inputs, and defense-in-depth engineering.",
    prerequisites: ["LLM Engineering"]
  }
];
