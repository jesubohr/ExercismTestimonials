import { ReactComponent as ArrowRight } from '../../../../assets/buttonIcons/ArrowRight.svg';
import { ReactComponent as ArrowLeft } from '../../../../assets/buttonIcons/ArrowLeft.svg';

export default function Component ({ children, icon, disabled }: { children: React.ReactNode, icon?: string, disabled?: boolean }) {
    return (
        <button disabled={disabled} className="flex items-center gap-2.5 py-2 px-4 border rounded-md border-light-border text-label-secondary font-medium shadow-button disabled:bg-[#E0E0ED] disabled:text-[#76709F] disabled:shadow-none">
            {(icon === 'left') && <ArrowLeft />}
            {children}
            {(icon === 'right') && <ArrowRight />}
        </button>
    )
}
