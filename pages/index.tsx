import { GetServerSideProps } from 'next'
import { PageInfo, Project, Skill as SkillType } from '@/typings'
import { fetchSkills } from '@/services/fetchSkills'
import { fetchPageInfo } from "@/services/fetchPageInfo";
import { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { skillsState } from "@/atoms/skills";
import { fetchProjects } from "@/services/fetchProjects";
import { pageInfoState } from "@/atoms/pageInfo";
import { projectsState } from "@/atoms/projects";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import useScrollProgress from "@/hooks/useScrollProgress";
import AboutScreen from "@/components/screens/about/AboutScreen";
import ProjectsScreen from "@/components/screens/projects/ProjectsScreen";
import SkillsScreen from "@/components/screens/skills/SkillsScreen";
import { pageState } from '@/atoms/page';

type Props = {
  pageInfo: PageInfo,
  skills: SkillType[],
  projects: Project[]
}

export default function Home({ skills, pageInfo, projects }: Props) {
  const setPageInfo = useSetRecoilState(pageInfoState);
  const setSkills = useSetRecoilState(skillsState);
  const setProjects = useSetRecoilState(projectsState);
  
  const setPage = useSetRecoilState(pageState);
  const scrollRef = useRef<HTMLDivElement>(null);
  useScrollProgress({ scrollRef, onScroll: (progress) => {
    setPage((state) => ({ ...state, scrollProgress: progress }));
  } });
  
  useEffect(() => {
    setPageInfo(pageInfo);
    setSkills(skills);
    setProjects(projects);
  }, [pageInfo, skills, projects, setPageInfo, setSkills, setProjects]);

  return (
    <>
      <Navbar />
      <Sidebar />
      <main ref={scrollRef} className='w-full h-screen overflow-x-hidden overflow-y-scroll bg-black select-none scrollbar-thin scrollbar-thumb-white/60 scrollbar-track-transparent snap-y snap-proximity scroll-smooth'>
        <div className="flex flex-col items-center justify-center align-middle"> 
          <AboutScreen />
          <SkillsScreen />
          <ProjectsScreen />
        </div>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const [pageInfo, skills, projects] = await Promise.all([
    fetchPageInfo(),
    fetchSkills(),
    fetchProjects()
  ]);

  return {
    props: {
      pageInfo,
      skills,
      projects,
      fallback: false
    }
  }
}