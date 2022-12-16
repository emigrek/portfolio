import React from 'react'
import Screen from './Screen'

import Welcome from './Welcome'
import NavButtons from './NavButtons'


function AboutScreen() {
  return (
    <Screen className="bg-gradient-to-t from-stone-800 to-black flex flex-col items-center justify-center gap-44">
      <Welcome/>
      <NavButtons/>
    </Screen>
  )
}

export default AboutScreen