import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      />
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"
      ></script>
      <link
        href="http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext"
        rel="stylesheet"
        type="text/css"
      />
      <link rel="stylesheet" href="footer.css" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Serif:wght@300&display=swap"
        rel="stylesheet"
      />
      <div class="bg-dark text-white pt-5 pb-4">
        <div class="container text-center text-md-left">
          <div class="row text-center text-md-left">
            <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mt-4">
              <h5 class="mb-4 font-weight-bold text-warning">TUTEUREXPRESS</h5>
              <p>**Description**</p>
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-4">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                Menu
              </h5>
              <p class="guide">
                <a
                  class="Guide_d_utilisation"
                  href="test"
                  style={{ textDecoration: "none" }}
                >
                  Guide d'utilisation
                </a>
              </p>
              <p>
                <a
                  class="A_propos "
                  href="test"
                  style={{ textDecoration: "none" }}
                >
                  À propos
                </a>
              </p>
              <p>
                <a
                  class="contactez_nous "
                  href="test"
                  style={{ textDecoration: "none" }}
                >
                  Contactez nous
                </a>
              </p>
            </div>
            <div class="col-md-5 col-lg-5 col-xl-5 mt-4">
              <h5 class="text-uppercase mb-3 font-weight-bold text-warning">
                Contact
              </h5>
              <p>
                <i class="fas fa-home mr-3 "></i> Avenue 9 avril Tétouan, 93000
              </p>
              <p>
                <i class="fas fa-envelope mr-3 "></i> expresstuteur@gmail.com
              </p>
              <p>
                <i class="fas fa-phone mr-3 "></i> +212-626091235
              </p>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-md-8 col-lg-8">
              <p>
                {" "}
                Copyright © 2021 All rights reserved by :
                <a href="#" style={{ textDecoration: "none" }}>
                  <strong class="text-uppercase text-white">
                    TuteurExpress
                  </strong>
                </a>
              </p>
            </div>
            <div class="col-md-4 col-lg-4">
              <div class=" text-md-center">
                <ul class="list-unstyled list-inline">
                  <li class="list-inline-item">
                    <a
                      href="#"
                      class="btn-floating btn-sm text-white"
                      style={{ fontSize: "23px" }}
                    >
                      <i class="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      href="#"
                      class="btn-floating btn-sm text-white"
                      style={{ fontSize: "23px" }}
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      href="#"
                      class="btn-floating btn-sm text-white"
                      style={{ fontSize: "23px" }}
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
