import React from "react";
import './AboutContent.css';
import Alan from './img/headshot.JPG';

export default function AboutContent() {
    return (
        <>
            {/* <div className="aboutHeader">

            </div> */}
            <div className="aboutContent">
                <div className="imageContent">
                    <div>
                        <img src={Alan} />
                    </div>
                    <div className="bio">
                        <p className="aboutHeaderText"><strong>About Alan</strong></p>
                        
                        <div className="bioText">
                            <p>State Licensed Professional Engineer and Surveyor.
                            Experienced and Proactive problem solver</p>
                        
                            <p>37 years married to wife Gayle, a retired pharmacist
                            2 adult sons, Adam and Jason, raised in Lake County.
                            Adam and Jason have chosen to make Lake County their home</p>   

                            <p>12 years in the private sector managing large industrial infrastructure
                            projects throughout the nation developing skills of learned structure
                            maintenance, construction practices and managing the work.
                            28 years of experience as Chief Engineer for Lake County brings
                            knowledge of how the office operates.
                            Experienced with listening to the public and spending the needed field
                            time to inspect, evaluate and report on the infrastructure
                            responsibilities of the Lake County Engineer.
                            Proactive on safety, programming projects and securing key State and
                            Federal Funding for the projects built here in Lake County</p>

                            <p>I believe when making a decision, listen first, then ask “What is in the
                            best interest of Lake County?”.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}