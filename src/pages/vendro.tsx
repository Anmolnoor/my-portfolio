import NewCard from "../components/elements/newCard";
import {
  ActionIcon,
  Button,
  Card,
  Group,
  Image,
  Modal,
  Stack,
  Text,
} from "@mantine/core";
import TitleWithDot from "../components/elements/titleWithDot";
import { IconLink } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import SignUpFormReact from "../components/elements/waitlist";
import { useState } from "react";

const Vendro = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <NewCard title="Vendro" viewAll>
      <Modal
        centered
        size={"md"}
        opened={showModal}
        title={"Sign up for waitlist"}
        onClose={() => setShowModal((prev) => !prev)}
      >
        <SignUpFormReact />
      </Modal>
      <Stack spacing={"md"}>
        <Card shadow="sm" p="lg">
          <Card.Section p={"sm"}>
            Our retail store platform was developed to address the challenges
            that many small businesses face when it comes to setting up an
            online store. Traditional ecommerce platforms can be expensive and
            require technical knowledge, which can be a significant barrier to
            entry for small business owners with limited budgets. Our platform
            offers an affordable, user-friendly, and feature-rich alternative to
            these platforms, designed to help small businesses get online
            quickly and easily.
          </Card.Section>
          <Card.Section p={"sm"}>
            To stay up-to-date with the latest news and receive early access to
            our platform, sign up for our waitlist today. We'll keep you in the
            loop and let you know as soon as our platform is live.
          </Card.Section>
          <Card.Section p={"sm"}>
            <Group grow>
              <Button
                variant="default"
                radius={"md"}
                title={"waitlist"}
                size="sm"
                color={"blue"}
                onClick={() => setShowModal((prev) => !prev)}
              >
                Sign up for waitlist
              </Button>
            </Group>
          </Card.Section>
        </Card>
        {/* store front demo card */}
        <Card shadow="sm" p="lg" withBorder>
          <Card.Section p={"sm"} withBorder>
            <Group position="apart">
              <TitleWithDot title={"Store front - demo "} />

              <ActionIcon
                component={Link}
                to={"https://vendro-store.vercel.app/"}
                variant="default"
                radius={"10%"}
                title={"Demo store front"}
                size="lg"
                color={"blue"}
                target="_blank"
              >
                <IconLink size="1.2rem" stroke={1.1} />
              </ActionIcon>
            </Group>
          </Card.Section>
          <Card.Section p={"sm"}>
            <Stack spacing={"md"}>
              <Image
                src={"/vendro-demo-store-front.png"}
                alt={"Vendro demo store front"}
                width={"100%"}
                fit={"cover"}
              />

              <Text size={"sm"} c={"dimmed"}>
                The retail store platform offers a customizable online
                storefront that allows businesses to create a unique look and
                feel for their brand. With a variety of themes to choose from,
                businesses can easily create a professional-looking storefront
                that reflects their brand identity
              </Text>
              <Button
                component={Link}
                to={"https://vendro-store.vercel.app/"}
                variant="default"
                radius={"md"}
                title={"Demo store front"}
                size="sm"
                color={"blue"}
                target="_blank"
              >
                visit demo store
              </Button>
            </Stack>
          </Card.Section>
        </Card>

        {/* store admin panel demo card */}
        <Card shadow="sm" p="lg" withBorder>
          <Card.Section p={"sm"} withBorder>
            <TitleWithDot title={"Admin Panel - Demo "} />
          </Card.Section>
          <Card.Section p={"sm"}>
            <Stack spacing={"md"}>
              <Image
                src={"/vendro-demo-admin.png"}
                alt={"Vendro admin panel demo"}
                width={"100%"}
                fit={"cover"}
              />

              <Text size={"sm"} c={"dimmed"}>
                The admin panel for the retail store platform provides a
                user-friendly interface for managing all aspects of the online
                store. This includes managing products, orders, and customers,
                as well as customizing the storefront and accessing analytics
                and reporting tools. With the admin panel, store owners can
                easily manage their online business from one centralized
                location.
              </Text>
              <Button
                component={Link}
                to={"https://cal.com/anmolnoor"}
                variant="default"
                radius={"md"}
                title={"Demo store front"}
                size="sm"
                color={"blue"}
                target="_blank"
              >
                Book Admin Panel Demo
              </Button>
            </Stack>
          </Card.Section>
        </Card>
      </Stack>
    </NewCard>
  );
};

export default Vendro;
