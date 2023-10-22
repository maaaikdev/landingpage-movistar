import React from 'react';
import './ClientsOpinion.scss'

const ClientsOpinion = () => {

	const info = [
		{
			client: "Margarita Martinez",
			txt: "Tiene un plan Internet Hogar Fibra Óptica 600 Megas",
			img: "assets/images/clients-opnion/client-image.png",
			description: "Estos meses de cuarentena le hemos sacado el jugo al internet. En la casa estamos todos trabajando y estudiando a distancia a la misma hora.",
			description2:"Sí, cambiarme a Movistar fue la mejor decisión."
		},
		{
			client: "Fernando Bustos",
			txt: "Tiene un plan Internet Hogar Fibra Óptica 400 Megas",
			img: "assets/images/clients-opnion/clients-image.png",
			description: "Esto de la Fibra Óptica te cambia la vida. El no tener que esperar que carguen los videos es algo tan simple pero tan genial, que se valora mucho.",
			description2:"El sencillo hecho de olvidarme del internet o de las horas de baja velocidad, es algo que agradezco."
		}
	];

	return (
		<>
			<div className='client-opinion'>
				<h3>¿Qué opinan los clientes de nuestros Planes Postpago?</h3>
				<div className='content-client-opinion'>
					{info.map((item, index) => (
						<div className='box-opinion' key={index}>
							<div className='left'>
								<div className='bg-gray'>
									<h4>{item.client}</h4>
									<p>{item.txt}</p>
									<img src={item.img} alt={item.client} />
								</div>
							</div>
							<div className='right'>
								<p>{item.description}</p>
								<p>{item.description2}</p>
							</div>
						</div>
					))}					
				</div>
			</div>
		</>		
	);
};

export default ClientsOpinion;
