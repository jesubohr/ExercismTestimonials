import { ReactComponent as Logo } from "@/assets/Logo.svg";
import { NavBar } from "./NavBar";

export function Header() {
  return (
    <header className="flex items-center px-8 w-full h-16 border-b border-[#C8D5EF]">
      <Logo className="h-6" />
      <nav className="flex justify-between items-center pr-3 w-full">
        <NavBar type="one" />
        <NavBar type="two" />
      </nav>
    </header>
  )
}
