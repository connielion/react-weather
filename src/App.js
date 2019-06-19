import React from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '8e3debfb6e532881c65aac18f111c947';

class App extends React.Component {
	// get weather data via API
	state = {
		// 5 pieces of state: temp, city, country, humidity, description
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		error: undefined
	};
	getWeather = async (e) => {
		e.preventDefault(); // prevent default behavior - refresh
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		const api_call = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`
		);
		// convert api call to JSON format
		const data = await api_call.json();

		if (city && country) {
			this.setState({
				// data.main.temp
				temperature: data.main.temp,
				city: data.name,
				country: data.sys.country,
				humidity: data.main.humidity,
				description: data.weather[0].description,
				error: ''
			});
		} else {
			this.setState({
				// data.main.temp
				temperature: undefined,
				city: undefined,
				country: undefined,
				humidity: undefined,
				description: undefined,
				error: 'Please enter a city and country.'
			});
		}

		console.log(data);
	};

	render() {
		return (
			<div>
				<Titles />
				<Form getWeather={this.getWeather} />
				<Weather
					temperature={this.state.temperature}
					country={this.state.country}
					humidity={this.state.humidity}
					description={this.state.description}
					error={this.state.error}
				/>
			</div>
		);
	}
}

export default App;
