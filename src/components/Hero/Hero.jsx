import React, { useState, useEffect } from 'react';
import './Hero.scss'

const Hero = () => {
	const [ windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		// Manejar cambios en el ancho de la ventana
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [windowWidth]);

	console.log(windowWidth)	


	return (
		<div className='hero'>
			<img src={windowWidth < 768 ? '/assets/images/hero/banner-mobile.png' : '/assets/images/hero/banner-desktop.png'} alt='Hero' />
			<div className='content'>
				<h2>¡Conoce la fibra óptica de Movistar!</h2>
				<h4>Si ya eres cliente Movistar, <span>migra SIN COSTO</span> manteniendo tu plan actual.</h4>
				<img src='/assets/images/hero/promo.png' alt='Hero' className='promo' />
			</div> 
		</div>
	);
};

export default Hero;
