import { Button } from '@/components/ui/Button/Button';
import cn from '@/utils/cn';
import { FC } from 'react'
import { HTMLAttributes } from 'react'
import { BsMarkdownFill } from 'react-icons/bs';

interface ToggleReadmeButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  active: boolean;
}

const ToggleReadmeButton: FC<ToggleReadmeButtonProps> = ({ active, ...props }) => {
  return (
    <Button
      className={cn("absolute z-10 w-14 h-14 md:h-16 md:w-16 p-0 transition duration-300 hover:bg-blue-600 right-8 bottom-8", active ? 'bg-blue-600 ring-4 ring-white/20' : 'bg-blue-500')}
      iconRight={BsMarkdownFill}
      size={'large'}
      {...props}
    />
  )
}

export default ToggleReadmeButton