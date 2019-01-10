import React from "react";
import "./Nav.css";


const Nav = props => (
    <nav className="nav-bar sticky-top mynav">
        <div className="row">
            <div className="col-md-4 navsections">
                <a href="/">Clicky Game</a>
            </div>
            <div className="col-md-4 navsections">
                {props.winLoss}
            </div>
            <div className="col-md-4 navsections">
                Your Score: {props.score} | Top Score: {props.topScore}
            </div>
        </div>
    </nav>

);


export default Nav;
