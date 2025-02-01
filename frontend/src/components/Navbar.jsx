import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <header class="shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] sticky top-0 py-3 px-4 sm:px-10 bg-white z-50 min-h-[70px]">
        <div class="flex flex-wrap items-center gap-4">
          <Link to="/">
            <b className="font-black text-3xl">TODO</b>
          </Link>

          <div
            id="collapseMenu"
            class="max-lg:hidden lg:!block max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <button
              id="toggleClose"
              class="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <ul class="lg:ml-12 lg:flex gap-x-6 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li class="mb-6 hidden max-lg:block">
                <a href="javascript:void(0)">
                  <img
                    src="https://readymadeui.com/readymadeui.svg"
                    alt="logo"
                    class="w-36"
                  />
                </a>
              </li>
              <li class="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  class="hover:text-blue-600 text-blue-600 block font-semibold transition-all"
                >
                  Home
                </a>
              </li>
              <li class="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  class="hover:text-blue-600 block font-semibold transition-all"
                >
                  Team
                </a>
              </li>
              <li class="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  class="hover:text-blue-600 block font-semibold transition-all"
                >
                  Feature
                </a>
              </li>
              <li class="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  class="hover:text-blue-600 block font-semibold transition-all"
                >
                  Blog
                </a>
              </li>
              <li class="max-lg:border-b max-lg:py-3 px-3">
                <Link to="/About">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-blue-600 block font-semibold transition-all"
                  >
                    About
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div class="flex ml-auto">
            <Link to="/signin">
              <button class="mr-6 font-semibold border-none outline-none px-2 py-2.5">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button class="bg-blue-600 hover:bg-blue-700 transition-all text-white rounded-full px-5 py-2.5">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
