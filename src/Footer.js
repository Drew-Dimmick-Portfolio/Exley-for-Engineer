import React from "react";
import './Footer.css';
import logo from './img/logoInverted.png';

export default function Footer(props) {
    return (
        <div className="footerContainer">
            <div className="footerContent">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <p>Paid for or authorized by Exley for Engineer</p>
                </div>       
            </div>
        </div>
    )
}