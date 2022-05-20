import React from "react";

type StatusProps = {
  status: "loading" | "success" | "error";
};
const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully";
  } else if (props.status === "error") {
    message = "An error occure";
  }
  return (
    <div>
      <h4>Status - {message}</h4>
    </div>
  );
};

export default Status;
