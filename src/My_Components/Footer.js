import React from 'react';
import './Footer.css'; // Import CSS for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 My To-Do List. All rights reserved.</p>
      <p>Follow us on <a href="#social" className="footer-link">Social Media</a></p>
    </footer>
  );
};

export default Footer;
