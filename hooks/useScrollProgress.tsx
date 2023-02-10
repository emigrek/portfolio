import { useEffect, useState } from "react";

type ScrollProgressProps = {
  scrollRef: React.RefObject<HTMLDivElement>
}

function useScrollProgress({ scrollRef } : ScrollProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if(!scrollRef.current)
      return;

    const progress = scrollRef.current.scrollTop / (scrollRef.current.scrollHeight - scrollRef.current.clientHeight);
    setScrollProgress(progress * 100);
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