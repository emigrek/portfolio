import { Button } from '@/components/ui/Button/Button';
import cn from '@/utils/cn';
import { FC } from 'react'
import { HTMLAttributes } from 'react'
import { FaReadme } from 'react-icons/fa';

interface ToggleReadmeButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  active: boolean;
}

const ToggleReadmeButton: FC<ToggleReadmeButtonProps> = ({ active, ...props }) => {
  return (
    <Button
      className={cn("absolute z-10 transition duration-300 hover:bg-blue-700 right-8 bottom-8", active ? 'bg-blue-600' : 'bg-blue-500')}
      size={'large'}
      iconRight={FaReadme}
      {...props}
    />
  )
}

export default ToggleReadmeButton