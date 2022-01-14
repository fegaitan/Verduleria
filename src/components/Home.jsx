import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://www.mendovoz.com/u/fotografias/m/2020/7/28/f608x342-132691_162414_0.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Desde 1988 la mejor fruta de Zona Norte</h1>
            <p>
            Somos una empresa que desde el año 1988 comercializa la mejor fruta y verdura seleccionada de la región Norte del conurbano bonaerense. Tenemos sucursales en las principales localidades de la región incluyendo Tigre y San Isidro.
            </p>
          </div>
        </div>
      </div>
      <div class="row no-gutters">
                    <div class="col-lg-6 text-white showcase-img"></div>
                    <div class="col-lg-6 my-auto showcase-text">
                        <h2>Hacenos tu pedido</h2>
                        <p class="lead mb-0">Ante la situación de público conocimiento, hemos aumentado la frecuencia para realizar nuestros pedidos, permitiendote tener la mejor fruta mucho mas rápido y sin colas.</p>
                    </div>
                </div>
      <section class="call-to-action text-center">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-9 mx-auto"><h2 class="mb-4">Registrate y recibí las últimas ofertas en tu mail!</h2></div>
                    <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
                        <form id="suscripcion" action="registro.php" method="POST">
                            <div class="form-row">
                                <div class="col-12 col-md-9 mb-2 mb-md-0"><input class="form-control form-control-lg" type="email" placeholder="Ingrese su email..." id="mail" name="mail"/></div>
                                <div class="col-12 col-md-3"><button class="btn btn-block btn-lg btn-primary" type="submit" id="botonregistro">Registrarse</button></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Home;
