import React, { useRef, useState } from "react";
import "./Contact.css";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [result, showResult] = useState(false);
  const [captcha, setCaptcha] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_frkbuul",
        "template_9l74nkg",
        form.current,
        "user_W2SEM0j2uJIDKJQPvvSPT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  console.log(result);
  function onChange(value) {
    console.log("Captcha value:", value);
    setCaptcha(true);
  }
  return (
    <div className="contact">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Serif&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="contact.css" />
      </head>
      <title>Contact us</title>
      <body className="contact_test">
        <section class="contact__section">
          <div class="container py-5 contact__sectionContainer">
            <div class="row">
              <div class="col-lg-12 mx-auto contact__width">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-12 col-lg-12">
                        <div class="contact__head text-center text-white py-3">
                          <div className="contact__headCenter">
                            <ContactMailIcon fontSize="large" />
                            <h3>Contactez nous</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form p-4">
                    <form ref={form} onSubmit={sendEmail}>
                      <div class="row my-5">
                        <div class="col-lg-6 col-md-6 ">
                          <input
                            type="text"
                            class="effect-1"
                            placeholder="Prénom"
                            required
                            name="prenom"
                          />
                          <span class="Focus-border"></span>
                        </div>
                        <div class="col-lg-6 col-md-6 ">
                          <input
                            type="text"
                            class="effect-1"
                            placeholder="Nom"
                            required
                            name="nom"
                          />
                          <span class="Focus-border"></span>
                        </div>
                      </div>

                      <div class="row pb-4">
                        <div class="col-lg-6 col-md-6 ">
                          <input
                            class="effect-1"
                            placeholder="Email"
                            required
                            type="email"
                            name="email"
                          />
                          <span class="Focus-border"></span>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <input
                            type="text"
                            class="effect-1"
                            placeholder="Sujet"
                            required
                          />
                          <span class="Focus-border"></span>
                        </div>
                      </div>
                      <div class="row pt-4">
                        <div class="col-lg-12">
                          <textarea
                            class="effect-1 contact__message"
                            placeholder="Message"
                            name="message"
                          ></textarea>
                          <span class="Focus-border"></span>
                        </div>
                      </div>
                      <div class="row pt-5 contact__robot">
                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12 contact__captcha">
                          <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={onChange}
                          />
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12  ">
                          <button
                            class="btn1"
                            value="Send"
                            type={captcha && "submit"}
                          >
                            Envoyer
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
};

export default Contact;
