import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { 
  FiUsers, 
  FiBuilding, 
  FiStar, 
  FiTrendingUp,
  FiCheck,
  FiX,
  FiEye,
  FiEdit,
  FiTrash2,
  FiPlus
} = FiIcons;

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { icon: FiBuilding, label: 'סה"כ עסקים', value: '2,847', change: '+12%' },
    { icon: FiUsers, label: 'משתמשים רשומים', value: '15,234', change: '+8%' },
    { icon: FiStar, label: 'ביקורות השבוע', value: '143', change: '+24%' },
    { icon: FiTrendingUp, label: 'צפיות יומיות', value: '8,921', change: '+15%' }
  ];

  const pendingBusinesses = [
    {
      id: 1,
      name: 'מסעדת שלמה',
      category: 'מסעדות',
      submittedDate: '2024-01-15',
      status: 'pending'
    },
    {
      id: 2,
      name: 'קליניקת ד"ר אברהם',
      category: 'רפואה',
      submittedDate: '2024-01-14',
      status: 'pending'
    }
  ];

  const recentUsers = [
    {
      id: 1,
      name: 'יוסי לוי',
      email: 'yossi@example.com',
      joinDate: '2024-01-15',
      status: 'active'
    },
    {
      id: 2,
      name: 'שרה כהן',
      email: 'sarah@example.com',
      joinDate: '2024-01-14',
      status: 'active'
    }
  ];

  const recentReviews = [
    {
      id: 1,
      business: 'מסעדת הטעם הטוב',
      user: 'דני לוי',
      rating: 5,
      comment: 'מקום מדהים!',
      date: '2024-01-15',
      status: 'approved'
    },
    {
      id: 2,
      business: 'מוסך הזהב',
      user: 'מיכל רוזן',
      rating: 2,
      comment: 'שירות לא טוב',
      date: '2024-01-14',
      status: 'pending'
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
            לוח בקרה - ניהול מערכת
          </h1>
          <p className="text-gray-600 hebrew-body">
            ניהול כללי של המערכת, עסקים ומשתמשים
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
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

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-reverse space-x-8 px-6">
              {[
                { id: 'overview', name: 'סקירה כללית' },
                { id: 'businesses', name: 'ניהול עסקים' },
                { id: 'users', name: 'ניהול משתמשים' },
                { id: 'reviews', name: 'ניהול ביקורות' },
                { id: 'settings', name: 'הגדרות מערכת' }
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
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Pending Businesses */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 hebrew-heading">
                    עסקים ממתינים לאישור
                  </h3>
                  <div className="space-y-3">
                    {pendingBusinesses.map((business) => (
                      <div key={business.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{business.name}</p>
                          <p className="text-sm text-gray-600">{business.category}</p>
                        </div>
                        <div className="flex space-x-reverse space-x-2">
                          <button className="bg-green-600 text-white p-1 rounded hover:bg-green-700">
                            <SafeIcon icon={FiCheck} className="text-sm" />
                          </button>
                          <button className="bg-red-600 text-white p-1 rounded hover:bg-red-700">
                            <SafeIcon icon={FiX} className="text-sm" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Users */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 hebrew-heading">
                    משתמשים חדשים
                  </h3>
                  <div className="space-y-3">
                    {recentUsers.map((user) => (
                      <div key={user.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-600">{user.email}</p>
                        </div>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          פעיל
                        </span>
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
                    ניהול עסקים
                  </h3>
                  <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                    <SafeIcon icon={FiPlus} className="inline ml-2" />
                    הוסף עסק
                  </button>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          עסק
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          קטגוריה
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          סטטוס
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          פעולות
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {pendingBusinesses.map((business) => (
                        <tr key={business.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{business.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{business.category}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                              ממתין
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-reverse space-x-2">
                              <button className="text-blue-600 hover:text-blue-900">
                                <SafeIcon icon={FiEye} />
                              </button>
                              <button className="text-green-600 hover:text-green-900">
                                <SafeIcon icon={FiCheck} />
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                <SafeIcon icon={FiX} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 hebrew-heading">
                  ניהול משתמשים
                </h3>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          משתמש
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          אימייל
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          תאריך הצטרפות
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          פעולות
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentUsers.map((user) => (
                        <tr key={user.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{user.joinDate}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-reverse space-x-2">
                              <button className="text-blue-600 hover:text-blue-900">
                                <SafeIcon icon={FiEdit} />
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                <SafeIcon icon={FiTrash2} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
                          <p className="font-semibold text-gray-900">{review.business}</p>
                          <p className="text-sm text-gray-600">מאת: {review.user}</p>
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
                        <div className="flex space-x-reverse space-x-2">
                          <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                            אשר
                          </button>
                          <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
                            דחה
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 hebrew-heading">
                  הגדרות מערכת
                </h3>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        שם האתר
                      </label>
                      <input
                        type="text"
                        defaultValue="פורטל עסקים"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        תיאור האתר
                      </label>
                      <textarea
                        rows={3}
                        defaultValue="המדריך העסקי המוביל בישראל"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        אימייל צור קשר
                      </label>
                      <input
                        type="email"
                        defaultValue="info@business-portal.co.il"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
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

export default AdminDashboard;