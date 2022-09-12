import { useMemo } from "react"
import { useOptions } from "@/hooks/useTestimonialOption";
import { debounce } from "@/utils/debounce";

export function FilterInput() {
  const { onQueryChange } = useOptions()

  const handleChange = ({ target }: { target: HTMLInputElement }) => {
    onQueryChange(target.value)
  }
  const debouncedHandler = useMemo(() => debounce(handleChange), [])

  return (
    <label
      tabIndex={1}
      htmlFor="filter"
      className="flex items-center gap-4 py-3 px-5 w-[26rem] bg-[#F0F3F9] text-label-secondary rounded-md focus-within:bg-white ring-1 ring-transparent focus-within:ring-[#2E57E8] focus:outline-none focus-within:shadow-selector">
      <svg viewBox="0 0 15 15" fill="none" width="24" height="24">
        <path d="M14.5 14.5l-4-4m-4 2a6 6 0 110-12 6 6 0 010 12z" stroke="currentColor" />
      </svg>
      <input
        type="search"
        name="filter"
        id="filter"
        onChange={debouncedHandler}
        placeholder="Filter by exercise title"
        className="grow bg-transparent text-label-default placeholder:text-label-secondary focus:outline-none"
      />
    </label>
  )
}
