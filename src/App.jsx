
import './App.css'
import reactSVG from "./assets/react.svg"
import springSVG from "./assets/spring.svg"
import cv from "./assets/cv.pdf"
import logorandapi from "./assets/logo-randapi.png"


function App() {

  return (
    <main className=''>
      <section >
        <header>
          <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <a className="navbar-brand mx-3 h2" href="#">Full stack web developer</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-text " id="navbarSupportedContent">
              <ul className='navbar-nav ms-auto'>
                <li className='nav-item'>
                  <a className='nav-link' href="">Proyectos</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href="">Tecnologias</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href="">Contacto</a>
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
        <div className='wall p-5 blue-shadow'>
          <h1 className='display-1 '> <b>Daniel Rodríguez Torres</b> </h1>
          <p>Desarrollador web full stack a su servicio</p>
          <a className='btn btn-danger ' href={cv} download="CV.pdf">
            Descargar cv <i className='bi bi-file-earmark-arrow-down' />
          </a>
          <a className='btn btn-purple mx-2 ' href="">
            GitHub <i className='bi bi-github' />
          </a>
          <a className='btn btn-primary  ' href="">
            Linkedin <i className='bi bi-linkedin' />
          </a>
        </div>


      </section>

      <section className='container-sm my-5'>
        <h2>Sobre mi</h2>
        <p>
          &quot;I am a Computer Engineer with experience in web development and I am seeking new challenges in
          my professional career. My professional stack focuses on developing web applications using Java
          (Spring Boot) on the backend and React.js on the frontend. I am an organized and ambitious person,
          with a strong desire to progress in this field. I consider myself capable of taking on high rigor tasks and
          I am willing to learn what is necessary to provide exceptional service.&quot;
        </p>
      </section>

      <section className='container my-5'>
        <h2>Mis proyectos</h2>
        <div className="row">
          <div className="card col-4 m-1 blue-shadow" >
            <img
              src={logorandapi}
              className="card-img-top"
              alt="captura de pantalla de la aplicación"
            />
            <div className="card-body">
              <h5 className="card-title">
                <a href="https://www.randapi.cu/" target='_blank' >
                  Rand Api <i className='bi bi-link' />
                </a>
              </h5>
              <p className="card-text">Api dedicada a aquellas personas que necesiten datos aleatoriaos personalizables
                de  una api  para practicar sus conocimientos en el font-end.
              </p>
              <img src={reactSVG} alt="react icon" /> + <img src={springSVG} alt="react icon" />
            </div>
          </div>

          <div className="card col-4 m-1 blue-shadow" >
            <img
              src={logorandapi}
              className="card-img-top"
              alt="captura de pantalla de la aplicación"
            />
            <div className="card-body">
              <h5 className="card-title">
                <a href="https://www.randapi.cu/" target='_blank' >
                  Rand Api <i className='bi bi-link' />
                </a>
              </h5>
              <p className="card-text">Api dedicada a aquellas personas que necesiten datos aleatoriaos personalizables
                de  una api  para practicar sus conocimientos en el font-end.
              </p>
              <img src={reactSVG} alt="react icon" /> + <img src={springSVG} alt="react icon" />
            </div>
          </div>
        </div>


      </section>

      <section className='container'>
        <h2>Tecnologias que uso</h2>
        <p>Estas son algunas de las tecnologias y lenguanjes de mi stack</p>
        <table className='blue-shadow table table-borderless p-5'>
          <tbody >
            <tr>
              <td>
                Java <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="75" height="75" viewBox="0 0 48 48">
                  <path fill="#F44336" d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"></path><path fill="#F44336" d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"></path><g><path fill="#1565C0" d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"></path><path fill="#1565C0" d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"></path><path fill="#1565C0" d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"></path><path fill="#1565C0" d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"></path><path fill="#1565C0" d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"></path></g>
                </svg>
              </td>
              <td>
                Spring Boot <img src={springSVG} alt="react icon" />
              </td>
              <td>
                <ul>
                  <li>
                    Spring JPA
                  </li>
                  <li>
                    Hibernate
                  </li>
                  <li>
                    Spring sequrity
                  </li>
                  <li>
                    Maven
                  </li>
                  <li>
                    JWT
                  </li>
                  <li>
                    Apache Kafka
                  </li>
                  <li>
                    Spring Cloud
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                Javascript <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                  <path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                </svg>
              </td>
              <td>
                React.js <img src={reactSVG} alt="react icon" />
              </td>
              <td>
                <ul>
                  <li>
                    Boostrap
                  </li>
                  <li>
                    TailWind
                  </li>
                  <li>
                    Redux
                  </li>
                  <li>
                    Axios
                  </li>
                  <li>
                    Sustan
                  </li>

                </ul>
              </td>

            </tr>
            <tr>
              <td>Postgres <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                <path fill="#fff" d="M44.083,29.79c-0.183-0.829-0.935-1.796-2.452-1.796c-0.31,0-0.649,0.039-1.035,0.119c-0.708,0.146-1.311,0.217-1.842,0.241c4.133-7.04,6.816-16.819,4.159-20.214c-3.501-4.473-8.214-5.141-10.711-5.141L31.967,3c-0.929,0.015-1.893,0.129-2.863,0.339l-3.583,0.774C25.033,4.052,24.536,4.009,24.018,4l-0.03,0l-0.016,0l-0.152-0.001c-1.593,0-3.046,0.338-4.341,0.973l-1.251-0.493c-1.72-0.678-4.308-1.485-6.868-1.485c-0.144,0-0.287,0.003-0.431,0.008C8.407,3.093,6.241,4.05,4.664,5.769C2.696,7.915,1.8,11.054,2.003,15.1C2.013,15.309,4.461,36,11.4,36h0.025l0.064-0.001c0.901-0.022,1.76-0.384,2.563-1.077c0.613,0.46,1.406,0.732,2.145,0.84c0.488,0.115,1.366,0.278,2.418,0.278c1.284,0,2.442-0.263,3.44-0.738c-0.001,0.88-0.006,1.994-0.016,3.418l-0.001,0.075l0.005,0.075c0.097,1.419,0.342,2.698,0.711,3.701c1.051,2.859,2.866,4.434,5.111,4.434c0.093,0,0.188-0.003,0.284-0.009c1.846-0.114,3.717-1.151,5.004-2.772c1.393-1.755,1.715-3.607,1.839-5.026L35,39.111v-0.088v-4.079l0.103,0.01l0.436,0.038l0.042,0.004l0.042,0.002c0.124,0.006,0.252,0.008,0.381,0.008c1.507,0,3.362-0.391,4.616-0.974C41.819,33.476,44.559,31.948,44.083,29.79z"></path><path fill="#0277bd" d="M33,34c0-0.205,0.012-0.376,0.018-0.565C33.008,33.184,33,33,33,33s0.012-0.009,0.032-0.022c0.149-2.673,0.886-3.703,1.675-4.29c-0.11-0.153-0.237-0.318-0.356-0.475c-0.333-0.437-0.748-0.979-1.192-1.674l-0.082-0.158c-0.067-0.164-0.229-0.447-0.435-0.819c-1.183-2.14-3.645-6.592-1.96-9.404c0.738-1.232,2.122-1.942,4.121-2.117C33.986,11.718,30.925,6.115,23.985,6c-0.002,0-0.004,0-0.006,0c-6.041-0.098-8.026,5.392-8.672,8.672c0.89-0.377,1.906-0.606,2.836-0.606c0.014,0,0.029,0,0.043,0c2.29,0.017,3.865,1.239,4.323,3.354c0.335,1.552,0.496,2.91,0.492,4.153c-0.01,2.719-0.558,4.149-1.042,5.411l-0.154,0.408c-0.124,0.334-0.255,0.645-0.379,0.937c-0.126,0.298-0.237,0.563-0.318,0.802c0.484,0.11,0.864,0.265,1.125,0.38l0.151,0.066c0.047,0.02,0.094,0.043,0.137,0.069c0.848,0.516,1.376,1.309,1.489,2.233c0.061,0.498,0.051,3.893,0.03,6.855c0.087,1.285,0.305,2.364,0.593,3.146c0.409,1.114,1.431,3.241,3.394,3.119c1.37-0.085,2.687-0.919,3.561-2.019c0.938-1.181,1.284-2.487,1.414-3.958V34z"></path><path fill="#0277bd" d="M15.114 28.917c-1.613-1.683-2.399-3.947-2.104-6.056.285-2.035.124-4.027.037-5.098-.029-.357-.048-.623-.047-.77 0-.008.002-.015.003-.023 0-.004-.002-.007-.002-.011.121-3.021 1.286-7.787 4.493-10.62C15.932 5.724 13.388 4.913 11 5 7.258 5.136 3.636 7.724 4 15c.137 2.73 3.222 19.103 7.44 19 .603-.015 1.229-.402 1.872-1.176 1.017-1.223 2.005-2.332 2.708-3.104C15.705 29.481 15.401 29.217 15.114 28.917zM37.023 14.731c.015.154.002.286-.022.408.031.92-.068 1.813-.169 2.677-.074.636-.15 1.293-.171 1.952-.021.645.07 1.282.166 1.956.225 1.578.459 3.359-.765 5.437.225.296.423.571.581.837 4.61-7.475 6.468-16.361 4.695-18.626C38.655 5.944 34.941 4.952 31.999 5c-.921.015-1.758.139-2.473.294C34.602 7.754 36.863 13.026 37.023 14.731zM41 30.071c-2.665.55-3.947.257-4.569-.126-.1.072-.2.133-.293.19-.372.225-.961.583-1.105 2.782.083.016.156.025.246.044L35.714 33c1.32.06 3.049-.31 4.063-.781C41.962 31.205 43.153 29.627 41 30.071zM22.023 32.119c-.037-.298-.198-.539-.492-.732l-.108-.047C21.062 31.181 20.653 31 20 31h-.004c-.127.01-.253.019-.38.019-.052 0-.103-.007-.155-.009-.474.365-1.148.647-2.816.99-2.98.759-1.221 1.655-.078 1.794 1.106.277 3.735.614 5.481-.809C22.043 32.537 22.035 32.229 22.023 32.119z"></path><path fill="#0277bd" d="M20.681 18.501c-.292.302-.753.566-1.262.484-.828-.134-1.463-1.133-1.417-1.508h0c.044-.374.751-.569 1.578-.435.287.047.548.128.768.228-.32-.688-.899-1.085-1.782-1.182-1.565-.174-3.226.644-3.56 1.097.007.11.02.251.033.417.093 1.147.265 3.284-.05 5.537-.208 1.485.393 3.169 1.567 4.395.757.79 1.641 1.29 2.513 1.438.111-.478.309-.944.513-1.425.113-.265.233-.547.346-.852l.162-.427c.443-1.155.9-2.35.909-4.703C21.003 20.66 20.892 19.627 20.681 18.501zM34.847 22.007c-.104-.729-.211-1.484-.185-2.303.023-.742.105-1.442.184-2.119.062-.533.11-1.045.138-1.55-1.289.107-2.145.479-2.551 1.108.168-.057.358-.102.568-.129.892-.116 1.543.141 1.618.637.055.363-.253.705-.388.836-.277.269-.626.442-.981.488-.064.008-.129.012-.192.012-.353 0-.69-.121-.949-.3.112 1.973 1.567 4.612 2.283 5.907.153.277.271.498.369.688C35.154 24.163 35.009 23.143 34.847 22.007z"></path>
              </svg></td>
              <td>Git <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                <path fill="#F4511E" d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"></path>
              </svg></td>
              <td>GitHub <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 32 32">
                <path fillRule="evenodd" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"></path>
              </svg></td>
              <td>Postman <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 64 64">
                <path fill="#f7a1c8" d="M5.559,22.837C0.505,37.441,8.247,53.378,22.852,58.432s30.542-2.687,35.596-17.292	S55.76,10.599,41.156,5.545S10.614,8.232,5.559,22.837z"></path><path fill="#ed7899" d="M48.246,48.245c-8.978,8.975-23.532,8.973-32.507-0.005s-8.972-23.532,0.006-32.507	s23.532-8.973,32.507,0.005c1.807,1.808,3.301,3.905,4.418,6.205C56.953,30.757,55.177,41.317,48.246,48.245z"></path><path fill="#8d6c9f" d="M58.064,19.323C51.069,4.926,33.728-1.074,19.33,5.92C12.416,9.279,7.12,15.247,4.607,22.511	C-0.637,37.637,7.374,54.15,22.501,59.393s31.639-2.768,36.883-17.894C61.928,34.229,61.453,26.241,58.064,19.323z M57.495,40.81	C52.614,54.89,37.243,62.348,23.162,57.468S1.623,37.217,6.503,23.136S26.755,1.597,40.836,6.478	c6.761,2.344,12.315,7.277,15.439,13.715C59.4,26.631,59.838,34.048,57.495,40.81z"></path><path fill="#8d6c9f" d="M46.126,46.125c-0.39,0.39-0.39,1.023,0,1.413l1.413,1.413c0.39,0.39,1.023,0.39,1.413,0	c0.39-0.39,0.39-1.023,0-1.413l-1.413-1.413C47.149,45.735,46.517,45.735,46.126,46.125z"></path><path fill="#8d6c9f" d="M50.423,41.941c-0.488-0.259-1.093-0.073-1.351,0.414c-0.246,0.464-0.091,1.04,0.355,1.317	l1.731,0.996c0.482,0.275,1.096,0.107,1.371-0.375s0.107-1.096-0.375-1.371L50.423,41.941z"></path><path fill="#8d6c9f" d="M37.837,50.909c-0.533,0.142-0.851,0.69-0.708,1.223c0.001,0.002,0.001,0.004,0.002,0.007	l0.516,1.929c0.165,0.527,0.726,0.82,1.252,0.655c0.496-0.155,0.79-0.664,0.677-1.171l-0.516-1.929	c-0.139-0.534-0.685-0.854-1.219-0.715C37.839,50.909,37.838,50.909,37.837,50.909z"></path><path fill="#8d6c9f" d="M52.14,37.129c-0.539-0.12-1.073,0.219-1.193,0.758c-0.113,0.507,0.181,1.016,0.677,1.171	l1.929,0.516c0.539,0.12,1.073-0.219,1.193-0.758c0.113-0.507-0.181-1.016-0.677-1.171L52.14,37.129z"></path><path fill="#8d6c9f" d="M42.296,49.065c-0.475,0.278-0.636,0.888-0.36,1.364l0.989,1.724	c0.259,0.488,0.864,0.673,1.351,0.414c0.488-0.259,0.673-0.864,0.414-1.351c-0.011-0.02-0.022-0.04-0.034-0.059l-0.996-1.731	C43.382,48.95,42.772,48.789,42.296,49.065z"></path><path fill="#8d6c9f" d="M31.59,10.29c0.547-0.076,0.928-0.581,0.852-1.127c-0.059-0.424-0.382-0.764-0.803-0.844	c-0.835-0.012-1.67,0.021-2.502,0.099c-0.552,0.018-0.984,0.481-0.965,1.032c0.018,0.552,0.481,0.984,1.032,0.965	c0.041-0.001,0.083-0.005,0.124-0.012C30.08,10.325,30.835,10.287,31.59,10.29z"></path><path fill="#8d6c9f" d="M11.45,24.423c2.215-6.358,7.337-11.275,13.78-13.229c0.529-0.158,0.829-0.715,0.671-1.244	c-0.158-0.529-0.715-0.829-1.244-0.671c-7.037,2.141-12.631,7.509-15.059,14.452c-0.196,0.516,0.063,1.093,0.579,1.289	c0.516,0.196,1.093-0.063,1.289-0.579c0.007-0.017,0.013-0.035,0.018-0.053L11.45,24.423z"></path><path fill="#fff8ee" d="M42.009,23.207c-0.083-0.317-0.218-0.591-0.408-0.81L30.334,33.781l1.455,1.431l8.461-8.582 C40.275,26.606,42.099,24.806,42.009,23.207z"></path><polygon fill="#fff8ee" points="31.084,35.499 29.721,34.159 27.963,35.979"></polygon><path fill="#fff8ee" d="M31.706,36.111L27.16,36.81l-8.332,8.624l3.497,3.438l0.175,0.003l-0.875-3.625 c0,0,4.82-2.189,11.267-7.974L31.706,36.111z"></path><polygon fill="#fff8ee" points="18.342,45.937 15.625,48.75 21.309,48.853"></polygon><path fill="#fff8ee" d="M40.743,27.126l-8.455,8.576l1.123,1.104c0.114-0.104,0.224-0.2,0.338-0.306 c6.093-5.65,7.374-8.06,8.022-10.623C41.285,26.59,40.786,27.085,40.743,27.126z"></path><path fill="#fff8ee" d="M29.835,33.29l11.21-11.328c-0.875-0.462-2.224-0.403-3.795,0.163 c-3.125,1.125-6.875,5.25-6.875,5.25l-3.008,3.489L29.835,33.29z"></path><polygon fill="#fff8ee" points="26.909,31.395 24.125,34.625 29.229,33.675"></polygon><g><path fill="#fff8ee" d="M43.499,19.743c-0.066-0.068-0.102-0.161-0.098-0.256c0.003-0.095,0.045-0.185,0.116-0.248 l4.018-3.599c-0.724-0.551-1.617-0.89-2.597-0.89c-2.382,0-4.313,1.931-4.313,4.313s1.931,4.313,4.313,4.313 c0.614,0,1.195-0.132,1.724-0.364L43.499,19.743z"></path><path fill="#fff8ee" d="M44.254,19.518l3.045,3.147c1.173-0.771,1.95-2.094,1.95-3.603c0-1.148-0.456-2.184-1.187-2.957 L44.254,19.518z M48.188,20.407c-0.061,0.123-0.185,0.193-0.313,0.193c-0.052,0-0.106-0.012-0.156-0.037 c-0.173-0.086-0.243-0.296-0.156-0.47c0.409-0.817,0.135-1.415,0.124-1.44c-0.082-0.173-0.01-0.382,0.162-0.466 c0.172-0.083,0.379-0.016,0.465,0.156C48.332,18.38,48.76,19.263,48.188,20.407z"></path></g>
              </svg></td>
              <td>Redis <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                <path fill="#b71c1c" d="M45,29.316c0-0.637-1.686-1.153-3.769-1.153c-1.812,0-3.32,0.391-3.683,0.911	c-3.586-1.694-7.173-3.388-10.759-5.083c-1.248-0.59-2.673-0.584-3.918,0.014c-3.818,1.837-7.636,3.674-11.454,5.511	c-0.864-0.126-1.907-0.201-3.032-0.201C5.408,29.316,3,29.832,3,30.469v3.46c0,0.033,0.033,0.064,0.045,0.096	c-0.146,0.555,0.07,1.205,0.649,1.478c5.641,2.665,11.281,5.329,16.922,7.994c1.432,0.677,3.068,0.671,4.496-0.016	c6.442-3.1,12.884-6.199,19.327-9.299c0.484-0.233,0.651-0.786,0.509-1.247C44.971,32.882,45,32.83,45,32.775V29.316z"></path><path fill="#e53935" d="M20.616,39.158c-5.641-2.522-11.281-5.044-16.922-7.566c-0.922-0.412-0.926-1.727-0.007-2.146	c6.395-2.912,12.789-5.824,19.184-8.736c1.244-0.567,2.67-0.572,3.918-0.014c5.881,2.63,11.763,5.259,17.644,7.889	c0.754,0.337,0.758,1.414,0.006,1.756c-6.442,2.934-12.884,5.868-19.327,8.801C23.684,39.792,22.048,39.798,20.616,39.158z"></path><path fill="#b71c1c" d="M45,21.675c0-0.637-1.686-1.153-3.769-1.153c-1.812,0-3.32,0.391-3.683,0.911	c-3.586-1.694-7.173-3.388-10.759-5.083c-1.248-0.59-2.673-0.584-3.918,0.014c-3.818,1.837-7.636,3.674-11.454,5.511	c-0.864-0.126-1.907-0.201-3.032-0.201C5.408,21.675,3,22.192,3,22.829v3.46c0,0.033,0.033,0.064,0.045,0.096	c-0.146,0.555,0.07,1.205,0.649,1.478c5.641,2.665,11.281,5.329,16.922,7.994c1.432,0.677,3.068,0.671,4.496-0.016	c6.442-3.1,12.884-6.199,19.327-9.299c0.484-0.233,0.651-0.786,0.509-1.247C44.971,25.242,45,25.19,45,25.135V21.675z"></path><path fill="#e53935" d="M20.616,31.517c-5.641-2.522-11.281-5.044-16.922-7.566c-0.922-0.412-0.926-1.727-0.007-2.146	c6.395-2.912,12.789-5.824,19.184-8.736c1.244-0.567,2.67-0.572,3.918-0.014c5.881,2.63,11.763,5.259,17.644,7.889	c0.754,0.337,0.758,1.414,0.006,1.756c-6.442,2.934-12.884,5.868-19.327,8.801C23.684,32.152,22.048,32.158,20.616,31.517z"></path><path fill="#b71c1c" d="M45,14.035c0-0.637-1.686-1.153-3.769-1.153c-1.812,0-3.32,0.391-3.683,0.911	c-3.586-1.694-7.173-3.388-10.759-5.083c-1.248-0.59-2.673-0.584-3.918,0.014c-3.818,1.837-7.636,3.674-11.454,5.511	c-0.864-0.126-1.907-0.201-3.032-0.201C5.408,14.035,3,14.551,3,15.188v3.46c0,0.033,0.033,0.064,0.045,0.096	c-0.146,0.555,0.07,1.205,0.649,1.478c5.641,2.665,11.281,5.329,16.922,7.994c1.432,0.677,3.068,0.671,4.496-0.016	c6.442-3.1,12.884-6.199,19.327-9.299c0.484-0.233,0.651-0.786,0.509-1.247C44.971,17.601,45,17.549,45,17.494V14.035z"></path><path fill="#e53935" d="M20.616,23.877c-5.641-2.522-11.281-5.044-16.922-7.566c-0.922-0.412-0.926-1.727-0.007-2.146	c6.395-2.912,12.789-5.824,19.184-8.736c1.244-0.567,2.67-0.572,3.918-0.014c5.881,2.63,11.763,5.259,17.644,7.889	c0.754,0.337,0.758,1.414,0.006,1.756c-6.442,2.934-12.884,5.868-19.327,8.801C23.684,24.512,22.048,24.517,20.616,23.877z"></path><path fill="#fff" d="M18.748,14.741c-0.002,1.042-2.762,2.057-5.093,2.086c-2.419,0.03-5.273-0.993-5.282-2.051	c-0.009-1.061,2.842-2.161,5.311-2.135C16.017,12.665,18.751,13.703,18.748,14.741z"></path><path fill="#fff" d="M17.038,18.471c2.393,1.022,4.785,2.045,7.178,3.067c1.054-1.56,2.108-3.12,3.162-4.68	C23.931,17.396,20.485,17.934,17.038,18.471z"></path><path fill="#fff" d="M21.86,9.775c-1.101,0.401-2.203,0.801-3.304,1.202c1.507,0.132,3.015,0.264,4.522,0.395	c0.48,0.796,0.959,1.592,1.439,2.387c0.295-0.722,0.59-1.444,0.885-2.166c1.286-0.1,2.572-0.2,3.858-0.3	c-0.997-0.419-1.994-0.839-2.991-1.259c0.254-0.608,0.508-1.216,0.762-1.825c-0.97,0.29-1.939,0.58-2.909,0.87	c-1.07-0.422-2.14-0.843-3.21-1.265C21.228,8.468,21.544,9.122,21.86,9.775z"></path><path fill="#b71c1c" d="M27.267,14.619c2.271-0.906,4.543-1.813,6.814-2.719c1.962,0.834,3.924,1.668,5.886,2.502	c-2.202,0.876-4.403,1.752-6.605,2.629C31.331,16.226,29.299,15.423,27.267,14.619z"></path><path fill="#a01c1c" d="M34.082,11.963c-0.005,1.596-0.01,3.191-0.015,4.787c1.967-0.783,3.934-1.565,5.901-2.348	C38.006,13.589,36.044,12.776,34.082,11.963z"></path>
              </svg></td>
              
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Escolaridad</h2>
      </section>

      <section>
        <h2>Contactos</h2>
      </section>

    </main>
  )
}

export default App
