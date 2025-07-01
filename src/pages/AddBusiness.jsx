import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUpload, FiX, FiCheck } = FiIcons;

const AddBusiness = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedImages, setUploadedImages] = useState([]);
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const categories = [
    'מסעדות ובתי קפה',
    'רפואה ובריאות',
    'יופי וטיפוח',
    'שירותי רכב',
    'עורכי דין',
    'בנייה ושיפוצים',
    'חינוך',
    'טכנולוגיה',
    'שירותים פיננסיים',
    'נדל"ן',
    'צילום ואירועים',
    'בידור ופנאי'
  ];

  const steps = [
    { number: 1, title: 'פרטי העסק', description: 'מידע בסיסי על העסק' },
    { number: 2, title: 'פרטי קשר', description: 'דרכי יצירת קשר ומיקום' },
    { number: 3, title: 'תמונות ופרטים', description: 'תמונות ומידע נוסף' },
    { number: 4, title: 'סיום', description: 'סקירה ושליחה' }
  ];

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImages(prev => [...prev, e.target.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  const onSubmit = (data) => {
    console.log('Business data:', data);
    toast.success('העסק נשלח לאישור בהצלחה!');
    setCurrentStep(4);
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hebrew-heading">
            הוסף עסק למדריך
          </h1>
          <p className="text-xl text-gray-600 hebrew-body">
            הגדל את החשיפה של העסק שלך והגע ללקוחות חדשים
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                  step.number <= currentStep 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {step.number < currentStep ? <SafeIcon icon={FiCheck} /> : step.number}
                </div>
                <div className="text-center mt-2">
                  <p className={`text-sm font-medium ${
                    step.number <= currentStep ? 'text-primary-600' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </p>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Step 1: Basic Info */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 hebrew-heading">
                  פרטי העסק
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      שם העסק *
                    </label>
                    <input
                      {...register('businessName', { required: 'שדה חובה' })}
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="הזן את שם העסק"
                    />
                    {errors.businessName && (
                      <p className="mt-1 text-sm text-red-600">{errors.businessName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      קטגוריה *
                    </label>
                    <select
                      {...register('category', { required: 'שדה חובה' })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">בחר קטגוריה</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                    {errors.category && (
                      <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    תיאור קצר *
                  </label>
                  <textarea
                    {...register('shortDescription', { required: 'שדה חובה' })}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="תיאור קצר של העסק (עד 150 מילים)"
                  />
                  {errors.shortDescription && (
                    <p className="mt-1 text-sm text-red-600">{errors.shortDescription.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    תיאור מפורט
                  </label>
                  <textarea
                    {...register('longDescription')}
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="תיאור מפורט של העסק, השירותים והמוצרים"
                  />
                </div>
              </motion.div>
            )}

            {/* Step 2: Contact Info */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 hebrew-heading">
                  פרטי קשר ומיקום
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      טלפון *
                    </label>
                    <input
                      {...register('phone', { required: 'שדה חובה' })}
                      type="tel"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="03-1234567"
                      dir="ltr"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      אימייל
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="info@business.co.il"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    כתובת *
                  </label>
                  <input
                    {...register('address', { required: 'שדה חובה' })}
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="רחוב, מספר, עיר"
                  />
                  {errors.address && (
                    <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      אתר אינטרנט
                    </label>
                    <input
                      {...register('website')}
                      type="url"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="www.business.co.il"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      פייסבוק
                    </label>
                    <input
                      {...register('facebook')}
                      type="url"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="https://facebook.com/business"
                      dir="ltr"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Images & Details */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 hebrew-heading">
                  תמונות ופרטים נוספים
                </h2>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    תמונות (עד 5 תמונות)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <SafeIcon icon={FiUpload} className="text-3xl text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">לחץ להעלאת תמונות או גרור תמונות לכאן</p>
                    </label>
                  </div>

                  {/* Uploaded Images */}
                  {uploadedImages.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                      {uploadedImages.map((image, index) => (
                        <div key={index} className="relative">
                          <img
                            src={image}
                            alt={`Upload ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                          >
                            <SafeIcon icon={FiX} className="text-sm" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Opening Hours */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    שעות פתיחה
                  </label>
                  <textarea
                    {...register('openingHours')}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="ראשון-חמישי: 09:00-18:00&#10;שישי: 09:00-14:00&#10;שבת: סגור"
                  />
                </div>

                {/* Features */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    מאפיינים ושירותים
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      'WiFi חינם',
                      'חניה',
                      'נגיש לכיסאות גלגלים',
                      'מקומות ישיבה בחוץ',
                      'מתאים למשפחות',
                      'כשר',
                      'מקבל כרטיסי אשראי',
                      'שירות הזמנות',
                      'משלוחים'
                    ].map((feature) => (
                      <label key={feature} className="flex items-center">
                        <input
                          {...register('features')}
                          type="checkbox"
                          value={feature}
                          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="mr-2 text-sm text-gray-600">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Completion */}
            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <SafeIcon icon={FiCheck} className="text-3xl text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 hebrew-heading">
                  תודה רבה!
                </h2>
                <p className="text-xl text-gray-600 hebrew-body">
                  העסק שלך נשלח לבדיקה ואישור
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 hebrew-body">
                    נבדוק את הפרטים שלחת ונאשר את העסק שלך תוך 24-48 שעות.
                    תקבל אימייל כשהעסק יהיה פעיל במדריך.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            {currentStep < 4 && (
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-6 py-2 rounded-lg font-medium ${
                    currentStep === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  הקודם
                </button>

                {currentStep === 3 ? (
                  <button
                    type="submit"
                    className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                  >
                    שלח לאישור
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                  >
                    הבא
                  </button>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBusiness;