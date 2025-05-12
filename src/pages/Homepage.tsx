import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css"
const Homepage = () => {
  return (
    <div className="bg-[black] h-[100vh]">
      <div className="flex justify-center items-center h-[70%]">
        <img src="/Noir-logo.png" alt="" className="" />
      </div>
      <div className="flex  justify-center gap-[10%]">
        <Link
          to="/discover"
          className="li-home text-white bg-[#3E3E3E] py-[10px] px-[20px] rounded-[5px] hover:bg-[#A61011] text-[22px]"
        >
          DISCOVER
        </Link>
        <Link
          to="/products"
          className="li-home text-white bg-[#3E3E3E] py-[10px] px-[20px] rounded-[5px] hover:bg-[#A61011] text-[22px]"
        >
          OFFERINGS
        </Link>
        <Link
          to="/contact"
          className="li-home text-[white] bg-[#3E3E3E] py-2 px-[20px] rounded-[5px] hover:bg-[#A61011] text-[22px]"
        >
          CONNECT
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
