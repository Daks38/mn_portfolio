import React from "react";
import competence from "../img/competences.jpg";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Mes Compétences</h1>

      <section>
        <img src={competence} alt="competence" />
        <ul className="data_analyse">
          <p>Collecte et extraction de données</p>
          <p>Traitement et transformation de données</p>
          <p>
            Conception et réalisation de tableaux de bord visuels pour suivre
            les performances des ventes et analyser les tendances.
          </p>
          <p> Création des rapports interactifs.</p>
          <p>
            Utilisation de DAX pour calculer des métriques clés et des
            indicateurs de performances.
          </p>
        </ul>
        <ul className="devweb">
          <p>
            Conception de l’architecture de l’aplication en utilisant les
            technologies telles que HTML, CSS, JavaScript, PHP.
          </p>
          <p>
            Création d’une interface Utilisateur intuitive et responsive pour
            différents appareils.
          </p>
          <p>
            Mise en place de systèmes d’inscription, connexion et gestion de
            profils utilisateurs.
          </p>
          <p>
            Développement d’outils permettant aux artisans de publier et gérer
            leurs services et aux clients de laisser des avis.
          </p>
          <p>Visual Studio Code</p>
          <p>React.js developpement Front-End interface utipsateur.</p>
        </ul>
        <ul className="perso">
          <p>Travail en équipe</p>
          <p>Gestion du temps</p>
          <p>Communication efficace</p>
          <p>Adaptabipté aux outils numériques et logiciels métiers</p>
        </ul>
      </section>
    </div>
  );
};

export default Skills;
