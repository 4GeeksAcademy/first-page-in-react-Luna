import React from "react";

const Card = (props) => {
    return (
        
        
        <div className="card ">
            <img src={props.img} className="card-img-top" alt={props.imgAlt} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.content}</p>
                <a href={props.buttonLink} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default Card;