import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRing, faBirthdayCake, faUserGraduate, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import Zoom from 'react-reveal/Zoom';

function Eventos() {
  return (
    <section id="eventos">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Eventos</h2>
            <hr className="my-4"/>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <Zoom delay={200}>
                <FontAwesomeIcon icon={faRing} size="4x" className="mb-3 sr-icon-1"/>
              </Zoom>
              <h3 className="mb-3">Casamentos</h3>
              <p className="text-muted mb-0"></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <Zoom delay={400}>
                <FontAwesomeIcon icon={faBirthdayCake} size="4x" className="mb-3 sr-icon-2"/>
              </Zoom>
              <h3 className="mb-3">Aniversários</h3>
              <p className="text-muted mb-0"></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <Zoom delay={600}>
                <FontAwesomeIcon icon={faUserGraduate} size="4x" className="mb-3 sr-icon-3"/>
              </Zoom>
              <h3 className="mb-3">Formaturas</h3>
              <p className="text-muted mb-0"></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <Zoom delay={800}>
                <FontAwesomeIcon icon={faBriefcase} size="4x" className="mb-3 sr-icon-4"/>
              </Zoom>
              <h3 className="mb-3">Corporativos</h3>
              <p className="text-muted mb-0"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Eventos
