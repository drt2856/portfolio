import { Project } from './components/Project.jsx'
import { AboutMe } from "./components/AboutMe.jsx"
import { Tecnologies } from "./components/Tecnologies.jsx"
import { Header } from "./components/Header"
import { projects } from './Const/index.jsx'
import { Carrer } from './components/Carrer.jsx'
import { Contact } from './components/Contact.jsx'


function App() {

  return (
    <main className=''>
      <i className='bi bi-arrow-left back'>dfsdf</i>
      <Header />
      
        
        
      <AboutMe />


      <section id='proyectos' className='container my-5'>
        <h2>Mis proyectos</h2>
        <div className="row all">
          {projects && projects.map(project => (
            <Project
              key={project.tittle}
              description={project.description}
              link={project.link}
              photo_src={project.photo_src}
              tecnologies_src={project.tecnologies_src}
              title={project.tittle}
            />
          ))}
        </div>


      </section>

      <Tecnologies />

      <Carrer />

      <Contact />

    </main>
  )
}

export default App
