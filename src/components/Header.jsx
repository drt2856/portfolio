import cv from "../assets/cv.pdf"
import { LANGUAGES_SUPORTED } from "../context/lenguageContext";
import { useLanguage } from "../hooks/UseLanguage"
export function Header() {
  const { language, setPreferencedLanguage } = useLanguage();

  return <section >
    <header id="header" >
      <nav className='navbar navbar-expand-lg bg-body-tertiary '>
        <a className="navbar-brand mx-3 h2 " href="#">Full stack web developer</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar-text " id="navbarSupportedContent">
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a className='nav-link' href="#proyectos">
                {language === LANGUAGES_SUPORTED.ESPAÑOL ?
                  "Proyectos"
                  :
                  "Projects"
                }
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#tecnologias">
                {language === LANGUAGES_SUPORTED.ESPAÑOL ?
                  "Tecnologías"
                  :
                  "Technologies"
                }</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#carrera">
                {language === LANGUAGES_SUPORTED.ESPAÑOL ?
                  "Carrera profesional"
                  :
                  "Career"
                }</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#contactos">
                {language === LANGUAGES_SUPORTED.ESPAÑOL ?
                  "Contacto"
                  :
                  "Contact"
                }</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {language === LANGUAGES_SUPORTED.ESPAÑOL ?
                  "Idioma"
                  :
                  "Language"
                }
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" onClick={()=>setPreferencedLanguage(LANGUAGES_SUPORTED.ESPAÑOL)}>Español</a></li>
                <li><a className="dropdown-item" onClick={()=>setPreferencedLanguage(LANGUAGES_SUPORTED.ENGLISH)}>English</a></li>
              </ul>
            </li>
          </ul>

        </div>

      </nav>
    </header>
    <div className='wall p-5 blue-shadow '>
      <div>
        <h1 className='display-1 '> <b>Daniel Rodríguez Torres</b> </h1>
        <h3 className="text-primary">
          {language === LANGUAGES_SUPORTED.ESPAÑOL ?
            "Desarrollador web full stack a su servicio"
            :
            "Full stack web developer at your service"
          }
          </h3>
        <a className='btn btn-danger ' href={cv} download="CV.pdf">
        {language === LANGUAGES_SUPORTED.ESPAÑOL ?
            "Descargar curriculum"
            :
            "Download curriculum"
          } <i className='bi bi-file-earmark-arrow-down' />
        </a>
        <a className='btn btn-purple m-2 ' href="https://github.com/drt2856">
          GitHub <i className='bi bi-github' />
        </a>
        <a className='btn btn-primary' href="https://www.linkedin.com/in/daniel-rodr%C3%ADquez-torres-571424260/">
          Linkedin <i className='bi bi-linkedin' />
        </a>
      </div>

    </div>


  </section>
}