import { Link } from "react-router-dom";
import { Shield, Search, Eye, Zap, Lock, FileText, ArrowRight } from "lucide-react";
import "../styles/HomePage.css";

const features = [
  { icon: Search, title: "Threat Scanner", desc: "AI-powered analysis of emails, URLs, files, and prompts", color: "cyan" },
  { icon: Eye, title: "Deepfake Detection", desc: "Identify manipulated video content with AI", color: "purple" },
  { icon: Zap, title: "Real-Time Analysis", desc: "Instant threat detection with live results", color: "yellow" },
  { icon: Lock, title: "Defense System", desc: "Automated response and mitigation recommendations", color: "green" },
  { icon: FileText, title: "Explainable AI", desc: "Clear reasoning behind every detection", color: "cyan" },
  { icon: Shield, title: "Intelligence Reports", desc: "Detailed threat reports with risk scoring", color: "red" },
];

const stats = [
  { value: "2.4M+", label: "Threats Analyzed" },
  { value: "99.7%", label: "Detection Accuracy" },
  { value: "<50ms", label: "Response Time" },
  { value: "24/7", label: "Active Monitoring" },
];

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-bg">
          <div className="hero-blob-1" />
          <div className="hero-blob-2" />
        </div>

        <div className="hero-content">
          <Shield className="hero-shield-icon" />
          <h1 className="hero-title">AurionX</h1>
          <p className="hero-subtitle">AI Cyber Threat Detection & Defense</p>
          <p className="hero-description">
            Detect, analyze, and neutralize modern cyber threats with explainable AI.
            From phishing emails to deepfakes — AurionX has you covered.
          </p>

          <div className="hero-buttons">
            <Link to="/scanner" className="btn-primary">
              Launch Scanner <ArrowRight className="btn-icon" />
            </Link>
            <Link to="/architecture" className="btn-secondary">
              View Architecture
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <p className="stat-value">{s.value}</p>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="features-container">
          <div className="section-header">
            <h2 className="section-title">Defense Modules</h2>
            <p className="section-description">
              Multi-layered AI protection against the full spectrum of cyber threats
            </p>
          </div>

          <div className="features-grid">
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <f.icon className={`feature-icon ${f.color}`} />
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-card">
          <h2 className="cta-title">Ready to Secure Your Systems?</h2>
          <p className="cta-desc">
            Start scanning for threats now with AurionX's AI-powered detection engine.
          </p>
          <Link to="/scanner" className="btn-primary">
            Get Started <ArrowRight className="btn-icon" />
          </Link>
        </div>
      </section>
    </div>
  );
}
