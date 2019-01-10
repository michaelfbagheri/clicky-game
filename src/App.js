import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav/Nav";
import friends from "./friends.json";
import "./App.css";


class App extends Component {
  // Setting this.state.friends to the friends json array


  state = {
    friends,
    lastChoice: 1,
    score: 0,
    win: ""
  };

  // componentDidMount() {
  //   this.loadImages()
  // }

  // loadImages = () => {
  //   const newState = { ...this.state };
  // }

  //function will reutrn a re-shuffled array   
  shufflArray = (shuffledArray) => {
    var ctr = shuffledArray.length, temp;
    var index = 0;
    while (ctr > 0) {
      while (index > 11) {
        index = Math.floor(Math.random() * ctr + 1);
        console.log("new Index assigned is " + index);
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
    // Filter this.state.friends for friends with an id not equal to the id being removed
    newState.friends = this.shufflArray(newState.friends)
    if (id === this.state.lastChoice) {
      newState.win = "Lose!";
    } else {
      console.log(newState.score++);
      newState.win = "Win!";
    }
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({
      friends,
      lastChoice: id,
      score: newState.score,
      win: newState.win
    });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav
          score={this.state.score}
          winLoss={this.state.win} />
        <Title
          winLoss={this.state.win}>Clicky Game
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
