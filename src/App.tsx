import { ArrowUp } from "lucide-react"

//COMPONENTS
import { Header } from "./modules/homepage/header"
import { Start } from "./modules/homepage/start"
import { AboutMe } from "./modules/homepage/about-me"
import { Abilities } from "./modules/homepage/abilities"
import { Projects } from "./modules/homepage/projects"
import { Contact } from "./modules/homepage/contact"
import { Experiences } from "./modules/homepage/experiences"

function App() {

  return (
      <>
        <div className="grid-fade" aria-hidden />
        <Header />
        <main>
          <Start />
          <AboutMe />
          <Abilities />
          <Projects />
          <Experiences />
          <Contact />
        </main>
        <footer className="border-t">
          <div className="container flex flex-col items-center justify-between gap-4 py-8 font-mono text-xs text-muted-foreground sm:flex-row">
            <p>
              © {new Date().getFullYear()} Gabriel Lima <span className="text-primary">·</span>
            </p>
            <a href="#start" className="inline-flex items-center gap-1.5 transition-colors hover:text-primary">
              voltar ao topo <ArrowUp className="size-3.5" />
            </a>
          </div>
        </footer>
      </>
  )
}

export default App
