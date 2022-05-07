import { Filtering } from "./filtering";
import { Content } from "./content";
import { Pagination } from "./pagination";


export default function Component () {
    return (
        <div className="flex flex-col grow mt-8 mb-0.5 w-full h-10 rounded-lg shadow-container">
            <Filtering />
            <Content />
            <Pagination />
        </div>
    )
}
