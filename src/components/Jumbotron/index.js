import React from "react";

import "./style.css"

const divStyle = {
 
  backgroundImage: 'url(jumbotron.jpeg)',
};

function Jumbotron() {
  return (
    <div className="jumbotron" style={divStyle}>
      <h2 className="text-center pb-2">Clicky Memory Game!</h2>
      <div className="text-center w-60 mr-auto ml-auto">
      <p >
      Can you remember which images you have clicked? 
      </p>
  
      <p>
      Try our Clicky Memory Game. You can only click each image one time to earn a point. 
      </p>
      </div>
    </div>
  );
}

export default Jumbotron;
