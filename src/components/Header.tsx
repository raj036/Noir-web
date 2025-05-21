import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="back-to-home">BACK TO HOME</Link>
      <div className="brand-logo">
        <img src="/Noir-logo.png" alt="brand logo" className="noir-image" />
      </div>
    </div>
  );
};

export default Header;
