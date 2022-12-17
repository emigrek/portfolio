import Router, { useRouter } from 'next/router'
import React from 'react'

function NotFound() {
  const router = useRouter();

  return (
    <div className="w-screen h-screen flex flex-col items-center align-middle justify-center bg-[#1173aa]">
      <div className="flex flex-col space-y-10">
        <div className='text-9xl text-white'>:(</div>
        <div className="xl:max-w-[80%] space-y-8">
          <div className='text-4xl text-white'>Your <span className="xl:inline-block hidden">PC</span><span className="lg:hidden inline-block">mobile</span> ran into a problem that it couldn't find this page</div>
          <div onClick={() => router.push("/")} className='text-lg cursor-pointer text-white lg:text-left text-center'>You can back here for safety</div> 
        </div>
      </div>
    </div>
  )
}

export default NotFound