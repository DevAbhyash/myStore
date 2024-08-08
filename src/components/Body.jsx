import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../utils/firebase";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          const uid = user.uid;
          const email = user.email;
          const displayName = user.displayName;
          dispatch(addUser({ uid, email, displayName }));

          // ...
        } else {
          dispatch(removeUser());
        }
      },
      []
    );
  });

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
