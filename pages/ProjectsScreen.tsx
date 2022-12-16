import { BeakerIcon } from '@heroicons/react/24/solid'
import React from 'react'
import ProjectIframe from './ProjectIframe'
import ProjectOverlay from './ProjectOverlay'
import Screen from './Screen'

function ProjectsScreen() {
  return (
    <Screen id="projects" className="flex flex-col items-center justify-center bg-blue-500">
      <ProjectOverlay/>
      <ProjectIframe/>
    </Screen>
  )
}

export default ProjectsScreen