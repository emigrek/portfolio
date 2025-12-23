import React from "react";
import About from "@/components/screens/about/About";
import Screen from "@/components/ui/Screen/Screen";
import ScrollableIndicator from "@/components/screens/about/ScrollableIndicator";
import { LightRays } from "@/components/ui/LightRays";

function AboutScreen() {
  return (
    <Screen id="about" className="relative flex items-center justify-center">
      <About />
      <div className="absolute inset-0 w-full h-full overflow-hidden z-[1]">
        <LightRays
          colors={["rgba(60, 129, 246, 0.2)", "rgba(217, 70, 239, 0.2)"]}
          length="110vh"
          count={20}
        />
      </div>
      <ScrollableIndicator />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-stone-800 to-transparent" />
    </Screen>
  );
}

export default AboutScreen;
