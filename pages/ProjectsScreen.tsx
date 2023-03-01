import React from 'react'
import ProjectIframe from './ProjectIframe'
import ProjectOverlay from './ProjectOverlay'
import Screen from './Screen'

import { ArrowDownIcon, ArrowUpIcon, Bars4Icon } from '@heroicons/react/24/solid';
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { pageState } from '../atoms/page';
import FloatingButton from './FloatingButton';
import { twMerge } from 'tailwind-merge';

function ProjectsScreen() {
  const page = useRecoilValue(pageState);
  const setPage = useSetRecoilState(pageState);

  const handleNavToggle = () => {
    setPage({ ...page, nav: !page.nav });
  }

  const handleSidebarToggle = () => {
    setPage({ ...page, sidebar: !page.sidebar });
  }

  return (
    <Screen id="projects" className="relative flex flex-col items-center justify-center z-[5]">
      <ProjectOverlay />
      <div className={twMerge(page.nav ? 'top-[12%] lg:top-[8%]' : 'top-[-1%] lg:top-[-1%]', 'transition-all absolute left-0 right-0 bottom-0 w-full h-10 flex flex-row justify-center space-x-2 align-middle items-center')}>
        <FloatingButton className="text-white bg-blue-500 rounded-full hover:text-black hover:bg-white" onClick={handleSidebarToggle}>
          <span className="sr-only">Open main menu</span>
          <Bars4Icon className="w-6 h-6" />
        </FloatingButton>
        <FloatingButton className="text-white bg-blue-500 rounded-full hover:text-black hover:bg-white" onClick={handleNavToggle}>
          {page.nav ? (
            <ArrowUpIcon className="w-5 h-5" />
          ) : (
            <ArrowDownIcon className="w-5 h-5" />
          )}
        </FloatingButton>
      </div>
      <ProjectIframe />
    </Screen>
  )
}

export default ProjectsScreen