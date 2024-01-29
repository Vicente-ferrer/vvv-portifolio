import React from "react";
import Image from "next/image";
import "./team.css";
import Dev1 from "../../../../public/foto_vicente.jpeg";

const TeamMembers = () => {
  return (
    <div className="team-member">
      <Image src={Dev1} width={80} height={100} alt="Dev 1" title="Dev1" />
      <h3>Vicente de Sousa</h3>
      <ul className="social-links">
        <li>
          <a href="https://linkedin.com/in/dev1">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/Vicente-ferrer/">GitHub</a>
        </li>
      </ul>
      <p>Habilidades: Desenvolvimento Web e Mobile com React e React Navive</p>
    </div>
  );
};

export default TeamMembers;
