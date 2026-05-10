import { useMediaQuery } from "@/hooks/use-media-query";
import { getDottedString } from "./helper";

const useGetMobileTitle = (title: string) => {
  const isWide = useMediaQuery("(min-width: 427px)");
  return (
    <h4 className="text-xl font-semibold">
      {isWide ? title : getDottedString(title, 12)}
    </h4>
  );
};

export const GetTitle = (title: string) => useGetMobileTitle(title);
