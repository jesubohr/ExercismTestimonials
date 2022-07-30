import { Header } from "./components/header";
import { Content } from "./components/content";
import { Pagination } from "./components/pagination";


export function Testimonials() {
  return (
    <div className="flex flex-col grow mt-8 mb-0.5 w-full h-10 rounded-lg shadow-container">
      <Header />
      <Content />
      <Pagination />
    </div>
  )
}
