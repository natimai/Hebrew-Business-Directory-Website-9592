import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useAuth } from '../contexts/AuthContext';

const { 
  FiPlus, 
  FiEdit, 
  FiEye, 
  FiStar, 
  FiUsers, 
  FiTrendingUp,
  FiMessageSquare,
  FiSettings
} = FiIcons;

const BusinessOwnerPortal = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { icon: FiEye, label: 'צפיות השבוע', value: '1,234', change: '+12%' },
    { icon: FiStar, label: 'דירוג ממוצע', value: '4.8', change: '+0.2' },
    { icon: FiMessageSquare, label: 'ביקורות חדשות', value: '8', change: '+3' },
    { icon: FiUsers, label: 'לקוחות חדשים', value: '24', change: '+18%' }
  ];

  const mockBusinesses = [
    {
      id: 1,
      name: 'מסעדת הטעם הטוב',
      status: 'פעיל',
      views: 1234,
      rating: 4.8,
      reviews: 45,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop'
    }
  ];

  const recentReviews = [
    {
      id: 1,
      user: 'דני לוי',
      rating: 5,
      comment: 'מקום מדהים! האוכל טעים מאוד והשירות מעולה.',
      date: '2024-01-15',
      business: 'מסעדת הטעם הטוב'
    },
    {
      id: 2,
      user: 'שרה כהן',
      rating: 4,
      comment: 'פיצה טעימה ואווירה נעימה. המחירים קצת גבוהים.',
      date: '2024-01-14',
      business: 'מסעדת הטעם הטוב'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 hebrew-heading mb-2">
            פורטל בעלי עסקים
          </h1>
          <p className="text-gray-600 hebrew-body">
            ברוך הבא, {user?.name}. נהל את העסקים שלך ועקוב אחר הביצועים
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-reverse space-x-8 px-6">
              {[
                { id: 'dashboard', name: 'לוח בקרה' },
                { id: 'businesses', name: 'העסקים שלי' },
                { id: 'reviews', name: 'ביקורות' },
                { id: 'analytics', name: 'נתונים' },
                { id: 'settings', name: 'הגדרות' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'dashboard' && (
              <div className="space-y-8">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white border border-gray-200 rounded-lg p-6"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                          <SafeIcon icon={stat.icon} className="text-primary-600" />
                        </div>
                        <div className="mr-3">
                          <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                          <div className="flex items-center">
                            <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                            <span className="mr-2 text-sm font-medium text-green-600">
                              {stat.change}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 hebrew-heading">
                    פעולות מהירות
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="flex items-center justify-center space-x-reverse space-x-2 bg-primary-600 text-white p-4 rounded-lg hover:bg-primary-700 transition-colors">
                      <SafeIcon icon={FiPlus} />
                      <span>הוסף עסק חדש</span>
                    </button>
                    <button className="flex items-center justify-center space-x-reverse space-x-2 border border-gray-300 text-gray-700 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                      <SafeIcon icon={FiEdit} />
                      <span>עדכן פרטי עסק</span>
                    </button>
                    <button className="flex items-center justify-center space-x-reverse space-x-2 border border-gray-300 text-gray-700 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                      <SafeIcon icon={FiTrendingUp} />
                      <span>צפה בדוחות</span>
                    </button>
                  </div>
                </div>

                {/* Recent Reviews */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 hebrew-heading">
                    ביקורות אחרונות
                  </h3>
                  <div className="space-y-4">
                    {recentReviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-semibold text-gray-900">{review.user}</p>
                            <p className="text-sm text-gray-600">{review.business}</p>
                          </div>
                          <div className="flex items-center space-x-reverse space-x-1">
                            <SafeIcon icon={FiStar} className="text-yellow-400 text-sm" />
                            <span className="text-sm font-medium">{review.rating}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 hebrew-body text-sm">{review.comment}</p>
                        <p className="text-xs text-gray-500 mt-2">{review.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'businesses' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 hebrew-heading">
                    העסקים שלי
                  </h3>
                  <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                    <SafeIcon icon={FiPlus} className="inline ml-2" />
                    הוסף עסק
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockBusinesses.map((business) => (
                    <div key={business.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                      <img 
                        src={business.image} 
                        alt={business.name}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900">{business.name}</h4>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            business.status === 'פעיל' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {business.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-sm text-gray-600 mb-3">
                          <div className="text-center">
                            <p className="font-semibold text-gray-900">{business.views}</p>
                            <p>צפיות</p>
                          </div>
                          <div className="text-center">
                            <p className="font-semibold text-gray-900">{business.rating}</p>
                            <p>דירוג</p>
                          </div>
                          <div className="text-center">
                            <p className="font-semibold text-gray-900">{business.reviews}</p>
                            <p>ביקורות</p>
                          </div>
                        </div>
                        <div className="flex space-x-reverse space-x-2">
                          <button className="flex-1 bg-primary-600 text-white py-2 px-3 rounded-lg text-sm hover:bg-primary-700 transition-colors">
                            <SafeIcon icon={FiEdit} className="inline ml-1" />
                            עריכה
                          </button>
                          <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-3 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                            <SafeIcon icon={FiEye} className="inline ml-1" />
                            צפייה
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 hebrew-heading">
                  ניהול ביקורות
                </h3>
                <div className="space-y-4">
                  {recentReviews.map((review) => (
                    <div key={review.id} className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="font-semibold text-gray-900">{review.user}</p>
                          <p className="text-sm text-gray-600">{review.business}</p>
                        </div>
                        <div className="flex items-center space-x-reverse space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <SafeIcon
                              key={i}
                              icon={FiStar}
                              className={`text-sm ${
                                i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 hebrew-body mb-3">{review.comment}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{review.date}</span>
                        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                          הגב לביקורת
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 hebrew-heading">
                  נתונים וסטטיסטיקות
                </h3>
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <SafeIcon icon={FiTrendingUp} className="text-4xl text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 hebrew-body">
                    נתונים מפורטים יהיו זמינים בקרוב
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 hebrew-heading">
                  הגדרות חשבון
                </h3>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        שם מלא
                      </label>
                      <input
                        type="text"
                        defaultValue={user?.name}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        אימייל
                      </label>
                      <input
                        type="email"
                        defaultValue={user?.email}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        הודעות אימייל
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" defaultChecked />
                          <span className="mr-2 text-sm text-gray-600">ביקורות חדשות</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" defaultChecked />
                          <span className="mr-2 text-sm text-gray-600">עדכונים שבועיים</span>
                        </label>
                      </div>
                    </div>
                    <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                      שמור שינויים
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessOwnerPortal;