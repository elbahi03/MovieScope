import React from "react";
import "../style/Apropos.css";

function Apropos() {
  return (
    <div className="about-page">
      <h1>À propos de MovieScope</h1>

      <section className="about-content">
        <p>
          MovieScope est une plateforme fictive de critique et de recommandation de films. 
          Elle a été créée dans le but de proposer aux utilisateurs une expérience fluide et interactive 
          pour découvrir de nouveaux films et consulter leurs détails facilement.
        </p>

        <p>
          L’application permet de naviguer entre la page d’accueil, la page de détails d’un film et 
          la page “À propos” sans recharger le site, tout en offrant une interface responsive adaptée 
          aux mobiles, tablettes et ordinateurs.
        </p>

        <p>
          Les utilisateurs peuvent visualiser la liste de films avec leurs titres, affiches, notes, 
          et accéder à des informations détaillées pour chaque film. Le design est moderne et cohérent, 
          avec un style clair et des couleurs harmonieuses.
        </p>
      </section>

      <section className="personal-definition">
        <h2>À propos de moi</h2>
        <p>
          Je suis Yassine Elbahi, passionné par le développement web et les technologies modernes. 
          Mon objectif est de créer des expériences interactives et intuitives pour les utilisateurs, 
          tout en continuant à apprendre et à améliorer mes compétences en React, CSS et JavaScript.
        </p>
      </section>
    </div>
  );
}

export default Apropos;
