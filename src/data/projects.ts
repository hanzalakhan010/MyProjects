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
    code: "https://github.com/hanzalakhan010/MyProjects/tree/main/src/pages/CurrencyConverter",
    desc: "Simple Currency converter, still under improvement",
  },
  {
    name: "Shopping Cart",
    link: "https://shopping-cart-pied-alpha.vercel.app/",
    image: "/shooping-cart",
    code: "https://github.com/hanzalakhan010/shopping-cart",
    desc: `Shopping cart that utilises React's useContext to maintain global
          state of cart items.`,
  },
  {
    name: "Multi Step Form",
    link: "multi-step-form-54tyak6t7-hanzala-5e6e05eb.vercel.app",
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
];

export const todoProjects: Partial<Project>[] = [
  {
    name: "Quiz Application",
  },
];
