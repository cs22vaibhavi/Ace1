import React from "react";
import "./styles.css";
import { FaKey, FaConciergeBell, FaHotel, FaBicycle, FaUtensils } from "react-icons/fa";

const HotelDashboard = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="user-info">
          <img src="https://img.icons8.com/?size=48&id=13042&format=png" alt="User" className="user-avatar" />
          <div>
            <h2>Joana Barros</h2>
            <p>Hotel Guest</p>
          </div>
        </div>
        <button className="menu-btn">☰</button>
      </header>
      
      <section className="recommendation">
        <h3>Recommended for you</h3>
        <div className="recommendation-card">
          <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/73/26/c3.jpg" alt="Spa" className="recommendation-img" />
          <div className="recommendation-info">
            <p className="price-tag">From $30/person</p>
            <h4>Enjoy some me time</h4>
            <p>Relax with our massages and treatments.</p>
            <p className="closing-info">Spa facilities will close in 4 hours</p>
          </div>
        </div>
      </section>
      
      <section className="popular-experiences">
        <h3>Popular experiences</h3>
        <div className="experience-cards">
          <div className="experience-card">
            <FaBicycle className="icon" />
            <p>Bike Riding</p>
            <span>Varied tour options</span>
          </div>
          <div className="experience-card">
            <FaUtensils className="icon" />
            <p>Dinner at the hotel</p>
            <span>From $30/person</span>
          </div>
        </div>
      </section>
      
      <section className="services">
        <h3>All services</h3>
        <div className="service-list">
          <button className="service-item"><FaHotel /> Facilities</button>
          <button className="service-item"><FaKey /> Virtual Key</button>
          <button className="service-item"><FaConciergeBell /> My Room</button>
          <button className="service-item"><FaConciergeBell /> Order Room Service</button>
        </div>
      </section>
      
     
    </div>
  );
};

export default HotelDashboard;
