import { useState, useRef } from "react";
import { Mail, Globe, Video, MessageSquare, Upload, Search, AlertTriangle, CheckCircle, Shield } from "lucide-react";
import "../styles/ScannerPage.css";

const inputTypes = [
  { id: "email", label: "Email", icon: Mail },
  { id: "url", label: "URL", icon: Globe },
  { id: "video", label: "Video", icon: Video },
  { id: "prompt", label: "Prompt", icon: MessageSquare },
];

interface ScanResult {
  threat: string;
  level: string;
  score: number;
  reasons: string[];
  actions: string[];
}

const mockResults: Record<string, ScanResult> = {
  email: {
    threat: "Phishing Email",
    level: "critical",
    score: 87,
    reasons: [
      "Suspicious sender domain (scam-corp.xyz)",
      "Urgent financial request language",
      "Known phishing keyword pattern detected",
      "Mismatched reply-to address",
    ],
    actions: [
      "Do not click any links",
      "Report the email to IT security",
      "Block the sender domain",
      "Mark as phishing",
    ],
  },
  url: {
    threat: "Malicious URL",
    level: "high",
    score: 76,
    reasons: [
      "Domain registered 2 days ago",
      "SSL certificate anomaly",
      "Redirect chain detected (3 hops)",
      "Known malware distribution pattern",
    ],
    actions: [
      "Block domain in firewall",
      "Do not visit the URL",
      "Report to threat intel feed",
      "Scan connected systems",
    ],
  },
  prompt: {
    threat: "Prompt Injection Attack",
    level: "high",
    score: 82,
    reasons: [
      "System instruction override attempt",
      "Role-play manipulation detected",
      "Data exfiltration pattern in payload",
    ],
    actions: [
      "Block the input",
      "Log the attempt",
      "Review AI system guardrails",
      "Escalate to security team",
    ],
  },
  video: {
    threat: "Deepfake Video",
    level: "medium",
    score: 58,
    reasons: [
      "Facial micro-expression anomalies detected",
      "Lip-sync inconsistency score: 0.73",
      "Compression artifacts suggest manipulation",
      "Frame-level temporal inconsistency at 0:04-0:08",
    ],
    actions: [
      "Do not share the video",
      "Verify source authenticity",
      "Submit for advanced forensic analysis",
    ],
  },
};

export default function ScannerPage() {
  const [selectedType, setSelectedType] = useState("email");
  const [inputValue, setInputValue] = useState("");
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleScan = () => {
    setScanning(true);
    setResult(null);
    setTimeout(() => {
      setScanning(false);
      setResult(mockResults[selectedType]);
    }, 2500);
  };

  const handleVideoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
      const url = URL.createObjectURL(file);
      setVideoPreviewUrl(url);
    }
  };

  const handleTypeChange = (id: string) => {
    setSelectedType(id);
    setResult(null);
    setVideoFile(null);
    setVideoPreviewUrl(null);
    setInputValue("");
  };

  const getScoreClass = (score: number) => {
    if (score > 70) return "danger";
    if (score > 40) return "warning";
    return "safe";
  };

  return (
    <div className="scanner-page">
      <div className="scanner-header">
        <h1 className="scanner-title">Threat Scanner</h1>
        <p className="scanner-subtitle">Submit content for AI-powered threat analysis</p>
      </div>

      {/* Input type selector */}
      <div className="input-type-selector">
        {inputTypes.map((t) => (
          <button
            key={t.id}
            onClick={() => handleTypeChange(t.id)}
            className={`type-btn ${selectedType === t.id ? "active" : ""}`}
          >
            <t.icon className="type-btn-icon" />
            {t.label}
          </button>
        ))}
      </div>

      {/* Input area */}
      <div className="input-card">
        {selectedType === "video" ? (
          <div>
            <div
              className="file-upload-zone"
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="video/mp4,video/webm,video/avi,video/*"
                onChange={handleVideoFileChange}
              />
              <Upload className="upload-icon" />
              <p className="upload-text">
                Drag & drop your video file here or click to browse
              </p>
              <p className="upload-hint">Supported: MP4, WEBM, AVI</p>
            </div>

            {videoPreviewUrl && (
              <div className="video-preview-section">
                <video
                  className="video-preview"
                  src={videoPreviewUrl}
                  controls
                />
                <p className="video-file-name">
                  📎 {videoFile?.name} ({((videoFile?.size || 0) / (1024 * 1024)).toFixed(2)} MB)
                </p>
              </div>
            )}
          </div>
        ) : (
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={
              selectedType === "email"
                ? "Paste the email content here..."
                : selectedType === "url"
                ? "Enter URL to scan (e.g., https://example.com)"
                : "Enter the AI prompt to analyze for injection..."
            }
            className="input-textarea"
          />
        )}

        <div className="input-actions">
          <button
            onClick={handleScan}
            disabled={scanning}
            className="scan-btn"
          >
            {scanning ? (
              <>
                <div className="spinner" />
                Analyzing...
              </>
            ) : (
              <>
                <Search className="scan-btn-icon" />
                Scan for Threats
              </>
            )}
          </button>
        </div>
      </div>

      {/* Scanning animation */}
      {scanning && (
        <div className="scanning-overlay">
          <div className="scanning-spinner" />
          <p className="scanning-text">Running AI Analysis...</p>
          <p className="scanning-subtext">Checking against threat models</p>
        </div>
      )}

      {/* Results */}
      {result && !scanning && (
        <div className="results-container">
          {/* Header */}
          <div className="result-header">
            <div className={`result-icon-box ${getScoreClass(result.score)}`}>
              {result.score > 70 ? (
                <AlertTriangle className={`result-icon ${getScoreClass(result.score)}`} />
              ) : result.score > 40 ? (
                <Shield className={`result-icon ${getScoreClass(result.score)}`} />
              ) : (
                <CheckCircle className={`result-icon ${getScoreClass(result.score)}`} />
              )}
            </div>
            <div className="result-info">
              <h2 className="result-threat-name">{result.threat}</h2>
              <div className="result-badge-row">
                <span className={`threat-badge ${result.level}`}>{result.level}</span>
                <span className="result-detected-text">Detected</span>
              </div>
            </div>
            <div className="result-score-box">
              <p className="result-score-label">Risk Score</p>
              <p className={`result-score-value ${getScoreClass(result.score)}`}>
                {result.score}%
              </p>
            </div>
          </div>

          {/* Reasons & Actions */}
          <div className="result-details-grid">
            <div className="detail-card">
              <h3 className="detail-card-title">
                <AlertTriangle className="detail-title-icon yellow" />
                Detection Reasons
              </h3>
              <ul className="detail-list">
                {result.reasons.map((r, i) => (
                  <li key={i} className="detail-list-item">
                    <span className="reason-dot" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-card">
              <h3 className="detail-card-title">
                <Shield className="detail-title-icon green" />
                Suggested Actions
              </h3>
              <ul className="detail-list">
                {result.actions.map((a, i) => (
                  <li key={i} className="detail-list-item">
                    <CheckCircle className="action-icon" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
