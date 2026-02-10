# 🚀 Sasanka Dilum - Modern Portfolio

A stunning, modern portfolio website built with React, Tailwind CSS, and Framer Motion featuring dark theme, typewriter effects, smooth scrolling, and cutting-edge animations.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.5-06B6D4?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16.4-FF0080?style=for-the-badge)

## ✨ Features

### 🎨 Design & UI
- **Dark Theme**: Sleek black background with cyan/blue/purple gradient accents
- **Glassmorphism**: Frosted glass effects throughout the interface
- **Smooth Animations**: Powered by Framer Motion for buttery smooth interactions
- **Typewriter Effect**: Dynamic text animation in hero section
- **Responsive Design**: Perfect on all devices from mobile to 4K displays
- **Custom Scrollbar**: Gradient-styled scrollbar matching the theme

### 🔧 Technical Features
- **React 18**: Latest React features and optimizations
- **Tailwind CSS**: Utility-first styling with custom configuration
- **Inline Styles**: Additional dynamic styling for complex animations
- **Framer Motion**: Advanced animation library for smooth transitions
- **React Icons**: Comprehensive icon library
- **Intersection Observer**: Trigger animations on scroll
- **Smooth Scrolling**: Native smooth scroll behavior

### 📱 Sections
1. **Hero Section**
   - Animated gradient background with floating orbs
   - Typewriter effect with multiple roles
   - Profile image with animated ring
   - Floating tech icons
   - Social media links
   - CTA buttons

2. **About Section**
   - Personal introduction
   - Animated statistics cards
   - Interactive hover effects
   - Grid pattern background

3. **Skills Section**
   - Categorized skills (Frontend, Backend, Database, Tools)
   - Animated progress bars
   - Technology icons with colors
   - Hover effects on skill cards
   - Additional technologies section

4. **Projects Section**
   - Project showcase with image placeholders
   - Hover overlay with links
   - Tech stack tags
   - GitHub and live demo buttons
   - 6 featured projects

5. **Contact Section**
   - Working contact form
   - Contact information cards
   - Social media integration
   - Form validation
   - Loading states

6. **Footer**
   - Back to top button
   - Quick navigation links
   - Copyright information
   - Tech stack credits

## 🛠️ Tech Stack

### Core
- **React** ^18.2.0 - UI Library
- **React DOM** ^18.2.0 - DOM Rendering

### Styling
- **Tailwind CSS** ^3.3.5 - Utility-first CSS
- **PostCSS** ^8.4.31 - CSS Processing
- **Autoprefixer** ^10.4.16 - CSS Vendor Prefixes

### Animation & Effects
- **Framer Motion** ^10.16.4 - Animation Library
- **Typewriter Effect** ^2.21.0 - Typewriter Animation
- **React Intersection Observer** ^9.5.3 - Scroll Animations

### Icons
- **React Icons** ^4.12.0 - Icon Library

### Build Tools
- **React Scripts** 5.0.1 - Build Configuration

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   App will open at [http://localhost:3000](http://localhost:3000)

3. **Build for Production**
   ```bash
   npm run build
   ```
   Creates optimized build in `build/` folder

## 🎨 Customization Guide

### 1. Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // Change primary color
    // ... other shades
  }
}
```

Or use inline styles in components:
```javascript
style={{ color: '#22d3ee' }}  // Cyan
style={{ color: '#3b82f6' }}  // Blue
style={{ color: '#8b5cf6' }}  // Purple
```

### 2. Personal Information

#### Hero Section (`src/components/Hero.js`)
```javascript
// Update name
<span>Sasanka Dilum</span>

// Update typewriter roles
strings: [
  'Full-Stack Developer',
  'Your Role Here',
  // Add more...
]

// Update description
<p>Your description here</p>

// Update social links
const socialLinks = [
  { icon: <FaGithub />, url: 'your-github-url' },
  // ...
];
```

#### About Section (`src/components/About.js`)
```javascript
// Update bio paragraphs
<p>Your bio here</p>

// Update statistics
const stats = [
  { number: '15+', label: 'Your Stat' },
  // ...
];
```

#### Skills Section (`src/components/Skills.js`)
```javascript
const skillCategories = [
  {
    title: 'Your Category',
    skills: [
      { name: 'Skill Name', level: 90, icon: <Icon /> },
      // ...
    ]
  }
];
```

#### Projects Section (`src/components/Projects.js`)
```javascript
const projects = [
  {
    title: 'Project Name',
    description: 'Description',
    image: 'path/to/image.jpg',  // Add actual image
    tech: [
      { name: 'Tech', icon: <Icon />, color: '#color' }
    ],
    github: 'github-url',
    demo: 'demo-url'
  }
];
```

### 3. Adding Profile Photo

In `Hero.js`, replace the placeholder:
```javascript
// Find this div
<div style={{...}}>
  SD  // Remove this
</div>

// Replace with
<img 
  src="/path/to/your/photo.jpg" 
  alt="Sasanka Dilum" 
  style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }} 
/>
```

### 4. Adding Project Images

In `Projects.js`, replace emoji placeholders:
```javascript
// Replace
image: '💎'

// With
image: '/images/project1.jpg'

// And update the render
<img 
  src={project.image} 
  alt={project.title} 
  style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }} 
/>
```

### 5. Fonts
Change fonts in `public/index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
```

Update in components:
```javascript
style={{ fontFamily: 'YourFont, sans-serif' }}
```

## 📂 Project Structure

```
portfolio-v2/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/
│   │   ├── Navbar.js          # Navigation bar
│   │   ├── Hero.js            # Hero section with typewriter
│   │   ├── About.js           # About section
│   │   ├── Skills.js          # Skills with progress bars
│   │   ├── Projects.js        # Project showcase
│   │   ├── Contact.js         # Contact form
│   │   └── Footer.js          # Footer
│   ├── App.js                 # Main app component
│   ├── index.js               # Entry point
│   └── index.css              # Global styles + Tailwind
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── package.json               # Dependencies
└── README.md                  # This file
```

## 🎯 Key Animations

### Typewriter Effect
```javascript
import Typewriter from 'typewriter-effect';

<Typewriter
  options={{
    strings: ['Developer', 'Designer'],
    autoStart: true,
    loop: true,
  }}
/>
```

### Scroll Animations
```javascript
import { useInView } from 'react-intersection-observer';

const [ref, inView] = useInView({
  triggerOnce: true,
  threshold: 0.1
});
```

### Framer Motion
```javascript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## 🚀 Deployment

### Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `build`

### Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Deploy with default settings

### GitHub Pages
```bash
npm install --save gh-pages
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Deploy:
```bash
npm run deploy
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎨 Color Palette

- **Primary Cyan**: `#22d3ee`
- **Primary Blue**: `#3b82f6`
- **Primary Purple**: `#8b5cf6`
- **Background**: `#000000`
- **Text**: `#ffffff`
- **Text Muted**: `rgba(255, 255, 255, 0.6)`

## ⚡ Performance Tips

1. **Image Optimization**: Use WebP format and lazy loading
2. **Code Splitting**: Already handled by React
3. **Minification**: Automatic in production build
4. **Caching**: Configure in hosting platform

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Tailwind Not Working
```bash
# Ensure PostCSS is configured
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Animation Issues
```bash
# Reinstall framer-motion
npm uninstall framer-motion
npm install framer-motion@^10.16.4
```

## 📄 License

MIT License - feel free to use this portfolio for your own projects!

## 👤 Author

**Sasanka Dilum Chamuditha**
- Email: sasankadilumkumarasinghe@gmail.com
- LinkedIn: [sasanka-dilum-606038334](https://www.linkedin.com/in/sasanka-dilum-606038334)
- GitHub: [sasankadilum](https://github.com/sasankadilum)

## 🙏 Acknowledgments

- React Team for the amazing framework
- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- Google Fonts for beautiful typography

---

**Made with ❤️ and lots of ☕**

If you found this helpful, give it a ⭐!
