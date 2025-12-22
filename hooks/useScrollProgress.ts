import throttle from "lodash.throttle";
import { useEffect, useState } from "react";

type ScrollProgressProps = {
  scrollRef: React.RefObject<HTMLDivElement>;
  throttling?: number;
  onScroll?: (progress: number) => void;
};

function useScrollProgress({
  scrollRef,
  throttling,
  onScroll,
}: ScrollProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = throttle(
    () => {
      if (!scrollRef.current) return;

      const progress =
        scrollRef.current.scrollTop /
        (scrollRef.current.scrollHeight - scrollRef.current.clientHeight);
      setScrollProgress(progress * 100);
    },
    throttling ? throttling : 100
  );

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (!currentRef) return;

    currentRef.addEventListener("scroll", handleScroll);

    onScroll && onScroll(scrollProgress);

    return () => currentRef.removeEventListener("scroll", handleScroll);
  }, [scrollRef, onScroll, handleScroll, scrollProgress]);

  return scrollProgress;
}

export default useScrollProgress;
