import React from 'react';
import Titles from './Titles';
import Form from './Form';
import Weather from './Weather';
import Nav from './Nav';


require('dotenv').config();

// I AIN'T SHOWING MY API KEY!!!

const API_KEY = process.env.REACT_APP_API_KEY;

class Current extends React.Component {


	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		error: undefined
	}
	getWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
		const data = await api_call.json();

		if (city && country) {
			this.setState({
				temperature: data.main.temp,
				min_temperature: data.main.temp_min,
				max_temperature: data.main.temp_max,
				city: data.name.toUpperCase(),
				country: data.sys.country.toUpperCase(),
				humidity: data.main.humidity,
				description: data.weather[0].description.toUpperCase(),
				error: ""
			});
		} else {
			this.setState({
				temperature: undefined,
				min_temperature: undefined,
				max_temperature: undefined,
				city: undefined,
				country: undefined,
				humidity: undefined,
				description: undefined,
				error: "Please enter a location."
			});
		}
	}
	render() {
		return (
			<div>

				<div className="wrapper">
					<Nav />
					<div className="main">
						<div className="container">
							<div className="row">
								<div className="col-md-4 title-container">
									<Titles />
								</div>
								<div className="col-md-8 form-container">
									<Form getWeather={this.getWeather} />
									<Weather
										temperature={this.state.temperature}
										min_temperature={this.state.min_temperature}
										max_temperature={this.state.max_temperature}
										humidity={this.state.humidity}
										city={this.state.city}
										country={this.state.country}

										description={this.state.description}
										error={this.state.error}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default Current;
