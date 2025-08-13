import React from "react";
import '../style/Footer.css'
import emailjs from 'emailjs-com';
import { useState } from "react";

function Footer() {
    const [email, setEmail] = useState("");
    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs.send(
          'service_2i66ihl',    // remplace par ton Service ID
          'template_4wba0rc',   // remplace par ton Template ID
          { email: email },     // les variables que tu as définies dans ton template
          'HjIBGedwo8QjTnyqn'        // remplace par ton User ID
        )
        .then((response) => {
          console.log('Email envoyé avec succès!', response.status, response.text);
          alert('Merci! Votre email a été envoyé.');
          setEmail(""); // réinitialiser le champ
        })
        .catch((err) => {
          console.error('Erreur envoi email :', err);
          alert("Erreur, veuillez réessayer.");
        });
      };
      

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="contact">
                    <h3>Contact nous :</h3>
                    <p>Téléphone : 000 00 00 00</p>
                    <p>Email : Yassineelbahi44@gmail.com</p>
                </div>
                <div className="newsletter">
                    <h3>Pour plus d'informations</h3>
                    <form onSubmit={sendEmail}>
                        <input
                            type="email"
                            placeholder="Entrer votre email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Envoyer</button>
                    </form>
                </div>

                <div className="reseaux_sociaux">
                    <h3>Réseaux sociaux :</h3>
                    <a href="">Facebook</a>
                    <a href="">Instagram</a>
                    <a href="https://github.com/elbahi03">Github</a>
                </div>
            </div>
            <div className="copyright">
                <p>© 2025 MovieScope. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer