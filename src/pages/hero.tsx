import {
  Stack,
  Group,
  Button,
  Card,
  Badge,
  Indicator,
  Image,
  SimpleGrid,
} from "@mantine/core";
import { Link } from "react-router-dom";
import TitleWithDot from "../components/elements/titleWithDot";
import TitleWithSubTitle from "../components/elements/titleWithSubTitle";
import { IconCalendarStats, IconSend } from "@tabler/icons-react";

const Hero = () => {
  return (
    <Card>
      <Card.Section>
        <Group justify="space-between">
          <TitleWithDot title="Software Engineer" />
          <Badge
            color="green"
            variant="light"
            p={"sm"}
            pl={"lg"}
            leftSection={
              <Indicator
                withBorder
                offset={-6}
                size={10}
                position="middle-start"
                color="green"
              >
                {}
              </Indicator>
            }
          >
            available
          </Badge>
        </Group>
      </Card.Section>
      <Card.Section>
        <Stack gap={"md"} justify="center" align="center" my={"lg"} py={"lg"}>
          <Image
            src={"/anmol.jpg"}
            alt="Anmol Noor"
            radius={"50%"}
            style={{ objectFit: "cover" }}
            w={200}
          />

          <TitleWithSubTitle
            title="Anmol Noor"
            order={1}
            subTitle="In the world of 0s and 1s, I'm the one who bridges the gap."
          />
          <SimpleGrid cols={2} maw={315}>
            <Button
              component={Link}
              target="_blank"
              to={"https://cal.com/anmolnoor"}
              color="blue"
              rightSection={<IconCalendarStats size="1.2rem" stroke={1.1} />}
            >
              Book
            </Button>
            <Button
              component={Link}
              to={"mailto:anmolnoor59@gmail.com"}
              color="gray"
              leftSection={<IconSend size="1.2rem" stroke={1.1} />}
            >
              E-Mail
            </Button>
          </SimpleGrid>
        </Stack>
      </Card.Section>
    </Card>
  );
};

export default Hero;
