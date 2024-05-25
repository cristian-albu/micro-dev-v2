export type T_Value = {
  title: string;
  description: string;
  image: {
    title: string;
    link: string;
  };
};

export type T_ValuesData = {
  title: string;
  values: T_Value[];
};

export const data: T_ValuesData = {
  title: "Ce încurajăm",
  values: [
    {
      title: "Creativitatea",
      description: "Lorem ipsum dolor sit amet",
      image: {
        title: "",
        link: "",
      },
    },
    {
      title: "Creativitatea",
      description: "Lorem ipsum dolor sit amet",
      image: {
        title: "",
        link: "",
      },
    },
    {
      title: "Creativitatea",
      description: "Lorem ipsum dolor sit amet",
      image: {
        title: "",
        link: "",
      },
    },
  ],
};
