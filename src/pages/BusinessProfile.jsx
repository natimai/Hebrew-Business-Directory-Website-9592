import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { 
  FiStar, 
  FiMapPin, 
  FiPhone, 
  FiClock, 
  FiGlobe, 
  FiMail,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiShare2,
  FiHeart,
  FiMessageSquare,
  FiUser
} = FiIcons;

const BusinessProfile = () => {
  const { id } = useParams();
  const [business, setBusiness] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });

  // Mock business data
  const mockBusiness = {
    id: '1',
    name: 'מסעדת הטעם הטוב',
    category: 'מסעדות ובתי קפה',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop'
    ],
    rating: 4.8,
    reviewCount: 127,
    location: 'תל אביב',
    address: 'רחוב דיזנגוף 100, תל אביב',
    phone: '03-1234567',
    email: 'info@tastegood.co.il',
    website: 'www.tastegood.co.il',
    description: 'מסעדה איטלקית אותנטית עם אווירה חמה ומזון מעולה. מתמחים בפסטות ופיצות עם מרכיבים טריים וברטבים ביתיים. המקום מציע חווית אוכל איטלקית אמיתית בלב תל אביב.',
    longDescription: `מסעדת "הטעם הטוב" הוקמה בשנת 2015 על ידי השף מרקו רוסיני, שהגיע ישירות מאיטליה עם חלום להביא את הטעמים האותנטיים של איטליה לישראל. המסעדה ממוקמת ברחוב דיזנגוף התוסס ומציעה אווירה חמה ומזמינה המתאימה לארוחות משפחתיות, דייטים רומנטיים ומפגשי עסקים.

    התפריט שלנו כולל מגוון רחב של מנות איטלקיות מסורתיות - פסטות טריות המוכנות במקום מדי יום, פיצות דקות ופריכות הנאפות בתנור אבן מיוחד, ריזוטו קרמי, וכמובן מבחר של מנות בשר ודגים איטלקיים מקוריים.

    אנו גאים במרכיבים הטריים והאיכותיים שלנו - עגבניות סן מרצאנו, גבינת מוצרלה באפלה טרייה, שמן זית כתית ראשונה מפוליה, ועשבי תיבול טריים מהגינה שלנו.`,
    isOpen: true,
    openingHours: {
      sunday: '12:00 - 23:00',
      monday: '12:00 - 23:00', 
      tuesday: '12:00 - 23:00',
      wednesday: '12:00 - 23:00',
      thursday: '12:00 - 24:00',
      friday: '12:00 - 15:00',
      saturday: '20:00 - 24:00'
    },
    socialMedia: {
      facebook: 'https://facebook.com/tastegood',
      instagram: 'https://instagram.com/tastegood',
      linkedin: 'https://linkedin.com/company/tastegood'
    },
    features: ['WiFi חינם', 'מקומות ישיבה בחוץ', 'מתאים למשפחות', 'חניה', 'נגיש לכיסאות גלגלים'],
    priceRange: '₪₪₪',
    featured: true
  };

  const mockReviews = [
    {
      id: 1,
      userName: 'דני לוי',
      userAvatar: 'https://ui-avatars.com/api/?name=דני+לוי&background=0ea5e9&color=fff',
      rating: 5,
      comment: 'מקום מדהים! האוכל טעים מאוד והשירות מעולה. בהחלט נחזור.',
      date: '2024-01-15',
      helpful: 12
    },
    {
      id: 2,
      userName: 'שרה כהן',
      userAvatar: 'https://ui-avatars.com/api/?name=שרה+כהן&background=0ea5e9&color=fff',
      rating: 4,
      comment: 'פיצה טעימה ואווירה נעימה. המחירים קצת גבוהים אבל שווה את זה.',
      date: '2024-01-10',
      helpful: 8
    },
    {
      id: 3,
      userName: 'יוסי אברהם',
      userAvatar: 'https://ui-avatars.com/api/?name=יוסי+אברהם&background=0ea5e9&color=fff',
      rating: 5,
      comment: 'השף באמת יודע מה הוא עושה. הפסטה הייתה מושלמת!',
      date: '2024-01-05',
      helpful: 15
    }
  ];

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      setBusiness(mockBusiness);
      setReviews(mockReviews);
      setLoading(false);
    }, 1000);
  }, [id]);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // Add review logic here
    console.log('New review:', newReview);
    setNewReview({ rating: 5, comment: '' });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!business) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">העסק לא נמצא</h2>
          <Link to="/directory" className="text-primary-600 hover:text-primary-700">
            חזור למדריך העסקים
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={business.images[0]} 
          alt={business.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <div className="flex items-center space-x-reverse space-x-2 mb-2">
                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                  {business.category}
                </span>
                {business.featured && (
                  <span className="bg-secondary-500 text-white px-3 py-1 rounded-full text-sm">
                    מומלץ
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 hebrew-heading">
                {business.name}
              </h1>
              <div className="flex items-center space-x-reverse space-x-4 text-lg">
                <div className="flex items-center space-x-reverse space-x-1">
                  <SafeIcon icon={FiStar} className="text-yellow-400" />
                  <span className="font-semibold">{business.rating}</span>
                  <span>({business.reviewCount} ביקורות)</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-2">
                  <SafeIcon icon={FiMapPin} />
                  <span>{business.location}</span>
                </div>
                <div className={`flex items-center space-x-reverse space-x-2 ${business.isOpen ? 'text-green-400' : 'text-red-400'}`}>
                  <SafeIcon icon={FiClock} />
                  <span>{business.isOpen ? 'פתוח עכשיו' : 'סגור עכשיו'}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="bg-white rounded-lg shadow-sm mb-6">
                <div className="border-b border-gray-200">
                  <nav className="flex space-x-reverse space-x-8 px-6">
                    {[
                      { id: 'overview', name: 'סקירה' },
                      { id: 'reviews', name: 'ביקורות' },
                      { id: 'photos', name: 'תמונות' }
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
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 hebrew-heading">
                          אודות
                        </h3>
                        <p className="text-gray-600 hebrew-body leading-relaxed mb-4">
                          {business.description}
                        </p>
                        <p className="text-gray-600 hebrew-body leading-relaxed">
                          {business.longDescription}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 hebrew-heading">
                          מאפיינים
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {business.features.map((feature, index) => (
                            <span
                              key={index}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'reviews' && (
                    <div className="space-y-6">
                      {/* Reviews List */}
                      <div className="space-y-4">
                        {reviews.map((review) => (
                          <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                            <div className="flex items-start space-x-reverse space-x-3">
                              <img
                                src={review.userAvatar}
                                alt={review.userName}
                                className="w-10 h-10 rounded-full"
                              />
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <h4 className="font-semibold text-gray-900">{review.userName}</h4>
                                  <span className="text-sm text-gray-500">{review.date}</span>
                                </div>
                                <div className="flex items-center space-x-reverse space-x-1 mb-2">
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
                                <p className="text-gray-600 hebrew-body mb-2">{review.comment}</p>
                                <div className="flex items-center space-x-reverse space-x-4 text-sm text-gray-500">
                                  <button className="hover:text-primary-600">
                                    <SafeIcon icon={FiHeart} className="inline ml-1" />
                                    מועיל ({review.helpful})
                                  </button>
                                  <button className="hover:text-primary-600">
                                    <SafeIcon icon={FiMessageSquare} className="inline ml-1" />
                                    תגובה
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Add Review Form */}
                      <div className="border-t border-gray-200 pt-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 hebrew-heading">
                          כתוב ביקורת
                        </h3>
                        <form onSubmit={handleSubmitReview} className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              דירוג
                            </label>
                            <div className="flex space-x-reverse space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <button
                                  key={i}
                                  type="button"
                                  onClick={() => setNewReview({...newReview, rating: i + 1})}
                                  className={`text-2xl ${
                                    i < newReview.rating ? 'text-yellow-400' : 'text-gray-300'
                                  }`}
                                >
                                  <SafeIcon icon={FiStar} />
                                </button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              הביקורת שלך
                            </label>
                            <textarea
                              value={newReview.comment}
                              onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                              rows={4}
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              placeholder="ספר לנו על החווייה שלך..."
                            />
                          </div>
                          <button
                            type="submit"
                            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
                          >
                            שלח ביקורת
                          </button>
                        </form>
                      </div>
                    </div>
                  )}

                  {activeTab === 'photos' && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {business.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`${business.name} - תמונה ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 hebrew-heading">
                  פרטי יצירת קשר
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-reverse space-x-3">
                    <SafeIcon icon={FiMapPin} className="text-primary-500" />
                    <span className="text-gray-600">{business.address}</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-3">
                    <SafeIcon icon={FiPhone} className="text-primary-500" />
                    <a href={`tel:${business.phone}`} className="text-gray-600 hover:text-primary-600">
                      {business.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-3">
                    <SafeIcon icon={FiMail} className="text-primary-500" />
                    <a href={`mailto:${business.email}`} className="text-gray-600 hover:text-primary-600">
                      {business.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-3">
                    <SafeIcon icon={FiGlobe} className="text-primary-500" />
                    <a href={`https://${business.website}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600">
                      {business.website}
                    </a>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 space-y-3">
                  <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-200">
                    צור קשר
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <SafeIcon icon={FiShare2} className="inline ml-2" />
                    שתף
                  </button>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 hebrew-heading">
                  שעות פתיחה
                </h3>
                <div className="space-y-2 text-sm">
                  {Object.entries(business.openingHours).map(([day, hours]) => {
                    const dayNames = {
                      sunday: 'ראשון',
                      monday: 'שני',
                      tuesday: 'שלישי',
                      wednesday: 'רביעי',
                      thursday: 'חמישי',
                      friday: 'שישי',
                      saturday: 'שבת'
                    };
                    return (
                      <div key={day} className="flex justify-between">
                        <span className="text-gray-600">{dayNames[day]}</span>
                        <span className="text-gray-900 font-medium ltr">{hours}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 hebrew-heading">
                  רשתות חברתיות
                </h3>
                <div className="flex space-x-reverse space-x-3">
                  <a href={business.socialMedia.facebook} className="text-blue-600 hover:text-blue-700">
                    <SafeIcon icon={FiFacebook} className="text-xl" />
                  </a>
                  <a href={business.socialMedia.instagram} className="text-pink-600 hover:text-pink-700">
                    <SafeIcon icon={FiInstagram} className="text-xl" />
                  </a>
                  <a href={business.socialMedia.linkedin} className="text-blue-800 hover:text-blue-900">
                    <SafeIcon icon={FiLinkedin} className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessProfile;