import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Target, Users } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="hero-title">Our Story</h1>
            <p className="hero-subtitle">
              From humble beginnings to becoming the trusted bakery partner for businesses 
              across Ludhiana and Jalandhar, discover the passion behind The Baker's Stop.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">A Journey of Passion & Excellence</h2>
              <div className="section-text">
                <p>
                  The Baker's Stop began with a simple vision: to create exceptional bakery 
                  products that bring joy to every table. What started as a small bakery has 
                  grown into a trusted B2B supplier serving hundreds of outlets across Punjab.
                </p>
                <p>
                  Our commitment to quality ingredients, traditional techniques, and innovative 
                  flavors has made us the preferred choice for shopkeepers, brands, and outlets 
                  who demand nothing but the best for their customers.
                </p>
                <p>
                  Today, we take pride in our state-of-the-art facilities, skilled artisans, 
                  and unwavering dedication to freshness that defines every product we create.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/seating.jpeg"
                alt="Baker's Stop Story"
                className="story-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do at The Baker's Stop
            </p>
          </motion.div>

          <div className="values-grid">
            {[
              { icon: <Award />, title: 'Quality', text: 'We never compromise on the quality of our ingredients or the craftsmanship of our products.' },
              { icon: <Heart />, title: 'Passion', text: 'Every product is made with love and dedication by our skilled artisan bakers.' },
              { icon: <Target />, title: 'Innovation', text: 'We continuously evolve our recipes and techniques to exceed customer expectations.' },
              { icon: <Users />, title: 'Partnership', text: 'We build lasting relationships with our clients based on trust and mutual success.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="value-card"
              >
                <div className="value-icon">{item.icon}</div>
                <h3 className="value-title">{item.title}</h3>
                <p className="value-text">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="ceo-section">
        <div className="container">
          <div className="story-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="CEO - The Baker's Stop"
                className="ceo-image"
              />
              <div className="ceo-badge">
                <span>CEO &<br />Founder</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">Meet Our Visionary Leader</h2>
              <h3 className="ceo-name">Rajesh Kumar, CEO & Founder</h3>
              <div className="section-text">
                <p>
                  With over 15 years of experience in the food industry, Rajesh Kumar founded 
                  The Baker's Stop with a vision to revolutionize the B2B bakery supply chain 
                  in Punjab.
                </p>
                <p>
                  His commitment to quality and innovation has transformed a small local bakery 
                  into a trusted partner for hundreds of businesses across Ludhiana and Jalandhar.
                </p>
                <p>
                  "Our success is measured not just by our growth, but by the smiles we bring 
                  to customers through our partners' shelves," says Rajesh.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="story-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h2 className="section-title text-white">Our Mission</h2>
              <p className="section-text text-white">
                To deliver exceptional bakery products that exceed expectations while building 
                lasting partnerships with businesses across Punjab. We strive to be the most 
                trusted name in B2B bakery supply through consistent quality, innovation, and service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h2 className="section-title text-white">Our Vision</h2>
              <p className="section-text text-white">
                To become the leading bakery supplier in North India, known for our commitment 
                to quality, sustainability, and innovation. We envision a future where every 
                outlet we serve becomes a destination for exceptional baked goods.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
