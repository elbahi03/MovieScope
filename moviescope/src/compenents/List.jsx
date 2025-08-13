import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import "../style/List.css";
import { UNSAFE_useFogOFWarDiscovery, useNavigate } from "react-router-dom";
import Best from "./Best";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/movies_cartoon_full.xlsx")
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setMovies(jsonData);
      })
      .catch((err) => console.error("Erreur chargement Excel:", err));
  }, []);

  const handleVoirDetails = (movie, id) => {
    navigate(`/movies/${id}`, { state: { movie } });
  };

  const filteredMovies = movies.filter((movie) =>
    movie.Titre?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="movie-list">
      <h1 className="title">LISTES DE FILMS</h1>

      <input
        className="search-bar"
        type="text"
        placeholder="Rechercher un film..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="container">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, index) => (
            <div className="wrapper" key={index}>
              <div className="card">
                <div
                  className="front-page"
                  style={{ backgroundImage: `url(${movie.Affiche})` }}
                ></div>

                <div className="back-page">
                  <div className="card-content">
                    <h1>{movie.Titre}</h1>
                    <h3>⭐{movie.Note}</h3>
                    <h3>{movie.Min} minutes</h3>
                    <button onClick={() => handleVoirDetails(movie, movie.id)}>
                      Voir Détails
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="erreur">
            <h1 className="error-message">
              Pardon, ce film n'existe pas
            </h1>
            <Best />
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieList;
