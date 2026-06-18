# Mission FE1

Frontend application built with React and Vite — an online learning platform featuring authentication (Login/Register), course management with CRUD operations, and a responsive UI.

## Tech Stack

- **React** 19 — UI library
- **Vite** — Build tool and dev server
- **React Router DOM** — Client-side routing
- **Tailwind CSS** — Utility-first CSS framework
- **Lucide React** — Icon library
- **Axios** — HTTP client for API requests
- **React Compiler** — Automatic performance optimization

## Project Structure

```
src/
├── assets/                      # Static images (logo, hero, newsletter, etc.)
├── components/                  # Reusable UI components
│   ├── Button.jsx
│   ├── CourseCard.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Input.jsx
│   ├── LoginForm.jsx
│   ├── Navbar.jsx
│   └── RegisterForm.jsx
├── layouts/
│   └── Authenticated.jsx        # Layout wrapper with Navbar & Footer
├── pages/
│   ├── Home.jsx                 # Course listing with Add/Delete
│   ├── CourseUpdate.jsx         # Edit course page (/courses/edit/:id)
│   ├── Login.jsx
│   └── Register.jsx
├── services/
│   └── api/
│       └── courseService.js     # Axios client for MockAPI CRUD operations
├── App.jsx                      # Root component with React Router routes
├── index.css                    # Tailwind directives + Google Fonts
└── main.jsx                     # Vite entry point
```

## Key Features

- **Layout System**: `Authenticated` layout wraps pages that require Navbar/Footer, keeping auth pages (Login/Register) clean and separate.
- **Full CRUD via MockAPI**: Home page fetches, creates, and deletes courses; `CourseUpdate` page handles editing — all through an Axios service layer backed by [MockAPI.io](https://mockapi.io).
- **Environment Configuration**: API base URL is configured via `VITE_API_URL` in `.env` file.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS, including mobile navigation with hamburger menu.

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_URL=https://6a115ed23e35d0f37ee332ad.mockapi.io/courses
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```
