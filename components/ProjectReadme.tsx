import React from 'react'
import { useRecoilValue } from 'recoil'
import { projectIframeState } from '@/atoms/projectIframe'

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
        <div className="transition-all absolute flex items-center align-middle justify-center w-full h-[89%] z-[2] backdrop-blur-md bg-black/70">
            {
                data ? (
                    <ReactMarkdown 
                        className="relative lg:w-1/3 h-[90%] w-full text-white xl:p-8 p-2"
                        remarkPlugins={[remarkGfm]} 
                        rehypePlugins={[rehypeRaw]}
                        components={{
                            h1: ({node, ...props}) => <h1 className="py-4 text-3xl font-bold lg:text-4xl xl:pb-10" {...props}/>,
                            h2: ({node, ...props}) => <h2 className="py-2 font-medium text-md lg:text-xl xl:py-5" {...props}/>,
                            table: ({node, ...props}) => <table className="w-full px-2 mx-auto text-center rounded bg-white/20 xl:p-2" {...props}/>,
                            tr: ({node, ...props}) => <tr className="p-1 " {...props}/>,
                            td: ({node, ...props}) => <td className="p-1" {...props}/>,
                            th: ({node, ...props}) => <th className="p-1 py-3 border-b-2 border-white/20 bg-white/10" {...props}/>,
                            pre: ({node, ...props}) => <pre className="px-2 text-sm whitespace-pre-wrap rounded bg-white/20 xl:p-2" {...props}/>,
                        }}
                    >
                        {data}
                    </ReactMarkdown>
                ) : (
                    <svg aria-hidden="true" role="status" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                    </svg>
                )
            }
        </div>
    )
}

export default ProjectReadme