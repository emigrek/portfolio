import { pageState } from '@/atoms/page'
import { Button } from '@/components/ui/Button/Button'
import cn from '@/utils/cn'
import { FC } from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { GoThreeBars } from 'react-icons/go'
import { useRecoilValue, useSetRecoilState } from 'recoil'

interface ProjectsFloatingButtonsProps {

}

const ProjectsFloatingButtons: FC<ProjectsFloatingButtonsProps> = ({ }) => {
    const page = useRecoilValue(pageState);
    const setPage = useSetRecoilState(pageState);

    const handleNavToggle = () => {
        setPage(state => ({ ...state, nav: !state.nav }));
    }

    const handleSidebarToggle = () => {
        setPage(state => ({ ...state, sidebar: !state.sidebar }));
    }

    return (
        <div className={cn(page.nav ? 'top-[9%] md:top-[8%]' : 'top-2', 'transition-all z-[2] absolute left-0 right-0 bottom-0 w-full h-10 flex flex-row justify-center space-x-2 align-middle items-center')}>
            <Button className='text-white bg-blue-500 cursor-pointer hover:text-black hover:bg-white' onClick={handleSidebarToggle}>
                <GoThreeBars className="w-6 h-6" />
            </Button>
            <Button className='text-white bg-blue-500 cursor-pointer hover:text-black hover:bg-white' onClick={handleNavToggle}>
                {page.nav ? <AiOutlineArrowUp className="w-5 h-5" /> : <AiOutlineArrowDown className="w-5 h-5" />}
            </Button>
        </div>
    )
}

export default ProjectsFloatingButtons