
import './App.css'
import About from './Component/About'
import HeroSection from './Component/HeroSection'
import Navbar from './Component/Navbar'
import Projects from './Component/Porjects'
import Services from './Component/Services'
import TeamSection from './Component/Team'

function App() {
  

  return (
    <>
    <div className="min-h-screen bg-black text-white w-screen">
   <Navbar/>
   <HeroSection/>
   <About/>
   <Services/>
   <Projects/>
   <TeamSection/>
    </div>
      
    </>
  )
}

export default App
