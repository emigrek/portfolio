import React from 'react'
import Screen from './Screen'

import Welcome from './Welcome'
import NavButtons from './NavButtons'
import Socials from './Socials'


function AboutScreen() {
  return (
    <Screen className="relative bg-gradient-to-t from-stone-800 to-black flex flex-col items-center justify-center gap-48 xl:gap-64">
      <div className='flex-col items-center justify-center align-middle xl:space-y-5 space-y-32'>
        <Socials/> 
        <Welcome/>
      </div>
      <NavButtons/>
    </Screen>
  )
}

export default AboutScreen