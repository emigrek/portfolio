import { FC, HTMLAttributes } from 'react'
import cn from '@/utils/cn';
import { Button } from '@/components/ui/Button/Button';

interface CategoryProps extends HTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

const Category: FC<CategoryProps> = ({ active, ...props }) => {
  return (
    <Button size={"medium"} className={
      cn(active ? "bg-neutral-700" : "bg-transparent text-neutral-300",
        'font-normal backdrop-blur-sm transition duration-300'
      )
    } {...props} />
  )
}

export default Category