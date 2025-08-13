import React from "react";
import ReactPlayer from "react-player";
import { useLocation, useNavigate } from "react-router-dom";
import Best from "./Best";
import '../style/Details.css'


function Detail() {
    const { state } = useLocation();
    const movie = state?.movie;
    const navigate = useNavigate();
    console.log(movie);
    console.log(movie.Trailer);
    return (
        <>
        <div className="detail">
            <div className="detail-container">
                <div className="detail-image" style={{ backgroundImage: `url(${movie.Affiche})` }}></div>
                <div className="detail-content">
                    <div className="detail-info">
                        <h1>{movie.Titre}</h1><br />
                        <h3>Note : {movie.Note}/10</h3>
                        <h3>Duree : {movie.Min} Min</h3>
                    </div>
                    <div className="detail-description">
                        <h2>Description</h2><br />
                        <h4>{movie.Description}</h4>
                    </div>
                </div>
            </div>
            <button className="return-page" onClick={() => navigate("/")}>Return a list movies</button>
        </div>
            <Best />
        </>
    )
}

export default Detail