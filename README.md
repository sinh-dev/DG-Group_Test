# DG-Group Sports Cards Application

A modern, responsive sports cards application built with Nuxt.js, featuring real sports imagery, team logos, and professional UI design.

## 🏆 Features

### ✨ Core Features
- **Real Sports Content**: Professional basketball, gaming/eSports, and soccer imagery
- **Team Logos**: Authentic team crests and branding (Macarthur FC, Phnom Penh Crown FC)
- **Live Badges**: Dynamic LIVE and HOT status indicators
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Professional UI**: Modern card design with shadows, gradients, and animations

### 📱 Mobile Experience
- **2x2 Card Grid**: Optimized mobile layout
- **Mobile Header**: Sports icons navigation bar
- **Touch-Friendly**: Optimized for mobile interaction
- **Compact Design**: Space-efficient mobile cards

### 🖥️ Desktop Experience
- **Horizontal Scroll**: Smooth card navigation
- **Navigation Arrows**: Intuitive scroll controls
- **Grid Sections**: Additional card organization
- **Full Navigation**: Complete header with dropdowns

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sinh-dev/DG-Group_Test.git
   cd DG-Group_Test
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
DG-Group_Test/
├── components/
│   ├── AppHeader.vue          # Main navigation header
│   └── SportsCardsSection.vue # Sports cards display component
├── pages/
│   └── index.vue              # Main page
├── public/
│   └── images/
│       └── card/
│           ├── sports/        # Sports background images
│           └── logo/          # Team logos
├── assets/
│   └── css/                   # Global styles
├── nuxt.config.ts             # Nuxt configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── package.json               # Dependencies and scripts
```

## 🎨 Design System

### Color Palette
- **Primary**: Golden gradient `from-[rgba(248,232,137,1)] to-[rgba(228,183,100,1)]`
- **Background**: White `#FFFFFF`
- **Cards**: White with shadows
- **Badges**: Red gradients for LIVE/HOT status
- **Text**: Dark gray hierarchy

### Typography
- **Headers**: Bold, modern font weights
- **Body**: Clean, readable text
- **Badges**: Bold, uppercase styling

### Components
- **Cards**: Rounded corners (`rounded-2xl`), shadows, hover effects
- **Badges**: Pill-shaped with gradients
- **Icons**: SVG-based, scalable sports icons
- **Images**: Real sports photography with overlays

## 🏀 Sports Content

### Available Sports
1. **Basketball**: Professional game imagery
2. **Gaming/eSports**: Tournament scenes
3. **Soccer**: Team logos and match information

### Image Assets
- `basketball-players-basketball-match.avif` - Basketball action shots
- `starcraft-2-tournaments-esports.jpg` - Gaming tournament scenes
- `Macarthur_FC.webp` - Team A logo
- `phnom-penh-crown-fc.png` - Team B logo

## 📱 Responsive Breakpoints

- **Mobile**: `< 1024px`
  - 2x2 card grid
  - Mobile header with sport icons
  - Compact card design
  
- **Desktop**: `≥ 1024px`
  - Horizontal scrollable cards
  - Full navigation header
  - Grid sections
  - Navigation arrows

## 🛠️ Development

### Technologies Used
- **Framework**: Nuxt.js 3
- **Styling**: Tailwind CSS
- **Icons**: SVG icons and Font Awesome
- **Images**: Optimized sports photography
- **TypeScript**: Type-safe development

### Key Components

#### AppHeader.vue
- Desktop and mobile navigation
- User authentication UI
- Language selection
- Sports category dropdowns

#### SportsCardsSection.vue
- Card display logic
- Mobile/desktop responsive layouts
- Image and logo integration
- Interactive features

### Code Conventions
- **Vue 3 Composition API**: Modern Vue.js patterns
- **TypeScript**: Type safety and better development experience
- **Tailwind CSS**: Utility-first styling
- **Mobile-first**: Responsive design approach

## 🎯 Usage Guidelines

### Adding New Sports Cards
1. Add sport images to `public/images/card/sports/`
2. Update `getSportImage()` function in `SportsCardsSection.vue`
3. Add corresponding SVG icons in `getSportIconSvg()`
4. Update color schemes in `getModernIconBg()`

### Customizing Team Logos
1. Place logo files in `public/images/card/logo/`
2. Update image paths in soccer card components
3. Ensure logos are optimized (WebP format recommended)

### Modifying Card Layout
- **Mobile**: Adjust grid classes in mobile section
- **Desktop**: Modify horizontal scroll container
- **Styling**: Update Tailwind classes for visual changes

## 🌐 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **Features**: CSS Grid, Flexbox, SVG, Modern JavaScript

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Check the documentation above
- Review the code comments in components

## 🎮 Live Demo

Visit the live application: [Your Live URL Here]

---

**Built with ❤️ using Nuxt.js and modern web technologies**
