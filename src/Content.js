import React from "react";
import './Content.css';
import HomeContent from "./HomeContent.js";
import AboutContent from "./AboutContent.js";
import NewsContent from './NewsContent.js';
import Endorsements from "./Endorsements.js";
import ContactContent from "./ContactContent.js";

export default function Content(props) {

    return (
        <div className="content">
        {
            {
                0: <HomeContent />,
                1: <AboutContent />,
                2: <NewsContent />,
                3: <Endorsements />,
                4: <ContactContent />
            }[props.pageIndex]
        }
        </div>
    )
}