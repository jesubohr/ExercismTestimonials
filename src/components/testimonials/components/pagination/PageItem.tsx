const pageItemStyles = 'py-2 px-4 border border-light-border rounded-md text-sm text-label-secondary font-medium cursor-pointer';
const pageItemActiveStyles = 'bg-[#E1EBFF] border-label-tertiary text-label-default';

export function PageItem({ active = true, number, onClick }: { active?: boolean, number: number, onClick: () => void }) {
  return (
    <li className={`${pageItemStyles} ${(active) ? pageItemActiveStyles : ''}`}>
      {number}
    </li>
  )
}