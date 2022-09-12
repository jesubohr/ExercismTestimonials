import { ReactComponent as ArrowRight } from '@/assets/buttonIcons/ArrowRight.svg';
import { ReactComponent as ArrowLeft } from '@/assets/buttonIcons/ArrowLeft.svg';

type PageButtonProps = {
  children: React.ReactNode
  icon?: string
  disabled?: boolean
  onClick?: () => void
}
export function PageButton({ children, icon, disabled, onClick }: PageButtonProps) {
  return (
    <button
      className="flex items-center gap-2.5 py-2 px-4 border rounded-md border-light-border text-sm text-label-secondary font-medium shadow-button disabled:bg-[#E0E0ED] disabled:text-[#76709F] disabled:shadow-none"
      onClick={onClick}
      disabled={disabled}
    >
      {(icon === 'left') && <ArrowLeft />}
      {children}
      {(icon === 'right') && <ArrowRight />}
    </button>
  )
}
