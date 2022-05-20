import React from "react";
type PropsType = {
  children: React.ReactNode;
};
const Oscar = (props: PropsType) => {
  return <div>Oscar :{props.children}</div>;
};

export default Oscar;
