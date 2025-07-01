import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiMapPin, FiPhone, FiClock } = FiIcons;

const FeaturedBusinesses = () => {
  const featuredBusinesses = [
    {
      id: '1',
      name: 'מסעדת הטעם הטוב',
      category: 'מסעדות',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
      rating: 4.8,
      reviewCount: 127,
      location: 'תל אביב',
      phone: '03-1234567',
      description: 'מסעדה איטלקית אותנטית עם אווירה חמה ומזון מעולה',
      isOpen: true,
      featured: true
    },
    {
      id: '2',
      name: 'קליניקת ד"ר כהן',
      category: 'רפואה',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop',
      rating: 4.9,
      reviewCount: 89,
      location: 'ירושלים',
      phone: '02-9876543',
      description: 'רופא משפחה מנוסה עם שירות מקצועי ואישי',
      isOpen: true,
      featured: true
    },
    {
      id: '3',
      name: 'מוסך הזהב',
      category: 'שירותי רכב',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      rating: 4.7,
      reviewCount: 156,
      location: 'חיפה',
      phone: '04-5555555',
      description: 'מוסך מקצועי לכל סוגי הרכבים עם שירות מהיר ואמין',
      isOpen: false,
      featured: true
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hebrew-heading">
            עסקים מובילים
          </h2>
          <p className="text-xl text-gray-600 hebrew-body max-w-2xl mx-auto">
            גלה את העסקים המומלצים ביותר באזורך
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBusinesses.map((business, index) => (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/business/${business.id}`} className="block group">
                <div className="business-card card-hover overflow-hidden">
                  <div className="relative">
                    <img
                      src={business.image}
                      alt={business.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-secondary-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        מומלץ
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <div className={`w-3 h-3 rounded-full ${business.isOpen ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 hebrew-heading group-hover:text-primary-600 transition-colors">
                        {business.name}
                      </h3>
                      <div className="flex items-center space-x-reverse space-x-1">
                        <SafeIcon icon={FiStar} className="text-yellow-400 text-sm" />
                        <span className="text-sm font-medium text-gray-700">{business.rating}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-3 hebrew-body line-clamp-2">
                      {business.description}
                    </p>

                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center space-x-reverse space-x-2">
                        <SafeIcon icon={FiMapPin} className="text-primary-500" />
                        <span>{business.location}</span>
                      </div>
                      <div className="flex items-center space-x-reverse space-x-2">
                        <SafeIcon icon={FiPhone} className="text-primary-500" />
                        <span className="ltr">{business.phone}</span>
                      </div>
                      <div className="flex items-center space-x-reverse space-x-2">
                        <SafeIcon icon={FiClock} className="text-primary-500" />
                        <span className={business.isOpen ? 'text-green-600' : 'text-red-600'}>
                          {business.isOpen ? 'פתוח עכשיו' : 'סגור עכשיו'}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          {business.reviewCount} ביקורות
                        </span>
                        <span className="text-primary-600 font-medium text-sm group-hover:text-primary-700">
                          צפה בפרטים ←
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/directory"
            className="inline-flex items-center bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium btn-hover"
          >
            צפה בכל העסקים
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBusinesses;