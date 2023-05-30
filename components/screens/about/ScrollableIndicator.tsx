import { FC } from 'react'
import { CgScrollV } from 'react-icons/cg'
import { Button } from '@/components/ui/Button/Button'

const ScrollableIndicator: FC = () => {
    return (
        <div className='absolute flex items-center justify-center bottom-5 md:bottom-16 inset-x-0 z-[1]'>
            <Button href={"#skills"} iconRight={CgScrollV} className='animate-bounce' size={'large'} />
        </div>
    )
}

export default ScrollableIndicator