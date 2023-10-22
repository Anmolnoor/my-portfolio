import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes";

// css imports
import "@mantine/core/styles.css";

export default function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
