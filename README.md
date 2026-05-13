liat website di https://learnflix-lime.vercel.app/

# Mission FE1

Frontend application built with React and Vite, featuring authentication pages (Login, Register) and a Home page with course listings.

## Tech Stack

- **React** 19 - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **React Compiler** - Automatic performance optimization

## Project Structure

```
src/
├── components/
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
│   ├── Home.jsx                 # Course listing with CRUD (Add/Delete)
│   ├── Login.jsx
│   └── Register.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Key Features

- **Layout System**: `Authenticated` layout wraps pages that require Navbar/Footer, keeping auth pages (Login/Register) clean and separate.
- **CRUD Operations**: Home page implements Create (add course) and Delete (remove course) functionality using React `useState`, with unique IDs via `Date.now()`. Data is initialized with mock course data.

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
