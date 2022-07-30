import { PageButton } from "./PageButton";
import { Pages } from "./Pages";

export function Pagination() {
  return (
    <footer className="flex justify-between items-center px-8 w-full h-[71px] border-t border-light-border">
      <PageButton icon="left" disabled>Previous</PageButton>
      <Pages currentPage={2} totalPages={34} />
      <PageButton icon="right">Next</PageButton>
    </footer>
  )
}
