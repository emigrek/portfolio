import Screen from "@/components/ui/Screen/Screen";

import Sidebar from "@/components/screens/projects/Sidebar";
import Navbar from "@/components/screens/projects/Navbar";
import Drawer from "@/components/screens/projects/Drawer";
import Iframe from "@/components/screens/projects/Iframe";

function ProjectsScreen() {
  return (
    <Screen id="projects" className="relative flex h-screen">
      <Sidebar />
      <Drawer />
      <div className="w-full flex flex-col lg:w-[calc(100%-theme('spacing.64'))] bg-blue-500">
        <Navbar />
        <div className="flex items-center justify-center flex-grow md:h-[calc(100%-theme('spacing.20'))] h-[calc(100%-theme('spacing.16'))] overflow-hidden m-1 rounded-xl bg-neutral-900">
          <Iframe />
        </div>
      </div>
    </Screen>
  );
}

export default ProjectsScreen;
