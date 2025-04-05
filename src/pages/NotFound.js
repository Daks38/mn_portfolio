import React from "react";
import erreur from "../img/erreur.jpg";

const NotFound = () => {
  return (
    <div className="notfound" id="debut">
      <img src={erreur} alt="erreur" />
    </div>
  );
};

export default NotFound;
