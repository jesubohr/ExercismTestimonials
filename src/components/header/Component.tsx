import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { Nav } from "../nav";

export default function Component () {
    return (
        <header className="flex items-center px-8 w-full h-16 border-b-[1px] border-[#C8D5EF]">
            <Logo className="h-6" />
            <nav className="flex justify-between items-center pr-3 w-full">
                <Nav type="one"/>
                <Nav type="two"/>
            </nav>
        </header>
    )
}
