import React, { FC } from 'react'
import { Project } from '@/typings'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import Spinner from '@/components/ui/Spinner/Spinner'
import useProjectMarkdown from '@/hooks/useProjectMarkdown'

const Readme: FC<{ project: Project }> = ({ project }) => {
    const { data, error, isLoading } = useProjectMarkdown(project);

    if (isLoading)
        return (
            <div className='flex flex-col items-center justify-center gap-8'>
                <Spinner className='w-14 h-14' />
                <p className='text-lg'>
                    Loading markdown...
                </p>
            </div>
        )

    if (error)
        return (
            <div className="flex items-center justify-center">
                <p className='text-lg text-white'>
                    Couldn&apos;t load markdown file
                </p>
            </div>
        )

    if (!data)
        return (
            <div className="flex items-center justify-center">
                <p className='text-lg text-white'>
                    This project doesn&apos;t have a markdown file
                </p>
            </div>
        )

    return (
        <div className="w-full h-full overflow-y-auto">
            <div className='flex items-center justify-center max-w-4xl mx-auto'>
                {
                    data && (
                        <ReactMarkdown
                            className="w-full p-5 text-white"
                            remarkPlugins={[remarkGfm]}
                            // Sanitize after raw: README HTML is rendered, scripts and event handlers are not.
                            rehypePlugins={[rehypeRaw, rehypeSanitize]}
                            components={{
                                h1: ({ node, ...props }) => <h1 className="py-10 text-3xl font-bold lg:text-4xl" {...props} />,
                                h2: ({ node, ...props }) => <h2 className="py-2 font-medium text-md lg:text-xl xl:py-5" {...props} />,
                                table: ({ node, ...props }) => <table className="w-full px-2 overflow-hidden text-center border-collapse rounded-lg xl:p-2" {...props} />,
                                thead: ({ node, ...props }) => <thead className="border-b bg-neutral-700 border-neutral-500 text-neutral-50" {...props} />,
                                tbody: ({ node, ...props }) => <tbody className="bg-neutral-800" {...props} />,
                                tr: ({ node, isHeader, ...props }) => <tr className="p-1 text-neutral-200" {...props} />,
                                td: ({ node, isHeader, ...props }) => <td className="p-1" {...props} />,
                                th: ({ node, isHeader, ...props }) => <th className="p-1 py-2" {...props} />,
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