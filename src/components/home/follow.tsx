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
          >
            <IconBrandTwitter size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            title="Github handle"
            size="lg"
            variant="outline"
            color={"blue"}
            radius={"lg"}
          >
            <IconBrandGithub size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            title="Linkedin handle"
            size="lg"
            variant="outline"
            color={"blue"}
            radius={"lg"}
          >
            <IconBrandLinkedin size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            title="Instagram handle"
            size="lg"
            variant="outline"
            color={"blue"}
            radius={"lg"}
          >
            <IconBrandInstagram size="1.1rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
};

export default FollowMe;
