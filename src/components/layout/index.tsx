import { Box, Container } from "@mantine/core";
import { NabBar } from "../header/navbar";
import { Outlet } from "react-router-dom";
import FollowMe from "../../pages/follow";

const MainLayout = () => {
  return (
    <Container size={"xs"} mb={"lg"}>
      <NabBar />
      <Box my={"lg"}>
        <Outlet />
      </Box>
      <FollowMe />
    </Container>
  );
};

export default MainLayout;
