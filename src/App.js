import './App.css';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Carousel from './components/Caroursel/Carousel';
import ClientsOpinion from './components/ClientsOpinion/ClientsOpinion';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';
import OpticalFiber from './components/OpticalFiber/OpticalFiber';
import Plans from './components/Plans/Plans';
import Questions from './components/Questions/Questions';

function App() {
	return (
		<div className="App">
			<Menu />
			<Breadcrumbs />
			<Hero />
			<Plans />
			<OpticalFiber />
			<ClientsOpinion />
			<Carousel />
			<Questions />
			<Footer />
		</div>
	);
}

export default App;
