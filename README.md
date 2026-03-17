# AurionX — AI Cyber Threat Detection & Defense Platform

AurionX is a modern cybersecurity web application that detects, analyzes, and explains cyber threats using AI/ML models. It features a dark futuristic UI with glassmorphism design, neon accents, and a professional layout.

---

## 📁 Project Structure

```
aurionx/
├── public/
│   ├── favicon.ico              # Browser tab icon
│   ├── placeholder.svg          # Placeholder image
│   └── robots.txt               # SEO robots file
├── src/
│   ├── components/
│   │   └── Layout.tsx           # Main layout with navigation header (responsive)
│   ├── pages/
│   │   ├── HomePage.tsx         # Landing page with hero, stats, features, CTA
│   │   ├── ScannerPage.tsx      # Threat scanner with input types & AI results
│   │   ├── ArchitecturePage.tsx  # System architecture pipeline & tech stack
│   │   ├── AboutPage.tsx        # Platform overview & capabilities
│   │   └── NotFound.tsx         # 404 error page
│   ├── styles/
│   │   ├── Layout.css           # Styles for navigation header & layout
│   │   ├── HomePage.css         # Styles for landing page sections
│   │   ├── ScannerPage.css      # Styles for scanner, results, badges
│   │   ├── ArchitecturePage.css # Styles for architecture pipeline & tech grid
│   │   ├── AboutPage.css        # Styles for about page & capabilities
│   │   └── NotFound.css         # Styles for 404 page
│   ├── App.tsx                  # Root component with React Router
│   ├── main.tsx                 # Entry point, renders App
│   └── index.css                # Global reset, fonts, body styles
├── index.html                   # HTML entry point
├── package.json                 # Dependencies & scripts
├── vite.config.ts               # Vite build configuration
├── tailwind.config.ts           # (Legacy - not used in components)
└── README.md                    # This file
```

---

## 📄 File-by-File Explanation

### `src/App.tsx`
The root React component. Sets up **React Router** with these routes:
- `/` → HomePage (landing page)
- `/scanner` → ScannerPage (threat scanner)
- `/architecture` → ArchitecturePage (system design)
- `/about` → AboutPage (platform info)
- `*` → NotFound (404 page)

All routes are wrapped in the `Layout` component for consistent navigation.

### `src/main.tsx`
Entry point that renders the `App` component into the DOM root element.

### `src/index.css`
Global styles including:
- Google Fonts import (Orbitron, Inter, JetBrains Mono)
- CSS reset (margin, padding, box-sizing)
- Body defaults (dark background `#0a0e17`, light text `#c8d6e5`)
- Font assignments for headings, body, and code

---

### `src/components/Layout.tsx`
**Purpose**: Main application shell with top navigation bar.

**Contains**:
- Fixed header with AurionX logo and navigation links
- Desktop horizontal nav and mobile hamburger menu
- Routes to: Home, Threat Scanner, Architecture, About
- Responsive: collapses to hamburger menu below 768px

**Imports**: `Layout.css`

---

### `src/pages/HomePage.tsx`
**Purpose**: Landing page — first thing users see.

**Sections**:
1. **Hero**: Large title "AurionX" with glowing text, subtitle, description, and two CTA buttons:
   - "Launch Scanner" → navigates to `/scanner`
   - "View Architecture" → navigates to `/architecture`
2. **Stats Bar**: 4 statistics (Threats Analyzed, Detection Accuracy, Response Time, Active Monitoring)
3. **Features Grid**: 6 defense module cards (Threat Scanner, Deepfake Detection, Real-Time Analysis, Defense System, Explainable AI, Intelligence Reports)
4. **CTA Section**: Final call-to-action card with "Get Started" button

**Imports**: `HomePage.css`

---

### `src/pages/ScannerPage.tsx`
**Purpose**: Core threat scanning functionality.

**Input Types** (selectable tabs):
- **Email**: Paste email text for phishing detection
- **URL**: Enter URL for malicious link analysis
- **Video**: Upload video file for deepfake detection (with preview player)
- **Prompt**: Enter AI prompts for injection attack detection

**Video Detection Feature**:
- File upload zone with drag & drop styling
- Accepts MP4, WEBM, AVI formats
- Shows video preview player after upload
- Displays file name and size
- Runs mock AI analysis for deepfake indicators

**Scan Flow**:
1. User selects input type and provides content
2. Clicks "Scan for Threats"
3. 2.5-second loading animation
4. Results display with:
   - Threat name and type badge (critical/high/medium/low)
   - Risk score (color-coded: red >70%, yellow >40%, green ≤40%)
   - Detection reasons (bullet list)
   - Suggested actions (checklist)

**Mock Results**: Each input type returns pre-defined threat analysis results simulating AI model output.

**Imports**: `ScannerPage.css`

---

### `src/pages/ArchitecturePage.tsx`
**Purpose**: Visualize the AurionX security pipeline.

**Pipeline Steps** (numbered vertical flow):
1. Threat Input Gateway
2. AI Detection Engine
3. Explainable AI Module
4. Threat Intelligence
5. Defense & Response
6. Reporting

**Technology Stack Grid** (4 columns):
- Frontend: React, CSS3, Framer Motion, Lucide Icons
- Backend: Node.js/Express, Python Microservices, REST APIs, Redis
- AI/ML: Scikit-learn, PyTorch, HuggingFace NLP, Deepfake Models
- Database: MongoDB, Redis, Vector DB

**Imports**: `ArchitecturePage.css`

---

### `src/pages/AboutPage.tsx`
**Purpose**: Platform information and capabilities overview.

**Sections**:
1. **Header**: Title and two paragraphs about AurionX
2. **Capabilities Grid** (6 cards):
   - Multi-Model AI Engine
   - Explainable Detections
   - Zero-Trust Architecture
   - Real-Time Processing
   - Team Collaboration
   - Continuous Learning
3. **Mission Card**: Statement about fighting AI with AI

**Imports**: `AboutPage.css`

---

### `src/pages/NotFound.tsx`
**Purpose**: 404 error page for invalid routes.

Shows a large "404" with neon glow, error message, and "Return Home" button.

**Imports**: `NotFound.css`

---

## 🎨 Design System

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#0a0e17` | Page background |
| Text Primary | `#c8d6e5` | Headings, body text |
| Text Muted | `#6b7b8d` | Descriptions, labels |
| Neon Cyan | `#00d2ff` | Primary accent, links, logo |
| Neon Green | `#00e68a` | Safe/success indicators |
| Neon Red | `#e74c3c` | Danger/critical indicators |
| Neon Yellow | `#f0a500` | Warning indicators |
| Neon Purple | `#8a2be2` | Secondary accent |
| Card BG | `rgba(14, 18, 30, 0.6)` | Glass card backgrounds |

### Fonts
| Font | Usage |
|------|-------|
| **Orbitron** | Headings, logo, buttons, labels |
| **Inter** | Body text, descriptions |
| **JetBrains Mono** | Code, textareas, monospace content |

### UI Patterns
- **Glassmorphism**: Cards use semi-transparent backgrounds with `backdrop-filter: blur(20px)`
- **Neon Glow**: Text shadows and box shadows with cyan/green tints
- **Grid Background**: Subtle cyber grid pattern on main layout
- **Hover Effects**: Cards lift on hover with border glow

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or bun package manager

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd aurionx

# Install dependencies
npm install
# or
bun install
```

### Development

```bash
# Start development server
npm run dev
# or
bun dev
```

Open `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🔧 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | UI library with JSX components |
| **React Router v6** | Client-side routing between pages |
| **Vite** | Fast build tool and dev server |
| **TypeScript** | Type safety for components and data |
| **Lucide React** | Icon library (Shield, Search, etc.) |
| **CSS3** | External stylesheets per component (no CSS vars) |
| **Google Fonts** | Orbitron, Inter, JetBrains Mono |

---

## 📱 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, stats, features |
| Threat Scanner | `/scanner` | AI threat analysis tool |
| Architecture | `/architecture` | System pipeline visualization |
| About | `/about` | Platform capabilities & mission |
| 404 | `/*` | Not found error page |

---

## 🔒 Threat Scanner Details

### Supported Input Types
| Type | Input Method | Threat Detected |
|------|-------------|-----------------|
| Email | Text paste | Phishing Email (Score: 87%) |
| URL | Text input | Malicious URL (Score: 76%) |
| Video | File upload | Deepfake Video (Score: 58%) |
| Prompt | Text input | Prompt Injection (Score: 82%) |

### Risk Score Color Coding
- 🔴 **>70%**: Critical/Danger (red)
- 🟡 **41-70%**: Medium/Warning (yellow)
- 🟢 **≤40%**: Low/Safe (green)

### Threat Severity Badges
- `critical` — Red badge
- `high` — Yellow badge
- `medium` — Purple badge
- `low` — Green badge

---

## 📝 Notes

- All styling uses **external CSS files** (no Tailwind utility classes in components)
- No CSS custom properties (`var()`) are used — all colors are hardcoded hex/rgba values
- Video detection includes a working file upload with preview player
- Scan results are currently **mock data** — ready to be connected to real AI APIs
- The app is fully responsive for mobile, tablet, and desktop

---

## 🔮 Future Enhancements

- Connect to real AI/ML backend APIs for threat detection
- Add real-time threat simulation
- AI chatbot assistant for security explanations
- Export threat reports as PDF
- Dark/light mode toggle
- User authentication and role management
- Real deepfake detection model integration
