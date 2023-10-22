import React, { useState, useEffect } from 'react';
import './PlansCards.scss'

const PlanCards = (props) => {
	const { plan } = props
	const [ divVisible, setDivVisible ] = useState(false);
	const [ windowWidth, setWindowWidth] = useState(window.innerWidth);

	const toggleDiv = () => {
		setDivVisible(!divVisible);
	};	

	useEffect(() => {
		// Manejar cambios en el ancho de la ventana
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}
		const disabled = windowWidth < 768 ? setDivVisible(false) : setDivVisible(true);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [windowWidth]);  

  return (
	
    <div className='card'>
		<div className={`top-ranking ${plan.topRanking === false ? 'hidden' : ''}`}>
			⭐ ¡MÁS VENDIDO!
		</div>
        <h4>{plan.plan}</h4>
		<h5>{plan.type}</h5>
		<div className='price-table'>
			<div className='left'>
				<h2>{plan.mbps}</h2>
				<p className='speed'>{plan.speed}</p>
			</div>
			<div className='right'>
			<h3 className='price'>S/
				<span className='big-price'>{plan.mainPrice}</span>
				<span className='small-price'>.{plan.secondPrice} {plan.months}</span>
			</h3>
			<p className='speed'>{plan.regularPrice}</p>
			</div>
		</div>		
		<p className='install'>{plan.install}</p>
		<p className='prev'>{plan.note}</p>
		<div className='btn-main-content'>
			<button className='btn-main'>{plan.mainButton}</button>
			<button className='btn-second'>{plan.secondButton}</button>
		</div>		
		
		<a onClick={toggleDiv} className='link-drop'>
			{divVisible ? 'Ver menos' : 'Ver más beneficios'}
			<img src='assets/images/plans/icons-apps/arrow.png' alt='arrow' className={`${divVisible ? 'rotate' : 'normal'}`}/>
		</a>
		{divVisible  && 		
			<div className={`divDrop`}>
				<h5>{plan.appsTitle}</h5>
				<div className='apps'>
					{plan.apps.map((item, index) => (
						<img key={index} src={item} alt='social-media' />
					))}
				</div>
				<div className={`bono ${plan.promoTitle === undefined ? 'hidden' : ''}`}>
					<h4>{plan.promoTitle}</h4>
					<p>{plan.bonoTxt} <span>{plan.bonoMonth}</span></p>
				</div>
				<div className='promo-1'>
					<div className='promo-left'>
						<div className='bullet'>
							<img src={plan.bonoIcon1} alt='social-media' />
							<p>{plan.bonoGb1}</p>
						</div>
						<p>{plan.bonoGb1a}</p>
					</div>
					<div className='promo-right'>
						<h6>{plan.bonoGbTxt1} <span>GB</span></h6>
						<p>{plan.bonoGbMonth1} </p>
					</div>
				</div>
				<div className='promo-2'>
					<div className='promo-left'>
						<img src={plan.bonoImg2} alt='Prime' />
					</div>
					<div className='promo-right'>
						<h6>{plan.bonoGbTxt2}</h6>
						<p>{plan.bonoGbMonth2} </p>
					</div>
				</div>
				<div className='description'>
					<img src={plan.descriptionImg} alt='Prime' />
					<p>{plan.description}</p>
				</div>
			</div>
		}
    </div>
  );
};

export default PlanCards;
