import {
  Stack,
  Group,
  Button,
  Card,
  Badge,
  Indicator,
  Image,
  Avatar,
} from "@mantine/core";
import { Link } from "react-router-dom";
import TitleWithDot from "../elements/titleWithDot";
import TitleWithSubTitle from "../elements/titleWithSubTitle";

const Hero = () => {
  return (
    <Card>
      <Card.Section>
        <Group position="apart">
          <TitleWithDot title="Software Engineer" />
          <Badge
            color="green"
            variant="light"
            p={"sm"}
            pl={"lg"}
            leftSection={
              <Indicator
                withBorder
                offset={-10}
                size={11}
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
        <Stack
          spacing={"xs"}
          justify="center"
          align="center"
          my={"lg"}
          py={"lg"}
        >
          <Image
            src={"/anmol.jpg"}
            alt="Anmol Noor"
            width={180}
            height={180}
            radius={"50%"}
            withPlaceholder
          />

          <TitleWithSubTitle
            title="Anmol Noor"
            order={1}
            subTitle="I'm a passionate Computer Engineer with a strong affinity for coding and innovative software solutions."
          />
          <Group spacing={"lg"}>
            <Button
              component={Link}
              to={"mailto:anmolnoor59@gmail.com"}
              color="gray"
            >
              Get in touch
            </Button>
            <Button
              component={Link}
              target="_blank"
              to={"https://cal.com/anmolnoor"}
              color="blue"
            >
              Book a Meeting
            </Button>
          </Group>
        </Stack>
      </Card.Section>
    </Card>
  );
};

export default Hero;
