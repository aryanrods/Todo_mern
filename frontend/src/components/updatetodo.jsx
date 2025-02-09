import React from "react";
import { useNavigate } from "react-router-dom";

const Updatetodo = () => {
  const history = useNavigate();
  return (
    <>
      <div className="p-5 d-flex justify-content align-items-start flex-column update">
        <h3>Update your Task</h3>
        <input type="text" className="my-4 w-100 p-3" />
        <textarea name="" className="w-100 p-3"></textarea>
        <div>
          <button className="btn btn-dark my-4">Update</button>
          <button
            className="btn btn-danger my-4"
            onClick={() => history("/todo")}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Updatetodo;
