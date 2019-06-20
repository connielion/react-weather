import React from 'react';
import Form from './Form';
import Nav from './Nav';



class Forecast extends React.Component {


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
