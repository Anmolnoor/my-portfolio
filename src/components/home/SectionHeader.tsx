import { Group, Text } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

interface SectionHeaderProps {
  title: string;
  linkLabel?: string;
  linkTo?: string;
}

const SectionHeader = ({ title, linkLabel, linkTo }: SectionHeaderProps) => {
  return (
    <Group justify="space-between" align="center" mb="sm">
      <Text
        size="xs"
        fw={700}
        c="blue.6"
        style={{ letterSpacing: 1.4, textTransform: "uppercase" }}
      >
        {title}
      </Text>
      {linkLabel && linkTo && (
        <Link
          to={linkTo}
          style={{
            textDecoration: "none",
            color: "var(--mantine-color-blue-6)",
            fontSize: 13,
            fontWeight: 500,
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          {linkLabel}
          <IconArrowRight size="0.9rem" stroke={1.6} />
        </Link>
      )}
    </Group>
  );
};

export default SectionHeader;
