import React from "react";
import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <div className="contact">
        <section class="contacto">
          <div class="row">
            <div class="jumbotron">
              <h1 class="display-3">Donde Estamos</h1>
                <p class="lead"><strong>Dirección:</strong> Pedro 1270</p>
                <p class="lead"><strong>Correo Electrónico:</strong></p> <a href="mailto:verduleriarodriguez@hotmail.com"><p>verduleriarodriguez@hotmail.com</p></a>
                <p class="lead"><strong>Teléfono:</strong> 48348767</p>
                <hr class="my-2"/>
                <p>Horario de atención: Lunes a Viernes de 07:00 a 21:00 - Sabados y Domingos de 09:00 a 19:00</p>
            </div>
          </div>
        </section>
        <div class="row" id="volverinicio">
            <div class="col-12">
              <NavLink className="navbar-brand" to="/">
                Volver al Inicio
              </NavLink>
            </div>
        </div>
   </div>
  );
}

export default Contact;
