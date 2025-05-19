import { useEffect, useState } from "react";
import "./ProductDetails.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const ProductDetails = () => {

  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationDone(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen prod-main overflow-auto ">
      {/* Background image layer */}
      <div
        className="absolute inset-0 w-full bg-cover bg-no-repeat brightness-90 contrast-130"
        style={{ backgroundImage: "url('/Homebackground.jpeg')" }}
      ></div>


      {/* Main content over background */}
      <div className="relative z-10">
        <Header />
        <h1 className={`offerings-title ${animationDone ? 'show-text' : ''}`}>
          OFFERINGS
        </h1>
        <div className="offerings-grid border md:border-t-red-800 px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <Link to={`/products-details/1`} className="md:border-r-red-800 border">
              <div className="offering-card items-center border border-b-red-800 md:border-none">
                <img
                  src="/prod1-Alpha-Packaging.png"
                  alt="noir lubricant"
                  className="offering-image w-full object-contain"
                />
                <p className="offering-title text-center mt-2">NON STOP Alpha Herbal Medicine</p>
              </div>
            </Link>

            <Link to={`/products-details/2`} className="md:border-r-red-800 border ">
              <div className="offering-card items-center border-b-red-800 border md:border-none ">
                <img
                  src="/prod2-noir-stroker.png"
                  alt="alpha by noir supplements"
                  className="offering-image w-full object-contain"
                />
                <p className="offering-title text-center mt-2">NOIR STROKER</p>
              </div>
            </Link>

            <Link to={`/products-details/3`}>
              <div className="offering-card items-center ">
                <img
                  src="/prod3-Pillow-Box.png"
                  alt="noir stroker"
                  className="offering-image w-full object-contain"
                />
                <p className="offering-title text-center mt-2">NOIR Bed Side Pillow</p>
              </div>
            </Link>

            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2">
              <Link to={`/products-details/4`}>
                <div className="offering-card items-center border-t-red-800 md:border-r-red-800 border">
                  <img src="/prod4-Lubricant-Sachet-Box.png" alt="..." className="offering-image w-full object-contain" />
                  <p className="offering-title text-center mt-2">NOIR Sachet Lubricant </p>
                </div>
              </Link>

              <Link to={`/products-details/5`}>
                <div className="offering-card items-center border border-t-red-800">
                  <img src="/prod5-Tube-Box.png" alt="..." className="offering-image w-full object-contain" />
                  <p className="offering-title text-center mt-2">NOIR Lubricant</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
