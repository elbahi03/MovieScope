import React from "react";

import ReactPlayer from "react-player";
import { useLocation, useNavigate } from "react-router-dom";


function Detail() {
    const { state } = useLocation();
    const movie = state?.movie;
    const navigate = useNavigate();
    return (
        <div className="detail">
                <div>
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
                <button onClick={() => navigate("/")}>Return a list movies</button>
        </div>
    )
}

export default Detail