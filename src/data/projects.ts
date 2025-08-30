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
    link: "/converter",
    image: "/todoImg.png",
    code: "https://github.com/hanzalakhan010/MyProjects/tree/main/src/pages/CurrencyConverter",
    desc: "Simple Currency converter, still under improvement",
  },
  {
    name: "Shopping Cart",
    link: "https://shopping-cart-pied-alpha.vercel.app/",
    image: "/shooping-cart.png",
    code: "https://github.com/hanzalakhan010/shopping-cart",
    desc: `Shopping cart that utilises React's useContext to maintain global
          state of cart items.`,
  },
  {
    name: "Multi Step Form",
    link: "https://multi-step-form-beryl-chi.vercel.app/",
    image: "/multi-step.png",
    code: "https://github.com/hanzalakhan010/multi-step-form",
    desc: "Multi-step form with validation and smooth navigation between steps.",
  },
  {
    name: "Recipe Book",
    link: "https://recipe-book-app-brown.vercel.app/",
    image: "/recipe-book.png",
    code: "https://github.com/hanzalakhan010/recipe-book-app",
    desc: "Recipe Book app with add, edit, and persist features using Redux and redux-persist.",
  },
  {
    name: "Flow Bite website",
    link: "https://flow-bite-website.vercel.app/",
    image: "/flow-bite.png",
    code: "https://github.com/hanzalakhan010/flow-bite-website",
    desc: "Flow bite website, using React, React router v7,tailwindcss",
  },
];

export const todoProjects: Partial<Project>[] = [
  {
    name: "Quiz Application",
  },
];
