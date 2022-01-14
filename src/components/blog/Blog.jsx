import React from "react";
import { Outlet } from "react-router-dom";


function Blog() {
  return (
    <div className="home">
      <div class="container">
            <div class="container">
                <h2>Seleccioná los productos y la cantidad para realizar tu pedido</h2>
                <div class="row">
                    <div class="col-12 col-md-3 producto">
                        
                        <h5>Bananas x kg - $100</h5>
                        <input type="button" name="masbanana" id="masBanana" value="+"/>
                        <div id="cantidadBanana">0kg</div>
                        <input type="button" name="menosbanana" id="menosBanana" value="-"/>
                    </div>
                    <div class="col-12 col-md-3 producto">
                      
                        <h5>Manzanas x kg - $150</h5>
                        <input type="button" name="masmanzana" id="masManzana" value="+"/>
                        <div id="cantidadManzana">0kg</div>
                        <input type="button" name="menosmanzana" id="menosManzana" value="-"/>
                    </div>
                    <div class="col-12 col-md-3 producto">
                        
                        <h5>Naranjas x kg - $125</h5>
                        <input type="button" name="masnaranja" value="+" id="masNaranja"/>
                        <div id="cantidadNaranja">0kg</div>
                        <input type="button" name="menosnaranja" value="-" id="menosNaranja"/>
                    </div>
                    <div class="col-12 col-md-3 producto">
                        
                        <h5>Ananas x kg - $200</h5>
                        <input type="button" name="masanana" value="+" id="masAnana"/>
                        <div id="cantidadAnana">0kg</div>
                        <input type="button" name="menosanana" value="-" id="menosAnana"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-3 producto">
                        
                        <h5>Peras x kg - $150</h5>
                        <input type="button" name="maspera" value="+" id="masPera"/>
                        <div id="cantidadPera">0kg</div>
                        <input type="button" name="menospera" value="-" id="menosPera"/>
                    </div>
                    <div class="col-12 col-md-3 producto">
                        
                        <h5>Duraznos x kg - $150</h5>
                        <input type="button" name="masdurazno" value="+" id="masDurazno"/>
                        <div id="cantidadDurazno">0kg</div>
                        <input type="button" name="menosdurazno" value="-" id="menosDurazno"/>
                    </div>
                    <div class="col-12 col-md-3 producto">
                        
                        <h5>Ciruelas x kg - $175</h5>
                        <input type="button" name="masciruela" value="+" id="masCiruela"/>
                        <div id="cantidadCiruela">0kg</div>
                        <input type="button" name="menosciruela" value="-" id="menosCiruela"/>
                    </div>
                    <div class="col-12 col-md-3 producto">
                      
                        <h5>Kiwi x kg - $300</h5>
                        <input type="button" name="maskiwi" value="+" id="masKiwi"/>
                        <div id="cantidadKiwi">0kg</div>
                        <input type="button" name="menoskiwi" value="-" id="menosKiwi"/>
                    </div>
                </div>
                <div class="row">
                    Pagar
                </div>
                <div class="row" id="volverinicio">
                    <div class="col-12">
                    <a href="index.html">Volver al inicio</a>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
}

export default Blog;
