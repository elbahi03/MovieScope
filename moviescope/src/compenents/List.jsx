import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import '../style/List.css'

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/public/movies_cartoon_full.xlsx")
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setMovies(jsonData);
      })
      .catch((err) => console.error("Erreur chargement Excel:", err));
  }, []);


  return (
    <div >
      <h1 className="title">
        LISTES DE FILMS
      </h1>
      <div class="container">
      {movies.map((movie, index) => (
        <div class="wrapper">

          <div class="card">
            <div class="front-page" style={{ backgroundImage: `url(${movie.Affiche})` }} >
              <div class="card-info">
                <div key={index}>
                </div>
              </div>
            </div>

            <div class="back-page">
              <div class="card-content">
                <div key={index}>
                  <h1>{movie.Titre}</h1>
                  <h3>⭐{movie.Note}</h3>
                  <h3>{movie.Min} munites</h3>
                  <button>Voir Details</button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default MovieList;
