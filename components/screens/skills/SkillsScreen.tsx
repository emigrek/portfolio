import React from 'react'
import Screen from '@/components/ui/Screen/Screen';
import Skills from '@/components/screens/skills/Skills'
import Waves from '@/components/screens/skills/Waves'

function SkillsScreen() {
  return (
    <Screen id="skills" className="relative flex flex-col items-center justify-start align-middle bg-stone-800">
      <Skills />
      <Waves />
    </Screen>
  )
}

export default SkillsScreen