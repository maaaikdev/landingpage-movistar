import React, {useState} from 'react';
import './Questions.scss';

const Questions = () => {

	const info = [
		{
			title: "¿Qué es la fibra óptica?",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit diam, pellentesque ut odio at, bibendum rhoncus odio. Duis vulputate magna at tempus gravida. Donec tristique suscipit tempor. Quisque feugiat nibh a interdum viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis molestie massa pulvinar consectetur dignissim. Quisque faucibus dapibus quam. Phasellus ac neque vehicula mauris porta pulvinar. Maecenas a dolor tristique, pellentesque eros at, elemenßtum augue. Suspendisse scelerisque feugiat magna a pretium."
		},
		{
			title: "¿La fibra Óptica de Movistar tiene alguna promoción?",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit diam, pellentesque ut odio at, bibendum rhoncus odio. Duis vulputate magna at tempus gravida. Donec tristique suscipit tempor. Quisque feugiat nibh a interdum viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis molestie massa pulvinar consectetur dignissim. Quisque faucibus dapibus quam. Phasellus ac neque vehicula mauris porta pulvinar. Maecenas a dolor tristique, pellentesque eros at, elemenßtum augue. Suspendisse scelerisque feugiat magna a pretium."
		},
		{
			title: "¿Cuáles son los requisitos para migrar a otro operador?",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit diam, pellentesque ut odio at, bibendum rhoncus odio. Duis vulputate magna at tempus gravida. Donec tristique suscipit tempor. Quisque feugiat nibh a interdum viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis molestie massa pulvinar consectetur dignissim. Quisque faucibus dapibus quam. Phasellus ac neque vehicula mauris porta pulvinar. Maecenas a dolor tristique, pellentesque eros at, elemenßtum augue. Suspendisse scelerisque feugiat magna a pretium."
		},
		{
			title: "¿Cómo saber si el internet de fibra óptica Movistar llega a mi zona?",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit diam, pellentesque ut odio at, bibendum rhoncus odio. Duis vulputate magna at tempus gravida. Donec tristique suscipit tempor. Quisque feugiat nibh a interdum viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis molestie massa pulvinar consectetur dignissim. Quisque faucibus dapibus quam. Phasellus ac neque vehicula mauris porta pulvinar. Maecenas a dolor tristique, pellentesque eros at, elemenßtum augue. Suspendisse scelerisque feugiat magna a pretium."
		},
		{
			title: "¿En qué se diferencia la fibra óptica del internet normal?",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit diam, pellentesque ut odio at, bibendum rhoncus odio. Duis vulputate magna at tempus gravida. Donec tristique suscipit tempor. Quisque feugiat nibh a interdum viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis molestie massa pulvinar consectetur dignissim. Quisque faucibus dapibus quam. Phasellus ac neque vehicula mauris porta pulvinar. Maecenas a dolor tristique, pellentesque eros at, elemenßtum augue. Suspendisse scelerisque feugiat magna a pretium."
		},
		{
			title: "¿Cómo contratar Movistar fibra óptica?",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit diam, pellentesque ut odio at, bibendum rhoncus odio. Duis vulputate magna at tempus gravida. Donec tristique suscipit tempor. Quisque feugiat nibh a interdum viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis molestie massa pulvinar consectetur dignissim. Quisque faucibus dapibus quam. Phasellus ac neque vehicula mauris porta pulvinar. Maecenas a dolor tristique, pellentesque eros at, elemenßtum augue. Suspendisse scelerisque feugiat magna a pretium."
		},
		{
			title: "¿Cómo instalo fibra óptica Movistar en mi casa?",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit diam, pellentesque ut odio at, bibendum rhoncus odio. Duis vulputate magna at tempus gravida. Donec tristique suscipit tempor. Quisque feugiat nibh a interdum viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis molestie massa pulvinar consectetur dignissim. Quisque faucibus dapibus quam. Phasellus ac neque vehicula mauris porta pulvinar. Maecenas a dolor tristique, pellentesque eros at, elemenßtum augue. Suspendisse scelerisque feugiat magna a pretium."
		},
		{
			title: "¿Cómo funciona la red internet fibra óptica?",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit diam, pellentesque ut odio at, bibendum rhoncus odio. Duis vulputate magna at tempus gravida. Donec tristique suscipit tempor. Quisque feugiat nibh a interdum viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis molestie massa pulvinar consectetur dignissim. Quisque faucibus dapibus quam. Phasellus ac neque vehicula mauris porta pulvinar. Maecenas a dolor tristique, pellentesque eros at, elemenßtum augue. Suspendisse scelerisque feugiat magna a pretium."
		},
		{
			title: "¿Qué es mejor? ¿internet inalámbrico o fibra óptica?",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit diam, pellentesque ut odio at, bibendum rhoncus odio. Duis vulputate magna at tempus gravida. Donec tristique suscipit tempor. Quisque feugiat nibh a interdum viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis molestie massa pulvinar consectetur dignissim. Quisque faucibus dapibus quam. Phasellus ac neque vehicula mauris porta pulvinar. Maecenas a dolor tristique, pellentesque eros at, elemenßtum augue. Suspendisse scelerisque feugiat magna a pretium."
		},
		{
			title: "¿Cómo son los cables de fibra óptica?",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit diam, pellentesque ut odio at, bibendum rhoncus odio. Duis vulputate magna at tempus gravida. Donec tristique suscipit tempor. Quisque feugiat nibh a interdum viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis molestie massa pulvinar consectetur dignissim. Quisque faucibus dapibus quam. Phasellus ac neque vehicula mauris porta pulvinar. Maecenas a dolor tristique, pellentesque eros at, elemenßtum augue. Suspendisse scelerisque feugiat magna a pretium."
		},
	];

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

	
	

	return (
		<div className='questions-content'>
			<h3>Preguntas Frecuentes</h3>
				{info.map((item, index) => (
					<div key={index} className="collapse-container">
						<button onClick={() => toggleCollapse(index)}>
							{item.title}
							<img src='assets/images/plans/icons-apps/arrow.png' alt='arrow' className={`${collapsedItems[index] ? 'normal' : 'rotate'}`}/>
						</button>
						{collapsedItems[index] ? null : (
							<div className="collapsed-content">
								<p>{item.description}</p>
							</div>
						)}
					</div>
				))}
		</div>
	);
};

export default Questions;
