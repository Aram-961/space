import React from "react";
const Nav = () => {
    return (
        <nav className="bar">
                <img src={'/logo.svg'} alt="star-logo.svg" />
            <ul className="nav-bar">
                <li>
                    <span className="numbers">00</span>
                    HOME
                </li>
                <li>
                    <span className="numbers">01</span>
                    Destination
                </li>
                <li>
                    <span className="numbers">02</span>
                    Crew
                </li>
                <li>
                    <span className="numbers">03</span>
                    Technology
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
