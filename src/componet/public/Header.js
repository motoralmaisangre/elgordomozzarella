import React from 'react'

const Header = () => {
  return (
    <header class="p-1 bg-dark text-white">
      <div class="container">
        <div className="barra" class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a className="navbar-brand" href="/">
            <img className="App-logo" src="icopiz.png" alt="atomogirando" />
          </a>
          
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" class="nav-link px-2 text-white">Home</a></li>
            <li><a href="https://www.google.com/maps/dir/-34.8799317,-58.3693768/el+gordo+mozzarella/@-34.880067,-58.3718478,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x95a32bf0bd3445a7:0x6b6f717054a868a9!2m2!1d-58.3693346!2d-34.8799727?entry=ttu" class="nav-link px-2 text-white">Ubicacion</a></li>
            <li><a href="tel:+1158887499" class="nav-link px-2 text-white">Contacto</a></li>
            <li><a href="#" class="nav-link px-2 text-white">Nosotros</a></li>
            <li><a href="https://g.page/r/CaloqFRwcW9rEB0/review" class="nav-link px-2 text-white">Comentarios</a></li>
          </ul>



          <nav class="redes">
            <a href="https://www.instagram.com/elgordomozzarella/"
            ><i class="fa-brands fa-instagram fa-flip"></i></a>
            <a href="https://www.facebook.com/elgordomozzarella"
            ><i class="fa-brands fa-facebook fa-flip" ></i></a>
          </nav>
        </div>
      </div>

    </header>

  )
}

export default Header
