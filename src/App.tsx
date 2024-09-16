//COMPONENTS
import { Header } from "./modules/homepage/header"
import { Start } from "./modules/homepage/start"
import { AboutMe } from "./modules/homepage/about-me"
import { Abilities } from "./modules/homepage/abilities"
import { Projects } from "./modules/homepage/projects"
import { Contact } from "./modules/homepage/contact"

function App() {

  return (
      <>
        <Header />
        <Start />
        <AboutMe />
        <Abilities />
        <Projects />
        <Contact />
      </>
  )
}

export default App
