import React from "react";
import "./style.css";

function Jumbotron (props) {
    return (
        <div className="jumbotron">
            <ul>
                <li><span>Pop Art Memory Game</span></li>
                <li id="message"><strong>{props.message}</strong></li>
                <li>Score: {props.score} | Top Score: {props.topScore}</li>
            </ul>
        </div>
    );
}

export default Jumbotron;