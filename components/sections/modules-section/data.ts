export type T_Module = {
  title: string;
  price: number;
  oldPrice: number;
  duration: number;
  subTitle: string;
  description1: string;
  description2: string;
  button: {
    title: string;
    link: string;
  };
  image: {
    title: string;
    link: string;
  };
};

export type T_ModulesData = {
  title: string;
  modules: T_Module[];
};

export const data: T_ModulesData = {
  title: "Module",
  modules: [
    {
      title: "Junior I  (7-9 ani)",
      subTitle: "Scratch + Robo Junior",
      price: 1200,
      oldPrice: 1200,
      duration: 50,
      description1: `Cursul provoaca micii pasionati de tehnologie la fiecare sedinta sa isi puna imaginatia la treaba si sa descopere lumea programarii cu ajutorul limbajului Scratch. `,
      description2: `Acestia vor descoperi placerea de a explora, de a-si pune imaginatia la diverse incercari si de a intelege principiile de baza ale ingiineriei si ale circuitelor`,
      button: {
        title: "Vezi mai multe",
        link: "",
      },
      image: {
        title: "",
        link: "",
      },
    },
    {
      title: "Mid I (10-12 ani)",
      subTitle: "Micro + Robo Mid",
      price: 1200,
      oldPrice: 1200,
      duration: 50,
      description1: `In acest curs se imbina creativitatea si inovatia fiecarui copil cu placuta de dezvoltare Micro:bit. `,
      description2: `O calatorie captivanta in lumea programarii si a roboticii alaturi de robotelul Tiny:bit. 
      Cu ajutorul acestuia, copii vor explora aceasta lume pornind de la proiecte simple si ajungand pana la constructii complexe, fiecare pas fiind o oportunitate de a-si largi cunostiintele.`,
      button: {
        title: "Vezi mai multe",
        link: "",
      },
      image: {
        title: "",
        link: "",
      },
    },
  ],
};
