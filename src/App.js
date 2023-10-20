import './App.css';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';
import Plans from './components/Plans/Plans';

function App() {
	return (
		<div className="App">
			<Menu />
			<Breadcrumbs />
			<Hero />
			<Plans />
		</div>
	);
}

export default App;
