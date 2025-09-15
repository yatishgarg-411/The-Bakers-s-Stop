import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  Users,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/seating.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            color: "white",
            maxWidth: "64rem",
            margin: "0 auto",
            padding: "0 1rem",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <h1
              style={{
                fontSize: "3rem",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "700",
                lineHeight: "1.2",
              }}
            >
              Freshness Delivered
              <span style={{ display: "block", color: "#F5F5DC" }}>
                to Every Outlet
              </span>
            </h1>
            <p
              style={{
                fontSize: "1.25rem",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                maxWidth: "32rem",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              At The Baker's Stop, we bring freshly baked happiness to every
              outlet. From artisanal breads to decadent cakes, our products
              make every shelf stand out.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "2rem",
              }}
            >
              <Link
                to="/menu"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "#6B8E23",
                  color: "white",
                  padding: "1rem 2rem",
                  borderRadius: "9999px",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "600",
                  fontSize: "1.125rem",
                  textDecoration: "none",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
                  transition: "all 0.3s",
                }}
              >
                <span>View Our Menu</span>
                <ArrowRight size={20} />
              </Link>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {[
                  {
                    href: "https://wa.me/+919876543210",
                    bg: "#25D366",
                    icon: <MessageCircle size={24} color="white" />,
                  },
                  {
                    href: "mailto:info@thebakersstop.com",
                    bg: "#1D4ED8",
                    icon: <Mail size={24} color="white" />,
                  },
                  {
                    href: "https://facebook.com/thebakersstop",
                    bg: "#1E3A8A",
                    icon: <Facebook size={24} color="white" />,
                  },
                  {
                    href: "https://instagram.com/thebakersstop",
                    bg: "#E1306C",
                    icon: <Instagram size={24} color="white" />,
                  },
                  {
                    href: "https://maps.google.com",
                    bg: "#DC2626",
                    icon: <MapPin size={24} color="white" />,
                  },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: item.bg,
                      padding: "0.75rem",
                      borderRadius: "9999px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "transform 0.3s",
                    }}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div
            style={{
              width: "1.5rem",
              height: "2.5rem",
              border: "2px solid white",
              borderRadius: "9999px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{
                width: "0.25rem",
                height: "0.75rem",
                backgroundColor: "white",
                borderRadius: "9999px",
                marginTop: "0.5rem",
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: "5rem 0", backgroundColor: "white" }}>
        <div
          style={{
            maxWidth: "80rem",
            margin: "0 auto",
            padding: "0 1rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
          }}
        >
          {[
            {
              icon: <Star size={32} color="#6B8E23" />,
              title: "500+",
              desc: "Happy Clients",
            },
            {
              icon: <Users size={32} color="#6B8E23" />,
              title: "50+",
              desc: "Products Daily",
            },
            {
              icon: <MapPin size={32} color="#6B8E23" />,
              title: "2",
              desc: "Cities Served",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              style={{
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "4rem",
                  height: "4rem",
                  backgroundColor: "#F0F4E3",
                  borderRadius: "9999px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.875rem",
                  fontWeight: "700",
                  color: "#5A3E36",
                  marginBottom: "0.5rem",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  color: "#7B5E57",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section style={{ padding: "5rem 0", backgroundColor: "#FAF9F6" }}>
        <div
          style={{
            maxWidth: "80rem",
            margin: "0 auto",
            padding: "0 1rem",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              style={{
                fontSize: "2.25rem",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "700",
                color: "#5A3E36",
                marginBottom: "1.5rem",
              }}
            >
              Crafting Excellence Since Day One
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: "#7B5E57",
                fontFamily: "Poppins, sans-serif",
                lineHeight: "1.6",
                marginBottom: "1.5rem",
              }}
            >
              Discover why brands across Ludhiana and Jalandhar trust us for
              quality, consistency, and unmatched taste. Our commitment to
              excellence drives everything we do.
            </p>
            <Link
              to="/about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#6B8E23",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "600",
                fontSize: "1.125rem",
                textDecoration: "none",
              }}
            >
              <span>Learn Our Story</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ position: "relative" }}
          >
            <img
              src="/images/IMG_1598.JPG"
              alt="Baker's Stop Interior"
              style={{
                borderRadius: "1rem",
                boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                width: "100%",
                height: "24rem",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-1.5rem",
                left: "-1.5rem",
                width: "6rem",
                height: "6rem",
                backgroundColor: "#6B8E23",
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: "0.85rem",
                  textAlign: "center",
                  lineHeight: "1.2",
                }}
              >
                Premium<br />Quality
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{ padding: "5rem 0", backgroundColor: "#6B8E23" }}>
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            padding: "0 1rem",
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              style={{
                fontSize: "2rem",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "700",
                color: "white",
                marginBottom: "1rem",
              }}
            >
              Stay Updated with Our Latest Offerings
            </h2>
            <p
              style={{
                fontSize: "1.25rem",
                color: "#F0F4E3",
                fontFamily: "Poppins, sans-serif",
                marginBottom: "2rem",
              }}
            >
              Get exclusive updates on new products, special offers, and bakery
              news.
            </p>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                maxWidth: "24rem",
                margin: "0 auto",
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                style={{
                  flex: 1,
                  padding: "0.75rem 1.5rem",
                  borderRadius: "9999px",
                  border: "none",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "1rem",
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#F5F5DC",
                  color: "#5A3E36",
                  padding: "0.75rem 2rem",
                  borderRadius: "9999px",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "600",
                  fontSize: "1rem",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
