import React from "react";
import "./Connect.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const ConnectPage = () => {
  return (
    <div className="cont-wrap min-h-screen bg-[black] text-[gray]">
      {/* header */}

      <Header />

      {/* Main Content */}
      <main className="px-6 py-12">
        <div className="space-y-16">
          {/* Hero Text */}
          <h1 className="connect-title text-gray-800">CONNECT</h1>

          {/* CTA Button */}
          <div className="get-div text-center flex items-center justify-center p-[5px] mb-3">
            <h4 className="bg-red-800  text-[white] px-8 py-3 rounded-md transition-colors flex items-center justify-center gap-2 mx-auto">
              <span className="get-t text-[30px] ">
                <i>GET IN TOUCH</i>
              </span>
              {/* <Send size={20} /> */}
            </h4>
          </div>

          {/* Description */}
          <div className="text-center">
            <p className="desc-para text-gray-400 leading-relaxed w-[70%]">
              <span className="text-red-600">NOIR</span> PRODUCTS are
              CONVENIENTLY AVAILABLE ONLINE THROUGH AMAZON, ENSURING DISCREET
              DELIVERY RIGHT TO YOUR DOORSTEP. FOR BULK ORDERS OR BUSINESS
              INQUIRIES, CONNECT WITH US DIRECTLY-WE'RE HERE TO ELEVATE YOUR
              INTIMATE WELLNESS EXPERIENCE.
            </p>

            {/* Contact Email */}
            <Link
              to="mailto:SUPPORT@NOIRWELLNESS.IN"
              className="cont-link text-red-600 hover:text-red-500 transition-colors block "
            >
              SUPPORT@NOIRWELLNESS.IN
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConnectPage;
