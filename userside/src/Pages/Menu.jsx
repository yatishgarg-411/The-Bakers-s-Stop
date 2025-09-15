import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'cakes', name: 'Cakes' },
    { id: 'breads', name: 'Breads' },
    { id: 'pastries', name: 'Pastries' },
    { id: 'namkeen', name: 'Namkeen Corner' },
    { id: 'savories', name: 'Dry Cakes' },
    { id: 'cookies', name: 'Cookies' },
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Chocolate Truffle Cake',
      category: 'cakes',
      price: '₹450/kg',
      description: 'Rich chocolate cake with truffle filling and ganache topping',
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      name: 'Fresh Bread Loaf',
      category: 'breads',
      price: '₹35/piece',
      description: 'Soft, freshly baked bread perfect for daily consumption',
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      name: 'Chicken Puff',
      category: 'savories',
      price: '₹25/piece',
      description: 'Flaky pastry filled with spiced chicken and vegetables',
      image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 4,
      name: 'Vanilla Cupcakes',
      category: 'cakes',
      price: '₹180/6pcs',
      description: 'Moist vanilla cupcakes with buttercream frosting',
      image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 5,
      name: 'Croissant',
      category: 'pastries',
      price: '₹45/piece',
      description: 'Buttery, flaky French pastry perfect for breakfast',
      image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 6,
      name: 'Chocolate Chip Cookies',
      category: 'cookies',
      price: '₹120/dozen',
      description: 'Classic cookies loaded with chocolate chips',
      image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 7,
      name: 'Red Velvet Cake',
      category: 'cakes',
      price: '₹520/kg',
      description: 'Classic red velvet with cream cheese frosting',
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 8,
      name: 'Garlic Bread',
      category: 'breads',
      price: '₹85/piece',
      description: 'Aromatic garlic bread with herbs and butter',
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 9,
      name: 'Vegetable Samosa',
      category: 'savories',
      price: '₹15/piece',
      description: 'Crispy pastry filled with spiced vegetables',
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="menu-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1>Our Menu</h1>
            <p>
              Discover our extensive range of premium bakery products, crafted with 
              the finest ingredients and traditional techniques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="search-section">
        <div className="container search-flex">
          <div className="search-box">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={activeCategory === category.id ? 'active' : ''}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="menu-items-section">
        <div className="container grid">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="menu-card"
            >
              <div className="menu-image">
                <img src={item.image} alt={item.name} />
                <div className="price-tag">{item.price}</div>
              </div>

              <div className="menu-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="menu-footer">
                  <span className="category-label">{item.category}</span>
                  <button className="order-btn">Order Now</button>
                </div>
              </div>
            </motion.div>
          ))}

          {filteredItems.length === 0 && (
            <div className="no-results">
              <p>No items found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Bulk Order CTA */}
      <section className="bulk-section">
        <div className="bulk-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Need Bulk Orders?</h2>
            <p>
              We specialize in bulk orders for businesses. Contact us for custom pricing 
              and delivery schedules tailored to your needs.
            </p>
            <button className="bulk-btn">Get Bulk Pricing</button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
