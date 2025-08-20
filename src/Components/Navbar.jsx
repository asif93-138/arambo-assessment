import { useState } from "react";
import logo from "../assets/Frame.png"
import flag_icon from "../assets/Auto Layout Vertical.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative bg-[#F6F7F9]">
      <div className="navbar shadow-sm md:px-20">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">
            <img src={logo} />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>Buy/Sell <i className="fa-solid fa-angle-down"></i></a></li>
            <li><a>Rent <i className="fa-solid fa-angle-down"></i></a></li>
            <li><a>Services <i className="fa-solid fa-angle-down"></i></a></li>
            <li><a>About Us</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="mr-12 font-medium btn btn-ghost hidden md:flex">
            <img src={flag_icon} className="w-[25px]" />
            English <i className="fa-solid fa-angle-down"></i>
          </button>
          <button className="btn btn-primary">List Property</button>
          <button className="btn btn-ghost inline md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <i className="fa-solid fa-xmark text-xl"></i> : <i className="fa-solid fa-bars text-xl"></i>}
          </button>
        </div>
      </div>
      <ul className={isOpen ? "md:hidden ps-6 absolute w-full bg-white z-1" : "md:hidden ms-6 hidden"}>
        <li className="my-3"><a>Home</a></li>
        <li className="my-3"><a>Buy/Sell <i className="fa-solid fa-angle-down"></i></a></li>
        <li className="my-3"><a>Rent <i className="fa-solid fa-angle-down"></i></a></li>
        <li className="my-3"><a>Services <i className="fa-solid fa-angle-down"></i></a></li>
        <li className="my-3"><a>About Us</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
//  left-[100%]