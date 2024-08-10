import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Landing() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://th.bing.com/th/id/OIP.Fxf_1j7ekuz4ezj_YS8bhgHaE7?rs=1&pid=ImgDetMain')",
        opacity: 0.8,
      }}
    >
      <div className="bg-red-800 bg-opacity-60 flex-grow flex items-center justify-center">
        <div className="text-center text-white p-8">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ y: "-100vw" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 30 }}
          >
            Welcome to Roomies
          </motion.h1>
          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Experience the vibrant hostel life at Thapar University. Find your
            perfect room, connect with roommates, and enjoy the best of campus
            living.
          </motion.p>
          <div className="flex justify-center space-x-4">
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 30 }}
            >
              <Link to="/login">
                <button className="px-6 py-2 bg-white text-red-800 font-semibold rounded-md hover:bg-gray-100">
                  Login
                </button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 30 }}
            >
              <Link to="/createaccount">
                <button className="px-6 py-2 bg-white text-red-800 font-semibold rounded-md hover:bg-gray-100">
                  Sign Up
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
