import React from 'react';
import { NavLink } from 'react-router-dom';

const Navs = () => {
    return (
       <nav style={{display: "flex", columnGap: "10px", justifyContent: "space-evenly", marginTop: "20px"}}>
           <NavLink to="/">Home</NavLink>
           <NavLink to="/user">User</NavLink>
       </nav>
    );
};

export default Navs;