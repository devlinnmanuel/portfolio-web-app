# Personal Portfolio Web Application

> A full-stack personal portfolio web application built with React, Node.js, and PostgreSQL. It was designed to showcase projects, skills, experience, and a bit of personality.

## Overview

This is my personal portfolio website, a project I'm actively building as both a showcase of my work and a learning ground for full-stack development practices. It features a public-facing portfolio with project details, an AI-powered chat assistant, a multilingual interface (ID/EN), and a private admin dashboard for managing content.

## Features

### Public Pages

| Page | Description |
|------|-------------|
| **Landing Page** | Hero intro, core skills/capabilities, featured projects, experience preview, and CTA section |
| **Projects** | Filterable project gallery with detail pages: problem, solution, architecture, tech stack, role, results, GitHub link, and live demo |
| **About** | Education, organizational experience, and an interactive timeline/story layout |
| **Tech Stack & Certifications** | Icons grouped by category (frontend, backend, database, cloud, etc.) and LinkedIn-style cert cards |
| **Contact** | Email contact, direct message form, and AI chat assistant |

### Admin Dashboard *(authenticated)*

- Visitor count analytics
- Project view statistics (GitHub-style)
- Full CRUD for projects and portfolio sections
- Secure login

### Coming Soon

- Bilingual toggle (Indonesian / English)
- Fully responsive layout
- CV/Resume download (linked from Google Drive)

## Tech Stack

### Frontend
- **React** (with Vite)
- **Tailwind CSS**
- **React Router** — client-side routing
- **Axios** — API integration
- **GSAP** — animations and scroll-triggered effects
- **Lenis** — smooth scroll experience
- **Spline** — 3D scene integration

### Backend
- **Node.js / Express**
- **JWT** — authentication & auth state management
- **Input validation** (express-validator)
- **Error handling middleware**

### Database
- **PostgreSQL**

### DevOps & Tooling
- **Git / GitHub** — version control
- **Postman** — API testing
- **VS Code** — code editor
- `.env` files — environment configuration
- **npm** — package management

## Database Entities

<details>
<summary>Click to expand entity overview</summary>

| Entity | Key Fields |
|--------|-----------|
| `Person` | name, roles, education, location, titleHero, description |
| `TechStacks` | id, name, description, category, icon |
| `CoreDisciplines` | id, title, description, techs, icon |
| `Experiences` | id, position, description, year, impact, icon |
| `Projects` | id, title, description, role, category, problem, solution, architectureSchema, technology, githubRepo, liveDemo, featured, status |
| `Media` | id, name, type (icon/image) |
| `Users` | id, name, email, role (admin/user/ai), avatar |
| `Chats` | id, title, created_by (FK → users), created_at |
| `ChatParticipants` | id, id_chats, id_user (FK → users), joined_at |
| `Messages` | id, id_chat, id_sender, message_text, message_type, is_from_ai, created_at |
| `MessageReads` | id, id_message, id_user, read_at |
| `ProjectImage` | id, id_project (FK), id_media (FK) |
| `ProjectTech` | id, id_tech (FK), id_project (FK) |

**Key Relationships:**
- `Project ↔ TechStack` — Many to Many
- `Project ↔ Media` — Many to Many
- `Users ↔ Chats` — Many to Many (via ChatParticipants)
- `Chats → Messages` — One to Many
- `Messages → MessageReads` — One to Many

</details>

## Getting Started

### Prerequisites

- Node.js v18+
- PostgreSQL (local or cloud)
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/portfolio.git
cd portfolio

# Install dependencies
cd client && npm install
cd ../server && npm install
```

### Environment Variables

Create a `.env` file in `/server` based on `.env.example`:

```env
PORT=5000
DATABASE_URL=postgresql://user:password@host:5432/dbname
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

Create a `.env` file in `/client`:

```env
VITE_API_URL=http://localhost:5000
```

### Running Locally

```bash
# Start the backend
cd server && npm run dev

# Start the frontend (new terminal)
cd client && npm run dev
```

---

## Deployment

| Service | Purpose |
|---------|---------|
| **Vercel** | Frontend (React + Vite) |
| **Render** / **Railway** | Backend (Node.js / Express) |
| **Supabase** / **Neon** | PostgreSQL database |

## License

© 2025–2026 Devlin. All rights reserved.


> *This project is a work in progress. Contributions, suggestions, and feedback are welcome.*
