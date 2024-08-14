import { Project } from './components/Project.jsx'
import { AboutMe } from "./components/AboutMe.jsx"
import { Tecnologies } from "./components/Tecnologies.jsx"
import { Header } from "./components/Header"
import { Carrer } from './components/Carrer.jsx'
import { Contact } from './components/Contact.jsx'
import { useLanguage } from './hooks/UseLanguage.jsx'
import { LANGUAGES_SUPORTED } from './context/lenguageContext.jsx'
import reactSVG from "./assets/react.svg"
import springSVG from "./assets/spring.svg"
import logorandapi from "./assets/logo-randapi.png"


function App() {
  const { language } = useLanguage();
  const projects = [
    {
      tittle: "Rand Api",
      photo_src: <img src={logorandapi} className="card-img-top" alt="captura de pantalla de la aplicación" />,
      link: "https://www.randapi.cu/",
      description: language === LANGUAGES_SUPORTED.ESPAÑOL ?
        "Api dedicada a aquellas personas que necesiten datos aleatorios personalizables de una api para practicar sus conocimientos en el front-end.."
        :
        "Api dedicated to those people who need customizable random data from an api to practice their knowledge on the font-end.",

      tecnologies_src: [
        {
          src: springSVG,
          alt: "sprin icon"
        },
        {
          src: reactSVG,
          alt: "react icon"
        }
      ]
    },
    {
      tittle: "Snake js",
      photo_src: <img width="250" height="250" className="card-img-top mx-auto my-4" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/100/228BE6/external-snake-jungle-vitaliy-gorbachev-lineal-vitaly-gorbachev.png" alt="external-snake-jungle-vitaliy-gorbachev-lineal-vitaly-gorbachev" />,
      link: "https://drt2856.github.io/snakejs/",
      description: language === LANGUAGES_SUPORTED.ESPAÑOL ?
        "Pequeño juego inspirado en el antiguo juego proveniente de los teléfonos NOKIA, al que le añadí muchas mejoras. Con código libre para que veas un poco de lógica de programación. Que te diviertas"
        :
        "Small game inspired by the old game from NOKIA phones, to which I added many improvements. With free code so you can see a bit of programming logic. Have fun",

      tecnologies_src: [
        {
          src: reactSVG,
          alt: "react icon"
        }
      ]
    },

    {
      tittle: language === LANGUAGES_SUPORTED.ESPAÑOL ?"Plantilla para uso de JWT":"JWT Template",
      photo_src: <svg className="card-img-top" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="250" height="250" viewBox="0 0 48 48">
        <polygon fill="#546e7a" points="21.906,31.772 24.507,29.048 27.107,31.772 27.107,43 21.906,43"></polygon><polygon fill="#f50057" points="17.737,29.058 21.442,28.383 21.945,32.115 15.345,41.199 11.138,38.141"></polygon><polygon fill="#d500f9" points="15.962,24.409 19.355,26.041 17.569,29.356 6.89,32.825 5.283,27.879"></polygon><polygon fill="#29b6f6" points="17.256,19.607 19.042,22.922 15.649,24.554 4.97,21.084 6.577,16.137"></polygon><polygon fill="#00e5ff" points="21.126,16.482 20.623,20.214 16.918,19.539 10.318,10.455 14.526,7.398"></polygon><polygon fill="#546e7a" points="26.094,16.228 23.493,18.952 20.893,16.228 20.893,5 26.094,5"></polygon><polygon fill="#f50057" points="30.262,18.943 26.558,19.618 26.055,15.886 32.654,6.802 36.862,9.859"></polygon><polygon fill="#d500f9" points="32.039,23.59 28.645,21.958 30.431,18.643 41.11,15.174 42.717,20.12"></polygon><polygon fill="#29b6f6" points="30.744,28.393 28.958,25.078 32.351,23.447 43.03,26.916 41.423,31.863"></polygon><polygon fill="#00e5ff" points="26.874,31.518 27.378,27.786 31.082,28.461 37.682,37.545 33.474,40.602"></polygon>
      </svg>,
      link: "https://github.com/drt2856/general-project-example",
      description: language === LANGUAGES_SUPORTED.ESPAÑOL ?
        "Es un proyecto publico usado como plantilla para partir de una base al hacer uso de Spring Sequrity con token JWT"
        :
        "It's a public project used as a template to build on a foundation by making use of Spring Sequrity with JWT token,",
      tecnologies_src: [
        {
          src: springSVG,
          alt: "sprin icon"
        }
      ]
    }
  ]

  return (
    <main className=''>
      <a href="#header">
        <i className='bi bi-arrow-up btn btn-primary back '></i>
      </a>

      <Header />



      <AboutMe />


      <section id='proyectos' className='container my-5'>
        <h2 className='my-3'>{language === LANGUAGES_SUPORTED.ESPAÑOL ?
          "Mis proyectos"
          :
          "My projects"
        }</h2>
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
