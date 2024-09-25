import { useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import GallerySection from './sections/GallerySection'
import HeaderSection from './sections/HeaderSection'
import FontSection from './sections/FondSection'

function App() {

  const sectionRefs = {
    HeaderSection: useRef(null),
    GallerySection: useRef(null),
  }
  const scrollToSection = (sectionName) => {
    const sectionRef = sectionRefs[sectionName];
    if (sectionRef && sectionRef.current)
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="w-[80%] mx-auto">
      <FontSection />
      <Navbar scrollToSection={scrollToSection} />
      <div ref={sectionRefs.HeaderSection}>
        <HeaderSection />
      </div>
      <div ref={sectionRefs.GallerySection}>
        <GallerySection />
      </div>
    </div>
  )
}

export default App
