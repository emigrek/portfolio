import Spinner from '@/components/ui/Spinner/Spinner'
import { FC } from 'react'

const ProjectsIframeLoader: FC = () => {
    return (
        <div className="flex items-center justify-center absolute right-0 w-full bg-neutral-900 lg:w-[calc(100%-theme('spacing.64'))] lg:h-full md:h-[calc(100%-theme('spacing.20'))] h-[calc(100%-theme('spacing.16'))]">
            <Spinner className='w-10 h-10' />
        </div>
    )
}

export default ProjectsIframeLoader