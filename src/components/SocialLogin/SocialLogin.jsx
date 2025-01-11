import React from "react";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="flex items-center w-10/12 mx-auto">
      <div className="divider before:bg-neutral after:bg-neutral"></div>
      <p className="mr-3 font-bold"> Or Login With</p>
      <div className="btn">
        <FaGoogle></FaGoogle>
        Google
      </div>
    </div>
  );
};

export default SocialLogin;
