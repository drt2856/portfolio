import cv from "../assets/cv.pdf"
export function Header() {
    return  <section >
    <header >
      <nav className='navbar navbar-expand-lg bg-body-tertiary '>
        <a className="navbar-brand mx-3 h2" href="#">Full stack web developer</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar-text " id="navbarSupportedContent">
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a className='nav-link' href="#proyectos">Proyectos</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#tecnologias">Tecnologias</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#carrera">Carrera profecional</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#contactos">Contacto</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Idioma
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Español</a></li>
                <li><a className="dropdown-item" href="#">English</a></li>
              </ul>
            </li>
          </ul>

        </div>

      </nav>
    </header>
    <div className='wall p-5 blue-shadow '>
      <h1 className='display-1 '> <b>Daniel Rodríguez Torres</b> </h1>
      <p>Desarrollador web full stack a su servicio</p>
      <a className='btn btn-danger ' href={cv} download="CV.pdf">
        Descargar cv <i className='bi bi-file-earmark-arrow-down' />
      </a>
      <a className='btn btn-purple m-2 ' href="https://github.com/drt2856">
        GitHub <i className='bi bi-github' />
      </a>
      <a className='btn btn-primary'  href="https://www.linkedin.com/in/daniel-rodr%C3%ADquez-torres-571424260/">
        Linkedin <i className='bi bi-linkedin' />
      </a>
    </div>


  </section>
}