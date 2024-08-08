import { send } from "emailjs-com";
import { useState } from "react";

export function Contact() {

  const [formData, setFormData] = useState({
    from_name: '',
    to_name: 'Daniel Rodríguez',
    message: '',
    reply_to: '',
  });

  const [isSending, setIsSending] = useState(false);

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true)
    send(
      'service_una8dbe', // ID de tu servicio de EmailJS
      'template_mqxd6ai', // ID de la plantilla de correo
      formData, // Datos del formulario
      '7yF4MvQAkzauZK_AJ' // Tu User ID de EmailJS
    )
      .then((response) => {
        console.log('Correo enviado:', response);
        alert("Correo enviado con exito")
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        alert("Ha ocurrido un error")
      });
      setIsSending(false)
  };
  return <section className="bg-litle-blue p-5" id="contactos">
    <div className="col-10 col-sm-6 mx-auto">
      <h2 className="h1 text-center">Contacta conmigo para obtener mis servicios</h2>
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
        <div className="all">
          <input
            className="col-12 col-sm-6 m-1 p-2"
            type="text"
            name="from_name"
            placeholder="Tu nombre"
            value={formData.from_name}
            onChange={handleChange}
          />

          <input
            className="col-12 col-sm-6 m-1 p-2"
            type="email"
            name="reply_to"
            placeholder="Tu correo electrónico"
            value={formData.reply_to}
            onChange={handleChange}
          />
        </div>



        <textarea

          className="col-12 m-1 bg-dark"
          style={{ minHeight: "200px", border: "solid 1px blue" }}
          name="message"
          placeholder="Cuentame que es lo que deseas"
          value={formData.message}
          onChange={handleChange}
        />

        <button className="btn btn-dark" type="submit">{isSending ? "...Enviando" : "Enviar"}</button>
      </form>


    </div>
  </section>
}