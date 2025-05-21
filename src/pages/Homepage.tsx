import { Link } from "react-router-dom";
import "./Homepage.css"
const Homepage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden disc-wrap h-[105vh]">
      {/* Background image layer */}
      <img src="/Homebackground.jpeg" alt="background" className="absolute  inset-0 w-full h-full bg-center bg-cover bg-no-repeat brightness-90 contrast-130" />
      <div className="flex justify-center items-center h-[70%]">
        <img src="/Noirlogo.png" alt="" className="absolute" />
      </div>
      {/* Main content over background */}
      <div className="relative z-10">
        <div className="md:flex justify-center gap-[10%] grid grid-cols-1 md:static">
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
    </div>
  );
};

export default Homepage;