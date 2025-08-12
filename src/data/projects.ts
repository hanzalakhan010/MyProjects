interface Project {
  name: string;
  code: string;
  link: string;
  image: string;
  desc: string;
}

export const projects: Project[] = [
  {
    name: "TODO",
    link: "/todo",
    image: "/todoImg.png",
    code: "https://github.com/hanzalakhan010/MyProjects/tree/main/src/pages/Todo",
    desc: "Simple Todo",
  },
  {
    name: "Currency Converter",
    link: "/currency_converter",
    image: "/todoImg.png",
    code: "https://github.com/hanzalakhan010/MyProjects/tree/main/src/pages/Todo",
    desc: "Simple Currency converter, i am working on it",
  },
  {
    name: "Shopping Cart",
    link: "https://shooopingcart.netlify.app/",
    image: "/todoImg.png",
    code: "https://github.com/hanzalakhan010/shopping-cart",
    desc: `Shopping cart that utilises useContext of react to maintain global
          state of cart items
         `,
  },
];

export const todoProjects: Partial<Project>[] = [
  {
    name: "Currency Converter",
  },
  {
    name: "Multi step Form",
  },
  { name: "Quiz Application" },
];
