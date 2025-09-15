import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import './Outlets.css';

const Outlets = () => {
  const outlets = [
    {
      id: 1,
      name: "The Baker's Stop - Ludhiana Main",
      address: 'Model Town, Ludhiana, Punjab 141002',
      phone: '+91 98765 43210',
      timings: 'Mon-Sun: 6:00 AM - 10:00 PM',
      image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
      mapUrl: 'https://maps.google.com/?q=Model+Town+Ludhiana',
    },
    {
      id: 2,
      name: "The Baker's Stop - Jalandhar Branch",
      address: 'Civil Lines, Jalandhar, Punjab 144001',
      phone: '+91 98765 43211',
      timings: 'Mon-Sun: 6:30 AM - 9:30 PM',
      image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
      mapUrl: 'https://maps.google.com/?q=Civil+Lines+Jalandhar',
    },
  ];

  return (
    <div className="outlets-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="hero-title">Our Outlets</h1>
            <p className="hero-subtitle">
              Visit our premium bakery outlets in Ludhiana and Jalandhar for the
              freshest products and exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Outlets Grid */}
      <section className="outlets-grid-section">
        <div className="container">
          <div className="outlets-grid">
            {outlets.map((outlet, index) => (
              <motion.div
                key={outlet.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="outlet-card"
              >
                <div className="outlet-image-container">
                  <img src={outlet.image} alt={outlet.name} className="outlet-image" />
                  <div className="outlet-badge">Outlet {outlet.id}</div>
                </div>
                <div className="outlet-content">
                  <h3 className="outlet-title">{outlet.name}</h3>
                  <div className="outlet-info">
                    <div className="info-item">
                      <MapPin className="icon" />
                      <p>{outlet.address}</p>
                    </div>
                    <div className="info-item">
                      <Phone className="icon" />
                      <a href={`tel:${outlet.phone}`} className="link">{outlet.phone}</a>
                    </div>
                    <div className="info-item">
                      <Clock className="icon" />
                      <p>{outlet.timings}</p>
                    </div>
                  </div>
                  <div className="outlet-actions">
                    <a href={outlet.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sage">
                      <Navigation className="icon-small" /> Get Directions
                    </a>
                    <a href={`tel:${outlet.phone}`} className="btn btn-brown">
                      <Phone className="icon-small" /> Call Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="section-title">Find Us on the Map</h2>
            <p className="section-subtitle">
              Locate our outlets easily and plan your visit to experience our premium bakery products firsthand.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="map-container"
          >
            <MapPin className="map-icon" />
            <h3 className="map-title">Interactive Map</h3>
            <p className="map-text">Click the buttons to get directions</p>
            <div className="map-buttons">
              <a href="https://maps.google.com/?q=Model+Town+Ludhiana" target="_blank" rel="noopener noreferrer" className="btn btn-sage">Ludhiana Outlet</a>
              <a href="https://maps.google.com/?q=Civil+Lines+Jalandhar" target="_blank" rel="noopener noreferrer" className="btn btn-brown">Jalandhar Outlet</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="service-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="section-title">Service Areas</h2>
            <p className="section-subtitle">
              We proudly serve businesses across these regions with our premium bakery products and reliable delivery service.
            </p>
          </motion.div>
          <div className="service-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="service-card"
            >
              <h3>Ludhiana</h3>
              <p>Serving all major areas including Model Town, Civil Lines, Sarabha Nagar, and surrounding business districts with fresh daily deliveries.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="service-card"
            >
              <h3>Jalandhar</h3>
              <p>Covering Civil Lines, Cantt area, Model Town, and key commercial zones with our comprehensive B2B supply network.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Outlets;
