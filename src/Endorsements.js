import React from "react";
import './Endorsements.css';
import construction from './img/construction.png';

export default function Endorsements(props) {
    return (
        <div className="endorsementsContainer">
            <p>Website Under Construction</p>
            <img src={construction} alt="constuction"/>
        </div>
    )
}