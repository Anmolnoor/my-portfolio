// router setup
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "../components/layout";
import HomePage from "../components/home";

export const NotFound = () => {
  return <div>Not found!</div>;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<NotFound />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<div>About</div>} />
      <Route path="*" element={<div>Not found!</div>} />
    </Route>
  )
);

// eslint-disable-next-line react-refresh/only-export-components
export default router;
