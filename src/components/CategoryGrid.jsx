import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { 
  FiShoppingBag, 
  FiHeart, 
  FiTool, 
  FiCar, 
  FiBookOpen, 
  FiMonitor,
  FiHome,
  FiUsers,
  FiCamera,
  FiMusic,
  FiGift,
  FiTruck
} = FiIcons;

const CategoryGrid = ({ showAll = false }) => {
  const categories = [
    {
      id: 'restaurants',
      name: 'מסעדות ובתי קפה',
      icon: FiShoppingBag,
      count: 1250,
      color: 'from-red-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop'
    },
    {
      id: 'health',
      name: 'רפואה ובריאות',
      icon: FiHeart,
      count: 890,
      color: 'from-green-500 to-green-600',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=200&fit=crop'
    },
    {
      id: 'beauty',
      name: 'יופי וטיפוח',
      icon: FiUsers,
      count: 650,
      color: 'from-pink-500 to-pink-600',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=200&fit=crop'
    },
    {
      id: 'automotive',
      name: 'שירותי רכב',
      icon: FiCar,
      count: 420,
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&h=200&fit=crop'
    },
    {
      id: 'construction',
      name: 'בנייה ושיפוצים',
      icon: FiTool,
      count: 780,
      color: 'from-orange-500 to-orange-600',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=200&fit=crop'
    },
    {
      id: 'legal',
      name: 'עורכי דין',
      icon: FiBookOpen,
      count: 340,
      color: 'from-purple-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=200&fit=crop'
    },
    {
      id: 'technology',
      name: 'טכנולוgiה',
      icon: FiMonitor,
      count: 520,
      color: 'from-indigo-500 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop'
    },
    {
      id: 'education',
      name: 'חינוך',
      icon: FiBookOpen,
      count: 290,
      color: 'from-teal-500 to-teal-600',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=200&fit=crop'
    },
    {
      id: 'real-estate',
      name: 'נדל"ן',
      icon: FiHome,
      count: 380,
      color: 'from-yellow-500 to-yellow-600',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop'
    },
    {
      id: 'photography',
      name: 'צילום ואירועים',
      icon: FiCamera,
      count: 210,
      color: 'from-gray-500 to-gray-600',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=300&h=200&fit=crop'
    },
    {
      id: 'entertainment',
      name: 'בידור ופנאי',
      icon: FiMusic,
      count: 160,
      color: 'from-red-400 to-red-500',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop'
    },
    {
      id: 'retail',
      name: 'קמעונאות',
      icon: FiGift,
      count: 950,
      color: 'from-green-400 to-green-500',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop'
    }
  ];

  const displayCategories = showAll ? categories : categories.slice(0, 8);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {displayCategories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Link
            to={`/directory?category=${encodeURIComponent(category.name)}`}
            className="block group"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 card-hover">
              <div className="relative h-32">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
                <div className="mb-3">
                  <SafeIcon icon={category.icon} className="text-3xl" />
                </div>
                <h3 className="text-lg font-semibold text-center hebrew-heading mb-1">
                  {category.name}
                </h3>
                <span className="text-sm opacity-90">
                  {category.count.toLocaleString()} עסקים
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default CategoryGrid;