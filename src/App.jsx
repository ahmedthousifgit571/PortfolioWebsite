import LogoSection from './components/LogoSection'
import NavBar from './components/NavBar'
import './index.css'
import FeatureCards from './sections/FeatureCards'
import Hero from './sections/Hero'
import ShowCaseSection from './sections/ShowCaseSection'

function App() {

  return (
   <div>
    <NavBar />
    <Hero />
    <ShowCaseSection />
    <LogoSection />
    <FeatureCards />
   </div>
  )
}

export default App
