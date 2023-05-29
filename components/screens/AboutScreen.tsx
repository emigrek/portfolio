import React from 'react'
import About from '@/components/About'
import Screen from '@/components/ui/Screen/Screen';
import ScrollableIndicator from '@/components/ScrollableIndicator';

function AboutScreen() {
  return (
    <Screen id="about" className="relative flex items-center justify-center">
      <About />
      <ScrollableIndicator />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-stone-800 to-transparent" />
    </Screen>
  )
}

export default AboutScreen