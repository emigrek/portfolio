import { FC } from 'react'
import IframeOverlay from '@/components/screens/projects/IframeOverlay'
import Readme from '@/components/screens/projects/Readme'

const IframeReadmeOverlay: FC = () => {
    return (
        <IframeOverlay className='z-[1]'>
            <Readme />
        </IframeOverlay>
    )
}

export default IframeReadmeOverlay