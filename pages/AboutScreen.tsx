import React from 'react'
import Screen from './Screen'

import Welcome from './Welcome'
import NavButtons from './NavButtons'

function AboutScreen() {
  return (
    <Screen id="about" className="relative flex flex-col items-center justify-center gap-48 xl:gap-64">
      <div className="absolute bottom-0 right-0 left-0 w-full h-full z-[0] bg-gradient-to-t from-stone-800 to-transparent"></div>
      <Welcome/>
      <NavButtons/>
    </Screen>
  )
}

export default AboutScreen