import { FC, HTMLAttributes } from "react";
import cn from "@/utils/cn";

type ScreenProps = HTMLAttributes<HTMLDivElement>;

const Screen: FC<ScreenProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "w-full min-h-screen min-h-[100svh] min-h-[100dvh] snap-start",
        className
      )}
      {...props}
    />
  );
};

export default Screen;
