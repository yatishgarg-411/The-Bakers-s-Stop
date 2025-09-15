import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Facebook, Instagram } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", business: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const faqs = [
    {
      question: "What are your minimum order requirements?",
      answer: "We accommodate orders of all sizes, from small cafes to large retail chains. Contact us to discuss your specific needs.",
    },
    {
      question: "Do you offer delivery services?",
      answer: "Yes, we provide daily delivery services across Ludhiana and Jalandhar with flexible scheduling options.",
    },
    {
      question: "Can you customize products for our brand?",
      answer: "Absolutely! We offer private labeling and custom product development services for our business partners.",
    },
    {
      question: "What are your payment terms?",
      answer: "We offer flexible payment terms including credit facilities for established business partners. Contact us for details.",
    },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1>Contact Us</h1>
            <p>
              Ready to partner with us? Get in touch to discuss your bakery
              supply needs and discover how we can help your business grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container grid-2">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="form-wrapper"
          >
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="business">Business Name</label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="Your business name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button type="submit" className="btn-submit">
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="info-wrapper"
          >
            <h2>Get in Touch</h2>
            <p>
              We're here to help you succeed. Reach out to us through any of the
              channels below and let's discuss how we can support your business.
            </p>

            <div className="info-cards">
              <div className="info-card">
                <Phone size={24} className="icon" />
                <div>
                  <h3>Phone</h3>
                  <p>
                    <a href="tel:+919876543210">+91 98765 43210</a>
                  </p>
                  <p>
                    <a href="tel:+919876543211">+91 98765 43211</a>
                  </p>
                </div>
              </div>

              <div className="info-card">
                <Mail size={24} className="icon" />
                <div>
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:info@thebakersstop.com">
                      info@thebakersstop.com
                    </a>
                  </p>
                  <p>
                    <a href="mailto:orders@thebakersstop.com">
                      orders@thebakersstop.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="info-card">
                <MapPin size={24} className="icon" />
                <div>
                  <h3>Locations</h3>
                  <p>Model Town, Ludhiana, Punjab 141002</p>
                  <p>Civil Lines, Jalandhar, Punjab 144001</p>
                </div>
              </div>

              <div className="info-card">
                <Clock size={24} className="icon" />
                <div>
                  <h3>Business Hours</h3>
                  <p>Monday - Sunday: 6:00 AM - 10:00 PM</p>
                  <small>24/7 order support available</small>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="https://wa.me/+919876543210" target="_blank" rel="noreferrer">
                  <MessageCircle size={20} />
                </a>
                <a href="https://facebook.com/thebakersstop" target="_blank" rel="noreferrer">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com/thebakersstop" target="_blank" rel="noreferrer">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="faq-header"
          >
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions about our services</p>
          </motion.div>

          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="faq-item"
              >
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
