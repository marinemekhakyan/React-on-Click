import React from "react";
import "./style.css";

function Jumbotron (props) {
    return (
        <div className="jumbotron">
            <ul>
                <span id="title">Pop Art Memory Game</span>
                <p><strong id="message">{props.message}</strong></p>
                <p>Score: {props.score} | Top Score: {props.topScore}</p>
            </ul>
        </div>
    );
}

export default Jumbotron;