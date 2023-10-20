import React, { useState } from 'react';
import './Menu.scss'

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <nav >
        <div className='black-nav'>Menu top</div>
        <div className={`menu ${isMenuOpen ? 'responsive-menu' : ''}`}>
            <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <button className="menu-toggle" onClick={toggleMenu}>
            ☰
            </button>
        </div>        
    </nav>
  );
};

export default Menu;
