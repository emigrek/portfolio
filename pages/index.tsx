import AboutScreen from "./AboutScreen";
import ProjectsScreen from "./ProjectsScreen";
import SkillsScreen from "./SkillsScreen";

import { GetServerSideProps } from 'next'
import { PageInfo, Project, Skill as SkillType } from '../typings'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { skillsState } from "../atoms/skills";
import { pageInfoState } from "../atoms/pageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { projectsState } from "../atoms/projects";

import ReactGA from 'react-ga';
import Navbar from "./Navbar";
import ScrollProgress from "./ScrollProgress";
import Sidebar from "./Sidebar";
import { pageState } from "../atoms/page";

type Props = {
  skills: SkillType[],
  pageInfo: PageInfo,
  projects: Project[]
}

export default function Home({ skills, pageInfo, projects } : Props) {
  const page = useRecoilValue(pageState);

  const setPage = useSetRecoilState(pageState);
  const setSkills = useSetRecoilState(skillsState);
  const setPageInfo = useSetRecoilState(pageInfoState);
  const setProjects = useSetRecoilState(projectsState);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSkills(skills);
    setPageInfo(pageInfo);
    setProjects(projects);

    if(!process.env.NEXT_PUBLIC_GA_TRACKING_ID) 
      return console.warn('No Google Analytics Tracking ID found, fill your .env file before building the project');

    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID);
    ReactGA.pageview(window.location.pathname);

    if(!scrollRef.current)
      return;

    const handleScroll = () => {
      if(!scrollRef.current)
      return;

      const progress = scrollRef.current.scrollTop / (scrollRef.current.scrollHeight - scrollRef.current.clientHeight);
      setPage({ ...page, scrollProgress: progress * 100 })
    };
    scrollRef.current?.addEventListener("scroll", handleScroll);
    return () => scrollRef.current?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main ref={scrollRef} className='w-full h-screen overflow-y-scroll bg-black select-none scrollbar-thin scrollbar-thumb-white/60 scrollbar-track-transparent snap-y snap-proximity scroll-smooth'>
      <Navbar/>
      <ScrollProgress progress={page.scrollProgress} zIndex={30} />
      <ScrollProgress progress={page.scrollProgress} zIndex={0} />
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