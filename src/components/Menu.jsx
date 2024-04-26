// TopMenu.js
import React from 'react';
import './components_styles/menu.css'; // Import your CSS file for styling

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Properties</a></li>
      </ul>
    </div>
  );
}

export default Menu;
