import React from 'react'

const NavBar = ({totalCounters}) =>{
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <h1>NavBAr</h1>
                <span className="badge badge-pill badge-secondary">{totalCounters}</span>
            </div>
        </nav>
    );
};
 
export default NavBar;