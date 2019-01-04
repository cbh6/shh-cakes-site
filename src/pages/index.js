import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'Gatsby Starter - Photon'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section className="hero-header">
          <h2>Tartas. Eslogan para el site</h2>
          <h3>Nombre repostería</h3>
        </section>

        <section className="about">
          <h2>Sobre mí</h2>
          <img className="about__avatar" />
          <p className="about__description">
            Me llamo María Asunción y me dedico a hacer tartas. Soy autodidacta
            y en mis ratos libres me gusta realizar todo tipo de repostería.
          </p>
          {/* <p>Si deseas saber más o realizar algún pedido no dudes en ponerte en contacto conmigo</p> */}
        </section>

        <section className="cakes">
          <h2>Tartas y dulces que realizo</h2>
          <br />

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
            <button
              type="submit"
              className="contact__button"
            >
              Enviar
            </button>
          </form>
        </section>
        {/* <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Lorem ipsum dolor adipiscing<br />
                                amet dolor consequat</h2>
                            </header>
                            <p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style3 major fa-camera-retro"></span></li>
                                <li><span className="icon style4 major fa-cog"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-calendar"></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Lorem ipsum dolor adipiscing<br />
                                amet dolor consequat</h2>
                            </header>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                            <p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Adipiscing amet consequat</h2>
                            </header>
                            <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Ipsum feugiat consequat?</h2>
                        </header>
                        <p>Sed lacus nascetur ac ante amet sapien.</p>
                        <ul className="actions uniform">
                            <li><a href="#" className="button special">Sign Up</a></li>
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </div>
                </section> */}
      </Layout>
    )
  }
}

export default Homepage
