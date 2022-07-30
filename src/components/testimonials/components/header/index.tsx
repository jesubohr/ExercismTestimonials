import { TrackSelector } from "./TrackSelector"
import { FilterInput } from "./FilterInput"
import { SortSelector } from "./SortSelector"

export function Header() {
  return (
    <header className="flex justify-between items-stretch w-full py-4 px-6 h-20 border-b border-light-border">
      <div className="flex gap-6">
        <TrackSelector />
        <FilterInput />
      </div>
      <SortSelector />
    </header>
  )
}
