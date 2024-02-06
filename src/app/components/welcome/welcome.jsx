import React from "react";
import Image from "next/image";
import "./welcome.css";
import BackgroundImage from "../../assets/img/background.svg"; // Substitua pelo caminho real da sua imagem

const WelcomeSection = () => {
  return (
    <section id="home" className="welcome-section">
      <h2>
        Enchance your<br></br>business
      </h2>

      <div className="image-container">
        <Image
          src={BackgroundImage}
          alt="Descrição da imagem"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
};

export default WelcomeSection;
