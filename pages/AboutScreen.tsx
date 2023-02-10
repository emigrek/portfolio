import React from 'react'
import Screen from './Screen'

import NavButtons from './NavButtons'
import Landing from './Landing'

function AboutScreen() {
  return (
    <Screen id="about" className="relative flex flex-col items-center justify-center gap-16 md:gap-24 xl:gap-36">
      <div className="absolute bottom-0 right-0 left-0 w-full h-full z-[0] bg-gradient-to-t from-stone-800 to-transparent"></div>
      <Landing/>
      <NavButtons/>
    </Screen>
  )
}

export default AboutScreen