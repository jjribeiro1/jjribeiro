'use client'
import Link from 'next/link'
import * as Dropdown from '@radix-ui/react-dropdown-menu'

export default function DropdownMenu() {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger
        className="mr-1 cursor-pointer text-gray-300 md:hidden"
        asChild
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </Dropdown.Trigger>
      <Dropdown.Portal>
        <Dropdown.Content
          className="z-40 rounded-md bg-slate-900"
          sideOffset={7}
        >
          <ul className="flex flex-col gap-1 text-gray-100">
            <li className="cursor-pointer rounded-md px-4 py-1 text-xs transition-all duration-300 hover:bg-gray-800 hover:text-gray-200">
              <Link href="#about">Sobre</Link>
            </li>

            <li className="cursor-pointer rounded-md px-4 py-1 text-xs transition-all duration-300 hover:bg-gray-800 hover:text-gray-200">
              <Link href="#projects">Projetos</Link>
            </li>

            <li className="cursor-pointer rounded-md px-4 py-1 text-xs transition-all duration-300 hover:bg-gray-800 hover:text-gray-200">
              <Link href="#contact">Contato</Link>
            </li>
          </ul>
        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  )
}
