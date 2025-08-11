import React from "react";
import '../style/Footer.css'
function Footer () {
    return (
        <footer className="footer">
            <div className="contact">
                <h3>Contact nous :</h3>
                <p>Téléphone : 000 00 00 00</p>
                <p>Email : Yassineelbahi44@gmail.com</p>  
            </div>
            <div className="copyright">
                <p>© 2025 MovieScope. All rights reserved.</p>
            </div>
            <div className="reseaux_sociaux">
                <h3>Réseaux sociaux :</h3>
                <a href="">Facebook</a>
                <a href="">Instagram</a>
                <a href="">Github</a>
            </div>
        </footer>
    )
}

export default Footer