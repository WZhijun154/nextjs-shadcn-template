import { useMediaQuery } from "react-responsive";

export const useIsMobile = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile;
};
