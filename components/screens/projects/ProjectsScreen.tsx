import { useState } from "react";
import { Project } from "@/typings";
import Screen from "@/components/ui/Screen/Screen";
import { Sidebar } from "@/components/ui/Sidebar/Sidebar";
import { Drawer } from "@/components/ui/Drawer/Drawer";
import ProjectsList from "@/components/screens/projects/ProjectsList";
import Navbar from "@/components/screens/projects/Navbar";
import Iframe from "@/components/screens/projects/Iframe";

function ProjectsScreen({ projects }: { projects: Project[] }) {
  // Projects come sorted, so this is the newest pinned one with a live preview.
  const [selected, setSelected] = useState(() => projects.find((project) => project.url) ?? null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSelect = (project: Project) => {
    setSelected(project);
    setDrawerOpen(false);
  };

  const list = <ProjectsList projects={projects} selected={selected} onSelect={handleSelect} />;

  return (
    <Screen id="projects" className="relative flex">
      <Sidebar variant="dark" className="hidden w-64 p-2 lg:block">
        {list}
      </Sidebar>
      <Drawer variant="dark" open={drawerOpen ? "open" : "closed"} onClickOutside={() => setDrawerOpen(false)}>
        {list}
      </Drawer>

      <div className="flex w-full flex-col bg-stone-900 lg:w-[calc(100%-theme('spacing.64'))] min-h-0">
        <Navbar className="shrink-0" project={selected} onMenuClick={() => setDrawerOpen(true)} />

        <div className="relative flex items-center justify-center flex-1 max-h-[100dvh] m-1 overflow-hidden rounded-xl bg-black">
          <Iframe project={selected} className="w-full h-full" />
        </div>
      </div>
    </Screen>
  );
}

export default ProjectsScreen;
