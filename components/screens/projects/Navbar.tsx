import { useRecoilValue, useSetRecoilState } from "recoil";
import { pageState } from "@/atoms/page";
import { Navbar } from "@/components/ui/Navbar/Navbar";
import { Button } from "@/components/ui/Button/Button";
import { GoThreeBars } from "react-icons/go";
import { projectIframeState } from "@/atoms/projectIframe";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import cn from "@/utils/cn";

interface ProjectsNavbarProps {
  className?: string;
}

function ProjectsNavbar({ className }: ProjectsNavbarProps) {
  const setPage = useSetRecoilState(pageState);
  const projectIframe = useRecoilValue(projectIframeState);

  const handleProjectsDrawerToggle = () => {
    setPage((state) => ({ ...state, projectsDrawer: !state.projectsDrawer }));
  };

  return (
    <Navbar
      variant={"blue"}
      className={cn(
        "sticky z-0 flex items-center justify-between gap-3 px-3 shadow-none lg:hidden",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Button
          className="bg-transparent cursor-pointer hover:bg-black/20"
          onClick={handleProjectsDrawerToggle}
          iconRight={GoThreeBars}
        />
        <div className="flex flex-col">
          <div className="text-xl font-medium text-white">
            {projectIframe?.title}
          </div>
          <div className="text-sm text-neutral-300">
            {projectIframe?.type ? projectIframe?.type : "Technologies"}
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        {projectIframe?.url && (
          <a
            href={projectIframe.url}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer text-white/50"
          >
            <BiLinkExternal className="text-white w-7 h-7" />
          </a>
        )}
        {projectIframe?.repo && (
          <a
            href={projectIframe.repo}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer text-white/50"
          >
            <AiFillGithub className="text-white w-7 h-7" />
          </a>
        )}
      </div>
    </Navbar>
  );
}

export default ProjectsNavbar;
