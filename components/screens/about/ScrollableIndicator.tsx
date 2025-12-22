import { FC } from "react";
import { CgScrollV } from "react-icons/cg";
import { MdOutlineSwipeDown } from "react-icons/md";
import { Button } from "@/components/ui/Button/Button";

const ScrollableIndicator: FC = () => {
  return (
    <div className="items-center justify-center bottom-5 md:bottom-16 inset-x-0 z-[1] absolute flex">
      <Button
        href={"#skills"}
        iconRight={CgScrollV}
        className="hidden animate-bounce sm:flex"
        size={"large"}
      />
      <Button
        href={"#skills"}
        iconRight={MdOutlineSwipeDown}
        className="flex animate-bounce sm:hidden"
        size={"large"}
      />
    </div>
  );
};

export default ScrollableIndicator;
