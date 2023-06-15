import React, { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { projectIframeState } from '@/atoms/projectIframe';
import useSortedProjects from '@/hooks/useSortedProjects';
import NoProjectSelected from '@/components/screens/projects/NoProjectSelected';
import Readme from '@/components/screens/projects/Readme';
import ToggleReadmeButton from '@/components/screens/projects/ToggleReadmeButton';
import IframeLoadingOverlay from '@/components/screens/projects/IframeLoadingOverlay';
import IframeReadmeOverlay from '@/components/screens/projects/IframeReadmeOverlay';

function Iframe() {
  const [readmeVisible, setReadmeVisible] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);
  const sortedProjects = useSortedProjects();

  const projectIframe = useRecoilValue(projectIframeState);
  const setProjectIframe = useSetRecoilState(projectIframeState);

  useEffect(() => {
    if (!sortedProjects || !sortedProjects.length) return;

    const valid = sortedProjects.filter(project => project.url);
    if (!valid.length) return;

    setProjectIframe(valid.at(0)!);
  }, [sortedProjects, setProjectIframe]);

  useEffect(() => {
    if (!projectIframe) return;
    if (!projectIframe?.url) return;

    setIframeLoading(true);
    setReadmeVisible(true);

    const readmeTimeout = setTimeout(() => {
      setReadmeVisible(false);
    }, 8*1000);

    return () => clearTimeout(readmeTimeout);
  }, [projectIframe, setIframeLoading, setReadmeVisible]);

  const handleIframeLoad = () => {
    setIframeLoading(false);
  };

  if (!projectIframe)
    return <NoProjectSelected />

  if (!projectIframe?.url)
    return <Readme />

  return <>
    {readmeVisible && <IframeReadmeOverlay />}
    {iframeLoading && <IframeLoadingOverlay />}
    <ToggleReadmeButton active={readmeVisible} onClick={() => setReadmeVisible(!readmeVisible)} />
    <iframe onLoad={handleIframeLoad} loading={'lazy'} src={projectIframe?.url} className="w-full h-full" />
  </>
}

export default Iframe