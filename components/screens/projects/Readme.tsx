import React, { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { projectIframeState } from '@/atoms/projectIframe'
import useSWR from 'swr'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import Spinner from '@/components/ui/Spinner/Spinner'
import markdownComponents from '@/utils/markdownComponents'

const Readme: FC = () => {
    const projectIframe = useRecoilValue(projectIframeState);

    const partialUrl = projectIframe?.repo?.replace('https://github.com/', '');
    const { data, error, isLoading } = useSWR(
        `https://raw.githubusercontent.com/${partialUrl}/main/README.md`,
        (url) => fetch(url).then((res) => res.text())
    );

    if (isLoading)
        return (
            <div className="flex items-center justify-center w-full h-full bg-neutral-900">
                <Spinner className='w-10 h-10' />
            </div>
        )

    return (
        <div className="w-full h-full overflow-y-auto bg-neutral-900">
            {
                error && (
                    <div className="flex items-center justify-center h-full">
                        <h1 className='text-lg font-medium text-white'>
                            Couldn&apos;t load markdown file
                        </h1>
                    </div>
                )
            }
            <div className='flex items-center justify-center max-w-4xl mx-auto'>
                {
                    data && (
                        <ReactMarkdown
                            className="w-full p-2 text-white"
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            components={markdownComponents}
                        >
                            {data}
                        </ReactMarkdown>
                    )
                }
            </div>
        </div>
    )
}

export default Readme