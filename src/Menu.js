import React from "react";
import './Menu.css';
import logo from './img/logo.png';
import logoText from './img/logoText.png';
import logoTextMobile from './img/logoText_Mobile.png';

export default function Menu(props) {

    return (
        <div>
            <div className="menuContainer">
                <div className="menu">
                    <div className="menuLogo">
                        <img className="menuLogoImg" src={logo} alt="logo" />
                        <img className="desktop" src={logoText} alt="logo" />
                        <img className="mobile" src={logoTextMobile} alt="logo" />
                    </div>
                    <div className="menuButtonsContainer">
                        <div className="menuButtons">
                            <div className="menuButtonPadding">
                                <div className="desktop">
                                    <button onClick={() => props.updatePageIndex(0)}>Home</button>
                                    <button onClick={() => props.updatePageIndex(1)}>About</button>
                                    <button onClick={() => props.updatePageIndex(2)}>News</button>
                                    <button onClick={() => props.updatePageIndex(3)}>Endorsements</button>
                                    <button onClick={() => props.updatePageIndex(4)}>Contact</button>
                                </div>
                                <div className="mobileButtons">
                                    <button onClick={() => props.updatePageIndex(0)}>Home</button>
                                    <button onClick={() => props.updatePageIndex(1)}>About</button>
                                    <button onClick={() => props.updatePageIndex(2)}>News</button>
                                </div>
                                <div className="mobileButtons">
                                    <button onClick={() => props.updatePageIndex(3)}>Endorsements</button>
                                    <button onClick={() => props.updatePageIndex(4)}>Contact</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menuBottomBorder">

            </div>
        </div>
        
    )
}