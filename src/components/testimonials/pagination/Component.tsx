import { Button } from "./button";
import { Pages } from "./pages";

export default function Component () {
    return (
        <footer className="flex justify-between items-center px-8 w-full h-[71px] border-t border-light-border">
            <Button icon="left" disabled>Previous</Button>
            <Pages currentPage={2} totalPages={34}/>
            <Button icon="right">Next</Button>
        </footer>
    )
}
