import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import VisiMisi from './components/VisiMisi'
import Facilities from './components/Facilities'
import News from './components/News'
import Announcements from './components/Announcements'
import PPDB from './components/PPDB'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <VisiMisi />
      <Facilities />
      <News />
      <Announcements />
      <PPDB />
      <Contact />
      <Footer />
    </div>
  )
}
