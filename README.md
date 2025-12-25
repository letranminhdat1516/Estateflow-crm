# EstateFlow CRM Pro

A modern, feature-rich Customer Relationship Management system designed specifically for real estate professionals. Built with React, TypeScript, and powered by AI capabilities for intelligent lead management and campaign automation.

## 🏡 Features

### Core Functionality
- **Dashboard** - Real-time overview of your real estate business metrics
- **Listings Management** - Manage properties with detailed information and status tracking
- **Lead Management** - Track and nurture potential clients through the sales pipeline
- **Calendar** - Schedule showings, appointments, and follow-ups
- **Analytics** - Data-driven insights into your business performance
- **Campaign Management** - Automated email campaigns and marketing tools
- **Client Profiles** - Comprehensive client information and interaction history

### Technical Highlights
- ⚡ Built with **React 19** and **TypeScript** for type-safe development
- 🎨 Modern, responsive UI with dark mode support
- 📊 Data visualization with **Recharts**
- 🤖 AI-powered features using **Google Generative AI**
- 🚀 Fast development with **Vite**
- 🎯 Client-side routing with **React Router v6**

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd estateflow-crm-pro/Estateflow-crm
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build the production bundle |
| `npm run preview` | Preview the production build locally |

## 🏗️ Project Structure

```
Estateflow-crm/
├── pages/              # Application pages/routes
│   ├── Dashboard.tsx
│   ├── Listings.tsx
│   ├── Leads.tsx
│   ├── Calendar.tsx
│   ├── Analytics.tsx
│   ├── ClientProfile.tsx
│   └── Campaigns.tsx
├── services/           # API services and utilities
├── App.tsx            # Main application component
├── constants.tsx      # Application constants
├── types.ts           # TypeScript type definitions
├── index.tsx          # Application entry point
├── index.html         # HTML template
├── vite.config.ts     # Vite configuration
└── tsconfig.json      # TypeScript configuration
```

## 🛠️ Technology Stack

- **Frontend Framework:** React 19.2.3
- **Language:** TypeScript 5.8.2
- **Build Tool:** Vite 6.2.0
- **Routing:** React Router DOM 6.11.2
- **Charts:** Recharts 2.10.3
- **AI Integration:** Google Generative AI
- **Styling:** Tailwind CSS (via custom configuration)

## 🎨 UI/UX Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Dark Mode** - Full dark mode support for comfortable viewing
- **Material Symbols** - Icon set for consistent visual language
- **Smooth Transitions** - Polished animations and interactions
- **Sidebar Navigation** - Collapsible sidebar for optimal screen space usage

## 🔧 Configuration

The project uses several configuration files:

- **vite.config.ts** - Vite bundler configuration
- **tsconfig.json** - TypeScript compiler options
- **metadata.json** - Application metadata

## 📝 Development Guidelines

### Adding New Pages
1. Create a new component in the `pages/` directory
2. Add the route in `App.tsx`
3. Update the sidebar navigation items

### Type Safety
- All components should use TypeScript
- Define types in `types.ts` for reusability
- Leverage type inference where appropriate

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Built for real estate professionals who demand excellence
- Powered by modern web technologies and AI capabilities
- Designed with user experience as the top priority

---

**EstateFlow CRM Pro** - Empowering Real Estate Professionals with Intelligent CRM Solutions
