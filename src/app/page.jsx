// HomePage.jsx
import React from "react";
import Header from "../app/components/header/header";
import WelcomeSection from "../app/components/welcome/welcome";
import AboutSection from "../app/components/about/about";
import ServicesSection from "../app/components/services/services";
import TeamMember from "../app/components/team/team";
import Footer from "../app/components/footer/Footer";
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
          <TeamMember />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
