import TODO from "./pages/Todo";
import App from "./App";
export const routes = [
  { path: "/", element: <App /> },
  {
    path: "/todo",
    element: <TODO />,
  },
];
