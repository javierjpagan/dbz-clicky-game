import React from"react";
import "./style.css"

function CharacterCard(props) {
    return (
      <div onClick={() => {
          props.shuffle(props.characters);
        props.checkClick(props.id, props.currentScore, props.highScore); }} 
     className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
     </div>
    
    );
  }
  
  export default CharacterCard;