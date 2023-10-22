import './Streaming.scss'

const Streaming = () => {

	return (
		<div className='streaming'>
			<div className='content-streaming'>
				<div className='left'>
					<img src='assets/images/optical-fiber/enjoy-image.png' alt='video' />			
				</div>
				<div className='right'>
					<h3>Agrega servicios de streaming a tu plan de fibra óptica</h3>
					<p>Por contar con el plan <span>hogar Movistar tendrás acceso a Disney + y Star +</span> con precios especiales. Contrata tu plan favorito con streaming adicional.</p>
					<a className='link-plan '>
						Selecciona un plan 
						<img src='assets/images/plans/icons-apps/arrow.png' alt='arrow' className='arrow' />
					</a>
				</div>
			</div>
			<div className='platforms'>
				<img src='assets/images/optical-fiber//disney-logo.png' alt='Disney' className='arrow' />
				<img src='assets/images/optical-fiber//starplus-logo.png' alt='Start' className='arrow' />
			</div>
		</div>
	);
};

export default Streaming;
