<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

  <?php wp_head() ?>
</head>

<body>

  <header>
    <div class="logo float-left position-relative d-none d-lg-block">
      <img class="position-absolute" src="<?php echo get_stylesheet_directory_uri(); ?>/img/super-valle-logo.png" alt="Super Valle">
    </div>
    <nav class="navbar navbar-expand-lg navbar-light col-lg-7 col-xl-7">
      <a class="navbar-brand d-block d-lg-none" href="#"><img class="img-fluid" src="img/super-valle-logo.png" alt="Super Valle"></a>
      <ul class="info d-block d-lg-none">
        <li class="nav-item dropdown float-left">
          <a class="nav-link dropdown-toggle font-weight-bold" href="#" id="languageNav" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            EN
          </a>
          <div class="dropdown-menu" aria-labelledby="languageNav">
            <a class="dropdown-item" href="index.html">EN</a>
            <a class="dropdown-item" href="sp/index.html">SP</a>
          </div>
        </li>
        <li>
          <i class="fal fa-phone fa-2x float-left mt-2 mr-2 text-white"></i>
          <div class="float-left">
            <small>Call Us</small>
            <h6 class="font-weight-bold text-white">(512) 528-6022</h6>
          </div>
        </li>
        <li>
          <i class="fal fa-clock fa-2x float-left mt-2 mr-2 text-white"></i>
          <div class="float-left">
            <small>7 Days</small>
            <h6 class="font-weight-bold text-white">6:00 AM - 9:30 PM</h6>
          </div>
        </li>
      </ul>
      <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="zmdi zmdi-sort-amount-desc zmdi-hc-2x"></i>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto pl-xl-5 ml-5">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Products
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Bi-weekly specials</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="col-lg-5 col-xl-5 float-left">
      <ul class="info d-none d-lg-block float-right">
        <li class="nav-item dropdown language float-left">
          <a class="nav-link dropdown-toggle" href="#" id="languageNav" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            EN
          </a>
          <div class="dropdown-menu" aria-labelledby="languageNav">
            <a class="dropdown-item" href="index.html">EN</a>
            <a class="dropdown-item" href="sp/index.html">SP</a>
          </div>
        </li>
        <li>
          <i class="fal fa-phone fa-2x float-left mt-1 mr-2 text-white"></i>
          <div class="float-left">
            <small>Call Us</small>
            <h6 class="font-weight-bold text-white">(512) 528-6022</h6>
          </div>
        </li>
        <li>
          <i class="fal fa-clock fa-2x float-left mt-1 mr-2 text-white"></i>
          <div class="float-left">
            <small>7 Days</small>
            <h6 class="font-weight-bold text-white">6:00 AM - 9:30 PM</h6>
          </div>
        </li>
      </ul>
    </div>
    <span class="clearfix"></span>
  </header>