import { Shield, Cpu, Eye, Lock, Zap, Users } from "lucide-react";
import "../styles/AboutPage.css";

const capabilities = [
  { icon: Cpu, title: "Multi-Model AI Engine", desc: "Combines NLP, computer vision, and anomaly detection models for comprehensive threat coverage." },
  { icon: Eye, title: "Explainable Detections", desc: "Every alert includes clear reasoning — feature importance, confidence scores, and highlighted evidence." },
  { icon: Lock, title: "Zero-Trust Architecture", desc: "Built on zero-trust principles with end-to-end encryption and role-based access control." },
  { icon: Zap, title: "Real-Time Processing", desc: "Sub-50ms threat analysis with streaming results and live updates." },
  { icon: Users, title: "Team Collaboration", desc: "Shared threat intelligence, team escalation workflows, and collaborative investigation tools." },
  { icon: Shield, title: "Continuous Learning", desc: "Models retrain on new threat data automatically, adapting to emerging attack patterns." },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1 className="about-title">
          About <span className="about-title-highlight">AurionX</span>
        </h1>
        <p className="about-text">
          AurionX is an AI-powered cyber threat detection and defense platform designed to protect
          organizations against the full spectrum of modern threats — from phishing emails and
          malicious URLs to deepfake media and prompt injection attacks.
        </p>
        <p className="about-text">
          Our platform combines multiple AI/ML models with explainable AI techniques to not only
          detect threats with high accuracy, but to provide clear, actionable reasoning behind
          every detection. Security teams can understand exactly why a threat was flagged and what
          actions to take.
        </p>
      </div>

      <h2 className="capabilities-title">Platform Capabilities</h2>
      <div className="capabilities-grid">
        {capabilities.map((c) => (
          <div key={c.title} className="capability-card">
            <c.icon className="capability-icon" />
            <h3 className="capability-title">{c.title}</h3>
            <p className="capability-desc">{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="mission-card">
        <h2 className="mission-title">Our Mission</h2>
        <p className="mission-text">
          As AI-generated threats become increasingly sophisticated, traditional security tools
          fall short. AurionX was built to fight AI with AI — leveraging the same technologies
          attackers use to build stronger, smarter defenses. Our goal is to make advanced
          cybersecurity accessible to every organization.
        </p>
      </div>
    </div>
  );
}
