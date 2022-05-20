import React from "react";

type PropTypes = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};
const Greet = (props: PropTypes) => {
  return (
    <div>
      {props.isLoggedIn
        ? `Greetings ${props.name} you have ${props.messageCount} Messages`
        : "Welcome Guest"}
    </div>
  );
};

export default Greet;
