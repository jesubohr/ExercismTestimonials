import { PageItem } from "./pageItem";

export default function Component({ currentPage, totalPages }: { currentPage: number, totalPages: number; }) {
    const maxPageItems = 6;
    return (
        <ul className="flex items-center gap-3">
            {
                (totalPages > maxPageItems) ? (
                    <>
                    {
                        generatePageItems(currentPage, 1, (maxPageItems / 2)).map((pageItem, index) => (
                            <PageItem key={index} {...pageItem} />
                        ))
                    }
                    <li className="py-2 px-4 text-sm text-label-secondary font-medium">...</li>
                    {
                        generatePageItems(currentPage, totalPages - (maxPageItems / 2) + 1, totalPages).map((pageItem, index) => (
                            <PageItem key={index} {...pageItem} />
                        ))
                    }
                    </>
                ) : (
                    generatePageItems(currentPage, 1, totalPages).map((pageItem, index) => (
                        <PageItem key={index} {...pageItem} />
                    ))
                )
            }
        </ul>
    );
}

const generatePageItems = (currentPage: number, start: number, end: number) => {
    const pageItems = Array.from({ length: end - start + 1 }, (_, i) => start + i).map((page) => ({
        number: page,
        active: page === currentPage,
        onClick: () => { }
    }));
    return pageItems;
};
