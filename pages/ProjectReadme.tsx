import React from 'react'
import { useRecoilValue } from 'recoil'
import { projectIframeState } from '../atoms/projectIframe'

import useSWR from 'swr'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

function ProjectReadme() {
    const projectIframe = useRecoilValue(projectIframeState);
    const partialUrl = projectIframe?.repo?.replace('https://github.com/', '');
    
    const { data, error } = useSWR(
        `https://raw.githubusercontent.com/${partialUrl}/main/README.md`,
        (url) => fetch(url).then((res) => res.text())
    );
    
    return (
        <div className="transition-all absolute flex items-center align-middle justify-center w-full h-[85%] lg:h-[90%] z-[2] backdrop-blur-md bg-black/70">
            {
                data ? (
                    <ReactMarkdown 
                        className="relative lg:w-1/3 w-full h-full text-white xl:p-8 p-2"
                        remarkPlugins={[remarkGfm]} 
                        rehypePlugins={[rehypeRaw]}
                        components={{
                            h1: ({node, ...props}) => <h1 className="text-2xl lg:text-4xl font-bold xl:pb-10 py-4" {...props}/>,
                            h2: ({node, ...props}) => <h2 className="text-md lg:text-xl font-medium xl:py-5 py-2" {...props}/>,
                            table: ({node, ...props}) => <table className="border border-white/60 text-center mx-auto w-full bg-black/50" {...props}/>,
                            tr: ({node, ...props}) => <tr className="border border-white/60 p-1" {...props}/>,
                            td: ({node, ...props}) => <td className="border border-white/60 p-1" {...props}/>,
                            pre: ({node, ...props}) => <pre className="bg-white/20 text-sm rounded-lg px-2 xl:p-2 whitespace-pre-wrap" {...props}/>,
                        }}
                    >
                        {data}
                    </ReactMarkdown>
                ) : "Loading markdown..."
            }
        </div>
    )
}

export default ProjectReadme