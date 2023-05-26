import React from 'react'
import { Button } from './ui/Button/Button'
import Socials from './Socials'
import { HiSparkles, HiBeaker } from 'react-icons/hi'

function NavButtons() {
    return (
        <div className='flex flex-col items-center justify-center p-4 space-y-5 align-middle z-[3] lg:space-y-0 lg:flex-row lg:space-x-10 mt-4 md:mt-0'>
            <div className="flex md:hidden">
                <Socials />
            </div>
            <div className='flex items-center gap-2'>
                <Button size={'large'} href="#skills" iconRight={HiSparkles}>
                    Skills
                </Button>
                <Button size={'large'} href="#projects" iconRight={HiBeaker} variant={'transparent'}>
                    Projects
                </Button>
            </div>
        </div>
    )
}

export default NavButtons