import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper mt-1 mb-4 mr-0 ml-0">{props.children}</div>;
}

export default Wrapper;
