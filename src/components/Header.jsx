import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  function handleSignout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black">
      <img
        className=" w-full h-full 
        "
        src="https://wallpapers.com/images/hd/shop-background-vg3mtdk5o18qyw25.jpg"
      />
      {user && (
        <button
          onClick={handleSignout}
          className=" bg-red-500 h-20 w-20 rounded-full absolute top-0 right-10 font-bold"
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Header;
