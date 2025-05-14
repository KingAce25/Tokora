import './App.css'
import Faq from './faq/Faq'
import Features from './features/Features'
import Footer from './footer/Footer'
import Hero from './hero/Hero'
import How from './how/How'
import Nabar from "./navbar/NavBar"

function App() {

  return (
    <div>
      <Nabar />
      <Hero />
      <Features />
      <How />
      <Faq />
      <Footer />
    </div>
  )
}

export default App
