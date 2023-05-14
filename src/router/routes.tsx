// router setup
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Not found!</div>,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
]);

export default router;
