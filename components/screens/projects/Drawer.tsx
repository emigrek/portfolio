import { pageState } from '@/atoms/page'
import { Drawer } from '@/components/ui/Drawer/Drawer'
import { FC } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import ProjectsList from '@/components/screens/projects/ProjectsList'

const ProjectsDrawer: FC = () => {
    const page = useRecoilValue(pageState);
    const setPage = useSetRecoilState(pageState);

    const handleClickOutside = () => {
        setPage(state => ({ ...state, projectsDrawer: !state.projectsDrawer }));
    }

    return (
        <Drawer variant={'blue'} open={page.projectsDrawer ? "open" : "closed"} onClickOutside={handleClickOutside}>
            <ProjectsList />
        </Drawer>
    )
}

export default ProjectsDrawer