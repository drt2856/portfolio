import { LANGUAGES_SUPORTED } from "../context/lenguageContext";
import { useLanguage } from "../hooks/UseLanguage";

export function AboutMe() {

  const { language } = useLanguage();

  return <section id="about" className='container-sm my-5' style={{ maxWidth: "800px" }}>
    <h2 className='text-center' style={{ fontSize: "50px", marginBottom: "40px" }}>
      {language === LANGUAGES_SUPORTED.ESPAÑOL ?
        "¿ Quién soy ?"
        :
        "Who am I ?"
      }</h2>
    <p>
    {language === LANGUAGES_SUPORTED.ESPAÑOL ?
        "Soy Ingeniero Informático con experiencia en desarrollo web y estoy buscando nuevos retos en mi carrera. Mi stack profesional se centra en el desarrollo de aplicaciones web utilizando Java (Spring Boot) en el backend y React.js en el frontend. Soy una persona organizada y ambiciosa, con un fuerte deseo de progresar en este campo. Me considero capaz de asumir tareas de alto rigor y estoy dispuesto a aprender lo necesario para brindar un servicio excepcional."
        :
        "I am a Computer Engineer with experience in web development and I am looking for new challenges in my career. My professional stack focuses on developing web applications using Java (Spring Boot) on the backend and React.js on the frontend. I am an organized and ambitious person, with a strong desire to progress in this field. I consider myself capable of taking on tasks of high rigor and I am willing to learn what is necessary to provide a exceptional service."
      }
      
    </p>
    <p>
    {language === LANGUAGES_SUPORTED.ESPAÑOL ?
        "He trabajado en diversos proyectos, desde aplicaciones de comercio electrónico hasta sistemas de gestión de contenido. Mi experiencia con Java y Spring Boot me ha permitido crear APIs robustas y escalables, mientras que mi conocimiento de React.js me ha permitido construir interfaces de usuario interactivas y atractivas."
        :
        "I have worked on various projects, from e-commerce applications to content management systems. My experience with Java and Spring Boot has allowed me to create robust and scalable APIs, while my knowledge of React.js has allowed me to build interactive and engaging user interfaces."
      }
      </p>
    <p>
    {language === LANGUAGES_SUPORTED.ESPAÑOL ?
        "En mi carrera, he enfrentado desafíos técnicos y he aprendido a resolver problemas de manera eficiente. Además, me considero un buen comunicador y disfruto colaborando con equipos multidisciplinarios para lograr resultados excepcionales."
        :
        "In my career, I've faced technical challenges and learned how to solve problems efficiently. In addition, I consider myself a good communicator and enjoy collaborating with multidisciplinary teams to achieve exceptional results."
      }
      </p>
    <p>{language === LANGUAGES_SUPORTED.ESPAÑOL ?
        "Estoy emocionado por la posibilidad de contribuir a proyectos innovadores y seguir creciendo como profesional. Si tienes alguna oportunidad interesante, ¡me encantaría saber más al respecto!"
        :
        "I am excited about the possibility of contributing to innovative projects and continuing to grow as a professional. If you have any interesting opportunities, I'd love to hear more about it!"
      }
      
      </p>
  </section>
}