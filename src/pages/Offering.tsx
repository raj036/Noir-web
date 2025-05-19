import React, { useEffect, useState } from "react";
import "./Offering.css";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
const Offering = () => {
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationDone(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

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
      name: "NON STOP Alpha Herbal Medicine",
      src: "/prod1-Alpha-Packaging.png",
      desc: `Performance. Precision. Power.

ALPHA is NOIR’s signature Ayurvedic supplement, formulated to support male vitality, confidence, and endurance. With 12 time-tested herbs and 2 proprietary ingredients extracted through a unique process, ALPHA delivers results you can feel—without the side effects.

Designed to work within 90 to 120 minutes, this fast-acting formula enhances stamina, strengthens performance, and helps you lead with assurance—day or night. No prescriptions. No harsh chemicals. Just a bold return to your natural state.

Because true power isn’t forced. It’s unlocked.`,
      prev: 5,
      next: 2,
    },
    {
      id: 2,
      name: "NOIR Stroker",
      src: "/prod2-noir-stroker.png",
      desc: `Designed for your moment.
      
     The NOIR stroker is a single-use personal wellness device crafted for comfort, discretion, and enhanced self-care. Made from ultra-soft material and paired with our signature lubricant sachet, it’s designed to deliver a smooth, satisfying experience—no mess, no cleanup.
     
     Individually sealed for hygiene and privacy, this compact stroker fits effortlessly into your lifestyle. Whether it’s a quiet reset or a moment just for you, NOIR is there—ready when you are.
     
    Pleasure, redefined. Clean, quiet, and yours alone. `,
      prev: 1,
      next: 3,
    },
    {
      id: 3,
      name: "NOIR Bed Side Pillow",
      src: "/public/prod3-Pillow-Box.png",
      desc: `Description - A discreet wedge-shaped support cushion designed to enhance intimacy and elevate pleasure. Crafted with high-density foam and wrapped in a soft, breathable cover, the NOIR Bed Side Pillow offers ergonomic support without compromising on style. Its clean silhouette and matte black finish blend seamlessly into your bedroom, inviting comfort without explanation.
      
      Use it to explore new angles, reduce strain, or simply indulge in a more luxurious experience. When not in use, it tucks away effortlessly—always there, never in the way.
      
      This is more than a pillow. It’s a quiet upgrade to the way you connect.`,
      prev: 2,
      next: 4,
    },
    {
      id: 4,
      name: "NOIR Sachet Lubricant",
      src: "/prod4-Lubricant-Sachet-Box.png",
      desc: `Effortless intimacy, anywhere.
      
      NOIR’s single-use lubricant sachets are crafted for those who value comfort, discretion, and pleasure without compromise. Each 5ml pouch contains our premium water-based formula—silky smooth, non-sticky, and gentle on all skin types.
      
      Perfectly portioned for solo or partnered moments, these sachets eliminate waste and mess while offering a seamless experience every time. Compact, travel-friendly, and designed to disappear when you’re done.
      
      One moment. One sachet. Always ready.`,
      prev: 3,
      next: 5,
    },
    {
      id: 5,
      name: "NOIR Lubricant",
      src: "/prod5-Tube-Box.png",
      desc: `Smooth by design.
      
      NOIR’s premium water-based lubricant is thoughtfully formulated to elevate every touch. Silky, non-sticky, and safe for all skin types, this intimate essential glides effortlessly—enhancing comfort and deepening sensation in every moment, solo or shared.

      Housed in a discreet, matte-finish tube, it’s as elegant on your shelf as it is indulgent in use. Easy to wash, gentle on skin, and crafted with care, the NOIR lubricant is more than functional—it’s an invitation to slow down, connect, and feel more.
      
     Pleasure begins with intention. This is yours. `,
      prev: 4,
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
    <div className="offer-wrap relative overflow-auto h-screen">
      {/* Background Layer */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat brightness-90 contrast-130"
        style={{ backgroundImage: "url('/Homebackground.jpeg')" }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <h1 className={`offerings-title ${animationDone ? 'show-text' : ''}`}>
          OFFERINGS
        </h1>

        {getItem && (
          <div className="content-grid">
            <div className="flex justify-center items-center gap-5">
              <img
                src="https://img.icons8.com/?size=100&id=98971&format=png&color=000000"
                alt="prev arrow"
                className="swipe-arrow rotate-180 hover:cursor-pointer"
                onClick={() => handleClick(getItem.prev)}
              />

              <img src={getItem.src} className="lubricant-image" alt="product" />

              <img
                src="https://img.icons8.com/?size=100&id=98971&format=png&color=000000"
                onClick={() => handleClick(getItem.next)}
                alt="next arrow"
                className="swipe-arrow hover:cursor-pointer"
              />
            </div>

            <div className="description">
              <h2 className="text-center product-title text-6xl">
                {getItem.name}
              </h2>
              <p className="product-info whitespace-pre-line text-gray-700">{getItem.desc}</p>
            </div>
          </div>
        )}
      </div>
    </div>

  );
};

export default Offering;
