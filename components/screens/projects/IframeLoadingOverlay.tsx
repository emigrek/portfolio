import { FC } from 'react'
import IframeOverlay from '@/components/screens/projects/IframeOverlay'
import Spinner from '@/components/ui/Spinner/Spinner'

const IframeLoadingOverlay: FC = () => {
    return (
        <IframeOverlay className='z-0 flex flex-col items-center justify-center gap-8'>
            <Spinner className='w-14 h-14' />
            <div className='text-lg'>
                Loading project preview...
            </div>
        </IframeOverlay>
    )
}

export default IframeLoadingOverlay