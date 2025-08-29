import React from 'react';
import logo from '../../asset/Livia..png';
import "./Header.css";
import { Link } from 'react-router-dom';

function Header () {
    return (
        <>
            <header>
                <div className='left_div'>
                    <h1 className="top_logo">
                        <img src={logo} alt="로고" />
                    </h1>
                    <nav>
                        <ul className="top_menu">
                            <li>Home</li>
                            <li>About</li>
                            <li>Service</li>
                            <li>Portfolio</li>
                            <li>Blog</li>
                        </ul>
                    </nav>
                </div>

                <button className="btn"><Link to="contact">Contact Us</Link></button>
            </header>
        </>
    );
}

export default Header;