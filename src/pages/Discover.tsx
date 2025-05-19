import { useEffect, useState } from "react";
import "./Discover.css";
import Header from "../components/Header";

const Discover = () => {
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationDone(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden disc-wrap h-[105vh]">
      {/* Background image layer */}
      <img src="/Homebackground.jpeg" alt="background" className="absolute  inset-0 w-full h-full bg-center bg-cover bg-no-repeat brightness-90 contrast-130" />

      {/* Main content over background */}
      <div className="relative z-10">
      {/* header */}
      <Header />
      <h1 className={`offerings-title ${animationDone ? 'show-text' : ''}`} >
        DISCOVER
      </h1>
      <div className="discover-description text-white w-[60%] ">
        <p className="text-gray-400">

          AT <h1 className="noir-description ">NOIR</h1>, WE ARE REDEFINING INTIMATE WELLNESS WITH SOPHISTICATION AND
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
    </div>
  );
};

export default Discover;
