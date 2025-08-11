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

