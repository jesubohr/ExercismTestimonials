import { PageButton } from "./PageButton"
import { Pages } from "./Pages"
import { useOptions } from "@/hooks/useTestimonialOption"

export function Pagination() {
  const { currentPage, totalPages, onPageChange } = useOptions()

  const setPage = (page: number) => onPageChange(page)
  const prevPage = () => onPageChange(currentPage - 1)
  const nextPage = () => onPageChange(currentPage + 1)

  return (
    <footer className="flex justify-between items-center px-8 w-full min-h-[71px] border-t border-light-border">
      <PageButton
        icon="left"
        onClick={prevPage}
        disabled={currentPage === 1}
      >Previous</PageButton>
      <Pages changePage={setPage} currentPage={currentPage} totalPages={totalPages} />
      <PageButton
        icon="right"
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >Next</PageButton>
    </footer>
  )
}
