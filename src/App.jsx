import { useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import GallerySection from './sections/GallerySection'
import HeaderSection from './sections/HeaderSection'
import FontSection from './sections/FondSection'
import FooterSection from './sections/FooterSection'

function App() {

  const sectionRefs = {
    HeaderSection: useRef(null),
    GallerySection: useRef(null),
  }
  const scrollToSection = (sectionName) => {
    const sectionRef = sectionRefs[sectionName];
    if (sectionRef && sectionRef.current)
      window.scrollTo({
        top: sectionRef.current.offsetTop - 50,
        behavior: 'smooth',
      });
  }

  return (
    <div className="w-full md:w-[80%] mx-auto bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900 text-white">
      <FontSection />
      <Navbar scrollToSection={scrollToSection} />
      <div ref={sectionRefs.HeaderSection}>
        <HeaderSection />
      </div>
      <div ref={sectionRefs.GallerySection}>
        <GallerySection />
      </div>
      <FooterSection/>
    </div>
  )
}

export default App
