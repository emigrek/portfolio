import throttle from "lodash.throttle";
import { useEffect, useState } from "react";

type ScrollProgressProps = {
  scrollRef: React.RefObject<HTMLDivElement>,
  throttling?: number,
  onScroll?: (progress: number) => void
}

function useScrollProgress({ scrollRef, throttling, onScroll }: ScrollProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = throttle(() => {
    if (!scrollRef.current)
      return;

    const progress = scrollRef.current.scrollTop / (scrollRef.current.scrollHeight - scrollRef.current.clientHeight);
    setScrollProgress(progress * 100);
  }, throttling ? throttling : 100);

  useEffect(() => {
    if (!scrollRef.current)
      return;

    scrollRef.current?.addEventListener("scroll", handleScroll);

    onScroll && onScroll(scrollProgress);
    
    return () => scrollRef.current?.removeEventListener("scroll", handleScroll);
  }, [scrollRef, onScroll]);

  return scrollProgress;
}

export default useScrollProgress