import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav/Nav";
import friends from "./friends.json";
import "./App.css";


class App extends Component {



  state = {
    friends,
    lastChoice: 1,
    score: 0,
    win: "",
    topScore: 0
  };

  shufflArray = (shuffledArray) => {
    var ctr = shuffledArray.length, temp;
    var index = 0;
    while (ctr > 0) {
      while (index > 11) {
        index = Math.floor(Math.random() * ctr + 1);
      }
      ctr--;
      temp = shuffledArray[ctr];
      shuffledArray[ctr] = shuffledArray[index];
      shuffledArray[index] = temp;
    }
    return shuffledArray
  }





  shuffleFriends = id => {

    var newState = { ...this.state };
    newState.friends = this.shufflArray(newState.friends)
    if (id === this.state.lastChoice) {
      newState.win = "You Guessed Incorrect!";
      newState.score = 0;
    } else {
      newState.score++;
      if (newState.score > newState.topScore) {
        newState.topScore = newState.score;
      }
      newState.win = "You Guessed Correctly!!!";
    }

    this.setState({
      friends,
      lastChoice: id,
      score: newState.score,
      win: newState.win,
      topScore: newState.topScore
    });
  };


  render() {
    return (
      <Wrapper>
        <Nav
          score={this.state.score}
          winLoss={this.state.win}
          topScore={this.state.topScore} />
        <Title
          winLoss={this.state.win}>
          Click on an image to earn points, but don't click on any more than once!
        </Title>
        {this.state.friends.map(friend => (
          <FriendCard
            shuffleFriends={this.shuffleFriends}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
