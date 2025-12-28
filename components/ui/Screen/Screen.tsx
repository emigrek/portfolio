import React, { forwardRef, HTMLAttributes } from "react";
import cn from "@/utils/cn";

type ScreenProps = HTMLAttributes<HTMLDivElement>;

const Screen = forwardRef<HTMLDivElement, ScreenProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full min-h-screen min-h-[100svh] min-h-[100dvh] snap-start",
          className
        )}
        {...props}
      />
    );
  }
);

Screen.displayName = "Screen";

export default Screen;
