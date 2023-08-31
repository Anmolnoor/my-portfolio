import { Box, Container } from "@mantine/core";
import { NabBar } from "../header/navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Container size={"xs"}>
      <NabBar />
      <Box mt={"lg"}>
        <Outlet />
      </Box>
    </Container>
  );
};

export default MainLayout;
