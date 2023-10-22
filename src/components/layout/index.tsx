import { Box, Container, Affix, Space } from "@mantine/core";
import { NabBar } from "../header/navbar";
import { Outlet } from "react-router-dom";
import FollowMe from "../../pages/follow";

const MainLayout = () => {
  return (
    <Container size={"xs"}>
      <Box my={"lg"}>
        <Outlet />
      </Box>
      <FollowMe />
      <Space h={100} />
      <Affix
        withinPortal={false}
        style={{ zIndex: 999 }}
        position={{ bottom: 0, left: 0 }}
      >
        <NabBar />
      </Affix>
    </Container>
  );
};

export default MainLayout;
