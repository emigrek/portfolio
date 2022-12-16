import React from 'react'
import Screen from './Screen'
import Skills from './Skills'
import Waves from './Waves'


function SkillsScreen() {
  return (
    <Screen id="skills" className="relative flex flex-col items-center align-middle justify-start py-14 lg:py-24 bg-stone-800">
      <Skills/>
      <Waves className='z-10'/>
    </Screen>
  )
}

export default SkillsScreen