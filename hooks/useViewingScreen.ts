import { useRecoilValue } from "recoil";
import { pageState } from "@/atoms/page";
import { screens } from "@/utils/screens";
import { useMemo } from "react";

const useViewingScreen = () => {
  const page = useRecoilValue(pageState);

  return useMemo(
    () => {
      if (page.scrollProgress >= 0 && page.scrollProgress < 50)
        return screens[0];
      else if (page.scrollProgress >= 50 && page.scrollProgress < 80)
        return screens[1];
      else if (page.scrollProgress >= 80 && page.scrollProgress < 150)
        return screens[2];
      else return screens[2];
    },
    [page.scrollProgress],
  );
}

export default useViewingScreen