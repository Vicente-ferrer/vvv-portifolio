import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="contacts" className="footer">
      <div className="contact-section">
        <div className="company-contacts">
          <h2>Nossos contatos</h2>
          <p>
            Castanhal: Central Street, Centro
            <br />
            Contato: (123) 456-7890
            <br />
            Email: info@support@vVv.com
          </p>
        </div>
        <div className="feedback-contacts">
          <h2>Deixe seu Feedback</h2>
          <p>
            Vicente de soua: vinciferrer@gmail.com
            <br />
            Support: support@vVv.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
