import React, { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { projectIframeState } from '@/atoms/projectIframe';

import NoProjectSelected from '@/components/screens/projects/NoProjectSelected';
import ProjectsReadme from '@/components/screens/projects/ProjectsReadme';
import useSortedProjects from '@/hooks/useSortedProjects';
import ProjectsIframeLoader from './ProjectsIframeLoader';

function ProjectsIframe() {
  const [iframeLoading, setIframeLoading] = useState(true);
  const sortedProjects = useSortedProjects();

  const projectIframe = useRecoilValue(projectIframeState);
  const setProjectIframe = useSetRecoilState(projectIframeState);

  useEffect(() => {
    if (!sortedProjects || !sortedProjects.length) return;

    setProjectIframe(sortedProjects.at(0)!);
  }, [sortedProjects]);

  useEffect(() => {
    if (!projectIframe) return;

    if (!projectIframe?.url) return;

    setIframeLoading(true);
  }, [projectIframe]);

  if (!projectIframe)
    return <NoProjectSelected />

  if (!projectIframe?.url)
    return <ProjectsReadme />

  return <>
    { iframeLoading && <ProjectsIframeLoader /> }
    <iframe onLoad={() => setIframeLoading(false)} loading={'lazy'} src={projectIframe?.url} className="w-full h-full bg-black" />
  </>
}

export default ProjectsIframe