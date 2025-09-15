import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Users, Clock, Award, Package, Handshake } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Daily Fresh Delivery',
      description: 'Reliable daily delivery service ensuring your shelves are always stocked with fresh products.',
      features: ['Early morning delivery', 'Temperature controlled transport', 'Flexible scheduling']
    },
    {
      icon: Package,
      title: 'Bulk Supply Solutions',
      description: 'Customized bulk orders for businesses of all sizes with competitive wholesale pricing.',
      features: ['Volume discounts', 'Custom packaging', 'Flexible payment terms']
    },
    {
      icon: Users,
      title: 'Partnership Programs',
      description: 'Exclusive partnership opportunities for retailers, cafes, and food service businesses.',
      features: ['Marketing support', 'Training programs', 'Exclusive products']
    },
    {
      icon: Clock,
      title: '24/7 Order Support',
      description: 'Round-the-clock order management and customer support for seamless business operations.',
      features: ['Online ordering system', 'Dedicated account manager', 'Emergency orders']
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensuring consistent excellence in every product.',
      features: ['FSSAI certified', 'Regular quality audits', 'Freshness guarantee']
    },
    {
      icon: Handshake,
      title: 'Custom Solutions',
      description: 'Tailored bakery solutions including private labeling and custom product development.',
      features: ['Private labeling', 'Recipe customization', 'Seasonal specials']
    }
  ];

  const benefits = [
    {
      title: 'Consistent Quality',
      description: 'Every product meets our high standards, ensuring customer satisfaction.',
      stat: '99.5%',
      label: 'Quality Score'
    },
    {
      title: 'On-Time Delivery',
      description: 'Reliable delivery schedules that keep your business running smoothly.',
      stat: '98%',
      label: 'On-Time Rate'
    },
    {
      title: 'Cost Savings',
      description: 'Competitive wholesale pricing that improves your profit margins.',
      stat: '25%',
      label: 'Average Savings'
    },
    {
      title: 'Product Variety',
      description: 'Extensive range of products to meet diverse customer preferences.',
      stat: '150+',
      label: 'Product Options'
    }
  ];

  return (
    <div className="services-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="hero-title">Our Services</h1>
            <p className="hero-subtitle">
              Comprehensive B2B bakery solutions designed to help your business thrive 
              with premium products and exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Complete B2B Solutions</h2>
            <p className="section-subtitle">
              Everything you need to stock premium bakery products and delight your customers
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="service-card"
              >
                <div className="icon-wrapper">
                  <service.icon className="service-icon" />
                </div>
                
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="feature-list">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <span className="feature-dot"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Why Choose The Baker's Stop?</h2>
            <p className="section-subtitle">
              Our commitment to excellence translates into measurable benefits for your business
            </p>
          </motion.div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="benefit-card"
              >
                <div className="benefit-stat-wrapper">
                  <div className="benefit-stat">{benefit.stat}</div>
                  <div className="benefit-label">{benefit.label}</div>
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="cta-title">Ready to Partner with Us?</h2>
            <p className="cta-subtitle">
              Join hundreds of satisfied business partners who trust The Baker's Stop 
              for their bakery supply needs.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Start Partnership</button>
              <button className="btn btn-secondary">Request Quote</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
