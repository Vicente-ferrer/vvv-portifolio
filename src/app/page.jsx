// HomePage.js
import React from "react";
import Header from "./components/header/header";
import WelcomeSection from "./components/welcome/welcome";
import AboutSection from "./components/about/about";
import ServicesSection from "./components/services/services";
import TeamMember from "./components/team/team";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <WelcomeSection />
        <AboutSection />
        <ServicesSection />
        <section className="team-section">
          <h2>Nosso Time</h2>
          <TeamMember />
          {/* Adicione mais membros da equipe aqui */}
        </section>
      </main>
    </div>
  );
};

export default HomePage;
