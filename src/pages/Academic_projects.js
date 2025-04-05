import React from "react";
import { Link } from "react-router-dom";
import test from "../photo/ma_photo.jpg";
import accueil from "../img-projets/Data_analyste/accueil.png";
import tdb from "../img-projets/Data_analyste/TDB.png";
import analyse from "../img-projets/Data_analyste/analyse.png";
import evolution from "../img-projets/Data_analyste/evolution.png";
import donnees from "../img-projets/Data_analyste/données.png";
import calculs from "../img-projets/Data_analyste/calculs.png";
import dev1 from "../img-projets/Dev_web/dev1.png";
import dev2 from "../img-projets/Dev_web/dev2.png";
import dev3 from "../img-projets/Dev_web/dev3.png";
import dev4 from "../img-projets/Dev_web/dev4.png";
import dev5 from "../img-projets/Dev_web/dev5.png";
import dev6 from "../img-projets/Dev_web/dev6.png";
import valider from "../icons/valider.png";

const Academic_projects = () => {
  return (
    <div className="academic_projects">
      <h1>Mes Projets académiques</h1>
      <section>
        <h3>Analyse de Données -Projet final</h3>
        <h5>GOMYCODE Abidjan Riviera</h5>
        <h5>Novembre 2024 - Février 2025</h5>
        <div>
          <img src={accueil} alt="accueil" />
          <img src={tdb} alt="tdb" />
          <img src={analyse} alt="analyse" />
          <img src={evolution} alt="evoolution" />
          <img src={donnees} alt="donnees" />
          <img src={calculs} alt="calculs" />
        </div>
        <ul>
          <li>
            <img src={valider} alt="Valider" className="valider" />
            Conception et réalisation d'un projet Power BI pour analyser les
            données de vente en détail
          </li>
          <li>
            <img src={valider} alt="Valider" className="valider" />
            Conception et réalisation de aux de bord visuels pour suivre les
            performances des ventes et analyser les tendances.
          </li>
          <li>
            <img src={valider} alt="Valider" className="valider" /> Création des
            rapports interactifs.
          </li>
          <li>
            <img src={valider} alt="Valider" className="valider" />
            Utilisation de DAX pour calculer des métriques clés et des
            indicateurs de performances.
          </li>
        </ul>
      </section>

      <section>
        <h3>Développeur Web – Projet Collectif Tuteuré</h3>
        <h5>Université Virtuelle de Côte d’Ivoire</h5>
        <h5>Avril 2024 – Août 2024</h5>
        <div>
          <img src={dev1} alt="dev1" />
          <img src={dev2} alt="dev2" />
          <img src={dev3} alt="dev3" />
          <img src={dev4} alt="dev4" />
          <img src={dev5} alt="dev5" />
          <img src={dev6} alt="dev6" />
        </div>
        <ul>
          <li>
            <img src={valider} alt="Valider" className="valider" />
            Elaboration d’une application web pour la promotion des métiers
            artisanaux en Côte d’Ivoire.
          </li>
          <li>
            <img src={valider} alt="Valider" className="valider" />
            Conception de l’architecture de l’application en utilisant les
            technologies telles que HTML, CSS, JavaScript, PHP.
          </li>
          <li>
            <img src={valider} alt="Valider" className="valider" />
            Création d’une interface Utilisateur intuitive et responsive pour
            différents appareils.
          </li>
          <li>
            <img src={valider} alt="Valider" className="valider" />
            Mise en place de systèmes d’inscription, connexion et gestion de
            profils utilisateurs.
          </li>
          <li>
            <img src={valider} alt="Valider" className="valider" />
            Développement d’outils permettant aux artisans de publier et gérer
            leurs services et aux clients de laisser des avis.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Academic_projects;
