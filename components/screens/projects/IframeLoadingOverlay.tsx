import { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { projectIframeState } from '@/atoms/projectIframe'
import IframeOverlay from '@/components/screens/projects/IframeOverlay'
import Spinner from '@/components/ui/Spinner/Spinner'

const IframeLoadingOverlay: FC = () => {
    const projectIframe = useRecoilValue(projectIframeState);

    return (
        <IframeOverlay className='z-0 flex flex-col items-center justify-center gap-8 text-neutral-300'>
            <Spinner className='w-14 h-14' />
            <div className='text-lg'>
                Loading <span className='font-medium text-neutral-50'>{projectIframe?.title}</span> preview...
            </div>
        </IframeOverlay>
    )
}

export default IframeLoadingOverlay