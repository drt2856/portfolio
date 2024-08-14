import { send } from "emailjs-com";
import { useState } from "react";
import { useLanguage } from "../hooks/UseLanguage";
import { LANGUAGES_SUPORTED } from "../context/lenguageContext";

export function Contact() {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    from_name: '',
    to_name: 'Daniel Rodríguez',
    message: '',
    reply_to: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = { ...formData, message: formData.message + " Este correo viene de :" + formData.reply_to }
    send(
      'service_una8dbe', // ID de tu servicio de EmailJS
      'template_mqxd6ai', // ID de la plantilla de correo
      dataToSend, // Datos del formulario
      '7yF4MvQAkzauZK_AJ' // Tu User ID de EmailJS
    )
      .then((response) => {
        console.log('Correo enviado:', response);
        alert(language === LANGUAGES_SUPORTED.ESPAÑOL ?"Correo enviado con exito":"Mail sent successfully")
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        alert(language === LANGUAGES_SUPORTED.ESPAÑOL ?"Ha ocurrido un error":"An error has ocurred")
      });
  };
  return <section className="bg-litle-blue p-5" id="contactos">
    <div className="col-12 col-sm-6 mx-auto">
      <h2 className="h1 text-center">
        {language === LANGUAGES_SUPORTED.ESPAÑOL ?
          "Contacta conmigo para obtener mis servicios"
          :
          "Contact me to get my services"
        }</h2>
      <div className="all">

        <a className='m-2 btn link-contact ' href="https://github.com/drt2856">
          <i className='bi bi-github' />
        </a>
        <a className='link-contact btn' href="https://www.linkedin.com/in/daniel-rodr%C3%ADquez-torres-571424260/">
          <i className='bi bi-linkedin' />
        </a>
        <a className='link-contact btn' href="mailto:drt2856@gmail.com">
          <i className='bi bi-google' />
        </a>

      </div>

      <form className="border border-black rounded p-3 row" onSubmit={handleSubmit}>

        <input
          className="col-12 col-sm-6 my-1 p-2"
          type="text"
          name="from_name"
          placeholder={language === LANGUAGES_SUPORTED.ESPAÑOL ?
            "Tu nombre"
            :
            "Your name"
          }
          value={formData.from_name}
          onChange={handleChange}
        />

        <input
          className="col-12 col-sm-6 my-1 p-2 ml-0"
          type="email"
          name="reply_to"
          placeholder={language === LANGUAGES_SUPORTED.ESPAÑOL ?
            "Tu correo electrónico"
            :
            "Your email"
          }
          value={formData.reply_to}
          onChange={handleChange}
        />




        <textarea

          className="col-12 m-1 bg-dark"
          style={{ minHeight: "200px", border: "solid 1px blue" }}
          name="message"
          placeholder={language === LANGUAGES_SUPORTED.ESPAÑOL ?
            "Cuenteme sobre el proyecto para el que necesita"
            :
            "Tell me about the project you need for"
          }
          value={formData.message}
          onChange={handleChange}
        />


        <button className="btn btn-dark col-12" type="submit">{language === LANGUAGES_SUPORTED.ESPAÑOL ? "Enviar" : "Send"}</button>

      </form>


    </div>
  </section>
}