import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { pageState } from "../atoms/page";

type ScrollProgressProps = {
  scrollRef: React.RefObject<HTMLDivElement>
}

function useScrollProgress({ scrollRef } : ScrollProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const setPage = useSetRecoilState(pageState);

  const handleScroll = () => {
    if(!scrollRef.current)
      return;

    const progress = scrollRef.current.scrollTop / (scrollRef.current.scrollHeight - scrollRef.current.clientHeight);
    setScrollProgress(progress * 100);
    setPage((prev) => ({ ...prev, scrollProgress: progress * 100 }));
  }

  useEffect(() => {
    if(!scrollRef.current)
      return;

    scrollRef.current?.addEventListener("scroll", handleScroll);
    return () => scrollRef.current?.removeEventListener("scroll", handleScroll); 
  }, []);

  return scrollProgress;
}

export default useScrollProgress