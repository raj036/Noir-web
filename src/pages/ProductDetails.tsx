import React from "react";
import "./ProductDetails.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  return (
    <div className="prod-main min-h-screen">
      <Header />
      <h1 className="offerings-title">OFFERINGS</h1>
      <div className="offerings-grid border border-t-red-800">
        <Link to={`/products-details/1`}> <div className="offering-card hover:cursor-pointer">
          <img
            src="../../public/serSachetimg-removebg-preview.png"
            alt="noir lubricant"
            className="offering-image"
          />
          <p className="offering-title">NOIR LUBRICANT</p>
        </div> </Link>
        <Link to={`/products-details/2`}>
        <div className="offering-card border border-x-red-800">
        
          <img
            src="../../public/ser2img-removebg.png"
            alt="alpha by noir supplements"
            className="offering-image"
          />
          <p className="offering-title">
            ALPHA BY
            <br /> NOIR SUPPLEMENTS
          </p>
          
        </div>
        </Link>
        <Link to={`/products-details/3`}>
        <div className="offering-card">
       
          <img
            src="../../public/serThirdProd-removebg-preview.png"
            alt="noir stroker"
            className="offering-image"
          />
          <p className="offering-title">NOIR STROKER</p>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
