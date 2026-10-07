import throttle from "lodash.throttle";
import { RefObject, useEffect, useState } from "react";

type ScrollProgressProps = {
  scrollRef: RefObject<HTMLElement>;
  throttling?: number;
};

function useScrollProgress({ scrollRef, throttling = 100 }: ScrollProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = throttle(() => {
      setScrollProgress((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
    }, throttling);

    el.addEventListener("scroll", handleScroll);
    return () => {
      el.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, [scrollRef, throttling]);

  return scrollProgress;
}

export default useScrollProgress;
