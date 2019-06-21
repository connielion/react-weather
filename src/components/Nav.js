import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <NavLink to="/" className="navlink">Current Conditions | </NavLink>
            <NavLink to="/forecast" className="navlink"> 5-Day Forecast</NavLink>

        </div>
    )
}
export default Nav;