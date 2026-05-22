import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 w-full">

      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 py-">

        <h1 className="text-amber-50 text-lg font-semibold md:hidden">
          Menu
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-center gap-6 w-full text-lg">

          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/history" className="nav-link">
              History
            </Link>
          </li>

          <li>
            <Link to="/gallery" className="nav-link">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>

        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-amber-50"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col items-center gap-4 pb-4 text-amber-50 text-lg">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/history" className="nav-link">
              History
            </Link>
          </li>

          <li>
            <Link to="/gallery" className="nav-link">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>

        </ul>
      )}

    </nav>
  );
};

export default Navbar;