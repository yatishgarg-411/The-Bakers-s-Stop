import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChefHat } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Outlets", path: "/outlets" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" }
];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        boxShadow: scrolled ? "0 2px 8px rgba(0,0,0,0.1)" : "none"
      }}
    >
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "0 1rem"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "5rem"
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              textDecoration: "none"
            }}
          >
            <div
              style={{
                width: "3rem",
                height: "3rem",
                backgroundColor: "#6B8E23",
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <ChefHat size={24} color="white" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  color: scrolled ? "#5A3E36" : "white"
                }}
              >
                The Baker's Stop
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "Poppins, sans-serif",
                  color: scrolled ? "#7D5A50" : "#F5F5DC"
                }}
              >
                Premium Bakery
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div
            style={{
              display: "none",
              alignItems: "center",
              gap: "2rem"
            }}
            className="navbar-desktop" // Use CSS media query to show/hide this
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  position: "relative",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  fontSize: "1rem",
                  color:
                    location.pathname === item.path
                      ? scrolled
                        ? "#6B8E23"
                        : "#F5F5DC"
                      : scrolled
                      ? "#5A3E36"
                      : "white",
                  textDecoration: "none",
                  transition: "color 0.2s"
                }}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-0.25rem",
                      left: 0,
                      width: "100%",
                      height: "2px",
                      backgroundColor: "#6B8E23"
                    }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div style={{ display: "block" }} className="navbar-mobile">
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                padding: "0.5rem",
                borderRadius: "0.375rem",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: scrolled ? "#5A3E36" : "white"
              }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              backgroundColor: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(8px)",
              borderTop: "1px solid #f5f5dc"
            }}
          >
            <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: "block",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 500,
                    fontSize: "1rem",
                    color:
                      location.pathname === item.path
                        ? "#6B8E23"
                        : "#5A3E36",
                    backgroundColor:
                      location.pathname === item.path ? "#f0f4f0" : "transparent",
                    textDecoration: "none",
                    transition: "background 0.2s"
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
