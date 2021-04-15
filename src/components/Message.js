import React from "react";

let Message = props => {
console.log(props);
  return (
    <div>
      <p>
      <span>{props.sender}</span><br/>
      {props.text}
      </p>
    </div>
  );
}

export default Message