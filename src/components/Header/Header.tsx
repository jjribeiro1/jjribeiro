import Link from 'next/link'
import DropdownMenu from './DropdownMenu'

export default function Header() {
  return (
    <header className="sticky inset-0 flex items-center justify-between p-4 md:px-10">
      <h1 className="cursor-pointer font-bold tracking-wide text-gray-100 lg:text-2xl">
        JJRIBEIRO
      </h1>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-4 text-gray-100">
          <li className="cursor-pointer rounded-md px-4 py-1 transition-colors duration-300 hover:bg-gray-900">
            <Link href="#about">Sobre</Link>
          </li>

          <li className="cursor-pointer rounded-md px-4 py-1 transition-colors duration-300 hover:bg-gray-900">
            <Link href="#projects">Projetos</Link>
          </li>

          <li className="cursor-pointer rounded-md px-4 py-1 transition-colors duration-300 hover:bg-gray-900">
            <Link href="#contact">Contato</Link>
          </li>
        </ul>
      </nav>

      <DropdownMenu />
    </header>
  )
}
