import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SearchBar from '../components/SearchBar';
import FeaturedBusinesses from '../components/FeaturedBusinesses';
import CategoryGrid from '../components/CategoryGrid';
import NewsletterSignup from '../components/NewsletterSignup';

const { FiStar, FiUsers, FiTrendingUp, FiAward } = FiIcons;

const Home = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: FiUsers, value: '10,000+', label: 'עסקים רשומים' },
    { icon: FiStar, value: '50,000+', label: 'ביקורות' },
    { icon: FiTrendingUp, value: '1M+', label: 'חיפושים חודשיים' },
    { icon: FiAward, value: '5 שנים', label: 'ניסיון' }
  ];

  const handleSearch = (query, location, category) => {
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (location) params.set('location', location);
    if (category) params.set('category', category);
    
    navigate(`/directory?${params}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-l from-primary-600 via-primary-700 to-primary-800 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 hebrew-heading hero-title">
              המדריך העסקי המוביל בישראל
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 hebrew-body hero-subtitle max-w-3xl mx-auto">
              מצא עסקים, שירותים וחברות מכל התחומים במקום אחד. פלטפורמה מתקדמת המחברת בין עסקים ללקוחות
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <SearchBar onSearch={handleSearch} />
          </motion.div>

          {/* Popular Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12"
          >
            <p className="text-blue-100 mb-4">קטגוריות פופולריות:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['מסעדות', 'רופאים', 'שירותי רכב', 'יופי ובריאות', 'עורכי דין', 'בנייה ושיפוצים'].map((category) => (
                <Link
                  key={category}
                  to={`/directory?category=${encodeURIComponent(category)}`}
                  className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm hover:bg-opacity-30 transition-all duration-200 btn-hover"
                >
                  {category}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={stat.icon} className="text-2xl text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 hebrew-heading">{stat.value}</div>
                <div className="text-gray-600 hebrew-body">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      <FeaturedBusinesses />

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hebrew-heading">
              עיין לפי קטגוריות
            </h2>
            <p className="text-xl text-gray-600 hebrew-body max-w-2xl mx-auto">
              מגוון רחב של קטגוריות עסקיות המותאמות לכל צרכיך
            </p>
          </motion.div>

          <CategoryGrid />

          <div className="text-center mt-12">
            <Link
              to="/categories"
              className="inline-flex items-center bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium btn-hover"
            >
              צפה בכל הקטגוריות
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hebrew-heading">
              איך זה עובד?
            </h2>
            <p className="text-xl text-gray-600 hebrew-body max-w-2xl mx-auto">
              שלושה שלבים פשוטים למציאת העסק המושלם עבורך
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'חפש עסק',
                description: 'השתמש בחיפוש המתקדם שלנו למציאת העסק הרצוי לפי מיקום, קטגוריה או שם'
              },
              {
                step: '2',
                title: 'השווה ובחר',
                description: 'קרא ביקורות, השווה מחירים ושירותים וקבל את כל המידע הדרוש'
              },
              {
                step: '3',
                title: 'צור קשר',
                description: 'פנה ישירות לעסק באמצעות הפרטים המופיעים בפרופיל'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-secondary-400 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 hebrew-heading">{item.title}</h3>
                <p className="text-gray-600 hebrew-body leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-l from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 hebrew-heading">
              יש לך עסק? הצטרף אלינו היום!
            </h2>
            <p className="text-xl mb-8 text-blue-100 hebrew-body">
              הגדל את החשיפה של העסק שלך והגע לאלפי לקוחות פוטנציאליים חדשים
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/add-business"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold btn-hover"
              >
                הוסף את העסק שלך
              </Link>
              <Link
                to="/business-portal"
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200 font-semibold btn-hover"
              >
                פורטל בעלי עסקים
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />
    </div>
  );
};

export default Home;