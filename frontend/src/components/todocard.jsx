import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Todocard = ({ title, message, id, delid }) => {
  return (
    <div className="border m-4 p-4">
      <p className="pt-2 font-bold">{title}</p>
      <p className="pt-2">{message}</p>
      <div className="flex">
        <Link to="/updatetask">
          <FaRegEdit className="ml-1 mr-1" />
        </Link>
        <MdDelete className="ml-1 mr-1" />
      </div>
    </div>
  );
};

export default Todocard;
