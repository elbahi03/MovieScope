import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import '../style/List.css';
import { useNavigate } from "react-router-dom";

function Best() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/movies_cartoon_full.xlsx")
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        const shuffled = jsonData.sort(() => Math.random() - 0.5);
        const randomFour = shuffled.slice(0, 4);
        setMovies(randomFour);
      })
      .catch((err) => console.error("Erreur chargement Excel:", err));
  }, []);

  const handleVoirDetails = (movie, id) => {
    navigate(`/detail/${id}`, { state: { movie } });

  }

  return (
    <div>
      <h1 className="title">SUGGESTION</h1>
      <div className="container">
        {movies.map((movie, index) => (
          <div className="wrapper" key={index}>
            <div className="card">
              <div
                className="front-page"
                style={{ backgroundImage: `url(${movie.Affiche})` }}
              >
                <div className="card-info"></div>
              </div>
              <div className="back-page">
                <div className="card-content">
                  <h1>{movie.Titre}</h1>
                  <h3>⭐{movie.Note}</h3>
                  <h3>{movie.Min} minutes</h3>
                  <button onClick={() => handleVoirDetails(movie, movie.id)}>
                    Voir Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Best;
