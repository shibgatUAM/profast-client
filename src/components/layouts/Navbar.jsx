import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../../assets/images/logo.png';
import { BsJustifyLeft } from 'react-icons/bs';
import Frame from '../../assets/images/Frame 4.png';

const Navbar = () => {
  return (
    <div className="navbar bg-[#FFFFFF] shadow-sm rounded-xl px-8 mb-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <BsJustifyLeft size={30} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link className="flex items-center">
          <img src={Logo} alt="Profast Logo" />
          <h1 className="text-3xl font-extrabold mt-7 -ml-4">Profast</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-6 text-lg font-medium">
          <NavLink>Services</NavLink>
          <NavLink>Coverage</NavLink>
          <NavLink>About Us</NavLink>
          <NavLink>Pricing</NavLink>
          <NavLink>Be a Rider</NavLink>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-3">
        <div>
          <Link className="btn border-1 border-[#CAEB66] bg-white text-base text-[#606060] font-bold">
            Sign In
          </Link>
        </div>
        <div className="flex items-center">
          <Link className="btn bg-[#CAEB66] text-base text-[#1F1F1F] font-bold">
            Be a rider
          </Link>
          <img src={Frame} className="h-10" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
