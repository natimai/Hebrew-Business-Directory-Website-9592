import React from 'react';
import { motion } from 'framer-motion';
import CategoryGrid from '../components/CategoryGrid';

const Categories = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 hebrew-heading">
              קטגוריות עסקים
            </h1>
            <p className="text-xl text-gray-600 hebrew-body max-w-2xl mx-auto">
              גלה את המגוון הרחב של עסקים ושירותים הזמינים במדריך שלנו
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryGrid showAll={true} />
        </div>
      </section>
    </div>
  );
};

export default Categories;