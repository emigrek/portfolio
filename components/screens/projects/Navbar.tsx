import { Navbar } from "@/components/ui/Navbar/Navbar";
import { Button } from "@/components/ui/Button/Button";
import { GoThreeBars } from "react-icons/go";
import { Project } from "@/typings";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import cn from "@/utils/cn";

interface ProjectsNavbarProps {
  className?: string;
  project: Project | null;
  onMenuClick: () => void;
}

function ProjectsNavbar({ className, project, onMenuClick }: ProjectsNavbarProps) {
  return (
    <Navbar
      variant={"dark"}
      className={cn(
        "sticky z-0 flex items-center justify-between gap-3 px-3 shadow-none lg:hidden",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Button
          className="bg-transparent cursor-pointer hover:bg-black/20"
          onClick={onMenuClick}
          iconRight={GoThreeBars}
          aria-label="Open projects list"
        />
        <div className="flex flex-col">
          <div className="text-xl font-medium text-white">
            {project?.title}
          </div>
          <div className="text-sm text-neutral-300">
            {project?.type ? project.type : "Technologies"}
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        {project?.url && (
          <a
            href={project.url}
            aria-label={`${project.title} live site`}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer text-white/50"
          >
            <BiLinkExternal className="text-white w-7 h-7" />
          </a>
        )}
        {project?.repo && (
          <a
            href={project.repo}
            aria-label={`${project.title} on GitHub`}
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
