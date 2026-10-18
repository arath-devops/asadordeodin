export type MenuItem = {
  name: string;
  detail?: string;
  price?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  subtitle: string;
  priceBadge?: string;
  items: MenuItem[];
  notes?: string[];
  image?: { src: string; alt: string };
};

export const MENU_SECTIONS: MenuSection[] = [
  {
    id: "tacos",
    title: "Tacos",
    subtitle: "Tacos de vianda, al carbón",
    priceBadge: "$20 c/u",
    image: {
      src: "/food-tacos.jpg",
      alt: "Tacos al carbón con limón y salsa",
    },
    items: [
      { name: "Suadero" },
      { name: "Longaniza" },
      { name: "Campechano" },
      { name: "Bistec" },
      { name: "Chorizo argentino" },
      { name: "Chorizo español" },
      { name: "Chuleta" },
      { name: "Carne enchilada" },
      { name: "Arrachera" },
      { name: "Costilla" },
    ],
    notes: ["Con queso: $25", "Aguja norteña: +$25"],
  },
  {
    id: "campechanas",
    title: "Campechanas",
    subtitle: "Grandes tortillas de harina y queso",
    priceBadge: "$65",
    image: {
      src: "/food-campechanas.jpg",
      alt: "Campechanas y tortillas a la plancha",
    },
    items: [
      {
        name: "Pirata",
        detail: "Bistec con queso · tortilla de harina 30 cm",
        price: "$65",
      },
      {
        name: "Campechana",
        detail: "Queso y harina 30 cm · longaniza con suadero, bistec o costilla",
        price: "$65",
      },
      {
        name: "Especial",
        detail: "Arrachera con chorizo argentino y queso",
        price: "$75",
      },
    ],
  },
  {
    id: "costillas",
    title: "Costillas de jabalí",
    subtitle: "Al peso, glaseadas al fuego",
    priceBadge: "$175 · ½ kg",
    image: {
      src: "/food-costillas.jpg",
      alt: "Costillas glazeadas con elote a la parrilla",
    },
    items: [
      { name: "Española" },
      { name: "Café con mezcal" },
      { name: "Chiles secos, cerveza y mantequilla" },
      { name: "BBQ" },
      { name: "Mango habanero" },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    subtitle: "Elixir y brebajes",
    image: {
      src: "/food-guacamole.jpg",
      alt: "Acompañamientos de la casa",
    },
    items: [
      { name: "Coca-Cola", price: "$25" },
      { name: "Boing", price: "$25" },
    ],
  },
];

export const LOCATIONS = [
  {
    id: "jardines",
    name: "Jardines de Chalco",
    area: "Chalco, Estado de México",
    note: "Ubicación aproximada — dirección exacta pendiente.",
    mapQuery: "Jardines de Chalco, Chalco, Estado de México",
    mapEmbed:
      "https://maps.google.com/maps?q=Jardines%20de%20Chalco%2C%20Chalco%2C%20Estado%20de%20M%C3%A9xico&z=15&output=embed",
  },
  {
    id: "culturas",
    name: "Culturas de México",
    area: "Chalco, Estado de México",
    note: "Ubicación aproximada — dirección exacta pendiente.",
    mapQuery: "Culturas de México, Chalco, Estado de México",
    mapEmbed:
      "https://maps.google.com/maps?q=Culturas%20de%20M%C3%A9xico%2C%20Chalco%2C%20Estado%20de%20M%C3%A9xico&z=15&output=embed",
  },
] as const;
