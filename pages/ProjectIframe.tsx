import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { pageState } from '../atoms/page';
import { projectIframeState } from '../atoms/projectIframe';
import NoProjectSelected from './NoProjectSelected';
import ProjectReadme from './ProjectReadme';

function ProjectIframe() {
  const [showReadme, setShowReadme] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const projectIframe = useRecoilValue(projectIframeState);
  const page = useRecoilValue(pageState);
  
  let readmeTimeout: NodeJS.Timeout | null = null;
  useEffect(() => {
    if(readmeTimeout)
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
    <div className="w-full h-[85%] lg:h-[90%]">
      <ProjectReadme/>
    </div>
  )

  return (
    <div className={`
      transition-all aspect-video w-full ${page.nav ? 'h-[85%] lg:h-[90%]' : 'h-[100%]'}
    `}>
      {showReadme || loading ? (
        <ProjectReadme/>
      ) : null}
      <iframe onLoad={handleIframeLoad} loading={'lazy'} src={projectIframe?.url} className="relative w-full h-full bg-black"></iframe>
    </div>
  )
}

export default ProjectIframe