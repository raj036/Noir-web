import { useEffect, useState } from "react";
import "./Connect.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const ConnectPage = () => {
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
      <img src="/Homebackground.jpeg" alt="background" className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat brightness-90 contrast-130" />

      {/* Main content over background */}
      <div className="relative z-10">
        {/* header */}
        <Header />

        {/* Main Content */}
        <main className="px-6 py-12">
          <div className="space-y-16">
            <h1 className={`offerings-title ${animationDone ? 'show-text' : ''}`}>
              CONNECT
            </h1>

            {/* CTA Button */}
            <div className="get-div text-center flex items-center justify-center p-[5px] mb-3">
              <h4 className="bg-red-800 text-[white] px-8 py-3 rounded-md transition-colors flex items-center justify-center gap-2 mx-auto">
                <span className="get-t text-[30px]">
                  <i>GET IN TOUCH</i>
                </span>
              </h4>
            </div>

            {/* Description */}
            <div className="text-center">
              <p className="desc-para text-gray-400 leading-relaxed w-[80%] md:w-[55%] lg:w-[45%] mx-auto text-center text-lg">
                <span className="text-red-600">NOIR</span> PRODUCTS ARE CONVENIENTLY AVAILABLE ONLINE THROUGH AMAZON,<br />
                ENSURING DISCREET DELIVERY RIGHT TO YOUR DOORSTEP.<br />
                FOR BULK ORDERS OR BUSINESS INQUIRIES,<br />
                WE'RE HERE TO ELEVATE YOUR INTIMATE WELLNESS EXPERIENCE.
              </p>

              {/* Contact Email */}
              <Link
                to="mailto:SUPPORT@NOIRWELLNESS.IN"
                className="cont-link text-red-600 hover:text-red-500 transition-colors block text-xl "
              >
                SUPPORT@NOIRWELLNESS.IN
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ConnectPage;
