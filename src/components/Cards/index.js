import React from "react";
import "./style.css";

function Cards(props) {
    return (
        <div className="cards">
            <div className="img-container">
                <img
                alt={props.name}
                src={props.image}
                id={props.id}
                onClick={() => props.handleOnClick(props.id)}
                />
            </div>
        </div>
    );
}

export default Cards;