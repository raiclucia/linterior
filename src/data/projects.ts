import knezija_1 from "@/assets/portfolio/knezija1.jpeg.asset.json";
import knezija_2 from "@/assets/portfolio/knezija2.jpeg.asset.json";
import knezija_3 from "@/assets/portfolio/knezija3.jpeg.asset.json";
import knezija_6 from "@/assets/portfolio/knezija6.jpeg.asset.json";
import knezija_8 from "@/assets/portfolio/knezija8.jpeg.asset.json";
import knezija_4 from "@/assets/portfolio/knezija4.jpeg.asset.json";
import knezija_7 from "@/assets/portfolio/knezija7.jpeg.asset.json";
import knezija_5 from "@/assets/portfolio/knezija5.jpeg.asset.json";
import knezija_9 from "@/assets/portfolio/knezija9.jpeg.asset.json";
import knezija_10 from "@/assets/portfolio/knezija10.jpeg.asset.json";
import portfolio_38 from "@/assets/portfolio/portfolio-38.jpg.asset.json";
import portfolio_39 from "@/assets/portfolio/portfolio-39.jpg.asset.json";
import portfolio_40 from "@/assets/portfolio/portfolio-40.jpg.asset.json";
import portfolio_41 from "@/assets/portfolio/portfolio-41.jpg.asset.json";
import portfolio_42 from "@/assets/portfolio/portfolio-42.jpg.asset.json";
import portfolio_43 from "@/assets/portfolio/portfolio-43.jpg.asset.json";
import portfolio_44 from "@/assets/portfolio/portfolio-44.jpg.asset.json";
import portfolio_45 from "@/assets/portfolio/portfolio-45.jpg.asset.json";
import portfolio_49 from "@/assets/portfolio/portfolio-49.jpg.asset.json";
import portfolio_50 from "@/assets/portfolio/portfolio-50.jpg.asset.json";
import portfolio_51 from "@/assets/portfolio/portfolio-51.jpg.asset.json";
import portfolio_52 from "@/assets/portfolio/portfolio-52.jpg.asset.json";
import portfolio_53 from "@/assets/portfolio/portfolio-53.jpg.asset.json";
import portfolio_54 from "@/assets/portfolio/portfolio-54.jpg.asset.json";
import portfolio_55 from "@/assets/portfolio/portfolio-55.jpg.asset.json";
import portfolio_56 from "@/assets/portfolio/portfolio-56.jpg.asset.json";
import portfolio_57 from "@/assets/portfolio/portfolio-57.jpg.asset.json";
import portfolio_58 from "@/assets/portfolio/portfolio-58.jpg.asset.json";
import portfolio_62 from "@/assets/portfolio/portfolio-62.jpg.asset.json";
import portfolio_63 from "@/assets/portfolio/portfolio-63.jpg.asset.json";
import portfolio_64 from "@/assets/portfolio/portfolio-64.jpg.asset.json";
import portfolio_65 from "@/assets/portfolio/portfolio-65.jpg.asset.json";
import portfolio_66 from "@/assets/portfolio/portfolio-66.jpg.asset.json";
import portfolio_70 from "@/assets/portfolio/portfolio-70.jpg.asset.json";
import portfolio_71 from "@/assets/portfolio/portfolio-71.jpg.asset.json";
import portfolio_72 from "@/assets/portfolio/portfolio-72.jpg.asset.json";
import portfolio_73 from "@/assets/portfolio/portfolio-73.jpg.asset.json";
import portfolio_74 from "@/assets/portfolio/portfolio-74.jpg.asset.json";
import portfolio_75 from "@/assets/portfolio/portfolio-75.jpg.asset.json";
import portfolio_76 from "@/assets/portfolio/portfolio-76.jpg.asset.json";
import portfolio_77 from "@/assets/portfolio/portfolio-77.jpg.asset.json";
import portfolio_78 from "@/assets/portfolio/portfolio-78.jpg.asset.json";
import portfolio_79 from "@/assets/portfolio/portfolio-79.jpg.asset.json";
import portfolio_83 from "@/assets/portfolio/portfolio-83.jpg.asset.json";
import portfolio_84 from "@/assets/portfolio/portfolio-84.jpg.asset.json";
import portfolio_85 from "@/assets/portfolio/portfolio-85.jpg.asset.json";
import portfolio_86 from "@/assets/portfolio/portfolio-86.jpg.asset.json";
import portfolio_87 from "@/assets/portfolio/portfolio-87.jpg.asset.json";
import portfolio_88 from "@/assets/portfolio/portfolio-88.jpg.asset.json";
import portfolio_92 from "@/assets/portfolio/portfolio-92.jpg.asset.json";
import portfolio_93 from "@/assets/portfolio/portfolio-93.jpg.asset.json";
import portfolio_94 from "@/assets/portfolio/portfolio-94.jpg.asset.json";
import portfolio_95 from "@/assets/portfolio/portfolio-95.jpg.asset.json";
import portfolio_96 from "@/assets/portfolio/portfolio-96.jpg.asset.json";
import portfolio_97 from "@/assets/portfolio/portfolio-97.jpg.asset.json";
import portfolio_98 from "@/assets/portfolio/portfolio-98.jpg.asset.json";
import portfolio_102 from "@/assets/portfolio/portfolio-102.jpg.asset.json";
import portfolio_103 from "@/assets/portfolio/portfolio-103.jpg.asset.json";
import portfolio_104 from "@/assets/portfolio/portfolio-104.jpg.asset.json";
import portfolio_105 from "@/assets/portfolio/portfolio-105.jpg.asset.json";
import portfolio_106 from "@/assets/portfolio/portfolio-106.jpg.asset.json";
import portfolio_107 from "@/assets/portfolio/portfolio-107.jpg.asset.json";
import portfolio_108 from "@/assets/portfolio/portfolio-108.jpg.asset.json";
import portfolio_109 from "@/assets/portfolio/portfolio-109.jpg.asset.json";
import portfolio_110 from "@/assets/portfolio/portfolio-110.jpg.asset.json";
import portfolioAsset from "@/assets/portfolio/linterior-portfolio.pdf.asset.json";

export const portfolioDownload = portfolioAsset.url;
export type ProjectType = "Apartment" | "Commercial" | "Residential";
export type PortfolioImage = { src: string; width: number; height: number; alt: string; kind: "plan" | "render" };
export type Project = { slug: string; name: string; type: ProjectType; image: string; alt: string; gallery: PortfolioImage[] };
export const projects: Project[] = [
  {
    "slug": "projekt-knezija",
    "name": "Projekt Knežija",
    "type": "Apartment",
    "image": knezija_1.url,
    "alt": "Projekt Knežija — vizualizacija interijera",
    "gallery": [
      {
        "src": knezija_1.url,
        "width": 1432,
        "height": 736,
        "alt": "Projekt Knežija — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": knezija_2.url,
        "width": 1432,
        "height": 736,
        "alt": "Projekt Knežija — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": knezija_3.url,
        "width": 1401,
        "height": 752,
        "alt": "Projekt Knežija — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": knezija_4.url,
        "width": 1432,
        "height": 736,
        "alt": "Projekt Knežija — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": knezija_5.url,
        "width": 1390,
        "height": 768,
        "alt": "Projekt Knežija — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": knezija_6.url,
        "width": 1394,
        "height": 752,
        "alt": "Projekt Knežija — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": knezija_7.url,
        "width": 1382,
        "height": 752,
        "alt": "Projekt Knežija — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": knezija_8.url,
        "width": 1398,
        "height": 768,
        "alt": "Projekt Knežija — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": knezija_9.url,
        "width": 1365,
        "height": 768,
        "alt": "Projekt Knežija — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": knezija_10.url,
        "width": 1362,
        "height": 768,
        "alt": "Projekt Knežija — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_38.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt Knežija — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_39.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt Knežija — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_40.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt Knežija — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_41.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt Knežija — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_42.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt Knežija — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_43.url,
        "width": 675,
        "height": 457,
        "alt": "Projekt Knežija — tlocrt",
        "kind": "plan"
      },
      {
        "src": portfolio_44.url,
        "width": 487,
        "height": 602,
        "alt": "Projekt Knežija — tlocrt",
        "kind": "plan"
      },
      {
        "src": portfolio_45.url,
        "width": 768,
        "height": 432,
        "alt": "Projekt Knežija — vizualizacija interijera",
        "kind": "render"
      }
    ]
  },
  {
    "slug": "projekt-trnsko",
    "name": "Projekt Trnsko",
    "type": "Apartment",
    "image": portfolio_58.url,
    "alt": "Projekt Trnsko — vizualizacija interijera",
    "gallery": [
      {
        "src": portfolio_49.url,
        "width": 461,
        "height": 260,
        "alt": "Projekt Trnsko — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_50.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt Trnsko — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_51.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt Trnsko — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_52.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt Trnsko — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_53.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt Trnsko — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_54.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt Trnsko — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_55.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt Trnsko — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_56.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt Trnsko — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_57.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt Trnsko — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_58.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt Trnsko — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_62.url,
        "width": 768,
        "height": 432,
        "alt": "Projekt Trnsko — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_63.url,
        "width": 768,
        "height": 432,
        "alt": "Projekt Trnsko — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_64.url,
        "width": 768,
        "height": 432,
        "alt": "Projekt Trnsko — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_65.url,
        "width": 768,
        "height": 432,
        "alt": "Projekt Trnsko — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_66.url,
        "width": 809,
        "height": 638,
        "alt": "Projekt Trnsko — tlocrt",
        "kind": "plan"
      }
    ]
  },
  {
    "slug": "projekt-cirkovljanska",
    "name": "Projekt Cirkovljanska",
    "type": "Apartment",
    "image": portfolio_73.url,
    "alt": "Projekt Cirkovljanska — vizualizacija interijera",
    "gallery": [
      {
        "src": portfolio_70.url,
        "width": 404,
        "height": 227,
        "alt": "Projekt Cirkovljanska — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_71.url,
        "width": 404,
        "height": 227,
        "alt": "Projekt Cirkovljanska — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_72.url,
        "width": 615,
        "height": 346,
        "alt": "Projekt Cirkovljanska — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_73.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt Cirkovljanska — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_74.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt Cirkovljanska — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_75.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt Cirkovljanska — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_76.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt Cirkovljanska — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_77.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt Cirkovljanska — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_78.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt Cirkovljanska — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_79.url,
        "width": 768,
        "height": 432,
        "alt": "Projekt Cirkovljanska — tlocrt",
        "kind": "plan"
      }
    ]
  },
  {
    "slug": "skola-gitare",
    "name": "Projekt škola gitare",
    "type": "Commercial",
    "image": portfolio_83.url,
    "alt": "Projekt škola gitare — vizualizacija interijera",
    "gallery": [
      {
        "src": portfolio_83.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt škola gitare — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_84.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt škola gitare — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_85.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt škola gitare — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_86.url,
        "width": 434,
        "height": 564,
        "alt": "Projekt škola gitare — tlocrt",
        "kind": "plan"
      }
    ]
  },
  {
    "slug": "projekt-adzijina",
    "name": "Projekt Adžijina",
    "type": "Apartment",
    "image": portfolio_87.url,
    "alt": "Projekt Adžijina — vizualizacija interijera",
    "gallery": [
      {
        "src": portfolio_87.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt Adžijina — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_88.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt Adžijina — vizualizacija interijera",
        "kind": "render"
      }
    ]
  },
  {
    "slug": "studentski-dom",
    "name": "Projekt studentski dom",
    "type": "Residential",
    "image": portfolio_95.url,
    "alt": "Projekt studentski dom — vizualizacija interijera",
    "gallery": [
      {
        "src": portfolio_92.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt studentski dom — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_93.url,
        "width": 768,
        "height": 432,
        "alt": "Projekt studentski dom — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_94.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt studentski dom — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_95.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt studentski dom — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_96.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt studentski dom — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_97.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt studentski dom — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_98.url,
        "width": 597,
        "height": 321,
        "alt": "Projekt studentski dom — tlocrt",
        "kind": "plan"
      }
    ]
  },
  {
    "slug": "vizazisticki-studio",
    "name": "Projekt vizažistički studio",
    "type": "Commercial",
    "image": portfolio_104.url,
    "alt": "Projekt vizažistički studio — vizualizacija interijera",
    "gallery": [
      {
        "src": portfolio_102.url,
        "width": 576,
        "height": 297,
        "alt": "Projekt vizažistički studio — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_103.url,
        "width": 576,
        "height": 296,
        "alt": "Projekt vizažistički studio — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_104.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt vizažistički studio — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_105.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt vizažistički studio — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_106.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt vizažistički studio — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_107.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt vizažistički studio — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_108.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt vizažistički studio — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_109.url,
        "width": 576,
        "height": 324,
        "alt": "Projekt vizažistički studio — vizualizacija interijera",
        "kind": "render"
      },
      {
        "src": portfolio_110.url,
        "width": 825,
        "height": 553,
        "alt": "Projekt vizažistički studio — tlocrt",
        "kind": "plan"
      }
    ]
  }
];
export function getProject(slug: string) { return projects.find(project => project.slug === slug); }
export function getNextProject(slug: string): Project {
 const index = projects.findIndex(project => project.slug === slug);
 const next = projects[(index + 1) % projects.length];
 if (!next) throw new Error("Portfolio contains no projects");
 return next;
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
