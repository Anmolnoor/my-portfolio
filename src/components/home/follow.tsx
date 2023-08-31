import { Group, ActionIcon, Card } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";
import TitleWithDot from "../elements/titleWithDot";

const FollowMe = () => {
  return (
    <Card withBorder>
      <Group position="apart" align="center">
        <TitleWithDot title="Follow Me" />
        <Group spacing={"xs"} noWrap>
          <ActionIcon
            title="Twitter handle"
            variant="outline"
            size="lg"
            color={"blue"}
            radius={"lg"}
            onClick={() =>
              window.open("https://twitter.com/noor_anmol", "_blank")
            }
          >
            <IconBrandTwitter size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            title="Github handle"
            size="lg"
            variant="outline"
            color={"blue"}
            radius={"lg"}
            onClick={() =>
              window.open("https://github.com/anmolnoor", "_blank")
            }
          >
            <IconBrandGithub size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            title="Linkedin handle"
            size="lg"
            variant="outline"
            color={"blue"}
            radius={"lg"}
            onClick={() =>
              window.open("https://www.linkedin.com/in/anmolnoor/", "_blank")
            }
          >
            <IconBrandLinkedin size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            title="Instagram handle"
            size="lg"
            variant="outline"
            color={"blue"}
            radius={"lg"}
            onClick={() =>
              window.open("https://www.instagram.com/_anmol_noor/", "_blank")
            }
          >
            <IconBrandInstagram size="1.1rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
};

export default FollowMe;
