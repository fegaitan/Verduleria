import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
                        <ul class="list-inline mb-2">
                            <NavLink to="/contact">
                            Legal
                            </NavLink>
                            <li class="list-inline-item">⋅</li>
                            <NavLink to="/contact">
                            Contacto
                            </NavLink>
                        </ul>
                        <p class="text-muted small mb-4 mb-lg-0">© 2021 Verdulería Rodriguez. Todos los derechos reservados</p>
                    </div>
                </div>
            </div>
        </footer>
  );
}

export default Footer;
