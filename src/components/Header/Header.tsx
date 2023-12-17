import Link from 'next/link'
import DropdownMenu from './DropdownMenu'

export default function Header() {
  return (
    <header className="sticky inset-0 z-40 flex items-center justify-between bg-slate-950 p-4 md:px-10">
      <h1 className="cursor-pointer font-bold tracking-wide text-gray-100 lg:text-2xl">
        JJRIBEIRO
      </h1>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-4 text-gray-100">
          <li>
            <Link
              className="rounded-md px-4 py-2 transition-colors duration-300 hover:bg-gray-900"
              href="/#about"
            >
              Sobre
            </Link>
          </li>

          <li>
            <Link
              className="rounded-md px-4 py-2 transition-colors duration-300 hover:bg-gray-900"
              href="/#projects"
            >
              Projetos
            </Link>
          </li>

          <li>
            <Link
              className="rounded-md px-4 py-2 transition-colors duration-300 hover:bg-gray-900"
              href="/#contact"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>

      <DropdownMenu />
    </header>
  )
}
