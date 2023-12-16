import Image from 'next/image'

export default function TechSection() {
  return (
    <section className="flex flex-col gap-10 px-4 py-16 md:py-24">
      <h2 className="text-center text-2xl lg:text-4xl font-semibold text-gray-300">
        Principais Tecnologias
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-4">
        <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-slate-900 p-4">
          <Image
            src={'/logos/js-logo.svg'}
            alt="Javascript logo"
            width={100}
            height={100}
          />
          <p className="text-center text-white">JavaScript</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-slate-900 p-4">
          <Image
            src={'/logos/ts-logo.svg'}
            alt="Typescript logo"
            width={100}
            height={100}
          />
          <p className="text-center text-white">TypeScript</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-slate-900 p-4">
          <Image
            src={'/logos/react-logo.svg'}
            alt="ReactJS logo"
            width={100}
            height={100}
          />
          <p className="text-center text-white">React</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-slate-900 p-4">
          <Image
            src={'/logos/next-logo.svg'}
            alt="NextJS logo"
            width={100}
            height={100}
          />
          <p className="text-center text-white">Next</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-slate-900 p-4">
          <Image
            src={'/logos/node-logo.svg'}
            alt="NodeJS logo"
            width={100}
            height={100}
          />
          <p className="text-center text-white">Node</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-slate-900 p-4">
          <Image
            src={'/logos/express-logo.svg'}
            alt="ExpressJS logo"
            width={100}
            height={100}
          />
          <p className="text-center text-white">Express</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-slate-900 p-4">
          <Image
            src={'/logos/nestjs-logo.svg'}
            alt="NestJS logo"
            width={100}
            height={100}
          />
          <p className="text-center text-white">Nest</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-slate-900 p-4">
          <Image
            src={'/logos/firebase-logo.svg'}
            alt="Firebase logo"
            width={100}
            height={100}
          />
          <p className="text-center text-white">Firebase</p>
        </div>
      </div>
    </section>
  )
}
