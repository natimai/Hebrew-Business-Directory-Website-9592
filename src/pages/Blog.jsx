import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiUser, FiArrowLeft, FiSearch } = FiIcons;

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'הכל' },
    { id: 'tips', name: 'טיפים עסקיים' },
    { id: 'marketing', name: 'שיווק ופרסום' },
    { id: 'technology', name: 'טכנולוגיה' },
    { id: 'finance', name: 'כלכלה ופיננסים' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: '10 טיפים להצלחה בעסק קטן',
      excerpt: 'גלה את הסודות להצלחה בניהול עסק קטן ואיך להתמודד עם האתגרים היומיומיים',
      content: 'תוכן המאמר המלא...',
      author: 'דני לוי',
      date: '2024-01-15',
      category: 'tips',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      readTime: '5 דקות קריאה'
    },
    {
      id: 2,
      title: 'איך לבנות נוכחות דיגיטלית חזקה',
      excerpt: 'המדריך המלא לבניית נוכחות דיגיטלית מוצלחת ברשתות החברתיות ובאינטרנט',
      content: 'תוכן המאמר המלא...',
      author: 'שרה כהן',
      date: '2024-01-12',
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      readTime: '7 דקות קריאה'
    },
    {
      id: 3,
      title: 'מגמות טכנולוגיות לעסקים ב-2024',
      excerpt: 'סקירה של המגמות הטכנולוגיות החשובות ביותר שכל עסק צריך להכיר השנה',
      content: 'תוכן המאמר המלא...',
      author: 'מיכל אברהם',
      date: '2024-01-10',
      category: 'technology',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop',
      readTime: '6 דקות קריאה'
    },
    {
      id: 4,
      title: 'ניהול תזרים מזומנים לעסק קטן',
      excerpt: 'כלים ואסטרטגיות לניהול נכון של תזרים המזומנים ושמירה על יציבות פיננסית',
      content: 'תוכן המאמר המלא...',
      author: 'יוסי רוזן',
      date: '2024-01-08',
      category: 'finance',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
      readTime: '8 דקות קריאה'
    },
    {
      id: 5,
      title: 'שירות לקוחות מעולה - המדריך השלם',
      excerpt: 'איך לספק שירות לקוחות יוצא דופן שיבדיל את העסק שלכם מהמתחרים',
      content: 'תוכן המאמר המלא...',
      author: 'רינה גולד',
      date: '2024-01-05',
      category: 'tips',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      readTime: '4 דקות קריאה'
    },
    {
      id: 6,
      title: 'רשתות חברתיות לעסקים - איך לעשות זאת נכון',
      excerpt: 'המדריך המעשי לניהול נכון של רשתות חברתיות עבור העסק שלכם',
      content: 'תוכן המאמר המלא...',
      author: 'תומר בן דוד',
      date: '2024-01-03',
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      readTime: '6 דקות קריאה'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 hebrew-heading">
              בלוג עסקי
            </h1>
            <p className="text-xl text-gray-600 hebrew-body max-w-2xl mx-auto">
              טיפים, מדריכים וכלים להצלחה עסקית
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <SafeIcon icon={FiSearch} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="חפש מאמרים..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex space-x-reverse space-x-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 hebrew-heading">
              מאמר מומלץ
            </h2>
            
            <Link to={`/blog/${featuredPost.id}`} className="block group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center space-x-reverse space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-reverse space-x-1">
                        <SafeIcon icon={FiUser} />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-reverse space-x-1">
                        <SafeIcon icon={FiCalendar} />
                        <span>{featuredPost.date}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 hebrew-heading group-hover:text-primary-600 transition-colors">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-gray-600 hebrew-body text-lg mb-6">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                      <span>קרא עוד</span>
                      <SafeIcon icon={FiArrowLeft} className="mr-2" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Regular Posts */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 hebrew-heading">
            מאמרים נוספים
          </h2>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 hebrew-body">
                לא נמצאו מאמרים התואמים לחיפוש שלך
              </p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(0, 6).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.id}`} className="block group">
                  <article className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-reverse space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-reverse space-x-1">
                          <SafeIcon icon={FiUser} />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-reverse space-x-1">
                          <SafeIcon icon={FiCalendar} />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 hebrew-heading group-hover:text-primary-600 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 hebrew-body mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                        <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                          <span>קרא עוד</span>
                          <SafeIcon icon={FiArrowLeft} className="mr-1 text-sm" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;