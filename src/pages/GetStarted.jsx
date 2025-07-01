import React from 'react';
import { motion } from 'framer-motion';
import GetStartedWrapper from '../components/GetStartedWrapper';

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hebrew-heading">
            מדריך התחלה
          </h1>
          <p className="text-xl text-gray-600 hebrew-body">
            בואו נתחיל את המסע שלכם בפורטל העסקים
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <GetStartedWrapper />
        </motion.div>
      </div>
    </div>
  );
};

export default GetStarted;