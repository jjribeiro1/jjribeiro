import About from '@/components/About/About'
import Contact from '@/components/Contact/Contact'
import Header from '@/components/Header/Header'
import Projects from '@/components/Projects/Projects'
import TechSection from '@/components/TechStack/TechStack'

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto my-0">
        <About />
        <TechSection />
        <Projects />
      </main>
      <Contact />
    </>
  )
}
