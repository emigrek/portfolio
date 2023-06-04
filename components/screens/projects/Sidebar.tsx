import { Sidebar } from '@/components/ui/Sidebar/Sidebar'
import { FC } from 'react'
import ProjectsList from '@/components/screens/projects/ProjectsList'

const ProjectsSidebar: FC = () => {
    return (
        <Sidebar variant={'blue'} className='w-0 lg:px-2 lg:py-2 lg:w-64'>
            <ProjectsList />
        </Sidebar>
    )
}

export default ProjectsSidebar