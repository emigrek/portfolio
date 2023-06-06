import React, { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { projectIframeState } from '@/atoms/projectIframe';
import useSortedProjects from '@/hooks/useSortedProjects';

import NoProjectSelected from '@/components/screens/projects/NoProjectSelected';
import Readme from '@/components/screens/projects/Readme';
import IframeOverlay from '@/components/screens/projects/IframeOverlay';
import Spinner from '@/components/ui/Spinner/Spinner';
import ToggleReadmeButton from '@/components/screens/projects/ToggleReadmeButton';

function Iframe() {
  const [readmeVisible, setReadmeVisible] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [readmeTimeout, setReadmeTimeout] = useState<number | null>(null);
  const sortedProjects = useSortedProjects();

  const projectIframe = useRecoilValue(projectIframeState);
  const setProjectIframe = useSetRecoilState(projectIframeState);

  useEffect(() => {
    if (!sortedProjects || !sortedProjects.length) return;

    setProjectIframe(sortedProjects.at(0)!);
  }, [sortedProjects, setProjectIframe]);

  useEffect(() => {
    if (!projectIframe) return;
    if (!projectIframe?.url) return;
    if (readmeTimeout) window.clearTimeout(readmeTimeout);

    setIframeLoading(true);
    setReadmeVisible(true);

    const timeout = window.setTimeout(() => {
      setReadmeVisible(false);
    }, 5000);
    setReadmeTimeout(timeout);

    return () => {
      if (timeout) window.clearTimeout(timeout);
    }
  }, [projectIframe, setIframeLoading, readmeTimeout, setReadmeTimeout, setReadmeVisible]);

  if (!projectIframe)
    return <NoProjectSelected />

  if (!projectIframe?.url)
    return <Readme />

  return <>
    {readmeVisible &&
      (
        <IframeOverlay>
          <Readme />
        </IframeOverlay>
      )
    }
    {iframeLoading &&
      (
        <IframeOverlay>
          <Spinner className='w-10 h-10' />
        </IframeOverlay>
      )
    }
    <ToggleReadmeButton active={readmeVisible} onClick={() => setReadmeVisible(!readmeVisible)} />
    <iframe onLoad={() => setIframeLoading(false)} loading={'lazy'} src={projectIframe?.url} className="w-full h-full" />
  </>
}

export default Iframe