import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiClock, FiSend } = FiIcons;

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'טלפון',
      details: '03-1234567',
      description: 'זמינים בימים א-ה 09:00-18:00'
    },
    {
      icon: FiMail,
      title: 'אימייל',
      details: 'info@business-portal.co.il',
      description: 'נענה תוך 24 שעות'
    },
    {
      icon: FiMapPin,
      title: 'כתובת',
      details: 'רחוב הרצל 123, תל אביב',
      description: 'קומה 5, משרד 502'
    },
    {
      icon: FiClock,
      title: 'שעות פעילות',
      details: 'ראשון - חמישי: 09:00-18:00',
      description: 'שישי: 09:00-14:00'
    }
  ];

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('הודעתך נשלחה בהצלחה! נחזור אליך בקרוב.');
      reset();
    } catch (error) {
      toast.error('שגיאה בשליחת ההודעה. אנא נסה שוב.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 hebrew-heading">
              צור קשר
            </h1>
            <p className="text-xl text-gray-600 hebrew-body max-w-2xl mx-auto">
              יש לך שאלות? רוצה להוסיף עסק? אנחנו כאן לעזור לך
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center card-hover"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={info.icon} className="text-primary-600 text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 hebrew-heading">
                  {info.title}
                </h3>
                <p className="text-gray-900 font-medium mb-1">
                  {info.details}
                </p>
                <p className="text-sm text-gray-600 hebrew-body">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 hebrew-heading">
                  שלח לנו הודעה
                </h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        שם מלא *
                      </label>
                      <input
                        {...register('name', { required: 'שדה חובה' })}
                        type="text"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="הזן את שמך המלא"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        אימייל *
                      </label>
                      <input
                        {...register('email', {
                          required: 'שדה חובה',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'כתובת אימייל לא תקינה'
                          }
                        })}
                        type="email"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your@email.com"
                        dir="ltr"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      טלפון
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="050-1234567"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      נושא *
                    </label>
                    <select
                      {...register('subject', { required: 'שדה חובה' })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">בחר נושא</option>
                      <option value="business">הוספת עסק</option>
                      <option value="support">תמיכה טכנית</option>
                      <option value="partnership">שותפות עסקית</option>
                      <option value="advertising">פרסום</option>
                      <option value="other">אחר</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      הודעה *
                    </label>
                    <textarea
                      {...register('message', { required: 'שדה חובה' })}
                      rows={5}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="כתוב כאן את הודעתך..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="flex items-center">
                    <input
                      {...register('privacy', { required: 'יש לאשר את תנאי הפרטיות' })}
                      type="checkbox"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label className="mr-2 block text-sm text-gray-700 hebrew-body">
                      אני מסכים{' '}
                      <a href="#" className="text-primary-600 hover:text-primary-500">
                        לתנאי הפרטיות
                      </a>
                      {' '}ולקבלת עדכונים
                    </label>
                  </div>
                  {errors.privacy && (
                    <p className="text-sm text-red-600">{errors.privacy.message}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium btn-hover disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-reverse space-x-2"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <SafeIcon icon={FiSend} />
                        <span>שלח הודעה</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <SafeIcon icon={FiMapPin} className="text-4xl text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 hebrew-body">מפה תוצג כאן</p>
                    <p className="text-sm text-gray-500">רחוב הרצל 123, תל אביב</p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 hebrew-heading">
                  שאלות נפוצות
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      כמה זמן לוקח לאשר עסק חדש?
                    </h4>
                    <p className="text-sm text-gray-600 hebrew-body">
                      תהליך האישור לוקח בדרך כלל 24-48 שעות עבודה.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      האם השירות בתשלום?
                    </h4>
                    <p className="text-sm text-gray-600 hebrew-body">
                      רישום בסיסי חינמי. יש חבילות פרמיום עם תכונות נוספות.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      איך אפשר לעדכן פרטי עסק?
                    </h4>
                    <p className="text-sm text-gray-600 hebrew-body">
                      דרך הפורטל העסקי או פנייה ישירה אלינו.
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 hebrew-heading">
                  שעות פעילות
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    { day: 'ראשון - רביעי', hours: '09:00 - 18:00' },
                    { day: 'חמישי', hours: '09:00 - 17:00' },
                    { day: 'שישי', hours: '09:00 - 14:00' },
                    { day: 'שבת', hours: 'סגור' }
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-600">{schedule.day}</span>
                      <span className="text-gray-900 font-medium ltr">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;