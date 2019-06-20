import React from 'react';

const Titles = () => (
	<div>
		<h1 className="title-container__title"> React.js Weather </h1>
		<p className="title-container__subtitle"> Find out current temperature and conditions... </p>
		<button className="btn btn-default title-container__subtitle">
			<a href="https://github.com/connielion/react-weather">Link to project Github Repository</a>
		</button>
		<p className="title-container__subtitle">Made with React.js,OpenWeatherMap API, Bootstrap & Google Fonts.</p>
		<hr />
		<button className=" btn btn-default title-container__subtitle">
			<a href="https:www.connielion.com" target="_blank">My website</a>
		</button>
	</div>
);
export default Titles;
