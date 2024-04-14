import './App.css'
import { About } from './components/About/About'
import { Github } from './components/About/Github'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
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
      </main>
      <Footer/> 
      <ScrollToTop/>
    </div>
      
    </>
  )
}

export default App
