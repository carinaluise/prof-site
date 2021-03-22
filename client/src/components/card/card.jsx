import React from 'react';
import './card.styles.css'

const Card = ({src, title, info, link}) => {
    return(<div id="Card">
        <a href={link}>
        <img src={src}></img>
        <div className="card-content-container">
            <h1>{title}</h1>
            {/* <p>{info}</p> */}
        </div>
        </a>
    </div>)
}

export default Card;