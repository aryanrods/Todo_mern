import React from "react";
import "./Home.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="hero-wrapper">
        <h1>Manage your tasks</h1>
        <h2>Create, update, and delete your tasks with ease. </h2>
        <button> Get Started</button>
      </div>
    </>
  );
};

export default Home;
