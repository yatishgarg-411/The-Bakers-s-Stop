import React from "react";
import { Link } from "react-router-dom";
import {
  ChefHat,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#5A3E36", color: "white" }}>
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "4rem 1rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
        }}
      >
        {/* Company Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                width: "2.5rem",
                height: "2.5rem",
                backgroundColor: "#6B8E23",
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ChefHat size={20} color="white" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "700",
                  fontSize: "1.125rem",
                }}
              >
                The Baker's Stop
              </span>
              <span style={{ fontSize: "0.75rem", color: "#EDEADE" }}>
                Premium Bakery
              </span>
            </div>
          </Link>
          <p
            style={{
              color: "#D7D2C5",
              fontFamily: "Poppins, sans-serif",
              lineHeight: "1.6",
            }}
          >
            Delivering freshly baked happiness to every outlet across Ludhiana
            and Jalandhar. Your trusted partner for premium bakery products.
          </p>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {[
              {
                href: "https://wa.me/+919876543210",
                bg: "#25D366",
                icon: <MessageCircle size={16} color="white" />,
              },
              {
                href: "https://facebook.com/thebakersstop",
                bg: "#3b5998",
                icon: <Facebook size={16} color="white" />,
              },
              {
                href: "https://instagram.com/thebakersstop",
                bg: "#E1306C",
                icon: <Instagram size={16} color="white" />,
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: item.bg,
                  padding: "0.5rem",
                  borderRadius: "9999px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  transition: "background-color 0.3s",
                }}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "700",
              fontSize: "1.125rem",
              marginBottom: "1rem",
            }}
          >
            Quick Links
          </h3>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Our Menu", path: "/menu" },
              { name: "Services", path: "/services" },
              { name: "Gallery", path: "/gallery" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  style={{
                    color: "#D7D2C5",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "0.95rem",
                    textDecoration: "none",
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "700",
              fontSize: "1.125rem",
              marginBottom: "1rem",
            }}
          >
            Our Services
          </h3>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              color: "#D7D2C5",
              fontFamily: "Poppins, sans-serif",
              fontSize: "0.95rem",
            }}
          >
            {[
              "B2B Bakery Supply",
              "Daily Fresh Delivery",
              "Bulk Orders",
              "Custom Products",
              "Private Labeling",
              "Partnership Programs",
            ].map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "700",
              fontSize: "1.125rem",
              marginBottom: "1rem",
            }}
          >
            Contact Info
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
              <MapPin size={20} color="#B2AC88" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
              <div style={{ color: "#D7D2C5", fontFamily: "Poppins, sans-serif", fontSize: "0.9rem" }}>
                <p>Model Town, Ludhiana</p>
                <p>Civil Lines, Jalandhar</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
              <Phone size={20} color="#B2AC88" style={{ flexShrink: 0 }} />
              <a
                href="tel:+919876543210"
                style={{
                  color: "#D7D2C5",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                }}
              >
                +91 98765 43210
              </a>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
              <Mail size={20} color="#B2AC88" style={{ flexShrink: 0 }} />
              <a
                href="mailto:info@thebakersstop.com"
                style={{
                  color: "#D7D2C5",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                }}
              >
                info@thebakersstop.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid #4B3229" }}>
        <div
          style={{
            maxWidth: "80rem",
            margin: "0 auto",
            padding: "1.5rem 1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              color: "#EDEADE",
              fontFamily: "Poppins, sans-serif",
              fontSize: "0.85rem",
            }}
          >
            © 2024 The Baker's Stop. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a
              href="#"
              style={{
                color: "#EDEADE",
                fontFamily: "Poppins, sans-serif",
                fontSize: "0.85rem",
                textDecoration: "none",
              }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{
                color: "#EDEADE",
                fontFamily: "Poppins, sans-serif",
                fontSize: "0.85rem",
                textDecoration: "none",
              }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
