import { FC } from 'react'
import { AiFillPushpin } from 'react-icons/ai'

const PinIndicator: FC = () => {
    return (
        <div className='absolute top-[-8%] right-[-3%] flex items-center justify-center rounded-full bg-fuchsia-500 p-1 shadow-lg'>
            <AiFillPushpin className='w-4 h-4 text-white rounded-full' />
        </div>
    )
}

export default PinIndicator