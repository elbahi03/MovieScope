import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import '../style/List.css'
import { useNavigate } from "react-router-dom";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

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

  const handleVoirDetails = (movie,id) => {
    navigate(`/detail/${id}`, { state: { movie } });
  }


  return (
    <div >
      <h1 className="title">
        LISTES DE FILMS
      </h1>
      <div className="container">
      {movies.map((movie, index) => (
        <div class="wrapper">

          <div className="card">
            <div className="front-page" style={{ backgroundImage: `url(${movie.Affiche})` }} >
              <div className="card-info">
                <div key={index}>
                </div>
              </div>
            </div>

            <div className="back-page">
              <div className="card-content">
                <div key={index}>
                  <h1>{movie.Titre}</h1>
                  <h3>⭐{movie.Note}</h3>
                  <h3>{movie.Min} munites</h3>
                  <button onClick={( ) => handleVoirDetails(movie,movie.id)}>Voir Details</button>
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
