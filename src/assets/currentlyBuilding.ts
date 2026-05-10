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
    label: "CURRENTLY BUILDING",
    title: "Foundation CLI",
    description: "A modern CLI to scaffold full-stack apps and ship faster.",
    link: "/blog/fcli",
  },
  {
    iconKey: "server",
    label: "HOMELAB / INFRA",
    title: "Homelab / Infra",
    description:
      "Experimenting with self-hosted infra, automation, and observability.",
  },
];
