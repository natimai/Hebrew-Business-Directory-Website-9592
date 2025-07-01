import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSearch, FiMapPin, FiFilter } = FiIcons;

const SearchBar = ({ onSearch, showFilters = true }) => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

  const categories = [
    'כל הקטגוריות',
    'מסעדות ובתי קפה',
    'רפואה ובריאות',
    'יופי וטיפוח',
    'שירותי רכב',
    'עורכי דין',
    'בנייה ושיפוצים',
    'חינוך',
    'טכנולוגיה',
    'שירותים פיננסיים'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query, location, category === 'כל הקטגוריות' ? '' : category);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-2xl p-6 md:p-8"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search Query */}
          <div className="relative">
            <SafeIcon icon={FiSearch} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="מה אתה מחפש?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent search-input hebrew-body"
            />
          </div>

          {/* Location */}
          <div className="relative">
            <SafeIcon icon={FiMapPin} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="איפה?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent search-input hebrew-body"
            />
          </div>

          {/* Category */}
          {showFilters && (
            <div className="relative">
              <SafeIcon icon={FiFilter} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent search-input hebrew-body appearance-none bg-white"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-3 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-200 font-semibold btn-hover shadow-lg"
          >
            חפש עכשיו
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default SearchBar;