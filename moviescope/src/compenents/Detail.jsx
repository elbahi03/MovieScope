import React from "react";
import { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import ReactPlayer from "react-player";


function Detail() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("/movies_cartoon_full.xlsx") // enlève /public/
            .then((res) => res.arrayBuffer())
            .then((buffer) => {
                const workbook = XLSX.read(buffer, { type: "array" });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = XLSX.utils.sheet_to_json(worksheet);
                
                console.log("📄 Données Excel :", jsonData);
    
                // Test : afficher juste les URLs YouTube
                jsonData.forEach((movie, i) => {
                    console.log(`🎬 Film ${i + 1} → URL YouTube =`, movie.Trailer);
                });
    
                setMovies(jsonData);
            })
            .catch((err) => console.error("Erreur chargement Excel:", err));
    }, []);

    return (
        <div className="detail">
            {movies.map((movie, index) => (
                <div key={index}>
                    <div>
                        <div>
                            <h1>{movie.Titre}</h1>
                            <h3>{movie.Note}</h3>
                            <h3>{movie.Min}</h3>
                        </div>
                        <div style={{ backgroundImage: `url(${movie.Affiche})` }}></div>
                        <div>
                            <h4>{movie.Description}</h4>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>Trailer</h1>
                            <ReactPlayer url={movie.Trailer} controls width="75%" height="40%" />         
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Detail