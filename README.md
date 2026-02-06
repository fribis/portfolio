# Design × Computing Landing Page

Modern, bilingual landing page for lectures at the intersection of design and computing.

## Features

- 🎨 Apple-inspired minimal design
- 🌐 Bilingual (English/German) with language switcher
- ⚡ Built with Next.js, React, and Tailwind CSS
- 📱 Fully responsive
- 🎯 Large typography with accent color

## Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository in Vercel
3. Deploy automatically

### GitHub Pages

1. Update `next.config.js` for static export
2. Build and deploy the `/out` folder

## Customization

- **Colors**: Edit `tailwind.config.js` (accent color)
- **Content**: Edit `pages/index.js` (content object)
- **Email**: Update mailto link in CTA section
- **Fonts**: Modify font-family in `tailwind.config.js`

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- PostCSS
