import React, { Component } from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import cards from "./cards.json";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    cards,
    score: 0,
    topScore: 0,
    message: "Click an image to start!",
    clicked: []
  };

  componentDidMount() {
    this.setState({ cards: this.shuffle(this.state.cards) });
  }

  handleOnClick = id => {
    if (this.state.clicked.includes(id)) {
      this.setState({
        cards: this.shuffle(this.state.cards),
        score: 0,
        message: "Incorrect!",
        clicked: []
      });
    } else {
      this.setState({
        cards: this.shuffle(this.state.cards),
        score: this.state.score + 1,
        message: "",
        clicked: this.state.clicked.concat(id)
      });
    }
  };

  shuffle = pokemons => {
    let newCards = cards.sort(() => Math.random() - 0.5);
    return newCards;
  };

  render() {
    return (
      <div>
        <Jumbotron
        message = {this.state.message}
        score = {this.state.score}
        topScore = {this.state.topScore}
        ></Jumbotron>
        <Heading />
        <Wrapper>
          {this.state.cards.map(card => (
            <Cards
            key = {card.id}
            id = {card.id}
            name = {card.name}
            image = {card.image}
            handleOnClick = { this.handleOnClick }
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;