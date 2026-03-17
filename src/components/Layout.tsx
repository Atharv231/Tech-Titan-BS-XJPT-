import { Link, useLocation } from "react-router-dom";
import { Shield, Search, Network, Info, Menu, X } from "lucide-react";
import { useState } from "react";
import "../styles/Layout.css";

const navItems = [
  { path: "/", label: "Home", icon: Shield },
  { path: "/scanner", label: "Threat Scanner", icon: Search },
  { path: "/architecture", label: "Architecture", icon: Network },
  { path: "/about", label: "About", icon: Info },
];

export default function Layout({ children }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="layout-wrapper">
      <header className="layout-header">
        <div className="header-container">
          <Link to="/" className="logo-link">
            <Shield className="logo-icon" />
            <span className="logo-text">AurionX</span>
          </Link>

          <nav className="desktop-nav">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${active ? "active" : ""}`}
                >
                  <item.icon className="nav-link-icon" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`mobile-nav-link ${location.pathname === item.path ? "active" : ""}`}
            >
              <item.icon size={16} />
              {item.label}
            </Link>
          ))}
        </div>
      </header>

      <main className="layout-main">
        {children}
      </main>
    </div>
  );
}
