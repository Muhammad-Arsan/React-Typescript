import React from "react";

type namesProps = {
  names: {
    first: string;
    last: string;
  }[];
};
const PersonList = (props: namesProps) => {
  return (
    <div>
      PersonList{" "}
      {props.names.map((name) => {
        return (
          <h5 key={name.first}>
            {name.first} , {name.last}
          </h5>
        );
      })}
      {props.names.length}
    </div>
  );
};

export default PersonList;
