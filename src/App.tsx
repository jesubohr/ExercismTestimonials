import { Header } from "@/components/Header";
import { BannerTitle } from "@/components/BannerTitle";
import { Testimonials } from "@/components/testimonials";

function App() {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center px-8 pb-10">
        <BannerTitle />
        <Testimonials />
      </section>
    </>
  );
}

export default App;
