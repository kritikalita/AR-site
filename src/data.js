export const uasProducts = [
  {
    id: 1,
    name: "RV Astra",
    type: "Jet Powered Kamikaze UAV",
    desc: "A high-performance precision strike UAV engineered for fast, accurate, and autonomous mission execution.",
    specs: [
      { label: "Speed", value: "600 KM/H", icon: "/icons/icon-maxSpeed.svg" },
      { label: "Range", value: "300 KM", icon: "/icons/icon-range.svg" },
      { label: "Payload", value: "15 KG", icon: "/icons/icon-maxPayload.svg" }
    ],
    image: "public/images/products/Astra.webp"
  },
  {
     id: 2,
    name: "RV Maya",
    type: "Jet Powered Bomber/Decoy",
    desc: "A multi-role tactical UAV engineered for precision strike missions and advanced decoy operations against enemy air defenses.",
    specs: [
      { label: "Launch", value: "Catapult", icon: "/icons/icon-Launch Typ.svg" },
      { label: "Propulsion", value: "Twin Indra RV 40", icon: "/icons/icon-Propulsion.svg" },
      { label: "Range", value: "300 KM", icon: "/icons/icon-range.svg" }
    ],
    image: "public/images/products/Maya.webp"
  },
  {
    
    id: 3,
    name: "RV Lakshya",
    type: "High Speed Expendable Target",
    desc: "A high-speed jet-powered target drone engineered for realistic aerial threat simulation and advanced weapons training.",
    specs: [
      { label: "Launch", value: "Catapult", icon: "/icons/icon-Launch Typ.svg" },
      { label: "Propulsion", value: "Indra RV 40 Micro Turbojet Engine", icon: "/icons/icon-Propulsion.svg" },
      { label: "Altitude", value: "8000 M", icon: "/icons/icon-Altitude.svg" }
    ],
    image: "public/images/products/Lakshya.webp"
  },
  {
    id: 4,
    name: "RV Teja",
    type: "VTOL Kamikaze UAV System",
    desc: "A next-generation optical-spool FPV strike drone delivering unmatched accuracy, immunity to jamming, and high-impact payload.",
    specs: [
      { label: "Payload", value: "4 KG", icon: "/icons/icon-maxPayload.svg" },
      { label: "Distance", value: "20 KM", icon: "/icons/icon-distance.svg" },
      { label: "EW Resilient", value: "Yes", icon: "/icons/icon-EW Resilient.svg" }
    ],
    image: "public/images/products/Teja.webp"
  },
  {
    id: 5,
    name: "RV Drishti",
    type: "Tethered Drone System",
    desc: "A 24-hour tethered ISR platform built for continuous surveillance, jamming, and secure communication relay.",
    specs: [
      { label: "Endurance", value: "24 Hours", icon: "public/icons/icon-endurance.svg" },
      { label: "Payload", value: "15 KG", icon: "public/icons/icon-maxPayload.svg" },
      { label: "EO/IR + LRF", value: "10 KM", icon: "public/icons/icon-distance.svg" }
    ],
    image: "public/images/products/Drishti.webp"
  },
  {
    id: 6,
    name: "RV Raksha 7",
    type: "Anti Drone Gun",
    desc: "A powerful multi-channel anti-drone gun delivering reliable suppression of hostile UAVs across seven frequency bands.​",
    specs: [
      { label: "Range", value: "2 KM", icon: "public/icons/icon-range.svg" },
      { label: "Frequency Bands", value: "433MHz-5.8GHz", icon: "public/icons/icon-frequency.svg" },
      { label: "Operation Time", value: "75 minutes", icon: "public/icons/icon-operation.svg" }
    ],
    image: "public/images/products/Raksha.webp"
  }
];

export const groundProducts = [
  {
    id: 1,
    name: "RV Yodha",
    type: "Unmanned Ground Vehicle",
    desc: "A powerful all-terrain autonomous UGV delivering unmatched payload capacity and battlefield endurance.",
    specs: [
      { label: "Payload", value: "1000 KG", icon: "/icons/icon-maxPayload.svg" },
      { label: "Speed", value: "60 KM/H", icon: "/icons/icon-maxSpeed.svg" },
      { label: "Incline", value: "45°", icon: "/icons/icon-incline.svg" }
    ],
    image: "public/images/products/Yodha.webp"
  },
  {
    id: 2,
    name: "RV Arrotug",
    type: "Autonomous Aircraft Tug",
    desc: "A rugged autonomous tug delivering precise, reliable towing for aircraft in the 20-tonne class.",
    specs: [
      { label: "System", value: "Autonomous", icon: "/icons/icon-Autonomous.svg" },
      { label: "Obstacle Detection", value: "360°", icon: "/icons/icon-360-degrees.svg" },
      { label: "Towing Capacity", value: "20 Tonne", icon: "/icons/icon-tonne.svg" }
    ],
    image: "public/images/products/Arrotug.webp"
  },
  {
    id: 3,
    name: "ArroWash",
    type: "Aircraft Washing System",
    desc: "An automated, remote-controlled aircraft washing system designed for fast, uniform, and safe cleaning operations.",
    specs: [
      { label: "Wireless Remote Control", value: "200 ft", icon: "/icons/icon-wireless.svg" },
      { label: "Vertical Reach", value: "18 m", icon: "/icons/icon-distance.svg" },
      { label: "Brush", value: "Flexible + Modular", icon: "/icons/icon-flexibility.svg" }
    ],
    image: "public/images/products/ArroWash.webp"
  },
  {
    id: 4,
    name: "RV MMTS",
    type: "Multi Motion Targeting System",
    desc: "A multi-motion targeting system simulating realistic moving threats for advanced live-fire training exercises.",
    specs: [
      { label: "Target Hit detection", value: "Real Time", icon: "/icons/icon-Target.svg" },
      { label: "Motion", value: "Multi-Axis", icon: "/icons/icon-Launch Typ.svg" },
      { label: "Operation", value: "Wireless Muti-Unit synchronized", icon: "/icons/icon-wireless.svg" }
    ],
    image: "public/images/products/MMTS.webp"
  }
];