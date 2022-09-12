import { useState } from "react"
import { OptionsContext } from "@/context/TestimonialContext"
import { useFetch } from "@/hooks/useFetch"
import { API_URL } from "@/services/API"
import { TestimonialFetch } from "@/types/Testimonials"


export function OptionsProvider({ children }: { children: React.ReactNode }) {
  const { data } = useFetch<TestimonialFetch>(API_URL)
  const allPages = data?.testimonials.pagination.total_pages || 1
  const totalTracks = data?.testimonials.track_counts || {}

  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(allPages)
  const [track, setTrack] = useState('')
  const [query, setQuery] = useState('')
  const [order, setOrder] = useState('oldest_first')

  const onPageChange = (page: number) => setPage(page)
  const onTrackChange = (track: string) => setTrack(track)
  const onQueryChange = (query: string) => setQuery(query)
  const onSortChange = (order: string) => setOrder(order)
  const onTotalPagesChange = (totalPages: number) => setTotalPages(totalPages)

  const value = {
    currentPage: page, totalPages,
    currentTrack: track, totalTracks,
    queryExercise: query,
    sortOrder: order,
    onPageChange,
    onTrackChange,
    onQueryChange,
    onSortChange,
    onTotalPagesChange
  }

  return (
    <OptionsContext.Provider value={value}>
      {children}
    </OptionsContext.Provider>
  )
}
