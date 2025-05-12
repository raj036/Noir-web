import React, { useEffect, useState } from "react";
import "./Offering.css";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
const Offering = () => {
  const [getItem, setGetItem] = useState<{
    id: number;
    name: string;
    src: string;
    desc: string;
    prev: number;
    next: number;
  } | null>(null);
  const { id } = useParams();
  useEffect(() => {
    const foundItem = product.find((item) => item.id === Number(id)); // Convert id to number
    if (foundItem) {
      setGetItem(foundItem || null);
    }
  }, [id]);

  const product = [
    {
      id: 1,
      name: "NOIR LUBRICANTS",
      src: "/serSachetimg-removebg-preview.png",
      desc: "Indulge in sophistication with NOIR's premium water-based lubricant. Silky smooth, effortlessly clean, and gentle on all skin types, it’s crafted for unparalleled comfort and elegance in every intimate moment.",
      prev: 3,
      next: 2,
    },
    {
      id: 2,
      name: `ALPHA BY NOIR SUPPLEMENTS`,
      src: "/ser2img-removebg.png",
      desc: "Indulge in sophistication with NOIR's premium water-based lubricant. Silky smooth, effortlessly clean, and gentle on all skin types, it’s crafted for unparalleled comfort and elegance in every intimate moment.",
      prev: 1,
      next: 3,
    },
    {
      id: 3,
      name: "NOIR STROKER",
      src: "/serThirdProd-removebg-preview.png",
      desc: "Indulge in sophistication with NOIR's premium water-based lubricant. Silky smooth, effortlessly clean, and gentle on all skin types, it’s crafted for unparalleled comfort and elegance in every intimate moment.",
      prev: 2,
      next: 1,
    }
  ];

  const handleClick = (ID: number) => {
    const foundItem = product.find((item) => item.id === ID); // Convert id to number
    if (foundItem) {
      setGetItem(foundItem || null);
    }
  };
  return (
    <div className="offer-wrap min-h-screen">
      <Header />
      <h1 className="offerings-title text-gray-800">OFFERINGS</h1>

      {getItem && (
        <div className="content-grid">
          <div className="flex justify-center items-center gap-5">
            <img
              src="https://img.icons8.com/?size=100&id=98971&format=png&color=000000"
              alt=""
              className=" swipe-arrow rotate-180 hover:cursor-pointer"
              onClick={() => handleClick(getItem.prev)}
            />
            <img
              src={getItem.src}
             
              className="lubricant-image"
            />

            <img
              src="https://img.icons8.com/?size=100&id=98971&format=png&color=000000"
              onClick={() => handleClick(getItem.next)}
              alt=""
              className="swipe-arrow hover:cursor-pointer transition-all duration- "
            />
          </div>

          <div className="description ">
            <h2 className=" text-center product-title text-6xl border border-red-800">
              {getItem.name}
            </h2>
            <p className="product-info">{getItem.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offering;
