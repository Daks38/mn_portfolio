import React from "react";
import gmail from "../img/gmail.png";
import linkedin from "../img/linkedin.png";
import whatsapp from "../img/what.png";

const Contact = () => {
  return (
    <div className="contact" id="debut">
      <h1>Contactez moi!</h1>
      <section>
        <p>07 79 39 42 18</p>
        <p>05 54 62 66 67</p>

        <a href="mailto: ksylvain38@gmail.com">
          <img src={gmail} alt="mail" />
        </a>

        <a href="https://www.linkedin.com/in/adama-kouassi-sylvain-diallo-abb030336">
          <img src={linkedin} alt="linkedin" />
        </a>

        <a href="https://wa.me/2250779394218">
          <img src={whatsapp} alt="what" />
        </a>
      </section>
    </div>
  );
};

export default Contact;
