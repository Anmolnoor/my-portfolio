// router setup
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "../components/layout";
import HomePage from "../pages";
import Skills from "../pages/skills";
import Experience from "../pages/experience";
import Pocket from "../pages/pocket";
import Projects from "../pages/projects";
import Vendro from "../pages/vendro";
import Blog from "../pages/blog";

export const NotFound = () => {
  return <div>Not found!</div>;
};

export type links = "/" | "/projects" | "/experience" | "/skills" | "/pocket";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<NotFound />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<div>About</div>} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/skills" element={<Skills items={10} />} />
      <Route path="/pocket" element={<Pocket />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/vendro" element={<Vendro />} />

      <Route path="*" element={<div>Not found!</div>} />
    </Route>
  )
);

// eslint-disable-next-line react-refresh/only-export-components
export default router;
