import Screen from "@/components/ui/Screen/Screen";

import Sidebar from "@/components/screens/projects/Sidebar";
import Navbar from "@/components/screens/projects/Navbar";
import Drawer from "@/components/screens/projects/Drawer";
import Iframe from "@/components/screens/projects/Iframe";

function ProjectsScreen() {
  return (
    <Screen id="projects" className="relative flex">
      <Sidebar />
      <Drawer />

      <div className="flex w-full flex-col bg-blue-500 lg:w-[calc(100%-theme('spacing.64'))] min-h-0">
        <Navbar className="shrink-0" />

        <div className="flex items-center justify-center flex-1 max-h-[100dvh] m-1 overflow-hidden rounded-xl bg-neutral-900">
          <Iframe className="w-full h-full" />
        </div>
      </div>
    </Screen>
  );
}

export default ProjectsScreen;
