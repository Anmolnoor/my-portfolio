//  title related hooks

import { useMediaQuery } from "@mantine/hooks";
import { getDottedString } from "./helper";
import { Title } from "@mantine/core";

const useGetMobileTitle = (title: string) => {
  const mediaQuery = useMediaQuery("(min-width: 427px)");

  return (
    <Title order={4}>{mediaQuery ? title : getDottedString(title, 12)}</Title>
  );
};

/**
 *
 * @param title - title to be displayed
 * @returns - title component with media query support for mobile
 */
export const GetTitle = (title: string) => {
  return useGetMobileTitle(title);
};
