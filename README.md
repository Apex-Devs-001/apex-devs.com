# ApexDevs Website

A modern, premium Next.js website for ApexDevs - showcasing elite engineering services with AI-native development, enterprise-grade security, and global scale.

## 🚀 Features

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Responsive Design** - Mobile-first approach
- **Modern Aesthetics** - Dark theme with glassmorphism and smooth animations
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Performance** - Optimized videos and lazy loading
- **Smooth Animations** - Intersection Observer for scroll animations

## 📁 Project Structure

```
apex-devs.com/
├── src/
│   └── app/
│       ├── layout.tsx       # Root layout with metadata
│       ├── page.tsx          # Main homepage component
│       ├── globals.css       # Global styles
│       └── favicon.ico       # Favicon
├── public/
│   ├── index.html           # Original static HTML (preserved)
│   └── videos/              # Video assets
├── package.json
├── tsconfig.json
└── next.config.ts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. Clone the repository (if not already done)
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Color Palette

- **Background Dark**: `#0a0a0a`
- **Background Card**: `#111111`
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#999999`
- **Accent**: `#00d4ff`

### Typography

- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI)
- **Headings**: Light weight (300) with strong emphasis (600)
- **Body**: Regular weight with 1.6 line height

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🔧 Configuration

### Next.js Config

The project uses Next.js 16 with Turbopack for faster development builds.

### TypeScript

Strict mode enabled for better type safety.

## 📄 Pages & Sections

1. **Hero** - Video background with main value proposition
2. **Invitation** - Exclusive access messaging
3. **Services** - 6 core capabilities
4. **Technology Focus** - Industries and tech stack
5. **Stats** - Proven results and trust indicators
6. **Process** - 4-step engagement model
7. **Comparison** - ApexDevs vs Traditional models
8. **Pricing** - Transparent pricing models
9. **About** - Company foundation
10. **CTA** - Contact and scheduling

## 🎥 Video Assets

The website uses Vimeo-hosted videos for:

- Hero section background
- Mid-page video section

Videos are set to autoplay, muted, and loop for optimal UX.

## 📧 Contact

- **Email**: contact@apex-devs.com
- **Calendly**: https://calendly.com/apexdevs

## 📝 License

©2026 ApexDevs. All Rights Reserved.

## 🔄 Migration Notes

This Next.js project was created from the original static HTML website located in `/public/index.html`. The original file is preserved for reference.

### Key Improvements

- ✅ Component-based architecture
- ✅ Better SEO with Next.js metadata
- ✅ Type safety with TypeScript
- ✅ Improved performance with Next.js optimizations
- ✅ Easy deployment to Vercel or other platforms
- ✅ Better maintainability and scalability
