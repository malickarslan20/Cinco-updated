
import './App.css'
import About from './Component/About'
import HeroSection from './Component/HeroSection'
import Navbar from './Component/Navbar'
import Services from './Component/Services'


function App() {
  

  return (
    <>
    <div className="min-h-screen bg-black text-white">
   <Navbar/>
   <HeroSection/>
   <About/>
   <Services/>
    </div>
      
    </>
  )
}

export default App
