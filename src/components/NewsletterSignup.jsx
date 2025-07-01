import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiCheck } = FiIcons;

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('אנא הזן את כתובת האימייל');
      return;
    }

    // Mock subscription
    setTimeout(() => {
      setIsSubscribed(true);
      toast.success('נרשמת בהצלחה לניוזלטר!');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <SafeIcon icon={FiMail} className="text-2xl text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hebrew-heading">
            הישאר מעודכן
          </h2>
          <p className="text-xl text-gray-600 mb-8 hebrew-body max-w-2xl mx-auto">
            קבל עדכונים על עסקים חדשים, הצעות מיוחדות וטיפים עסקיים שימושיים ישירות למייל
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="הזן את כתובת האימייל שלך"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent search-input hebrew-body"
                  dir="ltr"
                />
                <button
                  type="submit"
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium btn-hover whitespace-nowrap"
                >
                  הרשם עכשיו
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4 hebrew-body">
                לא נשלח ספאם. ניתן לבטל את המנוי בכל עת.
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center space-x-reverse space-x-2 text-green-600"
            >
              <SafeIcon icon={FiCheck} className="text-2xl" />
              <span className="text-lg font-medium hebrew-body">תודה! נרשמת בהצלחה לניוזלטר</span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSignup;