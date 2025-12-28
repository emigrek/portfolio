import React from "react";
import About from "@/components/screens/about/About";
import Screen from "@/components/ui/Screen/Screen";
import ScrollableIndicator from "@/components/screens/about/ScrollableIndicator";
import { LightRays } from "@/components/ui/LightRays";
import { Meteors } from "@/components/ui/Meteors";

function AboutScreen() {
  return (
    <Screen id="about" className="relative flex items-center justify-center">
      <About />
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="relative w-[100dvw] h-[100dvh] overflow-hidden">
          <Meteors minDelay={0.4} number={4} angle={60} />
        </div>
      </div>
      <LightRays
        followSelector="#about"
        portal
        zIndex={1}
        // colors={[["rgba(60, 129, 246, 0.2)", "rgba(217, 70, 239, 0.2)"]]}
        colors={[
          [
            "rgba(23, 35, 71, 0.2)",
            "rgba(2, 83, 133, 0.2)",
            "rgba(14, 243, 197, 0.2)",
            "rgba(4, 226, 183, 0.2)",
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
