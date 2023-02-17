import { useRouter } from 'next/router'
import React from 'react'

function NotFound() {
  const router = useRouter();

  return (
    <div className="w-screen h-screen flex flex-col items-center align-middle justify-center bg-[#1173aa]">
      <div className="flex flex-col space-y-10">
        <div className='text-white text-9xl'>:(</div>
        <div className="xl:max-w-[80%] space-y-8">
          <div className='text-4xl text-white'>Your <span className="hidden xl:inline-block">PC</span><span className="inline-block lg:hidden">mobile</span> ran into a problem that it couldn&apos;t find this page</div>
          <a onClick={() => router.push("/")} className='text-lg text-center text-white cursor-pointer lg:text-left'>You can back here for safety</a> 
        </div>
      </div>
    </div>
  )
}

export default NotFound