import React, {useState, useEffect} from 'react';
import './Footer.scss';

const Footer = () => {

	const [ windowWidth, setWindowWidth] = useState(window.innerWidth);

	const info = [
		{
			title: "Movil",
			items: [
				"Internet Hogar","Fibra Óptica","Movistar TV","Internet Gamer","Planes dúo Movistar","Tríos Movistar","Planes de Internet", "Movistar Total","Movistar TV App","Test de Velocidad de Internet","Repetidor Wifi","Televisión por Internet","Teléfono fijo","Internet"
			]
		},
		{
			title: "Hogar",
			items: [
				"Portabilidad Movistar","Movistar planes Postpago","Renovar tu equipo",	"Celulares","Celulares Liberados",	"Celulares en Oferta",	"Celulares de Gama Alta","Celulares Gamer",	"Celulares Baratos","Equipos Postpago",	"Roaming","Preplan Movistar","Esim","Recargas y paquetes Movistar",	"Beneficios Movistar Prepago",	"Líneas adicionales","Equipo 5G"
			]
		},
		{
			title: "Celulares",
			items: [
				"Samsung A22","iPhone 11","Honor X7 a",	"Samsung A14","Samsung Galaxy A13",	"Samsung S22 Ultra 5G","iPhone 12",	"iPhone 13","Samsung A53","Samsung S21",
			]
		},
		{
			title: "Atención al cliente",
			items: [
				"App Mi Movistar","Mi Movistar","Blog Movistar","Lucía","Asesora Virtual","Mapa Web","Lugares y Medios de Pago","Ganadores de sorteos",	"Consulta tus números",'Antifraude',"Asesores y técnicos"
			]
		},
		{
			title: "Promociones especiales",
			items: [
				"Regalos para papá","Cyber Wow","Celebratón","Promociones",	"Disney Plus",
			]
		},
		{
			title: "Regulación y legales",
			items: [
				"Calidad OSIPTEL","Cobertura Inalámbrica","SISMATE","Uso de la red en caso de emergencia","Medio Ambiente","Centro de transparencia y privacidad","Conectarse",	"Neutralidad de la red","Consulta de contratos y solicitudes",	"Tarifas planes vigentes"
			]
		},
	];

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

	// const [isCollapsed, setCollapsed] = useState(true);
	const [collapsedItems, setCollapsedItems] = useState(Array(info.length).fill(true));

	// const toggleCollapse = () => {
	// 	setCollapsed(!isCollapsed);
	// };

	const toggleCollapse = (index) => {
		const updatedCollapsedItems = [...collapsedItems];
		updatedCollapsedItems[index] = !updatedCollapsedItems[index];
		setCollapsedItems(updatedCollapsedItems);
	};

	const footerFinal = [
		"Reclamos y solicitudes en línea",
		"Consultas de reclamos",
		"Información abonados y usuarios",
		"Libro de Reclamaciones"
	]
	return (
		<div className='footer'>
			<img src='assets/images/footer/logo-telefonica.png' alt='logo' className='logo-telefonica'/>
			<div className='content-footer'>
				{windowWidth > 768 && info.map((item, index) => (
					<div className='column' key={index}>
						<h4>{item.title}</h4>
						<ul>
							{item.items.map((items, index) =>(
								<li key={index}>{items}</li>
							))}
						</ul>
					</div>
				))}				
			</div>			
			<div className='content-footer-responsive'>
				{windowWidth < 768 && info.map((item, index) => (
					<div key={index} className="collapse-container">
						<button onClick={() => toggleCollapse(index)}>
							{item.title}
							<img src='assets/images/plans/icons-apps/arrow.png' alt='arrow' className={`${collapsedItems[index] ? 'normal' : 'rotate'}`}/>
						</button>
						{collapsedItems[index] ? null : (
							<div className="collapsed-content">
								<ul>
									{item.items.map((items, index) =>(
										<li key={index} >{items}</li>
									))}
								</ul>
							</div>
						)}
					</div>
				))}
			</div>
			<div className='footer-bottom'>
				<ul>
					<li className='cp'>© 2023 Movistar. Todos los derechos reservados.</li>
					{footerFinal.map((item, index) => (
						<li key={index} className='other-btn'>{item}</li>
					))}
					<li>
						<img src='assets/images/footer/redes.png' alt='arrow'/>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
