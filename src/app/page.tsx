import About from '@/components/About/About'
import TechSection from '@/components/TechStack/TechStack'

export default function Home() {
  return (
    <>
      <main className="container mx-auto my-0">
        <About />
        <TechSection />
      </main>
    </>
  )
}
