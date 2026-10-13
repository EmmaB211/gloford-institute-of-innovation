export interface Testimonial {
  id: string;
  name: string;
  occupation: string;
  location: string;
  story: string;
  quote: string;
  photo: string;
}

// Placeholder testimonials — replace with real success stories once available.
export const testimonials: Testimonial[] = [
  {
    id: "story-1",
    name: "Placeholder Name",
    occupation: "Small Business Owner",
    location: "Placeholder Location",
    story:
      "Placeholder story describing how business support helped this entrepreneur strengthen their enterprise.",
    quote: "This is placeholder testimonial content to be replaced with a real story.",
    photo: "/images/testimonials/placeholder-1.svg",
  },
  {
    id: "story-2",
    name: "Placeholder Name",
    occupation: "Farmer & Agripreneur",
    location: "Placeholder Location",
    story:
      "Placeholder story describing how agribusiness support helped this farmer access new markets.",
    quote: "This is placeholder testimonial content to be replaced with a real story.",
    photo: "/images/testimonials/placeholder-2.svg",
  },
  {
    id: "story-3",
    name: "Placeholder Name",
    occupation: "ICT Boot Camp Graduate",
    location: "Placeholder Location",
    story:
      "Placeholder story describing how digital skills training helped this young person build new opportunities.",
    quote: "This is placeholder testimonial content to be replaced with a real story.",
    photo: "/images/testimonials/placeholder-3.svg",
  },
];
