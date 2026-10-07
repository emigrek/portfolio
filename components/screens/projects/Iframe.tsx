import React, { useEffect, useState } from "react";
import { Project } from "@/typings";
import NoProjectSelected from "@/components/screens/projects/NoProjectSelected";
import Readme from "@/components/screens/projects/Readme";
import ToggleReadmeButton from "@/components/screens/projects/ToggleReadmeButton";
import IframeLoadingOverlay from "@/components/screens/projects/IframeLoadingOverlay";
import IframeReadmeOverlay from "@/components/screens/projects/IframeReadmeOverlay";
import cn from "@/utils/cn";

interface IframeProps {
  project: Project | null;
  className?: string;
}

function Iframe({ project, className }: IframeProps) {
  const [readmeVisible, setReadmeVisible] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);
  // Set only after hydration: a server-rendered iframe can finish loading before React attaches onLoad,
  // which would leave the loading overlay up forever.
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    setIframeLoading(true);
    setSrc(project?.url ?? null);
  }, [project?.url]);

  if (!project) return <NoProjectSelected />;

  if (!project.url) return <Readme project={project} />;

  return (
    <>
      {readmeVisible && <IframeReadmeOverlay project={project} />}
      {iframeLoading && <IframeLoadingOverlay />}
      <ToggleReadmeButton
        active={readmeVisible}
        onClick={() => setReadmeVisible(!readmeVisible)}
      />
      {src && (
        <iframe
          title={`${project.title} preview`}
          onLoad={() => setIframeLoading(false)}
          loading={"lazy"}
          src={src}
          className={cn("w-full h-full", className)}
        />
      )}
    </>
  );
}

export default Iframe;
