import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { pageState } from '../atoms/page';
import { projectIframeState } from '../atoms/projectIframe';
import NoProjectSelected from './NoProjectSelected';
import NoProjectUrl from './NoProjectUrl';
import ProjectReadme from './ProjectReadme';

function ProjectIframe() {
  const [loading, setLoading] = useState(true);
  const projectIframe = useRecoilValue(projectIframeState);
  const page = useRecoilValue(pageState);
  
  const handleLoad = () => {
    var loadTimeout = null;
    loadTimeout = setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  useEffect(() => {
    setLoading(true);
  }, [projectIframe]);

  if (!projectIframe) return <NoProjectSelected />

  if (!projectIframe?.url) return <NoProjectUrl />

  return (
    <div className={`
      transition-all aspect-video w-full ${page.nav ? 'h-[85%] lg:h-[90%]' : 'h-[100%]'}
    `}>
      {loading ? (
        <ProjectReadme/>
      ) : ''}
      <iframe onLoad={handleLoad} loading={'lazy'} src={projectIframe?.url} className="relative w-full h-full"></iframe>
    </div>
  )
}

export default ProjectIframe