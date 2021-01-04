import React from 'react'
import './App.css'

function Card(props) {
    return (
        <>
            <header classNameName='cards'>
                <div className="card">
                    <img className="image" src={props.imgsrc} />
                    <div className="cardBody">
                        <h5 className="cardTitle">{props.title}</h5>
                        <p className="cardText">{props.text}</p>
                        <a className="button" href={props.link} target='_blank'>WATCH NOW</a>
                    </div>
                </div>
            </header>
        </>
    );
}


export default Card;