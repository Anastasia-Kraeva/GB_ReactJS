import React from "react";

const Message = props => {
  return (
    <div >
    <div className={props.class}>
      <p>
      <span>{props.sender}</span><br/>
      {props.text}
      </p>
    </div>
    </div>
  );
}

export default Message