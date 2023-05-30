import { FC, HTMLAttributes } from 'react'
import cn from '@/utils/cn';
import { Button } from '@/components/ui/Button/Button';

interface CategoryProps extends HTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

const Category: FC<CategoryProps> = ({ active, ...props }) => {
  return (
    <Button className={cn(active ? "bg-neutral-700" : "bg-neutral-300/5", 'hover:bg-neutral-700 font-normal text-neutral-200 backdrop-blur-xl')} {...props}/>
  )
}

export default Category