import React from 'react';
import "./Visual.css";
import { Link } from "react-router-dom";
import arrow from "../../asset/Arrow.png";

function Visual () {
    return (
        <>
            <main>
                <section className="text_box">
                    <p>Hi, There!</p>
                    <h2>We are a growing-up<br /> Creative Agency from<br /> Indonesia!</h2>
                    <p>We provides you with modest and professional design templates<br/> that come from the synergy of design and technology</p>
                    <Link to="collaborate" className="main_btn">Let’s Collaborate<img src={arrow} alt="화살표" /></Link>
                </section>

                <section className="banner_box">
                </section>
            </main>
        </>
    );
}   

export default Visual;