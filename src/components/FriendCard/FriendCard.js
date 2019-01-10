import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container hoverable">
      <img onClick={() => props.shuffleFriends(props.id)} className="remove" alt={props.name} src={props.image} />
    </div>
  </div>

);

//we want onClick to trigger a shuffle of the friend array and re-render
export default FriendCard;
