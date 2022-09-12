import type { TestimonialType as TestimonialProps } from "@/types/Testimonials"
import { ReactComponent as LeftArrowIcon } from "@/assets/LeftArrowIcon.svg"
import { formatRelativeTime } from "@/utils/formatRelativeTime"

export function Testimonial({ track, exercise, mentor, content, created_at }: TestimonialProps) {
  return (
    <article className="relative flex items-center px-4 w-full min-h-[4rem] border-b border-[#EAECF3] hover:bg-[#F4F7FD] cursor-pointer">
      <div className="flex items-center gap-4 w-[38%]">
        <img src={track.icon_url} alt={track.title} className="mx-2 w-8 h-8" />
        <div className="flex items-center gap-4">
          <img src={mentor.avatar_url} alt={track.title} className="w-[42px] h-[42px] rounded-full" />
          <div className="flex flex-col">
            <h3 className="text-label-default font-medium">{mentor.handle}</h3>
            <p className="text-sm text-label-secondary">on {exercise.title} in {track.title}</p>
          </div>
        </div>
      </div>
      <p className="mr-auto max-w-[525px] text-left text-label-default whitespace-nowrap overflow-hidden text-ellipsis">{content}</p>
      <div className="flex items-center gap-12">
        <p className="text-sm text-label-secondary font-medium">{formatRelativeTime(created_at)}</p>
        <LeftArrowIcon />
      </div>
    </article>
  )
}
