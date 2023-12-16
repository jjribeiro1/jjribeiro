import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 place-items-center px-4 py-16 md:grid-cols-2 md:px-10 md:py-24"
    >
      <div className="flex flex-col gap-4">
        <p className="font-mono text-xl font-semibold text-gray-300 lg:text-3xl">
          João Vitor Ribeiro
        </p>
        <p className="text-sm text-gray-100 md:text-lg">
          Oi, eu sou um desenvolvedor Full Stack motivado por criar novos
          projetos para a Web e trabalhar com tecnologias modernas e inovadoras
          que nos ajudam a proporcionar uma melhor experiência para o usuário.
          Estou sempre procurando por novos desafios e oportunidades para
          aprender e crescer profissionalmente.
        </p>
      </div>

      <div className="hidden md:block">
        <Image
          src={'/profile.jpeg'}
          alt="foto de perfil"
          width={250}
          height={250}
          className="rounded-full"
        />
      </div>
    </section>
  )
}
