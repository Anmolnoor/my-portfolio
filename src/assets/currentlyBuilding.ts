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
    label: "CURRENT FOCUS",
    title: "skep",
    description:
      "A local-first supervisor for AI coding agents — sandboxed workers, independent re-verification, and human approval before changes land.",
    link: "https://skep.anmolnoor.com",
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
