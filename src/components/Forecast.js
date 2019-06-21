import React from 'react';
import Form from './Form';
import Weather from './Weather';
import Nav from './Nav';

// I AIN'T SHOWING MY API KEY!!!

const API_KEY = process.env.REACT_APP_API_KEY;




class Forecast extends React.Component {

    state = {
        fullData: [],
        dailyData: []
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.name;
        const country = e.target.elements.city.country;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=imperial`);
        const data = await api_call.json();
        console.log(data);
        // eslint-disable-next-line
        {/*
             if (city && country) {
            this.setState({
                temperature: data.list.main.temp,
                min_temperature: data.list.main.temp_min,
                max_temperature: data.list.main.temp_max,
                city: data.city.name.toUpperCase(),
                country: data.city.country.toUpperCase(),
                humidity: data.list.main.humidity,
                description: data.list.weather[0].description.toUpperCase(),
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
        */}

    }

    render() {
        return (
            <div>

                <div className="wrapper">
                    <Nav />
                    <div className="main">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-10 form-container">
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

export default Forecast;
