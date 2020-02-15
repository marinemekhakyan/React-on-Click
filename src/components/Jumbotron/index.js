import React from "react";
import "./style.css";

function Jumbotron (props) {
    return (
        <div className="jumbotron">
            <ul>
                <span id="title">Pop Art Memory Game</span>
                <strong><h3 id="message">{props.message}</h3></strong>
                <strong><p id="score">Score: {props.score} | Top Score: {props.topScore}</p></strong>
            </ul>
        </div>
    
    );
}

export default Jumbotron;