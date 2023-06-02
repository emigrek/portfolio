import React, { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { projectIframeState } from '@/atoms/projectIframe'

import useSWR from 'swr'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import Spinner from '@/components/ui/Spinner/Spinner'

const ProjectsReadme: FC = () => {
    const projectIframe = useRecoilValue(projectIframeState);
    const partialUrl = projectIframe?.repo?.replace('https://github.com/', '');

    const { data, error } = useSWR(
        `https://raw.githubusercontent.com/${partialUrl}/main/README.md`,
        (url) => fetch(url).then((res) => res.text())
    );

    return (
        <div className="w-full h-full overflow-y-auto bg-neutral-900">
            <div className='flex items-center justify-center max-w-3xl mx-auto'>
                {
                    error && (
                        <div className="text-white">Error loading README.md</div>
                    )
                }
                {
                    data ? (
                        <ReactMarkdown
                            className="p-2 text-white"
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            components={{
                                h1: ({ node, ...props }) => <h1 className="py-4 text-3xl font-bold lg:text-4xl xl:pb-10" {...props} />,
                                h2: ({ node, ...props }) => <h2 className="py-2 font-medium text-md lg:text-xl xl:py-5" {...props} />,
                                table: ({ node, ...props }) => <table className="w-full px-2 mx-auto text-center rounded bg-white/20 xl:p-2" {...props} />,
                                tr: ({ node, ...props }) => <tr className="p-1 " {...props} />,
                                td: ({ node, ...props }) => <td className="p-1" {...props} />,
                                th: ({ node, ...props }) => <th className="p-1 py-3 border-b-2 border-white/20 bg-white/10" {...props} />,
                                pre: ({ node, ...props }) => <pre className="px-2 text-sm whitespace-pre-wrap rounded bg-white/20 xl:p-2" {...props} />,
                            }}
                        >
                            {data}
                        </ReactMarkdown>
                    ) : (
                        <Spinner />
                    )
                }
            </div>
        </div>
    )
}

export default ProjectsReadme