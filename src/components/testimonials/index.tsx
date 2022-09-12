import { Header } from "./components/header";
import { Content } from "./components/content";
import { Pagination } from "./components/pagination";
import { OptionsProvider } from "@/components/TestimonialProvider";

export function Testimonials() {
  return (
    <div className="flex flex-col grow mt-8 mb-0.5 w-full rounded-lg shadow-container">
      <OptionsProvider>
        <Header />
        <Content />
        <Pagination />
      </OptionsProvider>
    </div>
  )
}
