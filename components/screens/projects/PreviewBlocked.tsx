import React from 'react'
import { TbWorldOff } from "react-icons/tb";
import { BiLinkExternal } from "react-icons/bi";
import { Button } from '@/components/ui/Button/Button';
import { openInNewTab } from '@/utils/openInNewTab';

function PreviewBlocked({ url }: { url: string }) {
    const address = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

    return (
        <div className="flex flex-col items-center justify-center gap-6 p-4">
            <TbWorldOff className='w-40 h-40 text-neutral-200'/>
            <div className='flex flex-col items-center gap-2'>
                <div className="text-3xl font-medium text-center text-neutral-100">Preview unavailable</div>
                <p className="text-center text-neutral-500">This site doesn&apos;t allow being embedded</p>
                <code className="px-3 py-1 text-sm break-all rounded-full text-neutral-300 bg-neutral-500/20">{address}</code>
            </div>
            <Button iconRight={BiLinkExternal} onClick={() => openInNewTab(url)}>
                Open in new tab
            </Button>
        </div>
    )
}

export default PreviewBlocked
