import { FC } from 'react'
import { CursorArrowRaysIcon } from '@heroicons/react/24/solid'

const ProjectClickIllustration: FC = () => {
    return (
        <>
            <div className="absolute top-[30%] xl:top-[37%] bg-white/30 px-2 py-4 rounded-lg min-w-[200px] h-20"></div>
            <CursorArrowRaysIcon className='w-44 h-44 text-white z-[10]' />
        </>
    )
}

export default ProjectClickIllustration