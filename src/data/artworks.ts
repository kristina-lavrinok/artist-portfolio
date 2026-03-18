export interface Artwork {
  id: number;
  title: string;
  description: string;
  imageUrls: string[];
  year: string;
  medium: string;
}

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "Pegasus Before the Wings",
    description: "",
    imageUrls: [
      "/artworks/pegasus/Pegasus before the wings.jpg",
      "/artworks/pegasus/Pegasus closeup 1.jpg",
      "/artworks/pegasus/Pegasus closeup 2.jpg",
      "/artworks/pegasus/Pegasus closeup 3.jpg",
    ],
    year: "2025",
    medium: "Oil on Canvas 21 1/2 x 21 1/2 in"
  },
  {
    id: 2,
    title: "Sparrow",
    description: "",
    imageUrls: [
      "/artworks/sparrow/Sparrow.jpg",
      "/artworks/sparrow/Sparrow closeup 1.jpg",
      "/artworks/sparrow/Sparrow closeup 2.jpg",
    ],
    year: "2025",
    medium: "Oil on Canvas 24 x 20 in"
  },
  {
    id: 3,
    title: "Heritage",
    description: "",
    imageUrls: [
      "/artworks/heritage/Heritage.jpg",
      "/artworks/heritage/Heritage closeup 1.jpg",
      "/artworks/heritage/Heritage closeup 2.jpg",
      "/artworks/heritage/Heritage closeup 3.jpg",
    ],
    year: "2025",
    medium: "Oil on Canvas 16 x 16 in"
  },
  {
    id: 4,
    title: "Free Run",
    description: "",
    imageUrls: [
      "/artworks/running_horse/Running horse.jpg",
      "/artworks/running_horse/Running horse closeup 1.jpg",
      "/artworks/running_horse/Running horse closeup 2.jpg",
      "/artworks/running_horse/Running horse closeup 3.jpg",
    ],
    year: "2025",
    medium: "Oil on Canvas 24 x 24 in"
  },
  {
    id: 5,
    title: "Running Rabbit",
    description: "",
    imageUrls: [
      "/artworks/running_rabbit/Running Rabbit.jpg",
      "/artworks/running_rabbit/Running rabbit Large.jpg",
    ],
    year: "2025",
    medium: "Oil on Canvas 15 x 18 in"
  },
  {
    id: 6,
    title: "Awakening",
    description: "",
    imageUrls: [
      "/artworks/hand/Hand.jpg",
    ],
    year: "2025",
    medium: "Oil on Canvas 18 x 15 in"
  },
  {
    id: 7,
    title: "Winter",
    description: "",
    imageUrls: [
      "/artworks/winter/Winter.jpg",
    ],
    year: "2024",
    medium: "Oil on Canvas 40 x 30 in"
  },
  {
    id: 8,
    title: "Self Portrait",
    description: "",
    imageUrls: [
      "/artworks/self_portrait/Self PORTRAIT.jpg",
    ],
    year: "2024",
    medium: "Oil on Canvas 24 x 24 in"
  },
  {
    id: 9,
    title: "Self Portrait",
    description: "",
    imageUrls: [
      "/artworks/self_portrait_double/Self PORTRAIT DOBLE.jpg",
    ],
    year: "2025",
    medium: "Oil on panel (diptych) 8 x 6 in each"
  },
  {
    id: 10,
    title: "The Horse",
    description: "",
    imageUrls: [
      "/artworks/lady_horse/Lady Horse.jpg",
    ],
    year: "2025",
    medium: "Oil on Canvas 20 x 24 in"
  },
];