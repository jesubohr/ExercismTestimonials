import { PageItem } from "./PageItem";

type PagesProps = {
  currentPage: number,
  totalPages: number,
}

const MAX_PAGE_ITEMS = 6;
export function Pages({ currentPage, totalPages }: PagesProps) {
  return (
    <ul className="flex items-center gap-3">
      {
        (totalPages > MAX_PAGE_ITEMS)
          ? <LargePages currentPage={currentPage} totalPages={totalPages} />
          : <ShortPages currentPage={currentPage} totalPages={totalPages} />
      }
    </ul>
  );
}

function LargePages({ currentPage, totalPages }: PagesProps) {
  return (
    <>
      {
        generatePageItems(currentPage, 1, (MAX_PAGE_ITEMS / 2)).map((pageItem, index) => (
          <PageItem key={index} {...pageItem} />
        ))
      }
      <li className="py-2 px-4 text-sm text-label-secondary font-medium">...</li>
      {
        generatePageItems(currentPage, totalPages - (MAX_PAGE_ITEMS / 2) + 1, totalPages).map((pageItem, index) => (
          <PageItem key={index} {...pageItem} />
        ))
      }
    </>
  )
}

function ShortPages({ currentPage, totalPages }: PagesProps) {
  return (
    <>
      {
        generatePageItems(currentPage, 1, totalPages).map((pageItem, index) => (
          <PageItem key={index} {...pageItem} />
        ))
      }
    </>
  )
}

const generatePageItems = (currentPage: number, start: number, end: number) => {
  const pageItems = Array
    .from({ length: end - start + 1 }, (_, i) => start + i)
    .map((page) => ({
      number: page,
      active: page === currentPage,
      onClick: () => { }
    }));
  return pageItems;
};
