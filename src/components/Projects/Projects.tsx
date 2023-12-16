import Image from 'next/image'
import ProjectDetailsDialog from './ProjectDetails'
import { projectsData } from '@/data/projects'

export default function Projects() {
  return (
    <section className="flex flex-col gap-12 px-4 py-16 md:py-24">
      <h2 className="text-center text-2xl font-semibold text-gray-200 lg:text-4xl">
        Projetos
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-8">
        {projectsData.map((project) => (
          <ProjectDetailsDialog key={project.name} project={project}>
            <div className="group flex max-w-lg cursor-pointer flex-col items-center justify-center gap-6 rounded-lg bg-slate-900 px-6 py-4">
              <p className="text-lg font-semibold text-gray-400">
                {project.name}
              </p>
              <div className="relative">
                <Image
                  className="aspect-auto rounded-md opacity-50 brightness-75 transition-all duration-500 sm:opacity-100 sm:brightness-100 sm:group-hover:opacity-50 sm:group-hover:brightness-75"
                  src={project.image}
                  alt={`Imagem do projeto ${project.name}`}
                />

                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base font-semibold text-white group-hover:block sm:hidden sm:text-lg">
                  Ver detalhes
                </span>
              </div>
            </div>
          </ProjectDetailsDialog>
        ))}
      </div>
    </section>
  )
}
