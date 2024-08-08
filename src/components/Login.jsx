import React from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import Header from "./Header";
import { validatePassword } from "../utils/passwordValidate";
import { useRef } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [toggleSignInButton, setToggleSignInButton] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  //reading email and password value with the use of useRef//
  const emailRef = useRef();
  const passwordRef = useRef();
  const displayNameRef = useRef();

  function handleSignUpButtonPress(event) {
    //function for toggling sigin/signup button
    event.preventDefault();
    setToggleSignInButton(!toggleSignInButton);
  }

  function handleButtonPress(e) {
    //function for handling validation and login when signin button press
    e.preventDefault();

    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    const valiationOutcome = validatePassword(emailValue, passwordValue);

    if (valiationOutcome !== true) {
      setErrorMessage(valiationOutcome);
    } else {
      setErrorMessage("");
      if (!toggleSignInButton) {
        // signup logic
        createUserWithEmailAndPassword(auth, emailValue, passwordValue)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            navigate("/browse");

            // ...
            updateProfile(auth.currentUser, {
              displayName: displayNameRef.current.value,
            })
              .then(() => {
                // Profile updated!
                // ...
              })
              .catch((error) => {
                // An error occurred
                // ...
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + errorMessage);
            // ..
          });
      } else {
        //Sign in logic
        signInWithEmailAndPassword(auth, emailValue, passwordValue)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/browse");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + errorMessage);
          });
      }
    }
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
          ref={emailRef}
        />
        {!toggleSignInButton && (
          <input
            ref={displayNameRef}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-600"
          />
        )}
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-600"
          ref={passwordRef}
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="p-4 my-6 mx-0 bg-red-700 w-full rounded-lg"
          onClick={handleButtonPress}
        >
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
