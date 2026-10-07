import { FC } from 'react'
import { Project } from '@/typings'
import IframeOverlay from '@/components/screens/projects/IframeOverlay'
import Readme from '@/components/screens/projects/Readme'

const IframeReadmeOverlay: FC<{ project: Project }> = ({ project }) => {
    return (
        <IframeOverlay className='z-[1]'>
            <Readme project={project} />
        </IframeOverlay>
    )
}

export default IframeReadmeOverlay
