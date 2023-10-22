import React from 'react';
import './Breadcrumbs.scss'

const Breadcrumbs = () => {

	const breadcrumbs = [
		"Inicio", "Hogar", "Fibra óptica"
	]

	return (
		<div className='breadcrumbs'>
			<ul>
				{breadcrumbs.map((breadcrumb, index) => (
					<li key={index}>
						{breadcrumb}
						<img src='assets/images/nav/arrow.png' alt='Arrow' className='arrow' />
					</li>
				))}				
			</ul>
		</div>
	);
};

export default Breadcrumbs;
