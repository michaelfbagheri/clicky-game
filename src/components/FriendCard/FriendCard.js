import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card hoverable">
    <div className="img-container ">
      <img onClick={() => props.shuffleFriends(props.id)} className="remove hoverable" alt={props.name} src={props.image} />
    </div>

  </div>

);

//we want onClick to trigger a shuffle of the friend array and re-render
export default FriendCard;
