import './App.css'
import { About } from './components/About/About'
import { Github } from './components/About/Github'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Projects } from "./components/Projects/Projects"
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop'

function App() {
  

  return (
    <>
    <div id="top" className={`app`}>
      <section id="#home">
        <Header/>
      </section>
      <main>
        <About/>
        <Github/>
        <section id="#projects">
          <Projects/>
        </section>
        <section id="#contact">
          <Contact />
        </section>
      </main>
      <Footer/> 
      <ScrollToTop/>
    </div>
      
    </>
  )
}

export default App
