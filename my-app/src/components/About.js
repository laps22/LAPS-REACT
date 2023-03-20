import React from "react";
import Memoji from '..//assets/images/memoji.png';

function About() {
    return (
        <section>
            <div>
                <h2>About Me</h2>
                <div>
                    <img src={Memoji} alt="Profile"/>
                </div>
            </div>
            <p>
              Hi, I'm Lian Perez, an IT Director with 7 years of experience in managing tech echosystems. I attended the University of Central Florida's (Go Knights ⚔️🖤💛!) full stack web development program in the Fall of 2022 to further continue my learning and passions for all things technology and developemt. My hope is to take the education i've received to implement in future projects and custom builds for further process optimization within my current role and personal projects. I no longer have to say "I wish I could do this myself" because now I can!
            </p>
        </section>
    )
}

export default About;