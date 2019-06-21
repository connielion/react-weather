import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <NavLink to="/" className="navlink btn">Current Conditions</NavLink>
            <NavLink to="/forecast" className="navlink btn"> 5-Day Forecast</NavLink>

        </div>
    )
}
export default Nav;