'use client'
import Image from 'next/image'
import Link from 'next/link'
import * as Dialog from '@radix-ui/react-dialog'
import { Project } from '@/types'

type Props = {
  project: Project
  children: React.ReactNode
}

export default function ProjectDetailsDialog({ project, children }: Props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-gray-950/60" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-md bg-slate-900">
          <div className="relative flex max-h-[550px] min-w-[300px] max-w-3xl flex-col lg:max-h-[650px]">
            <div>
              <Image
                className="aspect-auto rounded-md"
                src={project.image}
                alt={`Imagem do projeto ${project.name}`}
              />
            </div>

            <div className="flex h-full flex-col gap-4 overflow-y-scroll p-6">
              <Dialog.Title className="text-xl font-semibold text-gray-300 lg:text-3xl">
                {project.name}
              </Dialog.Title>
              <Dialog.Description className="text-base text-gray-200 lg:text-lg">
                {project.description}
              </Dialog.Description>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-base text-gray-200 lg:text-xl">
                  Tecnologias:
                </span>

                <div className="flex flex-wrap items-center gap-1">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-slate-700 px-2 py-0.5 text-sm font-semibold text-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex w-full items-center justify-center gap-4 p-6">
              <Link
                href={project.deployUrl}
                target="_blank"
                className="rounded-md bg-sky-900 p-2 text-sm text-gray-200 hover:bg-sky-900/80 md:text-base lg:text-xl"
              >
                ver projeto
              </Link>

              <Link
                href={project.repository}
                target="_blank"
                className="rounded-md bg-sky-900 p-2 text-sm text-gray-200 hover:bg-sky-900/80 md:text-base lg:text-xl"
              >
                código fonte
              </Link>
            </div>
            <Dialog.Close>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute right-3 top-3 h-6 w-6 cursor-pointer fill-white"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
