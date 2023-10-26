import React from "react";
import SignInButton from "./SignInButton";

const Appbar = () => {
  return (
    <header className="flex  justify-center">
      <div className="flex justify-beetween">
        <SignInButton />
      </div>
    </header>
  );
};

export default Appbar;
