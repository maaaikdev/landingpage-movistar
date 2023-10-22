import React from 'react';
import './OpticalFiber.scss'
import Streaming from './Streaming/Streaming';
import Signal from './Signal/Signal';

const OpticalFiber = () => {

	const info = [
		{
			img: "assets/images/optical-fiber/downloads-illustration.png",
			description: "Descarga y sube archivos más rápido"
		},
		{
			img: "assets/images/optical-fiber/play-icon.png",
			description: "Juega online sin interrupciones"
		},
		{
			img: "assets/images/optical-fiber/bicycle-illustration.png",
			description: "Mira tus series y videos sin pausas"
		},
		{
			img: "assets/images/optical-fiber/calls-illustration.png",
			description: "Videollamadas sin interrupciones"
		}
	];

	return (
		<>
			<div className='optical-fiber'>
				<h3>¿Por qué elegir Fibra óptica para mi hogar?</h3>
				<div className='content-fiber'>
					<div className='left'>
						{ info.map((item, index) => (
							<div key={index} className='box-info'>
								<img src={item.img} alt={item.description} />
								<h5>{item.description}</h5>
							</div>
						)) }					
					</div>
					<div className='right'>
						<img src='assets/images/optical-fiber/video.png' alt='video' />
					</div>
				</div>
			</div>
			<Streaming />
			<Signal />
		</>		
	);
};

export default OpticalFiber;
