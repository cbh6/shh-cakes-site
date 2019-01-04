import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import baker from '../assets/images/baker.png'
import cake from '../assets/images/cake.png'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'Gatsby Starter - Photon'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section className="hero-header">
          <img src={cake} alt="Piece of cake" className="hero-header__img" />
          <div>
            <h1>La tarta de Susi</h1>
            <h2>Especialidad en elaboración de tartas tradicionales</h2>
            <p>En esta web encontrarás algunas de las tartas que realizo</p>
          </div>
        </section>

        {/* ---- Section: About me ---- */}
        <section className="about">
          <h2>Sobre mí</h2>
          <img className="about__avatar" src={baker} alt="baker avatar" />
          <p className="about__description">
            Me llamo María Asunción y me dedico a hacer tartas. Soy autodidacta
            y en mis ratos libres me gusta realizar todo tipo de repostería.
          </p>
          <a href="https://www.freepik.com/free-vector/set-of-bakery-banners_1970336.htm">
            Designed by Freepik
          </a>
          <a href="https://www.freepik.com/free-vector/minimal-triangle-pattern-design-in-pastel-colors_2841787.htm">
            Designed by Starline
          </a>
          {/* <p>Si deseas saber más o realizar algún pedido no dudes en ponerte en contacto conmigo</p> */}
        </section>

        {/* ---- Section: cakes ---- */}
        <section className="cakes">
          <h2>Tartas y dulces que realizo</h2>
          <div className="cake__item">
            <img className="cake__photo" />
            <div className="cake__info">
              <h3 className="cake__title">Tarta de Santiago</h3>
              <p className="cake__description">
                Tarta de almendra con chocolate blanco y cobertura de nata. Esta
                hecha con almendra, nata y posee un suave toque a arándanos.
                Deliciosa.
              </p>
            </div>
          </div>

          <div className="cake__item">
            <img className="cake__photo" />
            <div className="cake__info">
              <h3 className="cake__title">Tarta de Santiago</h3>
              <p className="cake__description">
                Tarta de almendra con chocolate blanco y cobertura de nata
              </p>
            </div>
          </div>

          <div className="cake__item">
            <img className="cake__photo" />
            <div className="cake__info">
              <h3 className="cake__title">Tarta de Santiago</h3>
              <p className="cake__description">
                Tarta de almendra con chocolate blanco y cobertura de nata. Esta
                hecha con almendra, nata y posee un suave toque a arándanos.
                Deliciosa.
              </p>
            </div>
          </div>

          <div className="cake__item">
            <img className="cake__photo" />
            <div className="cake__info">
              <h3 className="cake__title">Tarta de Santiago</h3>
              <p className="cake__description">
                Tarta de almendra con chocolate blanco y cobertura de nata
              </p>
            </div>
          </div>
        </section>

        <section className="contact">
          <h2 className="contact__title">Contacto</h2>
          <p>
            Si deseas realizar algún pedido consultar alguna duda o ponerte en
            contacto conmigo no dudes en enviarme un correo a través del
            siguiente formulario
          </p>
          <form
            role="form"
            id="contact__form"
            method="post"
            action="https://formspree.io/info.agenciabecom@gmail.com"
          >
            <div className="contact__field">
              <label className="control-label">Nombre</label>
              <input
                type="text"
                name="Nombre"
                id="name"
                className="form-control"
              />
            </div>
            <div className="contact__field">
              <label className="control-label">Email</label>
              <input
                type="email"
                name="Email"
                id="email"
                className="form-control"
              />
            </div>
            <div className="contact__field">
              <label className="control-label">Mensaje</label>
              <textarea
                name="Mensaje"
                className="form-control"
                id="message"
                rows="6"
              />
            </div>
            <button type="submit" className="contact__button">
              Enviar
            </button>
          </form>
          <a href="https://www.freepik.com/free-vector/hand-drawn-bakery-products-pattern_836138.htm">
            Designed by Freepik
          </a>
        </section>
      </Layout>
    )
  }
}

export default Homepage
