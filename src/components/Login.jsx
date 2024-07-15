import React from "react";
import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [toggleSignInButton, setToggleSignInButton] = useState(true);

  function handleSignUpButtonPress(event) {
    event.preventDefault();
    setToggleSignInButton(!toggleSignInButton);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=" w-44 rounded-full  top-0 my-3 mx-2"
          src="https://c.files.bbci.co.uk/AB0D/production/_121898734_gettyimages-1126962340.jpg"
          alt="logo"
        />
      </div>
      <form className="p-12 bg-black  w-3/12 my-36 absolute mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className=" text-3xl font-bold py-4">
          {toggleSignInButton ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-600"
        />
        {!toggleSignInButton && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-600"
          />
        )}
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-600"
        />
        <button className="p-4 my-6 mx-0 bg-red-700 w-full rounded-lg">
          {toggleSignInButton ? "Sign In" : "Sign Up"}
        </button>
        <p>
          New User,
          <button
            className="text-red-500 font-bold underline cursor-pointer"
            onClick={handleSignUpButtonPress}
          >
            {toggleSignInButton ? "New User?Sign Up" : "Already a User?Sign In"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
