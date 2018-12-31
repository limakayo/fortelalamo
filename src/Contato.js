import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Zoom from 'react-reveal/Zoom';

function Contato() {
  return (
    <section id="contato">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-heading">Contato</h2>
            <hr className="my-4"/>
            <p>Entre em contato com a Forte Álamo!</p>
            <p className="mb-5">Estamos super ansiosos de fazer parte de um momento tão especial!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 ml-auto text-center">
            <Zoom delay={200}>
              <FontAwesomeIcon icon={faMapMarkedAlt} size="3x" className="mb-3"/>
            </Zoom>
            <a href="https://goo.gl/maps/Um9Y4MmNvi22" target="_blank" rel="noopener noreferrer">
              <address>
                <p className="mb-0">Rua Arlindo Canestraro, 359</p>
                <p>Quatro Barras - PR</p>
              </address>
            </a>
          </div>
          <div className="col-lg-4 ml-auto text-center">
            <Zoom delay={400}>
              <FontAwesomeIcon icon={faPhone} size="3x" className="mb-3"/>
            </Zoom>
            <p>(41) 99133-4307</p>
          </div>
          <div className="col-lg-4 mr-auto text-center">
            <Zoom delay={600}>
              <FontAwesomeIcon icon={faEnvelope} size="3x" className="mb-3"/>
            </Zoom>
            <p>
              <a href="mailto:contato@fortealamo.com.br">contato@fortealamo.com.br</a>
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-heading">Redes Sociais</h2>
            <hr className="my-4"/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 ml-auto text-center social">
            <a href="https://www.facebook.com/SalaoForteAlamo/" target="_blank" rel="noopener noreferrer">
              <Zoom delay={800}>
                <FontAwesomeIcon icon={faFacebookSquare} size="3x" className="mb-3"/>
              </Zoom>
              <p>@SalaoForteAlamo</p>
            </a>
          </div>
          <div className="col-lg-6 ml-auto text-center social">
            <a href="https://www.instagram.com/fortealamo/" target="_blank" rel="noopener noreferrer">
              <Zoom delay={1000}>
                <FontAwesomeIcon icon={faInstagram} size="3x" className="mb-3"/>
              </Zoom>
              <p>@fortealamo</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato
