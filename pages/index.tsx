import AboutScreen from "./AboutScreen";
import ProjectsScreen from "./ProjectsScreen";
import SkillsScreen from "./SkillsScreen";

import { GetServerSideProps } from 'next'
import { PageInfo, Project, Skill as SkillType } from '../typings'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { skillsState } from "../atoms/skills";
import { pageInfoState } from "../atoms/pageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { projectsState } from "../atoms/projects";

import ReactGA from 'react-ga';

type Props = {
  skills: SkillType[],
  pageInfo: PageInfo,
  projects: Project[]
}

export default function Home({ skills, pageInfo, projects } : Props) {
  const setSkills = useSetRecoilState(skillsState);
  const setPageInfo = useSetRecoilState(pageInfoState);
  const setProjects = useSetRecoilState(projectsState);

  useEffect(() => {
    setSkills(skills);
    setPageInfo(pageInfo);
    setProjects(projects);

    if(!process.env.NEXT_PUBLIC_GA_TRACKING_ID) 
      return console.warn('No Google Analytics Tracking ID found, fill your .env file before building the project');

    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID);
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div className="flex flex-col items-center align-middle justify-center">
      <AboutScreen/>
      <SkillsScreen/>
      <ProjectsScreen/>
    </div>
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