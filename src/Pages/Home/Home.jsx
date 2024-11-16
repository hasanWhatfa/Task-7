import Blog from '../../components/Blog/Blog'
import Hero from '../../components/Hero/Hero'
import NavBar from '../../components/NavBar/NavBar'
import Pricing from '../../components/Pricing/Pricing'
import Services from '../../components/Services/Services'
import Testimonials from '../../components/Testimonials/Testimonials'
import VideoScript from '../../components/VideoScript/VideoScript'
import './Home.css'
import './../../App.css'
import Footer from '../../components/Footer/Footer'
export default function Home() {
  return (
    <>
    <header>
      <NavBar />
      <Hero />
    </header>
    <span className="straightLine"></span>
    <main>
      <Services />
      <VideoScript />
      <Pricing />
      <Testimonials />
      <Blog />
    </main>
    <Footer />
    </>
  )
}
