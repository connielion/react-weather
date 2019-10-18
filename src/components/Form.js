import React from 'react';

{/* Stateless functional component?

- receives props
*/}

const Form = (props) => (
	<form onSubmit={props.getWeather}>
		<input name="city" placeholder="City (ex: Seatle)" type="text" />
		<input name="country" placeholder="Country (ex: US)" type="text" />
		<button>Get Weather</button>
	</form>
);

export default Form;
