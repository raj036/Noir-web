import React from "react";
import "./Discover.css";
import Header from "../components/Header";

const Discover = () => {
  return (
    <div className="disc-wrap min-h-screen">
      {/* header */}
      <Header />
      <h1 className="discover-title "> DISCOVER </h1>
      <div className="discover-description text-white w-[60%] ">
        <p >
      
        AT <h1 className="noir-description">NOIR</h1>, WE ARE REDEFINING INTIMATE WELLNESS WITH SOPHISTICATION AND
        PURPOSE. DEDICATED TO CRAFTING PREMIUM PLEASURE OFFERINGS, FROM
        INDULGENT LUBRICANTS TO EXQUISITELY DESIGNED TOYS, WE CATER TO THE
        EVOLVING NEEDS OF THE MODERN INDIAN AUDIENCE. IN A SOCIETY OFTEN SILENT
        ABOUT SEXUALITY, WE EMBRACE THE POWER OF POSITIVITY, ENCOURAGING
        CONFIDENCE AND CONNECTION, WITH "BEDSIDE PLEASURE" AT THE HEART OF OUR
        PHILOSOPHY, <h1 className="noir-description">NOIR</h1> DELIVERS AN UNPARALLELED EXPERIENCE, BLENDING ELEGANCE,
        DISCRETION, AND INNOVATION
      </p>
      </div>
      
    </div>
  );
};

export default Discover;
