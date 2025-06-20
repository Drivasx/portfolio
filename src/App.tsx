import { Header } from "./components/Header"
import { Home } from "./sections/Home"
import { Services } from "./sections/Services"
import { Projects } from "./sections/Projects"
import { Testimonials } from "./sections/Testimonials"
import { Contact } from "./sections/Contact"

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Services/>
      <Projects/>
      <Testimonials/>
      <Contact/>
    </>
  )
}

export default App
