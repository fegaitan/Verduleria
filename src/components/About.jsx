import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://http2.mlstatic.com/D_856708-MLA46015901944_052021-O.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <section class="historia">
                <div class="row">    
                        <h1>Nuestra historia</h1>
                        <p>Cuando en el año 1988 Juan Rodriguez fundó la primera sucursal de Verdulería Rodriguez, nadie hubiese imaginado que mas de 30 años despues el pequeño local se convertiría en una pujante empresa que acerca la mejor fruta y verdura a toda Zona Norte.</p>
                        <p>Como una empresa familiar, Verdulería Rodriguez tiene una gran cercanía con sus clientes que proviene de decadas de conocer cada localidad donde está instalada. Sus proveedores le garantizan ademas tener la verdura mas fresca, siempre a tiempo.</p>
                </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
