export type T_Testimonial = {
  name: string;
  testimonial: string;
  image: {
    title: string;
    link: string;
  };
};

export type T_TestimonialData = {
  title: string;
  testimonials: T_Testimonial[];
};

export const data: T_TestimonialData = {
  title: "Ce zic parinții",
  testimonials: [
    {
      name: "Vasilica P.",
      testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor nec ligula sed euismod. Nulla vulputate magna ultrices, porta urna a, sodales sem. Morbi at elementum leo. Fusce at ante sed ipsum viverra sollicitudin venenatis sed diam. Suspendisse commodo, justo at sollicitudin cursus, mauris ipsum vestibulum sem, nec dapibus nulla libero ac tellus.`,
      image: {
        title: "",
        link: "",
      },
    },
    {
      name: "Vasilica D.",
      testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor nec ligula sed euismod. Nulla vulputate magna ultrices, porta urna a, sodales sem. Morbi at elementum leo. Fusce at ante sed ipsum viverra sollicitudin venenatis sed diam. Suspendisse commodo, justo at sollicitudin cursus, mauris ipsum vestibulum sem, nec dapibus nulla libero ac tellus.`,
      image: {
        title: "",
        link: "",
      },
    },
  ],
};
