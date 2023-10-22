import React from 'react';
import Slider from "react-slick";
import './Carousel.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	const info = [
		{
			img: "assets/images/carousel/router-icon.png",
			tip: "Tip 1 de 6",
			description: "No flexiones ni enrolles el cable de fibra."
		},
		{
			img: "assets/images/carousel/router-icon.png",
			tip: "Tip 2 de 6",
			description: "No dobles el cable que va	conectado al router"
		},
		{
			img: "assets/images/carousel/router-icon.png",
			tip: "Tip 3 de 6",
			description: "No aplastes el cable con muebles o cualquier otro objeto."
		},
		{
			img: "assets/images/carousel/router-icon.png",
			tip: "Tip 4 de 6",
			description: "No flexiones ni enrolles el cable de fibra."
		},
		{
			img: "assets/images/carousel/router-icon.png",
			tip: "Tip 2 de 6",
			description: "No dobles el cable que va	conectado al router"
		},
		{
			img: "assets/images/carousel/router-icon.png",
			tip: "Tip 3 de 6",
			description: "No aplastes el cable con muebles o cualquier otro objeto."
		}
	];

	return (
		<div className='carousel-content'>
			<div>
				<h4>¿Quieres navegar a máxima velocidad?</h4>
        		<h3> 6 tips para optimizar la conexión de tu fibra óptica </h3>
        		<Slider {...settings}>
					{info.map((item, index) => (
						<div className='content-box' key={index}>
							<img src={item.img} alt={item.tip} />
							<h4>{item.tip}</h4>
							<p>{item.description}</p>
						</div>
					))}	
        		</Slider>
      		</div>
		</div>
	);
};

export default Carousel;
