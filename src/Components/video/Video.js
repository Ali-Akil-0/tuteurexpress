import React from "react";
import "./Video.css";
const Video = () => {
  return (
    <div className="video__background">
      <meta charset="utf-8" />
      <metas
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="video.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&display=swap"
        rel="stylesheet"
      />
      <div className="video__body">
        <section class="video">
          <h1 class="localisation__h1">​Vidéo résumé</h1>
          <div class="container mt-5 mb-5">
            <div class="row">
              <div class="col-md-5">
                <video width="728" height="410" src=""></video>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Video;
