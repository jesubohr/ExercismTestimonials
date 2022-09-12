import { ReactComponent as LoaderIcon } from "@/assets/LoaderIcon.svg"
import { ReactComponent as EmptyIcon } from "@/assets/EmptyIcon.svg"
import { useTestimonial } from "@/hooks/useTestimonial"
import { useOptions } from "@/hooks/useTestimonialOption"
import { Testimonial } from "./Testimonial"

export function Content() {
  const { currentPage, currentTrack, queryExercise, sortOrder } = useOptions()
  const { testimonials, loading, error } = useTestimonial(
    { page: currentPage, track: currentTrack, exercise: queryExercise, order: sortOrder }
  )

  return (
    <section className="grow flex flex-col w-full h-fit">
      {
        loading
          ? <LoaderIcon className="loader my-20 self-center" />
          : testimonials.length > 0
            ? testimonials.map(testimonial => (
              <Testimonial key={testimonial.id} {...testimonial} />
            ))
            : <EmptyState />
      }
      {
        error && <p className="my-auto text-center text-4xl text-label-default">{error}</p>
      }
    </section>
  )
}

function EmptyState() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 my-auto w-full">
      <EmptyIcon className="w-48 h-48 text-label-default" />
      <p className="text-5xl text-label-default font-medium">No testimonials found</p>
    </div>
  )
}
