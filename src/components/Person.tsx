import React from "react";

type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};
const Person = (props: PersonProps) => {
  return (
    <div>
      Person FirstName {props.name.first} and LastName {props.name.last}
    </div>
  );
};

export default Person;
