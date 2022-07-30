import { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

const SORT_OPTIONS = ['Newest', 'Oldest']
export function SortSelector() {
  const [selectedOption, setSelectedOption] = useState(SORT_OPTIONS[0])

  return (
    <Listbox
      as="div"
      value={selectedOption}
      onChange={setSelectedOption}
      className="group relative w-[21rem]"
    >
      <Listbox.Button
      className="flex justify-between items-center py-3 px-5 w-full bg-[#F0F3F9] text-label-secondary rounded-md ring-1 ring-transparent group-focus:outline-none group-focus-within:bg-white group-focus-within:ring-[#2E57E8] group-focus-within:shadow-selector">
        Sort by {selectedOption} First
        <SelectorIcon />
      </Listbox.Button>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-out duration-100"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Listbox.Options static className="absolute mt-3 p-2 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-container sm:text-sm">
          {SORT_OPTIONS.map((option, index) => (
            <Listbox.Option
              key={index}
              value={option}
              className={
                ({ active }) => `flex justify-between items-center py-2 px-6 h-[58px] text-label-secondary ${active && 'bg-[#F0F3F9]'}`
              }>
              {({ selected }) => (
                <>
                  {option}
                  {selected && <CheckIcon />}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  )
}

function SelectorIcon() {
  return (
    <svg width="24" height="13" viewBox="0 0 24 13" fill="none">
      <path d="M23.25 1.311L12.53 12.03C12.3895 12.1707 12.1988 12.2498 12 12.2498C11.8012 12.2498 11.6105 12.1707 11.47 12.03L0.75 1.311" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 15 15" fill="none" width="24" height="24">
      <path d="M1 7l4.5 4.5L14 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" />
    </svg>
  )
}
