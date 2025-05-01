import Footer from "./layouts/Footer";
import Hero from "./layouts/Hero";
import Profile from "./layouts/Profile";
import Projects from "./layouts/Projects";
import Skills from "./layouts/Skills";


function App() {
  return (
    <div className="w-[90rem]  bg-[#FFFFFF]"> 
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
