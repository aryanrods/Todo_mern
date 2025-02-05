import React from "react";

import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="relative">
        <div className="px-4 sm:px-10">
          <div className="mt-16 max-w-4xl mx-auto text-center relative z-10">
            <h1 className="pt-11 md:text-6xl text-4xl font-extrabold mb-6 md:!leading-[75px]">
              Manage your tasks like never before with Taskify
            </h1>
            <p className="text-base">
              Managing tasks efficiently is crucial for productivity and
              success. With Taskify, you can easily organize, prioritize, and
              track your tasks all in one place. Whether you're working on a
              personal project or collaborating with a team, Taskify provides
              the tools you need to stay on top of your workload and meet your
              deadlines. Say goodbye to missed tasks and hello to a more
              organized and productive you.
            </p>
            <div className="mt-11">
              <Link to="/signup">
                <button className="bg-blue-600 hover:bg-blue-700 transition-all text-white rounded-full px-5 py-2.5">
                  Get Started{" "}
                </button>
              </Link>
            </div>
          </div>
          <hr className="my-12 border-gray-300" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            <img
              src="https://readymadeui.com/google-logo.svg"
              className="w-28 mx-auto"
              alt="google-logo"
            />
            <img
              src="https://readymadeui.com/facebook-logo.svg"
              className="w-28 mx-auto"
              alt="facebook-logo"
            />
            <img
              src="https://readymadeui.com/linkedin-logo.svg"
              className="w-28 mx-auto"
              alt="linkedin-logo"
            />
            <img
              src="https://readymadeui.com/pinterest-logo.svg"
              className="w-28 mx-auto"
              alt="pinterest-logo"
            />
          </div>
        </div>
        <img
          src="https://readymadeui.com/bg-effect.svg"
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </>
  );
};

export default Home;
