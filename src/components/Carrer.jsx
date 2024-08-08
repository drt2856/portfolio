import './Timeline.css'

export function Carrer() {
    return <section id="carrera">
        <div className="container my-5" >
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title m-3">Trayectoria Profesional</h2>
                            <div id="content">
                                <ul className="timeline " >
                                    <li className="event work" data-date="14/2/2023 - ...">
                                        <h3 className='mb-2'>Especialista Informático en la Central Termoélectica Máximo Gómez de Mariel</h3>
                                        <p>En mi trayectoria en esta empresa, desempeñé diversos roles. Mi función principal consistía en ser el administrador de redes informáticas, supervisando y manteniendo el correcto funcionamiento de los servidores y las redes. Además, me encargaba de desplegar software informático y proteger los datos sensibles de los trabajadores.</p>
                                        <p>Adicionalmente, asumí el rol de especialista encargado de implementar el nuevo programa de control de acceso a la empresa. Fui responsable de garantizar su correcta puesta en funcionamiento.</p>
                                        <p>Por último, desarrollé la página web oficial de la empresa, que hasta ese momento no contaba con ninguna presencia en línea</p>
                                    </li>
                                    <li className="event education" data-date="1/3/2019 - 20/12/22">
                                        <h3>Estudios de Ingeniería Informática en la Universidad Agraría de la Habana</h3>
                                        <p>Me gradué como ingeniero informático en la Universidad Agraria de La Habana, donde me preparé intensamente para el mundo laboral en diversas especialidades. Entre ellas, destacan el desarrollo de software, el desarrollo web, la ingeniería de requisitos y las investigaciones operacionales.</p>
                                        <p>Aunque mis estudios abarcaron varias áreas, mi enfoque principal se centró en el desarrollo web utilizando los frameworks Java Spring Boot y React.js. Me especialicé en estas tecnologías y continué mejorando mis habilidades. Además, participé en varios eventos de programación, obteniendo buenos resultados</p>
                                        <p>En mi último año de carrera, tuve la oportunidad de practicar la docencia como profesor de la asignatura de introducción a la programación. Fue una experiencia enriquecedora que me permitió compartir mis conocimientos con otros estudiantes</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}