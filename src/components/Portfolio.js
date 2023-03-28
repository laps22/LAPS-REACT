import React from 'react';
import '../styles/portfolio.css'
import I1 from '../assets/images/I1.png';
import I2 from '../assets/images/I2.png';
import I3 from '../assets/images/I3.png';
import I4 from '../assets/images/I4.png';
import I5 from '../assets/images/I5.png';
import gelogo from '../assets/images/gelogo.png'

const PortfolioData = [
    {
        id: 1,
        image: I1,
        title: "README.md Generator",
        github: "https://github.com/laps22/in-the-node",
        demo: "https://drive.google.com/file/d/1tfmvAc56hJDPuPY5Y3_C9KiVHWIMQa1W/view",

    },
    {
        id: 2,
        image: I2,
        title: "Employee SQL Database",
        github: "https://github.com/laps22/employee-tracker",
        demo: "https://drive.google.com/file/d/14CkABw9eZMlQ5IztjnAavRQWwmaiej8Z/view",
    },
    {
        id: 3,
        image: I3,
        title: "Brew Buddy 🍺",
        github: "https://github.com/albertosuarez8/Brewery-Reviews",
        demo: "https://breweries-reviews.herokuapp.com/",
    },
    {
        id: 4,
        image: I4,
        title: "Express Note Taker",
        github: "https://github.com/laps22/note-taker",
        demo: "https://liannotetaker.herokuapp.com/",
    },
    {
        id: 5,
        image: I5,
        title: "Progessive Text Editor",
        github: "https://github.com/laps22/Progressive-Text-Editor",
        demo: "https://progressive-text.herokuapp.com/",
    },
    {
        id: 6,
        image: gelogo,
        title: "Georgia Evergreens",
        github: "https://github.com/magmesser/georgia-evergreens",
        demo: "https://georgia-evergreens.herokuapp.com/",
    },
];

const styles = {
    card: {
        margin: 20,
        background: '#fefae0',
    },
    heading: {
        background: '#d4a373',
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: '1.2rem',
        color: 'white',
        padding: '0 20px',
    },
    content: {
        padding: 20,
    },
};

function Portfolio() {
    return (
        <div >
            <h5>My Recent Work</h5>
            {PortfolioData.map(({ id, image, title, github, demo }) => {
                return (
                    <section key={id}>
                        <div className="card">
                            <h2 className="heading">{title} 
                            <br></br>
                            </h2>
                           
                            <div>
                                <img src={image} alt={title}></img>
                                <br></br>
                                <a href={github}>Github</a>
                                <br></br>
                                <a href={demo}>View App</a>
                            </div>
                        </div>


                    </section>
                );
            })}

        </div>

    );
}

export default Portfolio;

