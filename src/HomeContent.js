import React from "react";
import './HomeContent.css';
import qrCode from './img/qrCode.png'
import check from './img/check.png';

export default function HomeContent() {

    const DonationNavigation = () => {
        console.log('Clicked');
        window.open(
            'https://www.paypal.com/donate/?hosted_button_id=AABYCMZKPMZWY',
            '_blank'
          );
    };

    return (
        <div className="homeContent">
            <div className="largeImageContainer">
                <div className="imageDescription">
                    <div className="imageDescriptionText">
                        <h1>Exley for Engineer</h1>
                        <p>"I want to be your Lake County Engineer because I have the experience, I have the desire and I have the belief that together we can do better." <br /><br />
                        "I would appreciate your vote, but most importantly, please go out and VOTE!
                        Thank you!!!"</p>
                    </div>
                    <div className="donateButton">
                        <button onClick={ DonationNavigation }><p>Donate</p> <img className="checkIcon" src={check} /></button>
                    </div>
                </div>
                <div className="largeImage">
                    {/* <img src={ qrCode }/> */}
                </div>
            </div>
        </div>
    )
}