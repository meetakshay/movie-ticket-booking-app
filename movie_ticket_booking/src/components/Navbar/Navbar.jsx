import React, { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";
// import { FaLeaf } from "react-icons/fa";
import { GiTicket } from "react-icons/gi";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import {  FadeRight } from "../../utils/Animation";
import SocialMenu from "../SocialMenu/SocialMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        open &&
        !event.target.closest(".menu-container") &&
        !event.target.closest(".menu-button")
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white shadow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container flex items-center justify-between gap-4 py-3 md:py-2 md:pt-4 "
        >
          {/* Logo Section  */}
          <Link
            to={"/"}
            className="flex items-center gap-2 text-2xl font-bold uppercase"
          >
            <p className="text-primary">Ticket</p>
            <p className="text-secondary">Box</p>
            <GiTicket className="text-green-500" />
          </Link>

        
          {/* Serach Box */}
          <div className="flex-grow hidden px-2 py-2 md:flex ">
            <div className="p-1 ">
              <IoIosSearch className="w-10 h-6 text-red-600 " />
            </div>
            <input
              type="text"
              className="flex-grow px-2 py-1 border border-gray-300 rounded-md outline-none"
              placeholder="Search for Movies, Series and Events"
            />
          </div>

          {/* SIGN-IN Button  */}
          <Link to='/signin' className="hidden md:block">
            <button className="px-3 py-1 text-white rounded-md bg-primary hover:cursor-pointer whitespace-nowrap">
              Sign in{" "}
            </button>
          </Link>

          {/* Mobile Hamburger- Menu Section*/}
          <div
            className=" hover:cursor-pointer menu-button"
            onClick={() => setOpen(!open)}
          >
            <MdMenu className="text-4xl" />
          </div>

          {/* Mobile Menu Section  */}
          <ResponsiveMenu open={open} />
        </motion.div>

        {/* Serach Box for MOBILE */}
        <motion.div 
          variants={FadeRight(0.4)}
                    initial='hidden'
                    whileInView={'visible'}
      
           className="flex flex-grow px-2 py-2 bg-red-100  md:hidden">
          <div className="p-1 ">
            <IoIosSearch className="w-10 h-6 text-red-600 " />
          </div>
          <input
            type="text"
            className="flex-grow px-2 py-1 border border-gray-300 rounded-md outline-none"
            placeholder="Search for Movies, Series and Events..."
          />
        </motion.div>
        <div className="">
          <SocialMenu/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
