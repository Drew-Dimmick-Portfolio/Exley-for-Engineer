import React from "react";
import './ContactContent.css';
import QRCode from './img/qrCode.png';

export default function ContactContent(props) {

    return (
        <div className="contactContainer">
            <div className="contactContent">
                <p>Contact Alan at his email: <strong>alan@exleyforengineer.com</strong></p>
                <p>Or use this QR Code to donate to his campaign!</p>
            </div>
            <div className="qrCode">
                <img src={QRCode} alt="qrCode"/>
            </div>
        </div>
    )
}