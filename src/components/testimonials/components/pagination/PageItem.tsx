const pageItemStyles = 'py-2 px-4 border border-light-border rounded-md text-sm text-label-secondary font-medium cursor-pointer';
const pageItemActiveStyles = 'bg-[#E1EBFF] border-label-tertiary text-label-default';

type PageItemProps = {
  active?: boolean
  number: number
  onClick?: () => void
}

export function PageItem({ active, number, onClick }: PageItemProps) {
  return (
    <li onClick={onClick} className={`${pageItemStyles} ${(active) ? pageItemActiveStyles : ''}`}>
      {number}
    </li>
  )
}
