import { Box } from "@mantine/core";
import type { ReactNode } from "react";

interface IconTileProps {
  children: ReactNode;
  variant?: "neutral" | "blue" | "green";
  size?: number;
}

const variantStyles: Record<NonNullable<IconTileProps["variant"]>, {
  bg: string;
  border: string;
  color: string;
}> = {
  neutral: {
    bg: "var(--mantine-color-default)",
    border: "var(--mantine-color-default-border)",
    color: "var(--mantine-color-text)",
  },
  blue: {
    bg: "var(--mantine-color-blue-light)",
    border: "var(--mantine-color-blue-light-hover)",
    color: "var(--mantine-color-blue-6)",
  },
  green: {
    bg: "var(--mantine-color-green-light)",
    border: "var(--mantine-color-green-light-hover)",
    color: "var(--mantine-color-green-7)",
  },
};

const IconTile = ({
  children,
  variant = "neutral",
  size = 44,
}: IconTileProps) => {
  const v = variantStyles[variant];
  return (
    <Box
      w={size}
      h={size}
      style={{
        flexShrink: 0,
        background: v.bg,
        border: `1px solid ${v.border}`,
        color: v.color,
        borderRadius: "var(--mantine-radius-md)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default IconTile;
