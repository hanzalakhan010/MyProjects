import TODO from "./pages/Todo";
import App from "./App";
import CurrencyConverter from "./pages/CurrencyConverter";
export const routes = [
  { path: "/", element: <App /> },
  {
    path: "/todo",
    element: <TODO />,
  },
  {
    path: '/converter',
    element: <CurrencyConverter />
  }
];
