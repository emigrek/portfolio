import React from 'react'
import Screen from './Screen'

import Welcome from './Welcome'
import NavButtons from './NavButtons'
import Socials from './Socials'


function AboutScreen() {
  return (
    <Screen className="relative bg-gradient-to-t from-stone-800 to-black flex flex-col items-center justify-center gap-44">
      <Socials/>
      <Welcome/>
      <NavButtons/>
    </Screen>
  )
}

export default AboutScreen