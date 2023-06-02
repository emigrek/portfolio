import { FC } from 'react'
import Project from '@/components/screens/projects/Project';
import useSortedProjects from '@/hooks/useSortedProjects';

const ProjectsList: FC = () => {
    const sortedProjects = useSortedProjects();

    return (
        <div className='flex flex-col w-full gap-2'>
            <h1 className='py-3 mx-2 text-2xl font-medium text-white'>Projects</h1>
            <div className='w-full border-b border-b-black/20'/>
            <div className='flex flex-col gap-1'>
                {
                    sortedProjects?.map(project => (
                        <Project key={project._id} project={project} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectsList