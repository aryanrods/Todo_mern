import React from "react";

const Todocard = ({ title, message }) => {
  return (
    <div className="border m-4 p-4">
      <p className="p-2">{title}</p>
      <p className="p-2">{message}</p>
    </div>
  );
};

export default Todocard;
