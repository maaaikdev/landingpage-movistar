import React from 'react';
import './Coverage.scss'

const Coverage = () => {

  return (
    <div className='coverage'>
        <div className='map'>
			<img src='assets/images/hero/coverage.png' alt='cobertura' />
		</div>
		<div className='description-coverage'>
			<h4>
				<span>¡Hazlo fácil! </span>
				 Consulta tu cobertura y descubre las ofertas que tenemos para ti
			</h4>
			<p>*Aplica en localidades seleccionadas</p>
		</div> 
		<button className='btn-main'>Consultar cobertura</button>
    </div>
  );
};

export default Coverage;
