// import './App.css'
import Navigation from './Components/Navigation'
import Skills from './Components/Skills'
import Headline from './Components/Headline'
import Projects from './Components/Projects'
import Certifications from './Components/Certifications'
import Contact from './Components/Contact' 


function App() { 

  return (
    <>
      <div>
        <Navigation /> 
        <Headline/>
        <Skills /> 
        <Projects/>
        <Certifications />
        <Contact /> 
      </div>
    </>
        
  )
}

export default App
