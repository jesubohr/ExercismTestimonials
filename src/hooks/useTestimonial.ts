import type { ParamOptions, TestimonialFetch } from "@/types/Testimonials"
import { formatParamObject } from "@/utils/formatParamObject"
import { useOptions } from "./useTestimonialOption"
import { useFetch } from "./useFetch"
import { API_URL } from "@/services/API"

export function useTestimonial(options: ParamOptions) {
  const { onPageChange, onTotalPagesChange } = useOptions()
  const params = formatParamObject(options)
  const { data, error } = useFetch<TestimonialFetch>(`${API_URL}?${params}`)
  const loading = !data && !error

  onTotalPagesChange(data?.testimonials.pagination.total_pages)
  onPageChange(data?.testimonials.pagination.current_page)
  return { testimonials: data?.testimonials.results, loading, error: error?.message }
}
