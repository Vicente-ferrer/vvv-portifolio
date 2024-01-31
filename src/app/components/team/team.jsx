import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dev1 from "../../../../public/foto_vicente.jpeg";
import Skill from "../skill/skill";
import "./team.css";

const TeamMembers = () => {
  return (
    <div id="team" className="team-section">
      <div className="image-container">
        <Image src={Dev1} width={221} height={222} alt="Vicente" title="Dev" />
        <Skill image="/vercel.svg" measure={2} years="2 years" />
      </div>

      {/* Informações sobre a pessoa à direita */}
      <div className="personal-info">
        <h1 className="name">Vicente de Sousa</h1>
        <h2 className="work">Desenvolvedor Front-end e Mobile</h2>
        <h3 className="lang1">EN: Basico</h3>
        <h3 className="lang2">PT-BR: Nativo</h3>
        <h3 className="formation">
          Computer engeenier - Universidade Federal do Para
        </h3>
      </div>

      {/* Gradiente para o botão de contato */}
      <div className="contact-button">
        <div className="gradient"></div>
        <FontAwesomeIcon icon="outline-email" />
      </div>
    </div>
  );
};

export default TeamMembers;
