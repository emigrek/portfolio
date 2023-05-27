import React from 'react'
import About from '@/components/About'
import Screen from '@/components/ui/Screen/Screen';
import ScrollableIndicator from '@/components/ScrollableIndicator';

function AboutScreen() {
  return (
    <Screen id="about" className="relative flex items-center justify-center">
      <div className="absolute bottom-0 right-0 left-0 w-full h-full z-[0] bg-gradient-to-t from-stone-800 to-transparent" />
      <About />
      <ScrollableIndicator />
    </Screen>
  )
}

export default AboutScreen