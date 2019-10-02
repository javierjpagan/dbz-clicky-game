import React from "react";
import "./style.css"

function Navbar(props) {
  return (

<nav className="navbar sticky-top">
  <a href="/clicky-game-gh">
    <img src="marvel-logo.jpg"  width="100" height="41" className="d-inline-block pr-2" alt=""/>
    Clicky Game
  </a>
  <span className="justify-content-center">{props.message}</span>
  <span className="justify-content-end">Score: {props.currentScore} | Top Score: {props.highScore} </span>
</nav>

  );
}

export default Navbar;