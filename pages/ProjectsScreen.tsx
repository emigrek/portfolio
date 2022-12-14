import React from 'react'
import ProjectIframe from './ProjectIframe'
import ProjectOverlay from './ProjectOverlay'
import Screen from './Screen'

import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/solid';
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { pageState } from '../atoms/page';

function ProjectsScreen() {
  const page = useRecoilValue(pageState);

  const setPage = useSetRecoilState(pageState);

  const handleNavToggle = () => {
    setPage({
      nav: !page.nav,
    });
  }

  return (
    <Screen id="projects" className="relative flex flex-col items-center justify-center">
      <ProjectOverlay/> 
      <div className={
        `
          transition-all absolute left-0 right-0 bottom-0 w-full h-10 flex flex-row justify-center align-middle items-center z-10 
          ${page.nav ? 'top-[12%] lg:top-[8%]' : 'top-[-1%] lg:top-[-1%]'}
        `
      }>
        <div onClick={handleNavToggle} className="w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center">
          {
            page.nav ? (
              <ArrowUpIcon className="w-5 h-5 text-white"/>
            ) : (
              <ArrowDownIcon className="w-5 h-5 text-white"/>
            )
          }
        </div>
      </div>
      <ProjectIframe/>
    </Screen>
  )
}

export default ProjectsScreen