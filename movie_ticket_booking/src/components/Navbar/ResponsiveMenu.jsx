import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ open }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, x:100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x:100 }}
            transition={{ duration: 0.3 }}
            
            className="fixed left-0 z-20 w-full h-screen top-24 md:top-20"
          >
            <div className="py-10 m-6 text-xl font-semibold text-white uppercase menu-container bg-primary rounded-3xl">
              <ul className="flex flex-col items-center gap-10">
                <li>
                <Link to='/signin'>  Login / Register</Link>
              </li>
                <li>Your Orders</li>
                <li>Help & Support</li>
                <li>Rewards</li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResponsiveMenu;
