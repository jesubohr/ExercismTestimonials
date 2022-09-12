import { PageItem } from "./PageItem"

type PagesProps = {
  currentPage: number,
  totalPages: number,
  changePage: (page: number) => void,
}

const MAX_PAGE_ITEMS = 6
const MAX_PART_PAGE_ITEMS = Math.floor(MAX_PAGE_ITEMS / 2)
export function Pages({ currentPage, totalPages, changePage }: PagesProps) {
  return (
    <ul className="flex items-center gap-3">
      {
        (totalPages > MAX_PAGE_ITEMS)
          ? <LargePages changePage={changePage} currentPage={currentPage} totalPages={totalPages} />
          : <ShortPages changePage={changePage} currentPage={currentPage} totalPages={totalPages} />
      }
    </ul>
  );
}

function LargePages({ currentPage, totalPages, changePage }: PagesProps) {
  const firstFinalPage = totalPages - (MAX_PART_PAGE_ITEMS * 2) + 1
  const firstHalf = {
    currentPage,
    start: (currentPage <= firstFinalPage) ? currentPage : firstFinalPage
  }
  const secondHalf = {
    currentPage,
    start: totalPages - MAX_PART_PAGE_ITEMS + 1,
  }

  return (
    <>
      {
        generatePageItems(firstHalf)
          .map((pageItem, index) => (
            <PageItem
              key={index}
              onClick={() => changePage(pageItem.number)}
              {...pageItem}
            />
          ))
      }
      <li className="py-2 px-4 text-sm text-label-secondary font-medium">...</li>
      {
        generatePageItems(secondHalf)
          .map((pageItem, index) => (
            <PageItem
              key={index}
              onClick={() => changePage(pageItem.number)}
              {...pageItem}
            />
          ))
      }
    </>
  )
}

function ShortPages({ currentPage, totalPages, changePage }: PagesProps) {
  const complete = {
    currentPage,
    start: 1,
    end: totalPages
  }

  return (
    <>
      {
        generatePageItems(complete).map((pageItem, index) => (
          <PageItem
            key={index}
            onClick={() => changePage(pageItem.number)}
            {...pageItem}
          />
        ))
      }
    </>
  )
}

type PageItemProps = {
  currentPage: number
  start: number
}
const generatePageItems = ({ currentPage, start }: PageItemProps) => {
  const pageItems = Array
    .from({ length: MAX_PART_PAGE_ITEMS }, (_, i) => start + i)
    .map((page) => ({
      number: page,
      active: page === currentPage
    }));
  return pageItems;
};
