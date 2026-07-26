# CARMAX Mangalore | Luxury Multi-Brand Automotive Workshop & Performance Studio 🏎️🔥

A state-of-the-art, high-performance web experience built for **CARMAX Mangalore** — Mangalore's premier luxury multi-brand automotive workshop, German vehicle specialist, and aftermarket performance studio.

---

## 🌟 Key Highlights & Features

### 🎬 1. Cinematic Intro Sequence
- **RWB Porsche Drift Video**: Custom 60fps high-definition drift video sequence with hardware-accelerated rendering (`transform-gpu`).
- **Default Engine Audio**: Audio turned on by default with automatic fallback and seamless browser autoplay policy handling.
- **Brand Reveal**: Dynamic smoke effect & metallic light beam logo reveal transitions into the main studio experience.

### 🚗 2. Widescreen Hero & 2D Canvas Simulation
- **Widescreen Hero Unit**: Clean 16:9 layout showcasing custom high-resolution Porsche imagery and translucent glassmorphic service panels.
- **Interactive Drift Canvas**: Real-time HTML5 2D Canvas particle simulation rendering smoke trails, glowing brake calipers, xenon beams, and tire skid marks.

### 🔄 3. Interactive Before & After Transformation Slider
- **Drag-to-Compare**: Real-time slider comparing raw vs. finished vehicle transformations (PPF, 9H Ceramic Coating, Denting & Painting).
- **Mobile-Responsive**: Fully optimized for touch drag gestures on iOS and Android devices.

### 🛠️ 4. Comprehensive Workshop & Performance Services
- **German Diagnostic & Maintenance**: Factory-grade diagnostics for Porsche, BMW, Mercedes-Benz, Audi, and Jaguar/Land Rover.
- **Aftermarket Performance Upgrades**: Stage 1 & Stage 2 ECU remapping, Valvetronic exhaust installations, body kits, and big brake kits.
- **Custom Accessories & Upgrades**: Alloy wheel upgrades, custom interior leather, and ambient lighting setups.

### 📅 5. Instant VIP Booking System
- Interactive booking modal with date pickers, service selector, and instant confirmation feedback.

---

## 🛠️ Technology Stack

| Category | Technology / Library |
| :--- | :--- |
| **Frontend Framework** | [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + Custom Glassmorphism System |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Iconography** | [Lucide React](https://lucide.dev/) |
| **Canvas Graphics** | HTML5 2D Canvas API |

---

## 🚀 Getting Started Locally

### Prerequisites
Make sure you have **Node.js** (v18.0 or later) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sagarshettyy11/Car-Max-Mlr.git
   cd Car-Max-Mlr/car-max
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Access the web application:**
   Open your browser and navigate to `http://localhost:5173`.

---

## 📱 Mobile Testing & Local Network Sharing

To preview the app on your mobile device on the same Wi-Fi network without tunneling bandwidth limits:

```bash
npm run dev -- --host
```

Alternatively, to test publicly on any mobile network, use **Localtunnel**:
```bash
npx localtunnel --port 5173
```

---

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

To preview the built app locally:
```bash
npm run preview
```

---

## 📍 Facility Location
**CARMAX Mangalore**  
*Luxury Multi-Brand Automotive Workshop & Performance Studio*  
NH-66 Bypass Facility, Mangalore, Karnataka, India.

---

## 📄 License
Created for CARMAX Mangalore. All rights reserved.