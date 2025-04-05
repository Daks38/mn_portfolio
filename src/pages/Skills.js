import React from "react";
import competence from "../img/competences.jpg";
import valider from "../icons/valider.png";

const Skills = () => {
  return (
    <div className="skills" id="debut">
      <h1>Mes Compétences</h1>

      <section>
        <img src={competence} alt="competence" />
        <ul className="data_analyse">
          <li>Collecte et extraction de données</li>
          <li>Traitement et transformation de données</li>
          <li>
            Conception et réalisation de tableaux de bord visuels pour suivre
            les performances des ventes et analyser les tendances.
          </li>
          <li>Création des rapports interactifs.</li>
          <li>
            Utilisation de DAX pour calculer des métriques clés et des
            indicateurs de performances.
          </li>
        </ul>
        <ul className="devweb">
          <li>
            Conception de l’architecture de l’aplication en utilisant les
            technologies telles que HTML, CSS, JavaScript, PHP.
          </li>
          <li>
            Création d’une interface Utilisateur intuitive et responsive pour
            différents appareils.
          </li>
          <li>
            Mise en place de systèmes d’inscription, connexion et gestion de
            profils utilisateurs.
          </li>
          <li>
            Développement d’outils permettant aux artisans de publier et gérer
            leurs services et aux clients de laisser des avis.
          </li>
          <li>Visual Studio Code</li>
          <li>React.js developpement Front-End interface utipsateur.</li>
        </ul>
        <ul className="perso">
          <li>Travail en équipe</li>
          <li>Gestion du temps</li>
          <li>Communication efficace</li>
          <li>Adaptabipté aux outils numériques et logiciels métiers</li>
        </ul>
      </section>
    </div>
  );
};

export default Skills;
