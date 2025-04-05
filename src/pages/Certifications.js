import React from "react";
import certif from "../img/certificat.png";

const Certifications = () => {
  return (
    <div className="certifications" id="debut">
      <h1>Mes certificats</h1>
      <div>
        <img src={certif} alt="certif" />
        <a href="https://drive.google.com/drive/folders/1AFcayrHWEAMnXwA8gfbOeIUoVIWOb_es?usp=sharing">
          Voir mes certificats
        </a>
      </div>
      <br />
    </div>
  );
};

export default Certifications;
