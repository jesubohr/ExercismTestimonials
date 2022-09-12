import { createContext } from "react"

export const OptionsContext = createContext({
  currentPage: 1, totalPages: 1,
  currentTrack: "", totalTracks: {},
  queryExercise: "",
  sortOrder: "oldest_first",
  onPageChange: (page: number) => { },
  onTrackChange: (track: string) => { },
  onQueryChange: (query: string) => { },
  onSortChange: (order: string) => { },
  onTotalPagesChange: (totalPages: number) => { }
})
