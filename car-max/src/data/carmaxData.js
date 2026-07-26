export const BRAND_INFO = {
  name: "CARMAX",
  tagline: "Luxury Automotive Workshop & Performance Studio",
  subtitle: "Mangalore's premier destination for luxury car care, precision engineering, bespoke modifications, and paint protection.",
  address: "Nayaks Compound Ground, Behind Nandigudde Ground, Next to Toy Bazar, Nandigudda, Mangalore - 575001, Karnataka",
  phone: "+91 98765 43210",
  altPhone: "+91 824 2400 999",
  whatsapp: "919876543210",
  email: "service@carmaxmangalore.com",
  googleRating: "4.9",
  reviewsCount: "540+",
  experienceYears: "12+",
  carsServiced: "3,500+",
  buildsCompleted: "450+",
  hours: "Mon - Sat: 9:00 AM - 8:00 PM | Sunday: Closed",
  schedule: [
    { day: "SUN", hours: "Closed" },
    { day: "MON", hours: "9:00 am - 8:00 pm" },
    { day: "TUE", hours: "9:00 am - 8:00 pm" },
    { day: "WED", hours: "9:00 am - 8:00 pm" },
    { day: "THU", hours: "9:00 am - 8:00 pm" },
    { day: "FRI", hours: "9:00 am - 8:00 pm" },
    { day: "SAT", hours: "9:00 am - 8:00 pm" }
  ],
  socials: {
    instagram: "https://instagram.com/carmax_mangalore",
    facebook: "https://facebook.com/carmaxmangalore",
    youtube: "https://youtube.com/@carmaxmangalore",
    whatsapp: "https://wa.me/919876543210?text=Hello%20CARMAX%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.",
    location: "https://maps.google.com/?q=CARMAX+Nayaks+Compound+Ground+Nandigudda+Mangalore"
  }
};

export const LUXURY_BRANDS = [
  { name: "Porsche", logoText: "PORSCHE", badge: "Germany", icon: "🏎️" },
  { name: "Mercedes-Benz", logoText: "MERCEDES-AMG", badge: "Affalterbach", icon: "⭐" },
  { name: "BMW", logoText: "BMW M", badge: "Munich", icon: "⚪🔵" },
  { name: "Audi", logoText: "AUDI RS", badge: "Ingolstadt", icon: "⭕⭕⭕⭕" },
  { name: "Land Rover", logoText: "RANGE ROVER", badge: "Solihull", icon: "🦁" },
  { name: "Jaguar", logoText: "JAGUAR", badge: "Coventry", icon: "🐆" },
  { name: "Lexus", logoText: "LEXUS F-SPORT", badge: "Toyota", icon: "💎" },
  { name: "Volvo", logoText: "VOLVO POLESTAR", badge: "Gothenburg", icon: "🛡️" },
  { name: "Jeep", logoText: "JEEP RUBICON", badge: "Toledo", icon: "🏔️" },
  { name: "Mini", logoText: "MINI JCW", badge: "Oxford", icon: "🇬🇧" },
  { name: "Lamborghini", logoText: "LAMBORGHINI", badge: "Sant'Agata", icon: "🐂" },
  { name: "Ferrari", logoText: "FERRARI", badge: "Maranello", icon: "🐎" },
  { name: "Maserati", logoText: "MASERATI", badge: "Modena", icon: "🔱" },
  { name: "Bentley", logoText: "BENTLEY", badge: "Crewe", icon: "🦅" },
  { name: "Toyota Luxury", logoText: "FORTUNER / VELLFIRE", badge: "Japan", icon: "👑" },
];

export const HERO_SLIDES = [
  {
    title: "PREMIUM CAR CARE",
    highlight: "PERFECTION",
    description: "OEM-standard diagnostics, synthetic engine fluid refreshes, and computerized health checks for German & European luxury automobiles.",
    tag: "Factory Grade Care"
  },
  {
    title: "BESPOKE MODIFICATIONS",
    highlight: "CRAFTSMANSHIP",
    description: "Custom aeropacks, valvetronic exhausts, air suspension systems, and forged alloy wheels engineered to stand out in Mangalore.",
    tag: "High Performance"
  },
  {
    title: "PAINT PROTECTION & DETAILING",
    highlight: "SHIELD",
    description: "10-Mil TPU Self-Healing PPF and 9H Ceramic-Graphene coatings that preserve your showroom luster against harsh coastal elements.",
    tag: "Ultimate Protection"
  },
  {
    title: "ENGINE OVERHAUL & DIAGNOSTICS",
    highlight: "PRECISION",
    description: "Advanced German scanning suites, transmission recalibration, and mechanical restoration by master engineers.",
    tag: "Expert Engineering"
  }
];

export const SERVICES = [
  {
    id: "periodic-service",
    title: "Periodic Maintenance & Oil Care",
    category: "General Servicing",
    iconName: "Wrench",
    shortDesc: "Complete OEM maintenance using liqui-moly fluids, factory filters, multi-point health scan & fluid top-ups.",
    fullDesc: "Our periodic maintenance follows strict factory guidelines for BMW, Mercedes, Audi, Porsche, and Range Rover. Includes 60+ point computer diagnostic scan, synthetic engine oil replace, OEM air & oil filters, brake pad inspect, alignment, and road test.",
    turnaround: "4 - 6 Hours",
    warranty: "1 Year / 10,000 km",
    includes: ["Liqui-Moly / Mobil1 Synthetic Fluid", "OEM Filter Replacements", "Full OBD-II Diagnostic Scan", "Brake System Inspection", "Complimentary Exterior Wash & Vacuum"],
    bgImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "ppf-protection",
    title: "TPU Paint Protection Film (PPF)",
    category: "Protection & Detailing",
    iconName: "Shield",
    shortDesc: "Ultra-durable 10-Mil self-healing clear PPF with hydrophobic topcoat to prevent stone chips and scratches.",
    fullDesc: "Shield your luxury vehicle's original paintwork from road gravel, sea air corrosion, acid rain, and parking scratches. Our precision laser-cut TPU film features self-healing micro-polymers that erase swirl marks under sun heat.",
    turnaround: "2 - 3 Days",
    warranty: "7 to 10 Years Warranty",
    includes: ["Precision Plotter Cut (No Blade on Paint)", "10-Mil TPU Self-Healing Film", "Edge Wrapping Protection", "Hydrophobic Coating Overlay", "Free Annual Inspection Check"],
    bgImage: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "ceramic-coating",
    title: "Ceramic & Graphene Shield",
    category: "Protection & Detailing",
    iconName: "Sparkles",
    shortDesc: "Multi-layer 9H+ Graphene matrix for deep candy reflection, extreme slickness, and UV resistance.",
    fullDesc: "Transform your paint with wet-look reflection and super-hydrophobic properties. Includes multi-stage paint correction to remove 95%+ swirl marks and scratches before applying multi-layer Graphene protection.",
    turnaround: "24 - 48 Hours",
    warranty: "3 to 5 Years Warranty",
    includes: ["3-Stage Paint Correction & Polish", "9H Nano-Graphene Coating", "Alloy Wheel Ceramic Shield", "Glass & Mirror Rain Repellent", "Interior Leather & Trim Protection"],
    bgImage: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "body-kits",
    title: "Bespoke Body Kits & Aero Packages",
    category: "Modifications",
    iconName: "Zap",
    shortDesc: "Custom aerodynamic widebody kits, carbon fiber splitters, diffusers, GT spoilers, and AMG/M-Sport conversions.",
    fullDesc: "Elevate your vehicle's stance and aggression. We import and fit authentic and custom body kits for BMW M, AMG, Audi RS, and Fortuner Legender/Custom conversions with factory-matched paint baking.",
    turnaround: "3 - 5 Days",
    warranty: "2 Years Fitment & Paint Guarantee",
    includes: ["Aerodynamic Carbon/ABS Kits", "Dust-Free Paint Booth Color Match", "Precision Panel Gap Alignment", "Integrated LED Accent Lighting", "Custom Badging & Emblems"],
    bgImage: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "valvetronic-exhaust",
    title: "Valvetronic Performance Exhaust",
    category: "Modifications",
    iconName: "Flame",
    shortDesc: "Dual-sound stainless steel & titanium exhaust systems with remote/app controlled sound valves.",
    fullDesc: "Unleash the acoustic roar of your engine at the press of a button. Switch seamlessly between quiet neighborhood mode and aggressive race track exhaust notes with dual valvetronic exhaust setups.",
    turnaround: "1 Day",
    warranty: "3 Years Exhaust Structural Warranty",
    includes: ["T304 Stainless / Titanium Tubing", "Wireless Remote Control Module", "Quad Carbon / Burnt Blue Tips", "Custom Downpipe Installation", "Zero Drone Sound Tuning"],
    bgImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "engine-overhaul",
    title: "Engine Overhaul & Precision Tuning",
    category: "Mechanical & Electrical",
    iconName: "Cpu",
    shortDesc: "Complete mechanical engine rebuilds, timing chain replacement, cylinder head restoration, and ECU Remapping.",
    fullDesc: "When luxury engines encounter wear or failure, our engine room delivers factory-spec overhauls. We utilize OEM torque specs, new pistons/valves, and precise timing calibration for peak horsepower.",
    turnaround: "5 - 10 Days",
    warranty: "1 Year / Unlimited KM Guarantee",
    includes: ["Block Boring & Cylinder Honing", "New OEM Pistons, Rings & Bearings", "Stage 1/2 ECU Dyno-Tuning", "Turbocharger Inspection & Overhaul", "Compression & Leakdown Testing"],
    bgImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "transmission-repair",
    title: "Automatic & DSG Transmission Repair",
    category: "Mechanical & Electrical",
    iconName: "Gauge",
    shortDesc: "Mechatronic repair, clutch pack replacements, fluid flushing, and software coding for ZF, DSG, 9G-Tronic.",
    fullDesc: "Jerky gear shifts or gearbox fault codes? We specialize in ZF 8HP, Audi S-Tronic DSG, and Mercedes 7G/9G-Tronic mechatronics replacement, valve body repair, and fluid replacement.",
    turnaround: "2 - 4 Days",
    warranty: "1 Year Warranty",
    includes: ["Mechatronic Circuit Board Repair", "Dual Clutch Pack Replacement", "Full Transmission Fluid Flush", "Adaptation & Shift Point Re-learning", "Leak Sealing & Gasket Replace"],
    bgImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "suspension-upgrades",
    title: "Air Suspension & Coilovers",
    category: "Modifications",
    iconName: "Layers",
    shortDesc: "Airlift Performance air suspension, KW coilovers, lowered springs, and air strut leak fixes.",
    fullDesc: "Achieve the ultimate flush fitment or restore comfortable air ride. We repair Mercedes Airmatic, Land Rover air struts, and install electronic height-adjustable suspension systems.",
    turnaround: "1 - 2 Days",
    warranty: "2 Years System Warranty",
    includes: ["Airlift / KW / Bilstein Coilovers", "Compressor & Air Line Diagnostics", "Electronic Height Calibration", "3D Wheel Alignment & Camber Set", "Heavy-Duty Bushing Upgrades"],
    bgImage: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "accident-repair",
    title: "Accident Repair & Dust-Free Paint Shop",
    category: "Body & Insurance",
    iconName: "ShieldAlert",
    shortDesc: "Chassis frame alignment, dent removal, PPG waterborne computerized color baking booth.",
    fullDesc: "Complete accident recovery with zero compromises. Our down-draft heated paint booth and PPG computerized color scanner ensure seamless factory paint matching and structural safety integrity.",
    turnaround: "3 - 7 Days",
    warranty: "Lifetime Paint Peel Guarantee",
    includes: ["Digital Laser Frame Realignment", "PDR Paintless Dent Repair", "PPG Heated Bake Booth Painting", "OEM Body Panel Replacement", "Cashless Insurance Claim Handling"],
    bgImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "flood-restoration",
    title: "Flood Damage Restoration",
    category: "Mechanical & Electrical",
    iconName: "Droplet",
    shortDesc: "Complete water damage extraction, harness drying, ECU decoding, and mold-free interior deep sanitization.",
    fullDesc: "Mangalore monsoons can trap vehicles in high water. We perform emergency engine water extraction, electronic control unit desoldering, wiring loom anti-corrosion treat, and cabin ozone sterilization.",
    turnaround: "4 - 8 Days",
    warranty: "Comprehensive Recovery Inspection",
    includes: ["Hydro-Lock Engine Flushing", "Module & ECU Board De-moisturizing", "Complete Seat & Carpet Demounting", "Medical Grade Ozone Sterilization", "Electrical Junction Box Cleaning"],
    bgImage: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "interior-accessories",
    title: "Starry Headliners & Custom Leather",
    category: "Luxury Accessories",
    iconName: "Crown",
    shortDesc: "Rolls-Royce style starlight fiber optic ceilings, ambient lighting, Nappa leather, & custom steering wheels.",
    fullDesc: "Transform your vehicle interior into a 7-star lounge. Handcrafted fiber-optic twinkling stars with shooting star patterns, customized carbon fiber steering wheels, and perforated Italian leather seats.",
    turnaround: "2 - 3 Days",
    warranty: "2 Years Electrical Guarantee",
    includes: ["600+ Fiber Optic Twinkle Stars", "64-Color RGB App Controlled Ambient", "Real Carbon Fiber Steering Wheel", "Custom Embroidered Leather Seats", "Alcantara Pillar & Ceiling Wrap"],
    bgImage: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "infotainment-electronics",
    title: "Android HD Screens & 360° Cameras",
    category: "Luxury Accessories",
    iconName: "Tv",
    shortDesc: "QLED Touchscreens, Wireless Apple CarPlay/Android Auto, Digital Cockpit Cluster, 360 Surround View.",
    fullDesc: "Upgrade legacy infotainment to high-definition Android smart screens without cutting factory wires. Seamless plug-and-play installation with steering control integration and 3D 360-degree parking cameras.",
    turnaround: "3 - 5 Hours",
    warranty: "1 Year Replacement Warranty",
    includes: ["IPS/QLED High Definition Display", "Wireless CarPlay & Android Auto", "360° Night Vision HD Cameras", "Canbus Steering Control Integration", "DSP Sound Equalizer Module"],
    bgImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop"
  }
];

export const MODIFICATIONS_CATALOG = [
  {
    title: "Carbon Fiber Aerodynamics Pack",
    category: "Aerodynamics",
    vehicle: "BMW M3 / M4 / 3 Series",
    gain: "+25% Downforce",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=800&auto=format&fit=crop",
    features: ["Real 2x2 Weave Carbon", "Front Lip, Side Skirts & Rear Diffuser", "UV Resistant Clear Coat"]
  },
  {
    title: "Valvetronic Quad Exhaust System",
    category: "Exhaust & Power",
    vehicle: "Mercedes C63 / E-Class / AMG",
    gain: "+18 HP & Race Sound",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop",
    features: ["Remote Valve Controller", "T304 Stainless Steel", "Burnt Blue & Carbon Tips"]
  },
  {
    title: "Air Suspension Stance System",
    category: "Suspension",
    vehicle: "Audi A6 / A8 / Porsche",
    gain: "Dynamic Stance & Comfort",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=800&auto=format&fit=crop",
    features: ["Presets via Mobile App", "Height Adjustable in Seconds", "Includes Heavy Duty Compressor"]
  },
  {
    title: "Starry Night Fiber Optic Headliner",
    category: "Interior Luxury",
    vehicle: "Universal Luxury Fitment",
    gain: "7-Star Lounge Ambiance",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800&auto=format&fit=crop",
    features: ["800 Fiber Optic Stars", "Shooting Star Animation", "Music Sync & Color Wheel"]
  },
  {
    title: "21\" Forged Alloy Wheel Collection",
    category: "Wheels & Stance",
    vehicle: "Range Rover / Defender / Urus",
    gain: "-30% Unsprung Weight",
    image: "https://images.unsplash.com/photo-1541348263662-e08266f92f3a?q=80&w=800&auto=format&fit=crop",
    features: ["6061-T6 Aerospace Aluminum", "Custom Offset & Concave Profile", "Matte Bronze / Gloss Black"]
  },
  {
    title: "12.3\" Digital Instrument Cockpit",
    category: "Electronics",
    vehicle: "BMW 3 / 5 Series & Audi A4",
    gain: "Futuristic Dash UI",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop",
    features: ["Multi-Theme Gauges", "Navigation Mirroring", "Plug-and-Play Factory Loom"]
  }
];

export const FEATURED_BUILDS = [
  {
    id: "build-bmw-m4",
    title: "BMW M4 Competition - Stealth Carbon Edition",
    brand: "BMW",
    category: "Performance & Body Kit",
    specs: "3.0L Twin-Turbo | 580 HP | Stage 2 Remap",
    duration: "4 Days Build Time",
    client: "Luxury Collector, Mangalore",
    mainImage: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop"
    ],
    modifications: [
      "Full Satin Matte Black Vinyl Wrap + TPU Front PPF",
      "Real Carbon Fiber GTS Hood & Rear Wing",
      "Valvetronic Titanium Exhaust System",
      "Stage 2 ECU & TCU Transmission Tune (+70 HP)",
      "20\" Forged Staggered Wheels in Satin Bronze"
    ],
    review: "CARMAX completely transformed my M4 into an absolute beast. The attention to detail on panel alignment and sound tuning is unmatched in South India!"
  },
  {
    id: "build-g63-amg",
    title: "Mercedes-AMG G63 - Brabus Shadow 800 Package",
    brand: "Mercedes-Benz",
    category: "Body Kit & Interior",
    specs: "4.0L V8 BiTurbo | Brabus Bodykit | Starry Sky",
    duration: "7 Days Build Time",
    client: "VIP Entrepreneur, Udupi",
    mainImage: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200&auto=format&fit=crop"
    ],
    modifications: [
      "Authentic Brabus Widebody Aerodynamic Kit",
      "22\" Monoblock Forged Black Alloys",
      "Custom Mandarin Orange Nappa Leather Upholstery",
      "1,000-Point Twinkle Fiber Optic Ceiling",
      "Sub-Zero 9H Graphene Ceramic Coating"
    ],
    review: "The G-Wagon turned out even better than what I saw in European car shows. CARMAX's technicians are true craftsmen."
  },
  {
    id: "build-porsche-911",
    title: "Porsche 911 Carrera S - Track Armor & Armytrix",
    brand: "Porsche",
    category: "PPF & Exhaust",
    specs: "3.0L Flat-6 Twin-Turbo | Full TPU Shield",
    duration: "3 Days Build Time",
    client: "Enthusiast, Bangalore / Mangalore",
    mainImage: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200&auto=format&fit=crop"
    ],
    modifications: [
      "Full Car Ultra-Gloss 10-Mil TPU Self-Healing PPF",
      "Armytrix Valvetronic Titanium Cat-Back Exhaust",
      "Porsche Red Brake Caliper High-Temp Refinish",
      "Interior Alcantara Steering Wheel Re-wrap"
    ],
    review: "Clean installation without removing body panels unnecessarily. The Armytrix exhaust sound is electrifying."
  },
  {
    id: "build-defender-110",
    title: "Land Rover Defender 110 - Urban Overland Pack",
    brand: "Land Rover",
    category: "Restoration & Upgrades",
    specs: "D300 Diesel | Satin PPF & Roof Rack",
    duration: "5 Days Build Time",
    client: "Off-Road Traveler, Kasaragod",
    mainImage: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1200&auto=format&fit=crop"
    ],
    modifications: [
      "Satin Stealth Protection Film Wrap",
      "20\" Heavy Duty Off-Road Alloy & All-Terrain Tires",
      "Lazer Triple-R LED Integrated Roof Lightbar",
      "Custom Rear Ladder & Side Mounted Gear Box"
    ],
    review: "The Defender looks ready to conquer the Western Ghats. Top-notch execution and solid customer service."
  }
];

export const BEFORE_AFTER_CASES = [
  {
    id: "ppf-ceramic",
    title: "Swirl Removal & 9H Ceramic Polish",
    vehicle: "Mercedes-Benz E-Class Sedan",
    beforeLabel: "Scratched & Oxidized Paint",
    afterLabel: "CARMAX 9H Mirror Glass Luster",
    beforeImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop",
    description: "3-Stage compound correction removed 98% of deep swirl marks and acid rain water spots before sealing under 9H Graphene matrix."
  },
  {
    id: "bodykit-wrap",
    title: "Stock to M-Sport Aerodynamic Conversion",
    vehicle: "BMW 3 Series Luxury Line",
    beforeLabel: "Factory Stock Styling",
    afterLabel: "CARMAX Aggressive M-Performance Pack",
    beforeImage: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200&auto=format&fit=crop",
    description: "Replaced chrome bumpers with OEM M-Sport bumpers, gloss black kidney grilles, carbon diffuser, and quad exhaust tips."
  },
  {
    id: "engine-restoration",
    title: "Monsoon Flood Damage Recovery",
    vehicle: "Audi A6 Matrix LED",
    beforeLabel: "Mud Hydrolocked Engine Bay",
    afterLabel: "Restored & Sealed OEM Engine Bay",
    beforeImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop",
    description: "Complete water extraction, cylinder head overhaul, new wiring harness junctions, and factory engine bay dressing."
  }
];

export const ACCESSORIES_CATALOG = [
  {
    id: "acc-1",
    name: "Real Carbon Fiber D-Cut Steering Wheel",
    price: "Inquire Price",
    category: "Interior",
    tag: "Best Seller",
    icon: "Crown",
    desc: "Perforated leather, Italian tri-color stitching, LED shift light strip, real 3K carbon fiber build.",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "acc-2",
    name: "64-Color Symphony Ambient Light Suite",
    price: "Inquire Price",
    category: "Lighting",
    tag: "Popular",
    icon: "Sparkles",
    desc: "Dashboard, door trims, footwells, and air vent lighting controlled via iOS/Android Smartphone App.",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "acc-3",
    name: "12.3\" QLED Android Smart Screen",
    price: "Inquire Price",
    category: "Electronics",
    tag: "Plug & Play",
    icon: "Tv",
    desc: "Octa-Core processor, 8GB RAM, Wireless Apple CarPlay & Android Auto, HD DSP Sound.",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "acc-4",
    name: "Valvetronic Wireless Remote Sound Box",
    price: "Inquire Price",
    category: "Exhaust",
    tag: "Performance",
    icon: "Flame",
    desc: "Dual solenoid electric exhaust valves with vacuum pump kit & dual aluminum remote keys.",
    img: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "acc-5",
    name: "Rolls-Royce Fiber Optic Starlight Ceiling",
    price: "Inquire Price",
    category: "Interior",
    tag: "Bespoke",
    icon: "Sparkles",
    desc: "Custom twinkle optical headliner with shooting stars and RF remote control.",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "acc-6",
    name: "360° 3D HD Night-Vision Camera Kit",
    price: "Inquire Price",
    category: "Safety",
    tag: "4-Camera Set",
    icon: "Shield",
    desc: "Ultra-wide sony lenses with dynamic trajectory parking guidelines and blind spot monitoring.",
    img: "https://images.unsplash.com/photo-1541348263662-e08266f92f3a?q=80&w=800&auto=format&fit=crop"
  }
];

export const WORKSHOP_FEATURES = [
  {
    title: "German OEM Diagnostic Suite",
    desc: "Equipped with official Autel Maxisys, Launch Euro, BMW ISTA+, Mercedes XENTRY, and Porsche PIWIS III scanning systems.",
    icon: "Cpu"
  },
  {
    title: "Dust-Free Temperature Bake Booth",
    desc: "Downdraft climate-controlled paint spray booth ensuring zero dust contamination and mirror finish gloss.",
    icon: "Flame"
  },
  {
    title: "Hydraulic Lifts & Alignment Bay",
    desc: "Heavy-duty 4-ton 2-post lifts and 3D laser computerized wheel alignment systems for high-performance stance.",
    icon: "Wrench"
  },
  {
    title: "Certified Master Engineers",
    desc: "Factory-trained technicians specialized in European drivetrains, twin-scroll turbochargers, and electrical architectures.",
    icon: "Award"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Nikhil Shetty",
    role: "Owner - BMW M340i xDrive",
    location: "Mangalore",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    carPhoto: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=600&auto=format&fit=crop",
    text: "CARMAX is by far the finest workshop in coastal Karnataka for luxury vehicles. Sent my M340i for TPU PPF and valvetronic exhaust installation. The fit and finish look straight out of a German tuning house!"
  },
  {
    id: 2,
    name: "Dr. Rohan D'Souza",
    role: "Owner - Mercedes-Benz GLE 450",
    location: "Kuntikan, Mangalore",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    carPhoto: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=600&auto=format&fit=crop",
    text: "After encountering a transmission fault code, the authorized center gave an astronomical estimate. CARMAX diagnosed the exact mechatronics solenoid valve issue and fixed it within 48 hours at a fraction of the cost."
  },
  {
    id: 3,
    name: "Aditya Rai",
    role: "Owner - Porsche Macan GTS",
    location: "Udupi",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    carPhoto: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=600&auto=format&fit=crop",
    text: "Got 9H Ceramic coating done here. The hydrophobic slickness and gloss depth are incredible. Their VIP lounge also allows you to observe the detailing team at work. Highly recommended!"
  },
  {
    id: 4,
    name: "Santhosh Bhat",
    role: "Owner - Toyota Fortuner Legender",
    location: "Surathkal",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    carPhoto: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=600&auto=format&fit=crop",
    text: "Upgraded my interior with ambient lights, Android 12.3 inch display, and customized carbon steering wheel. Everything was completed on time without cutting a single original wire. CARMAX is pure perfection!"
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: "post-1",
    imageUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=600&auto=format&fit=crop",
    caption: "M-Power delivery day! Fully wrapped in Satin Stealth PPF 🔥 #CARMAXMangalore #BMWM4",
    likes: "1,840",
    comments: "94"
  },
  {
    id: "post-2",
    imageUrl: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=600&auto=format&fit=crop",
    caption: "Brabus G-Wagon beast ready to rumble the streets of Mangalore 💥 #LuxuryCars #G63",
    likes: "2,410",
    comments: "128"
  },
  {
    id: "post-3",
    imageUrl: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop",
    caption: "Extreme mirror reflection post 9H Ceramic Polish! 💎 #DetailingWorld #CARMAX",
    likes: "1,290",
    comments: "62"
  },
  {
    id: "post-4",
    imageUrl: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=600&auto=format&fit=crop",
    caption: "Valvetronic quad exhaust test! Tap for sound 🔊 #Armytrix #ExhaustSound",
    likes: "3,150",
    comments: "210"
  }
];

export const FAQS = [
  {
    q: "Do you use genuine OEM parts for European luxury vehicles?",
    a: "Yes, 100%. We source original OEM parts directly from authorized German and European supply chains (BOSCH, Brembo, ZF, Bilstein, Liqui-Moly, Motul) to ensure your factory vehicle warranty remains intact."
  },
  {
    q: "Can I get doorstep vehicle pickup and flatbed towing in Mangalore?",
    a: "Absolutely! We offer complimentary pickup and drop services across Mangalore, Udupi, Surathkal, Bantwal, and Kasaragod. Enclosed flatbed towing is also available for high-end exotic cars."
  },
  {
    q: "How long does Paint Protection Film (PPF) installation take?",
    a: "Full body PPF wrapping typically takes 2 to 3 business days. This includes surface de-contamination, paint polish correction, laser plotter film cutting, wrapping, and 24-hour heat curing."
  },
  {
    q: "Do you handle cashless insurance claims for accident repairs?",
    a: "Yes, we partner with all leading insurance providers (HDFC ERGO, ICICI Lombard, Bajaj Allianz, Tata AIG, etc.) to streamline cashless claims and full vehicle restoration."
  }
];
