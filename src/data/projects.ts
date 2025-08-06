interface Project {
  name: string;
  code: string;
  link: string;
  image: string;
  desc:string
}

export const projects: Project[] = [
  {
    name: "TODO",
    link: "/todo",
    image: "",
    code: "https://github.com/hanzalakhan010/MyProjects/tree/main/src/pages/Todo",
    desc:"Simple Todo"
  },
];
