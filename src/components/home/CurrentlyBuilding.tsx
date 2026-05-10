import { Card, Group, SimpleGrid, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { currentlyBuilding } from "../../assets/currentlyBuilding";
import IconTile from "./IconTile";
import { getIcon } from "./iconRegistry";

const CurrentlyBuilding = () => {
  const isMobile = useMediaQuery("(max-width: 720px)");
  return (
    <SimpleGrid cols={isMobile ? 1 : 2} spacing="xl">
      {currentlyBuilding.map((item) => {
        const inner = (
          <Card withBorder p="md" radius="md">
            <Group wrap="nowrap" gap="md" align="center">
              <IconTile variant={item.iconKey === "code" ? "neutral" : "green"}>
                {getIcon(item.iconKey)}
              </IconTile>
              <Stack gap={2} style={{ flex: 1, minWidth: 0 }}>
                <Group gap="sm" wrap="nowrap">
                  <Text
                    size="xs"
                    fw={700}
                    c="blue.6"
                    style={{ letterSpacing: 1.2, textTransform: "uppercase" }}
                  >
                    {item.label}
                  </Text>
                  <Text fw={600} truncate>
                    {item.title}
                  </Text>
                </Group>
                <Text size="sm" c="dimmed" lineClamp={2}>
                  {item.description}
                </Text>
              </Stack>
            </Group>
          </Card>
        );
        return item.link ? (
          <Link
            key={item.title}
            to={item.link}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {inner}
          </Link>
        ) : (
          <div key={item.title}>{inner}</div>
        );
      })}
    </SimpleGrid>
  );
};

export default CurrentlyBuilding;
