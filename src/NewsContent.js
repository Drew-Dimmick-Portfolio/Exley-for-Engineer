import React from "react";
import './NewsContent.css';
import construction from './img/construction.png';

export default function NewsContent(props) {
    return (
        <div className="newsContainer">
            <p>Website Under Construction</p>
            <img src={construction} alt="constuction"/>
        </div>
    )
}