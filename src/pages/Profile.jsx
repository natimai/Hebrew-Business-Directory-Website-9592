import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useAuth } from '../contexts/AuthContext';

const { FiUser, FiMail, FiPhone, FiLock, FiSave, FiCamera } = FiIcons;

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [activeTab, setActiveTab] = useState('personal');
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || ''
    }
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      updateProfile(data);
      toast.success('הפרטים עודכנו בהצלחה!');
    } catch (error) {
      toast.error('שגיאה בעדכון הפרטים. אנא נסה שוב.');
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = async (data) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('הסיסמה שונתה בהצלחה!');
    } catch (error) {
      toast.error('שגיאה בשינוי הסיסמה. אנא נסה שוב.');
    } finally {
      setLoading(false);
    }
  };

  const myBusinesses = [
    {
      id: 1,
      name: 'מסעדת הטעם הטוב',
      category: 'מסעדות',
      status: 'פעיל',
      views: 1234,
      rating: 4.8,
      reviews: 45,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop'
    }
  ];

  const myReviews = [
    {
      id: 1,
      business: 'מוסך הזהב',
      rating: 5,
      comment: 'שירות מעולה ומחירים הוגנים',
      date: '2024-01-10'
    },
    {
      id: 2,
      business: 'סלון יופי רותי',
      rating: 4,
      comment: 'אווירה נעימה וטיפול מקצועי',
      date: '2024-01-05'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="relative inline-block">
            <img
              src={user?.avatar}
              alt={user?.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <button className="absolute bottom-0 right-0 bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 transition-colors">
              <SafeIcon icon={FiCamera} className="text-sm" />
            </button>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 hebrew-heading mb-2">
            {user?.name}
          </h1>
          <p className="text-gray-600 hebrew-body">{user?.email}</p>
        </motion.div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-reverse space-x-8 px-6">
              {[
                { id: 'personal', name: 'פרטים אישיים' },
                { id: 'businesses', name: 'העסקים שלי' },
                { id: 'reviews', name: 'הביקורות שלי' },
                { id: 'security', name: 'אבטחה' }
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
            {activeTab === 'personal' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 hebrew-heading">
                  עדכון פרטים אישיים
                </h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        שם מלא *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <SafeIcon icon={FiUser} className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          {...register('name', { required: 'שדה חובה' })}
                          type="text"
                          className="w-full pr-10 pl-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        אימייל *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <SafeIcon icon={FiMail} className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          {...register('email', {
                            required: 'שדה חובה',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'כתובת אימייל לא תקינה'
                            }
                          })}
                          type="email"
                          className="w-full pr-10 pl-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          dir="ltr"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      מספר טלפון
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <SafeIcon icon={FiPhone} className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        {...register('phone')}
                        type="tel"
                        className="w-full pr-10 pl-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="050-1234567"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center space-x-reverse space-x-2 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <SafeIcon icon={FiSave} />
                    )}
                    <span>שמור שינויים</span>
                  </button>
                </form>
              </div>
            )}

            {activeTab === 'businesses' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 hebrew-heading">
                    העסקים שלי
                  </h3>
                  <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                    הוסף עסק חדש
                  </button>
                </div>

                {myBusinesses.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-600 hebrew-body mb-4">עדיין לא הוספת עסקים</p>
                    <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                      הוסף עסק ראשון
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {myBusinesses.map((business) => (
                      <div key={business.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <img 
                          src={business.image} 
                          alt={business.name}
                          className="w-full h-32 object-cover"
                        />
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-gray-900">{business.name}</h4>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                              {business.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{business.category}</p>
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
                              עריכה
                            </button>
                            <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-3 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                              צפייה
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 hebrew-heading">
                  הביקורות שכתבתי
                </h3>

                {myReviews.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-600 hebrew-body">עדיין לא כתבת ביקורות</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {myReviews.map((review) => (
                      <div key={review.id} className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-semibold text-gray-900">{review.business}</h4>
                          <div className="flex items-center space-x-reverse space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <SafeIcon
                                key={i}
                                icon={FiUser}
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
                            ערוך ביקורת
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 hebrew-heading">
                  שינוי סיסמה
                </h3>
                
                <form onSubmit={handleSubmit(handlePasswordChange)} className="space-y-6 max-w-md">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      סיסמה נוכחית *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <SafeIcon icon={FiLock} className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="password"
                        className="w-full pr-10 pl-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="הזן סיסמה נוכחית"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      סיסמה חדשה *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <SafeIcon icon={FiLock} className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="password"
                        className="w-full pr-10 pl-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="הזן סיסמה חדשה"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      אימות סיסמה חדשה *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <SafeIcon icon={FiLock} className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="password"
                        className="w-full pr-10 pl-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="הזן סיסמה חדשה שוב"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center space-x-reverse space-x-2 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <SafeIcon icon={FiSave} />
                    )}
                    <span>שמור סיסמה חדשה</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;