import { Button } from '@/components/ui/Button/Button';
import cn from '@/utils/cn';
import { FC } from 'react'
import { BsMarkdownFill } from 'react-icons/bs';

interface ToggleReadmeButtonProps {
  active: boolean;
  onClick: () => void;
}

const ToggleReadmeButton: FC<ToggleReadmeButtonProps> = ({ active, onClick }) => {
  return (
    <Button
      className={cn("absolute z-10 w-14 h-14 md:h-16 md:w-16 p-0 transition duration-300 hover:bg-stone-600 right-8 bottom-8", active ? 'bg-stone-600 ring-4 ring-white/20' : 'bg-stone-700')}
      iconRight={BsMarkdownFill}
      size={'large'}
      onClick={onClick}
      aria-label="Toggle README"
      aria-pressed={active}
    />
  )
}

export default ToggleReadmeButton
