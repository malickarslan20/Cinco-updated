
import './App.css'
import About from './Component/About'
import HeroSection from './Component/HeroSection'
import Navbar from './Component/Navbar'
import Services from './Component/Services'
import TeamSection from './Component/Team'

function App() {
  

  return (
    <>
    <div className="min-h-screen bg-black text-white">
   <Navbar/>
   <HeroSection/>
   <About/>
   <Services/>
   <TeamSection/>
    </div>
      
    </>
  )
}

export default App
