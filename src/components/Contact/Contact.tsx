import Link from 'next/link'
import Image from 'next/image'

export default function Contact() {
  return (
    <footer id="contact" className="flex flex-col gap-10 px-4 py-16 md:py-24">
      <h2 className="text-center text-xl font-medium text-gray-200 sm:text-2xl lg:text-4xl">
        Vamos trabalhar juntos? Entre em contato
      </h2>

      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Link
          href={'https://www.linkedin.com/in/jv-ribeiro/'}
          target="_blank"
          className="flex items-center gap-4 rounded-md border-2 border-slate-900 px-4 py-2 hover:ring"
        >
          <span className="text-xl font-semibold text-gray-200">Linkedin</span>
          <Image
            src={'/logos/linkedin-logo.svg'}
            alt="xd"
            width={40}
            height={40}
          />
        </Link>

        <Link
          href={'mailto:jvsr.99@hotmail.com.br'}
          className="flex items-center gap-4 rounded-md border-2 border-slate-900 px-4 py-2 hover:ring"
        >
          <span className="text-xl font-semibold text-gray-200">Email</span>
          <Image
            src={'/logos/outlook-logo.svg'}
            alt="xd"
            width={40}
            height={40}
          />
        </Link>

        <Link
          href={'https://github.com/jjribeiro1'}
          target="_blank"
          className="flex items-center gap-4 rounded-md border-2 border-slate-900 px-4 py-2 hover:ring"
        >
          <span className="text-xl font-semibold text-gray-200">Github</span>
          <Image
            src={'/logos/github-logo.svg'}
            alt="xd"
            width={40}
            height={40}
          />
        </Link>
      </div>
    </footer>
  )
}
