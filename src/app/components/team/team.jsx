import React from "react";
import Image from "next/image";
import SocialMidia from "../socialContacts/socialContacts";
import Skill from "../skill/skill";
import "./team.css";

const teamMembersData = [
  {
    id: 1,
    name: "Vicente de Sousa",
    role: "Desenvolvedor Front-end e Mobile",
    image: "/foto_vicente.jpeg",
    titleimage: "Vicente",
    skills: [
      { image: "/JS-icon.svg", measure: 2, years: "2 anos" },
      { image: "/TS-icon.svg", measure: 1, years: "1 anos" },
    ],
    languages: ["🇺🇸 Basic", "🇧🇷 Nativo"],
    education: "Computer engeenier - Universidade Federal do Pará",
    socialMedia: {
      linkedInLink: "https://www.linkedin.com/in/vicentedesousa/",
      githubLink: "https://github.com/Vicente-ferrer",
    },
  },
  {
    id: 2,
    name: "Valter Gabriel",
    role: "Desenvolvedor Back-end e android",
    image: "/foto_vicente.jpeg",
    titleimage: "Vicente",
    skills: [
      { image: "/java-icon.png", measure: 2, years: "2 years" },
      { image: "/kotlin-icon.svg", measure: 1, years: "1 year" },
    ],
    languages: ["🇺🇸 Basic", "🇧🇷 Nativo"],
    education: "Computer engeenier - Universidade Federal do Pará",
    socialMedia: {
      linkedInLink: "https://www.linkedin.com/in/vicentedesousa/",
      githubLink: "https://github.com/Vicente-ferrer",
    },
  },
  {
    id: 3,
    name: "Victor Hugo",
    role: "Desenvolvedor Back-end e Desinger",
    image: "/foto_vicente.jpeg",
    titleimage: "Vicente",
    skills: [
      { image: "/C-logo.svg", measure: 2, years: "2 years" },
      { image: "/java-icon.png", measure: 1, years: "1 year" },
    ],
    languages: ["🇺🇸 Basic", "🇧🇷 Nativo"],
    education: "Computer engeenier - Universidade Federal do Pará",
    socialMedia: {
      linkedInLink: "https://www.linkedin.com/in/vicentedesousa/",
      githubLink: "https://github.com/Vicente-ferrer",
    },
  },
];

const TeamMembers = () => {
  return (
    <div id="team" className="team-section">
      <h2>Conheça nosso time</h2>
      {teamMembersData.map((member) => (
        <div key={member.id} className="team-member">
          <div className="image-container">
            <Image
              className="Profile-image"
              src={member.image}
              width={222}
              height={222}
              alt={member.name}
              title={member.titleimage}
            />
            {member.skills.map((skill, index) => (
              <Skill
                key={index}
                image={skill.image}
                measure={skill.measure}
                years={skill.years}
              />
            ))}
          </div>
          <div className="personal-info">
            <h1 className="name">{member.name}</h1>
            <h2 className="work">{member.role}</h2>
          </div>
          <div className="formation-info">
            <h2>Idiomas</h2>
            {member.languages.map((language, index) => (
              <h3 key={index}>{language}</h3>
            ))}
            <h2>Formação</h2>
            <h3>{member.education}</h3>
            <SocialMidia
              linkedInLink={member.socialMedia.linkedInLink}
              githubLink={member.socialMedia.githubLink}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;
