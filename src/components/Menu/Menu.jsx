import React, { useState } from 'react';
import './Menu.scss'

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

	const topMenu = [
		"Personas", "Empresas", "Información a Abonados y Usuarios"
	];

	const mainMenu = [
		"Celulares", "Hogar", "Plan Móvil", "Entretenimiento", "Atención al cliente"
	];

	const mainIcons = [
		{
			icon: "assets/images/nav/finder-icon.png",
			name: "Search"
		},
		{
			icon: "assets/images/nav/track-icon.png",
			name: "Orders"
		},
		{
			icon: "assets/images/nav/notifications-icon.png",
			name: "Notifications"
		}
	]

  return (
    <nav >
        <div className='black-nav'>
			<ul>
				{topMenu.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
        <div className={`menu ${isMenuOpen ? 'responsive-menu' : ''}`}>
			<div className={`logo-movistar ${isMenuOpen ? 'shadow' : ''}`}>
				<img src='assets/images/nav/m-logo.png' alt='Movistar logo' className='logo' />
			</div>			
            <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
				{mainMenu.map((item, index) => (
					<li className='item' key={index}>
						{item}
						<img src='assets/images/nav/arrow.png' alt='Arrow' className='arrow' />
					</li>
				))}
				<li className='item-offer'>					
					<img src='assets/images/nav/fire.png' alt='Arrow' className='arrow' />
					Ofertas
				</li>				
            </ul>
			<button className={`btn-second ${isMenuOpen ? 'open' : ''}`}>App Mi Movistar</button>
			<div className={`menu-icons ${isMenuOpen ? 'hidden' : ''}`}>
				{mainIcons.map((icon, index) => (
					<button key={index} className={`btn-icon ${icon.name === 'Orders' ? 'hidden' : ''}`}>
						<img src={icon.icon} alt={icon.name} />
					</button>
				))}
			</div>			
            <button className={`menu-toggle ${isMenuOpen ? 'reposition' : ''}`} onClick={toggleMenu}>
				<img src={isMenuOpen ? 'assets/images/nav/cerrar.png' : 'assets/images/nav/menu.png'}  alt='Menu' />
            </button>
        </div>        
    </nav>
  );
};

export default Menu;
