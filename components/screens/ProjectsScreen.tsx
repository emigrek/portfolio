import React from 'react'
import ProjectIframe from '@/components/ProjectIframe'
import ProjectOverlay from '@/components/ProjectOverlay'
import Screen from '@/components/ui/Screen/Screen';
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { pageState } from '@/atoms/page';
import { twMerge } from 'tailwind-merge';
import { Button } from '@/components/ui/Button/Button';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { GoThreeBars } from 'react-icons/go';

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
      <div className={twMerge(page.nav ? 'top-[8%]' : 'top-2', 'transition-all absolute left-0 right-0 bottom-0 w-full h-10 flex flex-row justify-center space-x-2 align-middle items-center z-10')}>
        <Button className='text-white bg-blue-500 cursor-pointer hover:text-black hover:bg-white' onClick={handleSidebarToggle}>
          <GoThreeBars className="w-6 h-6" />
        </Button>
        <Button className='text-white bg-blue-500 cursor-pointer hover:text-black hover:bg-white' onClick={handleNavToggle}>
          {page.nav ? <AiOutlineArrowUp className="w-5 h-5" /> : <AiOutlineArrowDown className="w-5 h-5" /> }
        </Button>
      </div>
      <ProjectIframe />
    </Screen>
  )
}

export default ProjectsScreen