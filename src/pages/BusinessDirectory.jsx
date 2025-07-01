import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SearchBar from '../components/SearchBar';

const { FiStar, FiMapPin, FiPhone, FiClock, FiFilter, FiGrid, FiList } = FiIcons;

const BusinessDirectory = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('relevance');

  // Mock data
  const mockBusinesses = [
    {
      id: '1',
      name: 'מסעדת הטעם הטוב',
      category: 'מסעדות ובתי קפה',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
      rating: 4.8,
      reviewCount: 127,
      location: 'תל אביב',
      address: 'רחוב דיזנגוף 100, תל אביב',
      phone: '03-1234567',
      description: 'מסעדה איטלקית אותנטית עם אווירה חמה ומזון מעולה. מתמחים בפסטות ופיצות עם מרכיבים טריים',
      isOpen: true,
      openingHours: 'ראשון-חמישי: 12:00-23:00',
      website: 'www.example.com',
      featured: true
    },
    {
      id: '2',
      name: 'קליניקת ד"ר כהן',
      category: 'רפואה ובריאות',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop',
      rating: 4.9,
      reviewCount: 89,
      location: 'ירושלים',
      address: 'רחוב יפו 45, ירושלים',
      phone: '02-9876543',
      description: 'רופא משפחה מנוסה עם שירות מקצועי ואישי. מתמחה ברפואה פנימית ובדיקות מעקב',
      isOpen: true,
      openingHours: 'ראשון-חמישי: 08:00-18:00',
      website: 'www.drkohenclinic.co.il',
      featured: false
    },
    {
      id: '3',
      name: 'מוסך הזהב',
      category: 'שירותי רכב',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      rating: 4.7,
      reviewCount: 156,
      location: 'חיפה',
      address: 'רחוב הרצל 22, חיפה',
      phone: '04-5555555',
      description: 'מוסך מקצועי לכל סוגי הרכבים עם שירות מהיר ואמין. טיפולי רכב מקיפים ומחירים הוגנים',
      isOpen: false,
      openingHours: 'ראשון-חמישי: 07:00-17:00',
      website: 'www.zahavgarage.co.il',
      featured: false
    },
    {
      id: '4',
      name: 'סלון יופי רותי',
      category: 'יופי וטיפוח',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop',
      rating: 4.6,
      reviewCount: 203,
      location: 'פתח תקוה',
      address: 'רחוב בן גוריון 15, פתח תקוה',
      phone: '03-7777777',
      description: 'סלון יופי מקצועי המציע טיפולי פנים, עיצוב גבות, והדרכה אישית. אווירה נעימה ושירות מותאם אישית',
      isOpen: true,
      openingHours: 'ראשון-חמישי: 09:00-19:00',
      website: 'www.rutisalon.co.il',
      featured: true
    }
  ];

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      let filteredBusinesses = [...mockBusinesses];
      
      const query = searchParams.get('q');
      const location = searchParams.get('location');
      const category = searchParams.get('category');

      if (query) {
        filteredBusinesses = filteredBusinesses.filter(business =>
          business.name.includes(query) || business.description.includes(query)
        );
      }

      if (location) {
        filteredBusinesses = filteredBusinesses.filter(business =>
          business.location.includes(location) || business.address.includes(location)
        );
      }

      if (category) {
        filteredBusinesses = filteredBusinesses.filter(business =>
          business.category === category
        );
      }

      // Sort businesses
      switch (sortBy) {
        case 'rating':
          filteredBusinesses.sort((a, b) => b.rating - a.rating);
          break;
        case 'reviews':
          filteredBusinesses.sort((a, b) => b.reviewCount - a.reviewCount);
          break;
        case 'name':
          filteredBusinesses.sort((a, b) => a.name.localeCompare(b.name));
          break;
        default:
          // Featured first, then by rating
          filteredBusinesses.sort((a, b) => {
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;
            return b.rating - a.rating;
          });
      }

      setBusinesses(filteredBusinesses);
      setLoading(false);
    }, 1000);
  }, [searchParams, sortBy]);

  const handleSearch = (query, location, category) => {
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (location) params.set('location', location);
    if (category) params.set('category', category);
    setSearchParams(params);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Section */}
      <section className="bg-white py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      {/* Results Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2 hebrew-heading">
                מדריך עסקים
              </h1>
              <p className="text-gray-600 hebrew-body">
                נמצאו {businesses.length} עסקים
              </p>
            </div>

            <div className="flex items-center space-x-reverse space-x-4 mt-4 sm:mt-0">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="relevance">רלוונטיות</option>
                <option value="rating">דירוג</option>
                <option value="reviews">מספר ביקורות</option>
                <option value="name">שם העסק</option>
              </select>

              {/* View Mode */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <SafeIcon icon={FiGrid} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <SafeIcon icon={FiList} />
                </button>
              </div>
            </div>
          </div>

          {/* Business List */}
          {businesses.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl text-gray-300 mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 hebrew-heading">
                לא נמצאו תוצאות
              </h3>
              <p className="text-gray-600 hebrew-body">
                נסה לשנות את מילות החיפוש או הסר חלק מהפילטרים
              </p>
            </div>
          ) : (
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-6'
            }>
              {businesses.map((business, index) => (
                <motion.div
                  key={business.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {viewMode === 'grid' ? (
                    <BusinessCard business={business} />
                  ) : (
                    <BusinessListItem business={business} />
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const BusinessCard = ({ business }) => (
  <Link to={`/business/${business.id}`} className="block group">
    <div className="business-card card-hover overflow-hidden">
      <div className="relative">
        <img
          src={business.image}
          alt={business.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {business.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-secondary-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              מומלץ
            </span>
          </div>
        )}
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

        <p className="text-sm text-primary-600 mb-2 font-medium">{business.category}</p>
        
        <p className="text-gray-600 mb-4 hebrew-body line-clamp-2">
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
);

const BusinessListItem = ({ business }) => (
  <Link to={`/business/${business.id}`} className="block group">
    <div className="business-card card-hover p-6">
      <div className="flex gap-6">
        <div className="relative flex-shrink-0">
          <img
            src={business.image}
            alt={business.name}
            className="w-32 h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
          {business.featured && (
            <div className="absolute -top-2 -right-2">
              <span className="bg-secondary-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                מומלץ
              </span>
            </div>
          )}
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 hebrew-heading group-hover:text-primary-600 transition-colors mb-1">
                {business.name}
              </h3>
              <p className="text-sm text-primary-600 font-medium">{business.category}</p>
            </div>
            <div className="flex items-center space-x-reverse space-x-1">
              <SafeIcon icon={FiStar} className="text-yellow-400" />
              <span className="font-medium text-gray-700">{business.rating}</span>
              <span className="text-sm text-gray-500">({business.reviewCount})</span>
            </div>
          </div>

          <p className="text-gray-600 mb-4 hebrew-body">
            {business.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-500">
            <div className="flex items-center space-x-reverse space-x-2">
              <SafeIcon icon={FiMapPin} className="text-primary-500" />
              <span>{business.address}</span>
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
            <div className="flex items-center space-x-reverse space-x-2">
              <span className="text-primary-600 font-medium group-hover:text-primary-700">
                צפה בפרטים ←
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default BusinessDirectory;