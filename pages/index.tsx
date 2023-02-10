import AboutScreen from "./AboutScreen";
import ProjectsScreen from "./ProjectsScreen";
import SkillsScreen from "./SkillsScreen";

import { GetServerSideProps } from 'next'
import { PageInfo, Project, Skill as SkillType } from '../typings'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { skillsState } from "../atoms/skills";
import { pageInfoState } from "../atoms/pageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { projectsState } from "../atoms/projects";
import Navbar from "./Navbar";
import ScrollProgress from "./ScrollProgress";
import Sidebar from "./Sidebar";
import useScrollProgress from "../hooks/useScrollProgress";
import useGoogleAnalytics from "../hooks/useGoogleAnalytics";

type Props = {
  skills: SkillType[],
  pageInfo: PageInfo,
  projects: Project[]
}

export default function Home({ skills, pageInfo, projects } : Props) {
  const setSkills = useSetRecoilState(skillsState);
  const setPageInfo = useSetRecoilState(pageInfoState);
  const setProjects = useSetRecoilState(projectsState);

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollProgress({ scrollRef });

  useGoogleAnalytics();

  useEffect(() => {
    setSkills(skills);
    setPageInfo(pageInfo);
    setProjects(projects);
  }, []);

  return (
    <main ref={scrollRef} className='w-full h-screen overflow-y-scroll bg-black select-none scrollbar-thin scrollbar-thumb-white/60 scrollbar-track-transparent snap-y snap-proximity scroll-smooth'>
      <Navbar/>
      <ScrollProgress progress={scrollProgress} zIndex={30} />
      <ScrollProgress progress={scrollProgress} zIndex={0} />
      <Sidebar/>
      <div className="flex flex-col items-center justify-center align-middle">
        <AboutScreen/>
        <SkillsScreen/>
        <ProjectsScreen/>
      </div>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const skills: SkillType[] = await fetchSkills();
  const pageInfo: PageInfo = await fetchPageInfo();
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      skills,
      pageInfo,
      projects,
      fallback: false
    }
  }
}