import React from 'react';
import "./Bottom.css";
import icon1 from "../../asset/Web Design.png";
import icon2 from "../../asset/two.png";
import icon3 from "../../asset/Vector.png";

function Bottom () {
    return (
        <>
            <div className="box">
                <div className="first">  
                    <ul>
                        <li><img src={icon1} alt="웹디자인"/></li>
                        <li className="title">Web Design Projects 
                            <p>Make your website user friendly and <br />look more professional
                            </p>
                        </li>
                    </ul>    
                </div>    

                <div className="second">
                    <ul>
                        <li><img src={icon2} alt="백터" /></li>
                        <li className="title">Social Media Templates
                            <p>Gain more followers or subscribers <br />with the right template
                            </p>
                        </li>
                    </ul>
                </div>

                <div className="third">
                    <ul> 
                        <li><img src={icon3} alt="디지털" /></li>
                        <li className="title">Digital Artwork
                            <p>Complete your digital work with<br /> appropriate artwork</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Bottom;