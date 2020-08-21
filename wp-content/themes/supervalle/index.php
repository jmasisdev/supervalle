<?php get_header(); ?>

  <span class="clearfix"></span>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="img/homepage/slide_01.webp" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="img/homepage/slide_02.webp" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="img/homepage/slide_03.webp" class="d-block w-100" alt="...">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

  <section>
    <div class="container">
      <div class="py-5">
        <h2 class="display-2 text-center mb-4 text-green amatic-font aniview" data-av-animation="slideInDown">Welcome to Super Valle!</h2>
        <h3 class="text-center font-weight-bold mb-5">Our priority</h3>
        <div class="row">
          <div class="col-12 col-sm-4 col-md-4 text-center">
            <div class="border-dashed p-2 p-md-4 priority-box d-flex align-items-center aniview fast" data-av-animation="slideInLeft">
              <div class="m-auto">
                <i class="far fa-smile fa-5x text-green"></i>
                <h4 class="font-weight-bold mt-3">Customers Convenience</h4>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-4 text-center">
            <div class="border-dashed p-2 p-md-4 priority-box d-flex align-items-center aniview fast" data-av-animation="slideInUp">
              <div class="m-auto">
                <i class="far fa-star fa-5x text-green"></i>
                <h4 class="font-weight-bold mt-3">High Quality</h4>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-4 text-center">
            <div class="border-dashed p-2 p-md-4 priority-box d-flex align-items-center aniview fast" data-av-animation="slideInRight">
              <div class="m-auto">
                <i class="fas fa-dollar-sign fa-5x text-green"></i>
                <h4 class="font-weight-bold mt-3">Low Cost</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="product-box taqueria-section shadow border-rounded d-flex align-items-center aniview" data-av-animation="slideInLeft"
            style="background-image:url('img/homepage/taqueria.webp');background-size:cover;background-position:center 0px;width: 100%;position:relative;">
            <div class="border-overlay"></div>
            <div class="m-auto">
              <img class="img-fluid" src="img/homepage/taqueria-logo.png" alt="">
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="product-box latin-products border-rounded shadow aniview" data-av-animation="slideInRight"
            style="background-image:url('img/dairy-products.jpg');background-size:cover;background-position:0 0;width: 100%;">
            <div class="border-overlay"></div>
            <div class="pt-4 pl-4 text-white">
              <p class="m-0 text-shadow">We specialize</p>
              <h2 class="font-weight-bold w-50 text-shadow">Latin American Products</h2>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="product-box catering border-rounded shadow aniview" data-av-animation="slideInUp"
            style="background-image:url('img/homepage/catering-image.webp');background-size:cover;background-position:0 15%;background-repeat:no-repeat;width: 100%;">
            <div class="pt-4 pl-4 text-white">
              <h2 class="text-shadow">Catering</h2>
              <p class="text-shadow w-50">Available for parties, weddings, birthday or to any event.</p>
            </div>
          </div>
        </div>
      </div><!-- End row -->
    </div>
  </section>

  <section>
    <div class="container">
      <h2 class="text-green amatic-font my-5 aniview" data-av-animation="fadeIn">Products</h2>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="meat-box border-dashed border-rounded aniview" data-av-animation="slideInUp">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-6 p-5 text-center">
                <img src="img/meat.jpg" class="img-fluid" alt="">
              </div>
              <div class="col-12 col-md-6 col-lg-6 p-5 text-center">
                <i class="fas fa-star fa-3x text-red"></i>
                <h4 class="subtitle-meat text-white w-50 p-2 roboto-Slab">High Quality</h4>
                <h2 class="text-uppercase display-3 alfa-slab text-brow">Meat</h2>
              </div>
            </div>
          </div>
        </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <form>
            <div class="form-group">
              <input class="form-control form-control-lg" type="text" placeholder="Your Name (Required)">
            </div>
            <div class="form-group">
              <input class="form-control form-control-lg" type="email" placeholder="Your Email (Required)">
            </div>
            <div class="form-group">
              <input class="form-control form-control-lg" type="text" placeholder="Your Subject">
            </div>
            <div class="form-group">
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-block text-uppercase p-2">send</button>
          </form>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
          <div class="embed-responsive embed-responsive-4by3 border-rounded shadow-sm">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.326956873191!2d-97.85392088539342!3d30.568314300590234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b2bf51517c38b%3A0x221e81c25d79636f!2sSuper%20Valle%20Meat%20Market!5e0!3m2!1ses!2ssv!4v1596920888985!5m2!1ses!2ssv" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>

  <?php get_footer(); ?>