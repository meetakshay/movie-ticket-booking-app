import React from "react";
import { FaFacebook, FaTwitter, FaInstagram,  FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { GiTicket } from "react-icons/gi";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <section className="py-12 mt-12 bg-primary/10">
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1, delay:0.2}}
         className="container flex items-center justify-between">
          {/* LOGO Section  */}
          <Link to='/' className="flex items-center gap-2 text-2xl font-bold uppercase">
          <p className="text-primary">Ticket</p>
            <p className="text-secondary">Box</p>
            <GiTicket className="text-green-500" />
          </Link>

          {/* Social-Icon-Section  */}
          <div className="flex items-center gap-4 mt-6 text-3xl text-gray-700 ">
            <FaInstagram />
            <FaTwitter />
            <FaFacebook />
            <FaWhatsapp />
          </div>
        </motion.div>
      </section>

      <div className="flex justify-around py-2 text-xs text-white bg-primary font-extralight">
      <div>@2024 ALL RIGHTS RESERVED</div>
      <div>CREATED BY - <span className="text-black font-averia">AKSHAY</span>  </div>
      </div>
    </>
  );
};

export default Footer;
