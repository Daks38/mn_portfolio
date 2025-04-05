import React from "react";
import excel from "../icons/excel.png";
import sql from "../icons/sql.png";
import wp from "../icons/wordpress.png";
import html from "../icons/HTML-CSS.png";
import vscode from "../icons/vscode.png";
import pbi from "../icons/power bi.png";
import react from "../icons/react.png";
import php from "../icons/php.png";
import bootstrap from "../icons/bootstrap.png";
import git from "../icons/git.png";

const About = () => {
  return (
    <div className="about" id="debut">
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
        <table>
          <tr>
            <td>
              <img src={excel} alt="Excel" />
              Microsoft Word et Excel avancé
            </td>
            <td>
              <img src={pbi} alt="Power BI" />
              Power BI
            </td>
          </tr>
          <tr>
            <td>
              <img src={sql} alt="SQL" />
              SQL
            </td>
            <td>
              <img src={react} alt="React" />
              React.js
            </td>
          </tr>
          <tr>
            <td>
              <img src={wp} alt="WordPress" />
              Wordpress
            </td>
            <td>
              <img src={php} alt="PHP" />
              PHP
            </td>
          </tr>
          <tr>
            <td>
              <img src={html} alt="HTML/CSS" />
              HTML/CSS
            </td>
            <td>
              <img src={bootstrap} alt="Bootstrap" />
              Bootstrap
            </td>
          </tr>
          <tr>
            <td>
              <img src={vscode} alt="VScode" />
              Visual Studio Code
            </td>
            <td>
              <img src={git} alt="Git" />
              Versioning de projet
            </td>
          </tr>
          <tr>
            <td>Esprit critique et résolution de problèmes</td>
            <td>Travail d'équipe et collaboration</td>
          </tr>
          <tr>
            <td>Adaptabilité</td>
            <td>Patience et persévérance</td>
          </tr>
          <tr>
            <td>Communication</td>

            <td></td>
          </tr>
        </table>
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
