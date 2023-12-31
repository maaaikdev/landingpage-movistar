import React, { useState, useEffect } from 'react';
import './Plans.scss'
import PlanCards from '../PlansCards/PlansCards';
import plansData from '../../data/plans.json'
import Tabs from '../Tabs/Tabs';

const Plans = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        // Realiza una solicitud para obtener el JSON
		fetch('data/plans.json') // Ruta relativa al archivo JSON
		//fetch('https://maaaik.site/landing-movistar-telefonica/data/plans.json')
			.then((response) => {
				if (!response.ok) {
				throw new Error('No se pudo cargar el JSON');
				}
				return response.json();
			})
			.then((jsonData) => {
				setData(jsonData);
			})
			.catch((error) => {
				console.error(error);
			});
    }, []);

  return (
	<>
		<Tabs />
		<div className='content-plans'>
			
			{data && data.map((item, index) => (
				<PlanCards key={index} plan={item} /> 
			))}
		</div>
		<div className='include'>
			<h3>Todos nuestros planes de Internet Fibra Óptica <span>también incluyen</span></h3>
			<div className='includes-box'>
				<div className='box'>
					<div className='img-box'>
						<img src='assets/images/plans/smartwifi-icon.png' alt='modem' />
					</div>
					<div className='content-box'>
						<h4>Módem Smart WiFi</h4>
						<p>2.4GHz y 5GHz</p>
					</div>
				</div>
				<div className='box'>
					<div className='img-box'>
						<img src='assets/images/plans/smartwifi-icon.png' alt='modem' />
					</div>
					<div className='content-box'>
						<h4>Sigue tu instalación</h4>
						<p>Puedes seguir tu
instalación en línea</p>
					</div>
				</div>
			</div>
		</div>
	</>
    
  );
};

export default Plans;