import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../store/index";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.isLoggedin);
  const logout = () => {
    dispatch(authActions.logout());
    sessionStorage.removeItem("userId");
    history("/");
  };

  return (
    <>
      <header className="shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] sticky top-0 py-3 px-4 sm:px-10 bg-white z-50 min-h-[70px]">
        <div className="flex flex-wrap items-center gap-4">
          <Link to="/">
            <b className="font-black text-3xl">TODO</b>
          </Link>

          <div
            id="collapseMenu"
            className="max-lg:hidden lg:!block max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <button
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-black"
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
          </div>

          <div className="flex ml-auto">
            <ul className="lg:ml-12 lg:flex max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 mr-10">
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link
                  className="hover:text-blue-800 text-blue-600 block font-semibold transition-all px-2 py-2.5 hover:no-underline"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link
                  to="/About"
                  className="hover:text-blue-800 text-blue-600 block font-semibold transition-all px-2 py-2.5 no-underline hover:no-underline"
                >
                  About
                </Link>
              </li>

              {!isLoggedin && (
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  {" "}
                  <Link to="/signin">
                    <button className="hover:text-blue-800  font-semibold text-blue-600 font-semibold border-none outline-none px-2 py-2.5">
                      Log in
                    </button>
                  </Link>
                </li>
              )}
              {isLoggedin && (
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <Link
                    to="/todo"
                    className="hover:text-blue-800 text-blue-600 block font-semibold transition-all px-2 py-2.5 no-underline hover:no-underline"
                  >
                    To Do
                  </Link>
                </li>
              )}
            </ul>

            {isLoggedin && (
              <button
                onClick={logout}
                className="bg-blue-600 hover:bg-blue-700 transition-all text-white rounded-full px-5 py-2.5"
              >
                Logout
              </button>
            )}

            {!isLoggedin && (
              <Link to="/signup">
                <button className="bg-blue-600 hover:bg-blue-700 transition-all text-white rounded-full px-5 py-2.5">
                  Sign up
                </button>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
