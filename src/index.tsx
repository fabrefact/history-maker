import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import 'dotenv/config'
import { NotFound } from './pages/_404';
import { Home } from './pages/Home';
import './style.css';

export function App() {
	return (
		<LocationProvider>
			<Router>
				<Route path="/" component={Home} />
				<Route default component={NotFound} />
			</Router>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
