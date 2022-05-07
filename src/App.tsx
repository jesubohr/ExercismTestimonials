import { Header } from "./components/header";
import { Title } from "./components/title";
import { Testimonials } from "./components/testimonials";

function App() {
    return (
        <>
            <Header />
            <section className="flex flex-col items-center px-8 pb-10 h-[calc(100vh-4rem)]">
                <Title />
                <Testimonials />
            </section>
        </>
    );
}

export default App;
