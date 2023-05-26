import { FC, HTMLAttributes } from 'react'
import cn from '@/utils/cn';

type ScreenProps = HTMLAttributes<HTMLDivElement>

const Screen: FC<ScreenProps> = ({ className, ...props }) => {
  return (
    <div className={cn('w-full h-screen snap-start', className)} {...props}/>
  )
}

export default Screen;