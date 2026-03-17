import { ArrowRight } from "lucide-react";
import "../styles/ArchitecturePage.css";

const steps = [
  { id: 1, title: "Threat Input Gateway", desc: "Email, URLs, video, prompts", color: "cyan" },
  { id: 2, title: "AI Detection Engine", desc: "Phishing, deepfake, prompt injection, anomaly models", color: "purple" },
  { id: 3, title: "Explainable AI Module", desc: "Feature importance, confidence scores, highlighted patterns", color: "yellow" },
  { id: 4, title: "Threat Intelligence", desc: "Risk scoring, categorization, report generation", color: "green" },
  { id: 5, title: "Defense & Response", desc: "Block, escalate, quarantine, or mark safe", color: "red" },
  { id: 6, title: "Reporting", desc: "Visualization, analytics, export", color: "cyan" },
];

const techStack = [
  { category: "Frontend", items: ["React", "CSS3", "Framer Motion", "Lucide Icons"] },
  { category: "Backend", items: ["Node.js / Express", "Python Microservices", "REST APIs", "Redis Cache"] },
  { category: "AI/ML", items: ["Scikit-learn", "PyTorch", "HuggingFace NLP", "Deepfake Models"] },
  { category: "Database", items: ["MongoDB (Logs)", "Redis (Cache)", "Vector DB (Embeddings)"] },
];

export default function ArchitecturePage() {
  return (
    <div className="architecture-page">
      <div className="arch-header">
        <h1 className="arch-title">System Architecture</h1>
        <p className="arch-subtitle">AurionX security pipeline overview</p>
      </div>

      {/* Pipeline */}
      <div className="pipeline-section">
        {steps.map((step, i) => (
          <div key={step.id} className="pipeline-step">
            <div className="step-indicator">
              <div className={`step-number ${step.color}`}>{step.id}</div>
              {i < steps.length - 1 && (
                <div className="step-line">
                  <ArrowRight className="step-arrow" />
                </div>
              )}
            </div>
            <div className="step-content">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <h2 className="tech-section-title">Technology Stack</h2>
      <div className="tech-grid">
        {techStack.map((cat) => (
          <div key={cat.category} className="tech-card">
            <h3 className="tech-category">{cat.category}</h3>
            <ul className="tech-list">
              {cat.items.map((item) => (
                <li key={item} className="tech-item">
                  <span className="tech-dot" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
