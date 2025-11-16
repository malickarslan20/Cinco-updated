
import './App.css'
import About from './Component/About'
import ContactForm from './Component/Contact'
import Footer from './Component/Footer'
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
   <ContactForm/>
   <Footer/>
    </div>
      
    </>
  )
}

export default App
