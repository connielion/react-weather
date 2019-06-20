import React from 'react';
import Current from './components/Current';
import Forecast from './components/Forecast';
import Error from './components/Error';
import Nav from './components/Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



class App extends React.Component {


	render() {
		return (
			<BrowserRouter>
				<div>
					<Nav />
					<Switch>
						<Route path="/" component={Current} exact />
						<Route path="/forecast" component={Forecast} />
						<Route component={Error} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
};

export default App;
