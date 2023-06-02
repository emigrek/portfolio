import React from 'react'
import { TbMoodEmpty } from "react-icons/tb";

function NoProjectSelected() {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <TbMoodEmpty className='w-40 h-40 text-neutral-200'/>
            <div className='flex flex-col gap-1'>
                <div className="text-3xl font-medium text-neutral-100">No project selected</div>
                <p className="text-center text-neutral-500">Select a project from the list to view it</p>
            </div>
        </div>
    )
}

export default NoProjectSelected