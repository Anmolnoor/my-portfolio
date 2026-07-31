export interface CurrentlyBuildingItem {
  iconKey: "code" | "server";
  label: string;
  title: string;
  description: string;
  link?: string;
}

export const currentlyBuilding: CurrentlyBuildingItem[] = [
  {
    iconKey: "code",
    label: "JUST LAUNCHED",
    title: "skep",
    description:
      "A local-first supervisor for AI coding agents — sandboxed, verified, approval-gated. Open source as of this week.",
    link: "/blog/beekeeper-fcli-skep-journey",
  },
  {
    iconKey: "server",
    label: "HOMELAB / INFRA",
    title: "Homelab / Infra",
    description:
      "Experimenting with self-hosted infra, automation, and observability.",
    link: "/blog/homelab-current-setup",
  },
];
