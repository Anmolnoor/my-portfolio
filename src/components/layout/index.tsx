import { Outlet, ScrollRestoration } from "react-router-dom";
import TopNav from "../header/TopNav";
import SiteFooter from "../footer/SiteFooter";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <ScrollRestoration />
      <main className="container mx-auto w-full max-w-6xl flex-1 px-4 py-10">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
};

export default MainLayout;
