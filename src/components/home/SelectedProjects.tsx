import { Badge, Card, Group, SimpleGrid, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { projects } from "../../assets/projects";
import IconTile from "./IconTile";
import SectionHeader from "./SectionHeader";
import { getIcon } from "./iconRegistry";

const SelectedProjects = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(max-width: 900px)");
  const cols = isMobile ? 1 : isTablet ? 2 : 3;

  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div>
      <SectionHeader
        title="Selected Projects"
        linkLabel="View all projects"
        linkTo="/projects"
      />
      <SimpleGrid cols={cols} spacing="md">
        {featured.map((project) => {
          const isExternal = project.link.startsWith("http");
          return (
            <Card
              key={project.title}
              withBorder
              radius="md"
              p="md"
              component={Link}
              to={project.link}
              target={isExternal ? "_blank" : undefined}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Group align="flex-start" gap="md" wrap="nowrap" mb="sm">
                <IconTile>{getIcon(project.iconKey)}</IconTile>
                <Stack gap={2} style={{ flex: 1, minWidth: 0 }}>
                  <Text fw={700}>{project.title}</Text>
                  {project.tagline && (
                    <Text size="sm" c="blue.6">
                      {project.tagline}
                    </Text>
                  )}
                </Stack>
              </Group>
              <Text size="sm" c="dimmed" lineClamp={3} mb="md">
                {project.description}
              </Text>
              {project.techTags && project.techTags.length > 0 && (
                <Group gap={6}>
                  {project.techTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="default"
                      size="sm"
                      radius="sm"
                      fw={500}
                    >
                      {tag}
                    </Badge>
                  ))}
                </Group>
              )}
            </Card>
          );
        })}
      </SimpleGrid>
    </div>
  );
};

export default SelectedProjects;
