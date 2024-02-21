import React from 'react';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <>
            <header className="nav">
                <h1>
                    <Link to="/">HRnet</Link>
                </h1>
                    <Link to="/currentEmployee">Current Employee</Link>

            </header>
        </>
    );
};

export default Header;
