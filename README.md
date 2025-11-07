# Portfolio Website - Nichamon Pamorn

A beautiful, modern portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Modern UI**: Clean and professional design with Tailwind CSS
- **Interactive Components**: Engaging user experience with smooth transitions
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## Sections

1. **Hero** - Eye-catching introduction with typing animation
2. **About Me** - Personal introduction and career overview
3. **Skills** - Comprehensive skill showcase with progress bars
4. **Experience** - Professional work history in timeline format
5. **Education** - Academic background and certifications
6. **Portfolio** - Project showcase with filtering capabilities
7. **Contact** - Contact form and social media links
8. **Footer** - Quick links and additional information

## Tech Stack

- **React** - Frontend library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Type Animation** - Typing animation effect
- **React Intersection Observer** - Scroll animations

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be generated in the `dist` folder.

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Build and deployment", set:
     - Source: GitHub Actions

3. Your site will be automatically deployed to: `https://<username>.github.io/portfolio-website/`

### Manual Deployment

If you prefer to deploy manually:

```bash
npm run build
npm run deploy
```

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, titles, and contact information
   - Replace profile image or initials

2. **About Section** (`src/components/About.jsx`):
   - Modify the biography text
   - Update statistics

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add or remove skills
   - Adjust skill levels (0-100)

4. **Experience Section** (`src/components/Experience.jsx`):
   - Update work history
   - Add or remove positions

5. **Education Section** (`src/components/Education.jsx`):
   - Modify educational background
   - Update certifications

6. **Portfolio Section** (`src/components/Portfolio.jsx`):
   - Add your actual projects
   - Update project descriptions and images

7. **Contact Section** (`src/components/Contact.jsx`):
   - Update contact information
   - Modify social media links

### Change Colors

Colors are configured in `tailwind.config.js`. You can modify the color scheme by editing the `extend.colors` section.

### Modify Animations

Animations are defined inline using Framer Motion. Adjust animation properties in each component file to customize the effects.

## Project Structure

```
portfolio-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/                     # Static assets
├── src/
│   ├── components/
│   │   ├── About.jsx          # About section
│   │   ├── Contact.jsx        # Contact form
│   │   ├── Education.jsx      # Education section
│   │   ├── Experience.jsx     # Work experience
│   │   ├── Footer.jsx         # Footer component
│   │   ├── Hero.jsx           # Hero section
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── Portfolio.jsx      # Portfolio gallery
│   │   └── Skills.jsx         # Skills showcase
│   ├── App.jsx                # Main app component
│   ├── index.css              # Global styles
│   └── main.jsx               # Entry point
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind configuration
├── vite.config.js             # Vite configuration
└── README.md
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Contact

Nichamon Pamorn
- Email: khana.ncm@gmail.com
- Phone: +66 95 251 5258
- Location: Bangkok, Thailand

---

Built with ❤️ using React, Vite, Tailwind CSS & Framer Motion
