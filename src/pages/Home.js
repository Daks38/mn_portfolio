import React from "react";
import { Link } from "react-router-dom";
import ma_photo from "../photo/ma_photo.jpg";

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenue sur ma page d'accueil</h1>
      <section>
        <img src={ma_photo} alt="Ma photo" />
        <br />
        <br />
        <h2>DIALLO Adama Kouassi Sylvain</h2>
        <h3>
          Informaticien | Developpeur web | Analyste de Données - Certifié Power
          BI
        </h3>
      </section>
    </div>
  );
};

export default Home;
