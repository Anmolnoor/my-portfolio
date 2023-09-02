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
        <Stack
          spacing={"md"}
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
            subTitle="In the world of 0s and 1s, I'm the one who bridges the gap."
          />
          <SimpleGrid
            cols={2}
            breakpoints={[
              {
                maxWidth: 315,
                cols: 1,
              },
            ]}
          >
            <Button
              component={Link}
              target="_blank"
              to={"https://cal.com/anmolnoor"}
              color="blue"
              rightIcon={<IconCalendarStats size="1.2rem" stroke={1.1} />}
            >
              Book
            </Button>{" "}
            <Button
              component={Link}
              to={"mailto:anmolnoor59@gmail.com"}
              color="gray"
              leftIcon={<IconSend size="1.2rem" stroke={1.1} />}
            >
              email
            </Button>
          </SimpleGrid>
        </Stack>
      </Card.Section>
    </Card>
  );
};

export default Hero;
