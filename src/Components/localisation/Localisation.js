import React from "react";
import "./Localisation.css";

const Localisation = () => {
  return (
    <div className="localisation__background">
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="localisation.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&display=swap"
        rel="stylesheet"
      />
      <div className="localisation__body">
        <section class="map">
          <h1 class="localisation__h1">Notre localisation</h1>
          <iframe
            width="100%"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
            allowfullscreen
            title="localisation__frameTitle"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:Eh1Bdi4gTWVrbmVzLCBUw6l0b3VhbiwgTW9yb2NjbyIuKiwKFAoSCQXjm01DQgsNEav6PO-YE5msEhQKEglJSMHiXUILDRG8ek4CvY0lQw&key=AIzaSyBvKZyT_6pjj5u9ILMjbWAkp14rGVlkWuQ"
          ></iframe>
        </section>
      </div>
    </div>
  );
};

export default Localisation;
