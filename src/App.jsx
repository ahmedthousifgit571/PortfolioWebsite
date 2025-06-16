import LogoSection from './components/LogoSection'
import NavBar from './components/NavBar'
import './index.css'
import Contact from './sections/Contact'
import ExperienceSection from './sections/ExperienceSection'
import FeatureCards from './sections/FeatureCards'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import ShowCaseSection from './sections/ShowCaseSection'
import TechStack from './sections/TechStack'

function App() {

  return (
   <div>
    <NavBar />
    <Hero />
    <ShowCaseSection />
    <LogoSection />
    <FeatureCards />
    <ExperienceSection />
    <TechStack />
    <Contact />
    <Footer />
   </div>
  )
}

export default App
