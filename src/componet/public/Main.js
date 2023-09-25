import React from 'react'

const Main = () => {
  return (
    <div>
      <main>

        <section class="py- text-center container1">
          <div class="row py-lg-0">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">Las mejores pizzas</h1>
            </div>
          </div>
        </section>

        < div class="album py-1 bg-light">
          <div class="container1">

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-2">

              <div class="col">
                <div class="card shadow-sm">
                  <img src="./imagenes/cala.png" />
                  <div class="card-body">
                    <p class="card-text">Pizza Calabreza</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <small class="text-muted">2200$</small>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card shadow-sm">

                  <img src="./imagenes/fugazza.png" />
                  <div class="card-body">
                    <p class="card-text">Pizza de Fugazza</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <small class="text-muted">2200$</small>
                    </div>
                  </div>
                </div>
              </div>
               
              <div class="col">
                <div class="card shadow-sm">
                  <img src="./imagenes/muzza.png" />

                  <div class="card-body">
                    <p class="card-text">Pizza Mozzarella</p>
                    <div class="d-flex justify-content-between align-items-center">

                      <small class="text-muted">2000$</small>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card shadow-sm">

                  <img src="./imagenes/jym.png" />
                  <div class="card-body">
                    <p class="card-text">Pizza de Jamon y  Morron</p>
                    <div class="d-flex justify-content-between align-items-center">

                      <small class="text-muted">2300$</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img src="./imagenes/huevo.png" />

                  <div class="card-body">
                    <p class="card-text">Pizza de Huevo</p>
                    <div class="d-flex justify-content-between align-items-center">

                      <small class="text-muted">2200$</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img src="./imagenes/napo.png" />

                  <div class="card-body">
                    <p class="card-text">Pizza Napolitana</p>
                    <div class="d-flex justify-content-between align-items-center">

                      <small class="text-muted">2200$</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img src="./imagenes/napespe.png" />

                  <div class="card-body">
                    <p class="card-text">Pizza Napolitana Especial</p>
                    <div class="d-flex justify-content-between align-items-center">
                    
                      <small class="text-muted">2500$</small>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card shadow-sm">

                  <img src="./imagenes/rucula.png" />
                  <div class="card-body">
                    <p class="card-text">Pizza Crudo y rucula</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <small class="text-muted">2500$</small>
                    </div>
                    
                  </div>
                </div>
                
              </div>
              </div>
              
          </div>
        </div>

      </main>
    </div>
  );
}

export default Main
