import { RouterProvider } from "react-router-dom";
import router from "./router/routes";
import { ThemeProvider } from "./components/theme-provider";
import "./index.css";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
