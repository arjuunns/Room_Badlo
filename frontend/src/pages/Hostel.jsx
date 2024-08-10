import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Sample hostel data
const hostels = [
  {
    hostel: "Amritam Hall",
    levels: {
      level1: Array.from({ length: 50 }, (_, i) => [
        101 + i,
        Math.random() > 0.5,
      ]),
      level2: Array.from({ length: 50 }, (_, i) => [
        201 + i,
        Math.random() > 0.5,
      ]),
      level3: Array.from({ length: 50 }, (_, i) => [
        301 + i,
        Math.random() > 0.5,
      ]),
    },
  },
];

const HostelPage = () => {
  const [data, setData] = useState(hostels);

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      {data.map((hostel) => (
        <div key={hostel.hostel} className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            {hostel.hostel}
          </h1>
          {Object.keys(hostel.levels).map((levelKey) => (
            <div key={levelKey} className="mb-4">
              <h2 className="text-lg md:text-xl font-semibold mb-2 text-center">
                {levelKey}
              </h2>
              <div className="flex flex-wrap justify-center gap-2">
                {hostel.levels[levelKey].map(([roomNumber, isAvailable]) => (
                  <motion.div
                    key={roomNumber}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className={`w-[150px] h-[150px] md:w-12 md:h-12 flex items-center justify-center text-white font-semibold rounded-md ${
                      isAvailable ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {roomNumber}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HostelPage;
