import { LANGUAGES_SUPORTED } from '../context/lenguageContext';
import { useLanguage } from '../hooks/UseLanguage';
import './Timeline.css'

export function Carrer() {
    const { language } = useLanguage();

    return <section id="carrera">
        <div className="container my-5" >
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title m-3">
                                {language === LANGUAGES_SUPORTED.ESPAÑOL ?
                                    "Trayectoria Profesional"
                                    :
                                    "Career"
                                }</h2>
                            <div id="content">
                                <ul className="timeline " >
                                    <li className="event work" data-date="14/2/2023 - ...">
                                        <h3 className='mb-2'>
                                            {language === LANGUAGES_SUPORTED.ESPAÑOL ?
                                                "Especialista Informático en la Central Termoeléctrica  Máximo Gómez de Mariel"
                                                :
                                                "Computer Specialist at the Máximo Gómez de Mariel Thermoelectric Power Plant"
                                            }</h3>
                                        <p>
                                            {language === LANGUAGES_SUPORTED.ESPAÑOL ?
                                                " En mi trayectoria en esta empresa, desempeñé diversos roles. Mi función principal consistía en ser el administrador de redes informáticas, supervisando y manteniendo el correcto funcionamiento de los servidores y las redes. Además, me encargaba de desplegar software informático y proteger los datos sensibles de los trabajadores."
                                                :
                                                " In my career in this company, I played various roles. My primary role was to be the computer network administrator, overseeing and maintaining the proper functioning of servers and networks. In addition, I was in charge of deploying computer software and protecting the sensitive data of the workers."
                                            }
                                        </p>
                                        <p>
                                            {language === LANGUAGES_SUPORTED.ESPAÑOL ?
                                                "Adicionalmente, asumí el rol de especialista encargado de implementar el nuevo programa de control de acceso a la empresa. Fui responsable de garantizar su correcta puesta en funcionamiento."
                                                :
                                                "Additionally, I assumed the role of specialist in charge of implementing the new access control program to the company. I was responsible for ensuring its proper commissioning."
                                            }</p>
                                        <p>
                                            {language === LANGUAGES_SUPORTED.ESPAÑOL ?
                                                "Por último, desarrollé la página web oficial de la empresa, que hasta ese momento no contaba con ninguna presencia en línea"
                                                :
                                                "Finally, I developed the company's official website, which until then did not have any online presence"
                                            }</p>
                                    </li>
                                    <li className="event education" data-date="1/3/2019 - 20/12/22">
                                        <h3>
                                            {language === LANGUAGES_SUPORTED.ESPAÑOL ?
                                                "Estudios de Ingeniería Informática en la Universidad Agraria de la Habana"
                                                :
                                                "Computer Engineering studies at the Universidad Agraria de la Habana"
                                            }</h3>
                                        <p>
                                            {language === LANGUAGES_SUPORTED.ESPAÑOL ?
                                                "Me gradué como ingeniero informático en la Universidad Agraria de La Habana, donde me preparé intensamente para el mundo laboral en diversas especialidades. Entre ellas, destacan el desarrollo de software, el desarrollo web, la ingeniería de requisitos y las investigaciones operacionales."
                                                :
                                                "I graduated as a computer engineer from the Universidad Agraria de La Habana, where I prepared intensely for the world of work in various specialties. These include software development, web development, requirements engineering, and operational research."
                                            }</p>
                                        <p>
                                            {language === LANGUAGES_SUPORTED.ESPAÑOL ?
                                                "Aunque mis estudios abarcaron varias áreas, mi enfoque principal se centró en el desarrollo web utilizando los frameworks Java Spring Boot y React.js. Me especialicé en estas tecnologías y continué mejorando mis habilidades. Además, participé en varios eventos de programación, obteniendo buenos resultados"
                                                :
                                                "Although my studies covered several areas, my main focus was on web development using the Java Spring Boot and React.js frameworks. I specialized in these technologies and continued to improve my skills. In addition, I participated in several programming events, obtaining good results"
                                            }</p>
                                        <p> {language === LANGUAGES_SUPORTED.ESPAÑOL ?
                                            "En mi último año de carrera, tuve la oportunidad de practicar la docencia como profesor de la asignatura de introducción a la programación. Fue una experiencia enriquecedora que me permitió compartir mis conocimientos con otros estudiantes"
                                            :
                                            "In my last year of study, I had the opportunity to practice teaching as a professor of the introductory subject to programming. It was an enriching experience that allowed me to share my knowledge with other students"
                                        }</p>
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