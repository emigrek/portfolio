import React from 'react'
import Screen from '../Screen'
import Skills from '../Skills'
import Waves from '../Waves'


function SkillsScreen() {
  return (
    <Screen id="skills" className="relative flex flex-col items-center justify-start align-middle bg-stone-800">
      <Skills />
      <Waves className='z-[2]' />
    </Screen>
  )
}

export default SkillsScreen