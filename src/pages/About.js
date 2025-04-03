import React from "react";
import apropos from "../img/apropos.jpg";

const About = () => {
  return (
    <div className="about">
      <section className="presenter">
        <h2>À propos de moi</h2>

        <p>
          Je me nomme <h3>DIALLO Adama Kouassi Sylvain</h3> titulaire d'une
          Licence en Developpement d'Applications et e-Services à l'Université
          Virtuelle de Côte d'Ivoire et certifié Power BI chez GOMYCODE Côte
          d'Ivoire. J'excelle dans le developpement web, la conception
          d'applications et la visualisation des données. Passionné par
          l'innovation, j'apporte une valeur ajoutée significative à chaque
          projet.
        </p>
      </section>

      <section className="competences">
        <h2>Compétences</h2>

        <ul>
          <p>Microsoft Word et Excel avancé</p>
          <p>Power BI</p>
          <p>SQL</p>
          <p>React.js(Front-End)</p>
          <p>Wordpress</p>
          <p>PHP</p>
          <p>HTML/CSS</p>
          <p>Bootstrap</p>
          <p>Visual Studio Code</p>
        </ul>
        <ul>
          <p>Communication</p>
          <p>Esprit critique et résolution de problèmes</p>
          <p>Travail d'équipe et collaboration</p>
          <p>Adaptabilité</p>
          <p>Patience et persévérance</p>
        </ul>
      </section>
      <section className="objectif">
        <h2>Mon Objectif</h2>

        <p>
          En tant que developpeur web passionné avec une Licence en
          Développement d'Applications et e-Services, Je vise à devenir un
          expert reconnu dans le developpement web et l'analyse de données. Je
          souhaite contribuer à des projets innovants en utilisant mes
          compétences en HTML/CSS, framworks front-end et Power BI pour créer
          des solutions robustes et intuitives. Je suis motivé à résoudre des
          problèmes complexes, améliorer l'expérience utilisateur et optimiser
          les performances des applications web. Déterminé à continuer
          d'apprendre et à collaborer efficacement pour atteindre des objectifs
          communs, je nourris également ma créativité et ma curiosité à travers
          mes passions pour le football, les documentaires et les films.
        </p>
      </section>
    </div>
  );
};

export default About;
