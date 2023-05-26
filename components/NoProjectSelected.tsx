import React from 'react'
import { useRecoilValue } from 'recoil';
import { pageInfoState } from '../atoms/pageInfo';
import { Button } from './ui/Button/Button';
import { AiFillGithub } from 'react-icons/ai';
import ProjectClickIllustration from './ProjectClickIllustration';

function NoProjectSelected() {
    const pageInfo = useRecoilValue(pageInfoState);

    return (
        <div className="aspect-video w-full h-[90%]">
            <div className="relative flex flex-col items-center justify-center w-full h-full space-y-5 opacity-80">
                <ProjectClickIllustration />
                <div className="text-3xl text-white md:text-4xl">Select project to see preview</div>
                {
                    pageInfo?.github ? (
                        <Button href={pageInfo?.github} iconRight={AiFillGithub}>
                            Visit my Github for source
                        </Button>
                    ) : null
                }
            </div>
        </div>
    )
}

export default NoProjectSelected