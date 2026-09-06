import britanac from "@/assets/project-britanac.jpg";
import samobor from "@/assets/project-samobor.jpg";
import marticeva from "@/assets/project-marticeva.jpg";
import cafe from "@/assets/project-cafe.jpg";
import kvaternikov from "@/assets/project-kvaternikov.jpg";
import kastela from "@/assets/project-kastela.jpg";

export type ProjectType = "Apartment" | "House" | "Commercial";

export type Project = {
  slug: string;
  name: string;
  location: string;
  year: string;
  type: ProjectType;
  size: string;
  scope: string;
  description: string;
  metaLine: string;
  image: string;
  alt: string;
  brief: string;
  did: string;
};

export const stageCaptions = [
  "Measured survey of the existing layout",
  "Floor plan, third revision",
  "Moodboard — oak, lime plaster, brushed brass",
  "3D visualization of the kitchen and dining area",
  "Finished space",
];

export const projects: Project[] = [
  {
    slug: "apartment-britanac",
    name: "Apartment Britanac",
    location: "Zagreb",
    year: "2025",
    type: "Apartment",
    size: "78 m²",
    scope: "Full design and documentation",
    description: "A 1930s flat opened up for a couple who cook constantly.",
    metaLine: "Zagreb, Britanac · 2025 · Apartment · 78 m² · Full design and documentation",
    image: britanac,
    alt: "Kitchen opened to the dining room in a restored 1930s Zagreb apartment",
    brief:
      "The owners had lived here for six years and had stopped using half of it. The kitchen was closed off from everything, the hallway swallowed four square metres, and there was nowhere to put anything. They wanted the flat to feel like one connected space without losing the character of the original layout.",
    did: "We removed the wall between the kitchen and the dining room and rebuilt the hallway as storage rather than empty corridor. The original parquet was restored and the new joinery was kept low and quiet so the ceiling height stays the thing you notice. Lighting was planned room by room instead of one fixture in the middle of each ceiling.",
  },
  {
    slug: "house-samobor",
    name: "House Samobor",
    location: "Samobor",
    year: "2025",
    type: "House",
    size: "165 m²",
    scope: "Full design and documentation",
    description:
      "A family home reorganised around the way three children actually move through it.",
    metaLine: "Samobor · 2025 · House · 165 m² · Full design and documentation",
    image: samobor,
    alt: "Open family living room with wood beams and soft green upholstery in a house near Samobor",
    brief:
      "A family of five had outgrown the way the ground floor was divided. Rooms were used as corridors, and everything the children needed daily was stored somewhere else.",
    did: "The ground floor was reorganised around the paths the family already walked, with storage placed where things are actually dropped. Durable finishes throughout, and a living area that stays open without becoming one loud room.",
  },
  {
    slug: "studio-marticeva",
    name: "Studio Martićeva",
    location: "Zagreb",
    year: "2024",
    type: "Apartment",
    size: "41 m²",
    scope: "Full design and documentation",
    description: "Every square metre earning its place in a small rental conversion.",
    metaLine: "Zagreb, Martićeva · 2024 · Apartment · 41 m² · Full design and documentation",
    image: marticeva,
    alt: "Compact light oak kitchen and built-in storage in a small studio apartment",
    brief:
      "A small flat destined for long-term rental, where every wasted centimetre would be felt daily by whoever lived there.",
    did: "Built-in joinery does the work of furniture: storage to the ceiling, a kitchen that closes down, and a sleeping area that reads as separate without a wall.",
  },
  {
    slug: "cafe-tresnjevka",
    name: "Café Trešnjevka",
    location: "Zagreb",
    year: "2024",
    type: "Commercial",
    size: "92 m²",
    scope: "Full design and documentation",
    description:
      "A neighbourhood café that had to work at eight in the morning and eight at night.",
    metaLine: "Zagreb, Trešnjevka · 2024 · Commercial · 92 m² · Full design and documentation",
    image: cafe,
    alt: "Neighbourhood café interior with terracotta walls, bentwood chairs and a marble counter",
    brief:
      "A café serving two very different crowds in one room, with a service counter that had to keep queues moving at the busiest hour.",
    did: "The counter was repositioned to shorten the staff's path, seating was zoned for quick coffee and long evenings, and lighting was set on scenes that shift the room from morning to night.",
  },
  {
    slug: "apartment-kvaternikov-trg",
    name: "Apartment Kvaternikov trg",
    location: "Zagreb",
    year: "2024",
    type: "Apartment",
    size: "63 m²",
    scope: "Full design and documentation",
    description: "Warm materials and a lot of storage, hidden where you don't see it.",
    metaLine: "Zagreb, Kvaternikov trg · 2024 · Apartment · 63 m² · Full design and documentation",
    image: kvaternikov,
    alt: "Living room with full-height walnut joinery, soft textiles and concealed storage",
    brief:
      "The owners wanted a calm apartment that could still absorb everything two people accumulate, without the flat looking like a storage unit.",
    did: "Full-height joinery runs the length of the living area in a single warm tone, with open shelving used sparingly so the rest disappears into the wall.",
  },
  {
    slug: "house-kastela",
    name: "House Kaštela",
    location: "Kaštela",
    year: "2023",
    type: "House",
    size: "210 m²",
    scope: "Full design and documentation",
    description: "A coastal house kept cool, light and easy to clean.",
    metaLine: "Kaštela · 2023 · House · 210 m² · Full design and documentation",
    image: kastela,
    alt: "Bright coastal living room with pale stone floor opening onto a shaded terrace and sea view",
    brief:
      "A coastal house used year-round by the family and by guests in summer, where salt, sand and strong light are part of daily life.",
    did: "Pale stone, lime plaster and linen keep the interior cool, with finishes chosen for how easily they wash down and how well they age near the sea.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string): Project {
  const index = projects.findIndex((project) => project.slug === slug);
  const next = index === -1 ? projects[0] : projects[(index + 1) % projects.length];
  return next as Project;
}

export const processSteps = [
  {
    number: "01",
    title: "Measuring",
    short: "I come to the space and measure it properly.",
    body: "I come to the space and measure it myself: walls, ceiling heights, window openings, installations, everything that's already there and can't move. Existing conditions get photographed and documented. Every decision after this point is based on real dimensions rather than assumptions, which is why it's worth doing properly the first time.",
  },
  {
    number: "02",
    title: "Floor plan",
    short: "The layout is tested on paper before anything is decided.",
    body: "A technical drawing of the layout, usually in several versions. I test different arrangements and check how you'd actually move through the space — where you drop your keys, where the light falls in the afternoon, whether two people can pass in the kitchen. We keep revising until the plan fits how you live, not how a catalogue thinks you live.",
  },
  {
    number: "03",
    title: "Moodboard",
    short: "Materials and colours are agreed together, up front.",
    body: "Materials, colours, textures and references collected in one place: floor finishes, wall treatments, joinery, hardware, textiles. We agree the direction here, before anything is modelled or ordered. It's the cheapest possible point to change your mind, and most people do.",
  },
  {
    number: "04",
    title: "3D visualization",
    short: "You see the finished room before the work begins.",
    body: "A photorealistic render of the finished space from the angles you'll actually see it from. You get to walk through the room before it exists and say what you don't like — the tone of the wood, the height of a shelf, the position of a light. Changes at this stage cost nothing. Changes after the joinery is cut cost a great deal.",
  },
  {
    number: "05",
    title: "Documentation handoff",
    shortTitle: "Documentation",
    short: "Your contractor gets everything they need to build it.",
    body: "Complete technical documentation for the people building it: dimensioned drawings, joinery details, electrical and lighting plans, material and finish schedules. Your contractor gets a set they can price accurately and build from without calling me every second day. What was visualised is what gets built.",
  },
] as const;
