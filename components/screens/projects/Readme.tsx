import React, { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { projectIframeState } from '@/atoms/projectIframe'
import useSWR from 'swr'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import Spinner from '@/components/ui/Spinner/Spinner'

const Readme: FC = () => {
    const projectIframe = useRecoilValue(projectIframeState);

    const partialUrl = projectIframe?.repo?.replace('https://github.com/', '');
    const { data, error, isLoading } = useSWR(
        `https://raw.githubusercontent.com/${partialUrl}/main/README.md`,
        (url) => fetch(url).then((res) => res.text())
    );

    if (isLoading)
        return (
            <div className="flex items-center justify-center w-full h-full">
                <Spinner className='w-10 h-10' />
            </div>
        )

    return (
        <div className="w-full h-full overflow-y-auto backdrop-blur-sm bg-neutral-900/95">
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
                            components={{
                                h1: ({ node, ...props }) => <h1 className="py-10 text-3xl font-bold lg:text-4xl" {...props} />,
                                h2: ({ node, ...props }) => <h2 className="py-2 font-medium text-md lg:text-xl xl:py-5" {...props} />,
                                table: ({ node, ...props }) => <table className="w-full px-2 overflow-hidden text-center border-collapse rounded-lg xl:p-2" {...props} />,
                                thead: ({ node, ...props }) => <thead className="border-b bg-neutral-700 border-neutral-500 text-neutral-50" {...props} />,
                                tbody: ({ node, ...props }) => <tbody className="bg-neutral-800" {...props} />,
                                tr: ({ node, ...props }) => <tr className="p-1 text-neutral-200" {...props} />,
                                td: ({ node, ...props }) => <td className="p-1" {...props} />,
                                th: ({ node, ...props }) => <th className="p-1 py-2" {...props} />,
                                pre: ({ node, ...props }) => <pre className="p-2 my-2 text-sm whitespace-pre-wrap rounded-lg bg-neutral-800 text-neutral-200"  {...props} />
                            }}
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