import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { projectIframeState } from "@/atoms/projectIframe";
import useSortedProjects from "@/hooks/useSortedProjects";
import NoProjectSelected from "@/components/screens/projects/NoProjectSelected";
import Readme from "@/components/screens/projects/Readme";
import ToggleReadmeButton from "@/components/screens/projects/ToggleReadmeButton";
import IframeLoadingOverlay from "@/components/screens/projects/IframeLoadingOverlay";
import IframeReadmeOverlay from "@/components/screens/projects/IframeReadmeOverlay";
import cn from "@/utils/cn";

interface IframeProps {
  className?: string;
}

function Iframe({ className }: IframeProps) {
  const [readmeVisible, setReadmeVisible] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);
  const sortedProjects = useSortedProjects();

  const projectIframe = useRecoilValue(projectIframeState);
  const setProjectIframe = useSetRecoilState(projectIframeState);

  useEffect(() => {
    if (!sortedProjects || !sortedProjects.length) return;

    const valid = sortedProjects.filter((project) => project.url);
    if (!valid.length) return;

    setProjectIframe(valid.at(0)!);
  }, [sortedProjects, setProjectIframe]);

  useEffect(() => {
    if (!projectIframe) return;
    if (!projectIframe?.url) return;

    setIframeLoading(true);
  }, [projectIframe, setIframeLoading, setReadmeVisible]);

  const handleIframeLoad = () => {
    setIframeLoading(false);
  };

  if (!projectIframe) return <NoProjectSelected />;

  if (!projectIframe?.url) return <Readme />;

  return (
    <>
      {readmeVisible && <IframeReadmeOverlay />}
      {iframeLoading && <IframeLoadingOverlay />}
      <ToggleReadmeButton
        active={readmeVisible}
        onClick={() => setReadmeVisible(!readmeVisible)}
      />
      <iframe
        onLoad={handleIframeLoad}
        loading={"lazy"}
        src={projectIframe?.url}
        className={cn("w-full h-full", className)}
      />
    </>
  );
}

export default Iframe;
