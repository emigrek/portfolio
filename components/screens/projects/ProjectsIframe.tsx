import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { twMerge } from 'tailwind-merge';
import { pageState } from '@/atoms/page';
import { projectIframeState } from '@/atoms/projectIframe';
import NoProjectSelected from '@/components/screens/projects/NoProjectSelected';
import ProjectsReadme from '@/components/screens/projects/ProjectsReadme';

function ProjectsIframe() {
  const [showReadme, setShowReadme] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const projectIframe = useRecoilValue(projectIframeState);
  const page = useRecoilValue(pageState);


  useEffect(() => {
    let readmeTimeout: NodeJS.Timeout | null = null;
    
    if (readmeTimeout)
      clearTimeout(readmeTimeout as NodeJS.Timeout);

    setShowReadme(true);
    readmeTimeout = setTimeout(() => {
      setShowReadme(false);
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(readmeTimeout as NodeJS.Timeout);
    };
  }, [projectIframe]);

  const handleIframeLoad = () => {
    setLoading(false);
  }

  if (!projectIframe) return <NoProjectSelected />

  if (!projectIframe?.url) return (
    <div className="w-full h-[88%] md:h-[90%]">
      <ProjectsReadme />
    </div>
  )

  return (
    <div className={twMerge('transition-all aspect-video w-full', page.nav ? 'h-[88%] md:h-[90%]' : 'h-[100%]')}>
      {showReadme || loading ? (
        <ProjectsReadme />
      ) : null}
      <iframe onLoad={handleIframeLoad} loading={'lazy'} src={projectIframe?.url} className="relative w-full h-full bg-black"></iframe>
    </div>
  )
}

export default ProjectsIframe