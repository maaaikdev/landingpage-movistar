import './Signal.scss'

const Signal = () => {

	const benefits = [
		{
			img: "assets/images/optical-fiber/router-icon.png",
			description: "Señales WiFi: Amplificador con dos señales: WiFi (2.4 GHz) y WiFi Plus (5GHz)"
		},
		{
			img: "assets/images/optical-fiber/speed-icon.png",
			description: "Velocidad Plus: La señal WiFi Plus te dará máxima velocidad"
		},
		{
			img: "assets/images/optical-fiber/world-icon.png",
			description: "Antena WiFi de alta gama: La señal WiFi Plus te permitirá distribuir y conectar más dispositivos."
		},
		{
			img: "assets/images/optical-fiber/shield-icon.png",
			description: "Fácil configuración: Amplificador compatible con todos los módems. Conectado por cable ethernet."
		}
	];

	return (
		<div className='signal'>
			<div className='content-signal'>
				<div className='left'>
				<h3>Amplia tu señal de Wifi en toda tu casa con <span>nuestro repetidor Wifi plus</span></h3>
					<p>Instala un Repetidor Wifi Plus en un punto de baja cobertura y amplifica tu señal Wifi en todo tu hogar. </p>
					<p>Adquiérelo con tu plan o solicita uno a través de la App Mi Movistar</p>						
				</div>
				<div className='right'>
					<img src='assets/images/optical-fiber/aeroband-image.png' alt='video' />
				</div>
			</div>
			<div className='benefits'>
				{ benefits.map((item, index) => (
					<div key={index} className='box-info'>
						<img src={item.img} alt={item.description} />
						<p>{item.description}</p>
					</div>
				)) }	
			</div>
			<div className='app-movistar'>
				<img src='assets/images/optical-fiber/WEBP_AGOS-QR-desktop.webp' alt='qr-code' className='qr'/>
				<div className='get-app'>
					<div className='left'>
						<img src='assets/images/optical-fiber/WEBP_AGOS-Logo-movistar.webp' alt='happy' />
					</div>
					<div className='right'>
						<h3>Adquiere tu repetidor <span>desde la App Mi Movistar</span></h3>
						<p>Descarga la App y obtén tu repetidor de forma fácil en sencillos pasos</p>
						<div className='stores'>
							<img src='assets/images/optical-fiber/appstore-image.png' alt='App Store' />
							<img src='assets/images/optical-fiber/googleplay-image.png' alt='Google Play' />							
						</div>
					</div>
				</div>
				<img src='assets/images/optical-fiber/happy-illustration.png' alt='happy' className='happy-man'/>
			</div>
		</div>
	);
};

export default Signal;
