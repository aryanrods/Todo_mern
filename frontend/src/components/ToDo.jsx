import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import Todocard from "./todocard";
const ToDo = () => {
  const [todo, setTodo] = useState({ title: "", task: "" });
  const [list, setList] = useState([]);

  const Submit = () => {
    setList([...list, todo]);
    setTodo({ title: "", task: "" });
    console.log(list);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col justify-center max-w-lg mx-auto px-4 space-y-6 font-[sans-serif] text-[#333]">
        <div>
          <label className="mb-2 text-lg block font-[sans-serif]">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            className="px-4 py-2.5 text-lg rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            name="title"
            value={todo.title}
            onChange={handleInput}
          />
          <label className="mb-2  mt-4 text-lg block font-[sans-serif]">
            Message
          </label>
          <textarea
            placeholder="Type Message"
            className="p-4 bg-white max-w-md mx-auto w-full block text-lg border border-gray-400 outline-[#007bff] rounded"
            rows="4"
            name="Task"
            value={todo.Task}
            onChange={handleInput}
          ></textarea>
        </div>
        <button
          onClick={() => {
            Submit();
          }}
          className="bg-blue-600 hover:bg-blue-700 transition-all text-white rounded-full px-5 py-2.5 "
        >
          Add
        </button>
      </div>

      {list &&
        list.map((items, index) => (
          <>
            <Todocard title={todo.title} message={todo.task}></Todocard>
          </>
        ))}
    </div>
  );
};

export default ToDo;
