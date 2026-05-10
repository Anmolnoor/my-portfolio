import { Box, Container } from "@mantine/core";
import { Outlet, ScrollRestoration } from "react-router-dom";
import TopNav from "../header/TopNav";
import SiteFooter from "../footer/SiteFooter";

const MainLayout = () => {
  return (
    <Box mih="100vh" style={{ display: "flex", flexDirection: "column" }}>
      <TopNav />
      <ScrollRestoration />
      <Container size="lg" py="xl" style={{ flex: 1, width: "100%" }}>
        <Outlet />
      </Container>
      <SiteFooter />
    </Box>
  );
};

export default MainLayout;
