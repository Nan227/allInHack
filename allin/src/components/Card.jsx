import React from 'react';
import './Card.css'

const Card = (props) => {
    return (
        <div className="card-container">
            <img src={props.imgSrc} alt={props.imgAlt} className = "card-img" />
            <h2> {props.title}</h2>
            <p className = "card-description">{props.description}</p>
            <button className = "card-btn"> <a href = {props.btnLink} className = "btn btn-primary">{props.btnText}</a></button>
          </div>
    )
}
export default Card;