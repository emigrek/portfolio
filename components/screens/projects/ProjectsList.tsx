import { FC } from 'react'
import { Project as ProjectType } from '@/typings';
import Project from '@/components/screens/projects/Project';

interface ProjectsListProps {
    projects: ProjectType[];
    selected: ProjectType | null;
    onSelect: (project: ProjectType) => void;
}

const ProjectsList: FC<ProjectsListProps> = ({ projects, selected, onSelect }) => {
    return (
        <div className='flex flex-col gap-2'>
            <h1 className='py-2 mx-2 text-2xl font-medium text-white'>Projects</h1>
            <div className='w-full border-b border-b-white/10'/>
            <div className='flex flex-col gap-1'>
                {
                    projects.map(project => (
                        <Project
                            key={project._id}
                            project={project}
                            active={project._id === selected?._id}
                            onSelect={onSelect}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectsList
