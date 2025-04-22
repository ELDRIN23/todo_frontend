import React from 'react';
import "../styles/header.css"; // Make sure this file is correctly linked

const Header = () => {
  return (
    <div>
      <header>
        <h1 className="header">EldrinTodo</h1>
        
        {/* Navigation bar */}
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            {/* You can add more links here */}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
