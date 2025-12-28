import React, { useRef } from "react";
import About from "@/components/screens/about/About";
import Screen from "@/components/ui/Screen/Screen";
import ScrollableIndicator from "@/components/screens/about/ScrollableIndicator";
import { LightRays } from "@/components/ui/LightRays";
import { Meteors } from "@/components/ui/Meteors";

function AboutScreen() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Screen
      id="about"
      ref={ref}
      className="relative flex items-center justify-center"
    >
      <About />
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="relative w-[100dvw] h-[100dvh] overflow-hidden">
          <Meteors minDelay={0.4} number={4} angle={60} />
        </div>
      </div>
      <LightRays
        followRef={ref}
        portal
        zIndex={1}
        colors={[
          [
            "rgba(23, 35, 71, 0.2)",
            "rgba(2, 83, 133, 0.2)",
            "rgba(14, 243, 197, 0.3)",
            "rgba(4, 226, 183, 0.3)",
            "rgba(3, 130, 152, 0.2)",
            "rgba(99, 21, 0, 0.2)",
          ],
        ]}
        length="110vh"
        count={14}
      />
      <ScrollableIndicator />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-stone-800 to-transparent" />
    </Screen>
  );
}

export default AboutScreen;
