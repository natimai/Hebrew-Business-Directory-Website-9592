import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiLinkedin } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-reverse space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiMapPin} className="text-white text-lg" />
              </div>
              <span className="text-xl font-bold hebrew-heading">פורטל עסקים</span>
            </div>
            <p className="text-gray-300 mb-6 hebrew-body leading-relaxed">
              המדריך העסקי המקיף והמוביל בישראל. מצא עסקים, שירותים וחברות מכל התחומים במקום אחד.
              פלטפורמה מתקדמת המחברת בין עסקים ללקוחות בצורה פשוטה ויעילה.
            </p>
            <div className="flex space-x-reverse space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <SafeIcon icon={FiFacebook} className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <SafeIcon icon={FiInstagram} className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <SafeIcon icon={FiLinkedin} className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 hebrew-heading">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/directory" className="text-gray-300 hover:text-white transition-colors duration-200">
                  מדריך עסקים
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-white transition-colors duration-200">
                  קטגוריות
                </Link>
              </li>
              <li>
                <Link to="/add-business" className="text-gray-300 hover:text-white transition-colors duration-200">
                  הוסף עסק
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors duration-200">
                  בלוג
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  צור קשר
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 hebrew-heading">צור קשר</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-reverse space-x-2">
                <SafeIcon icon={FiMail} className="text-primary-400" />
                <span className="text-gray-300">info@business-portal.co.il</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-2">
                <SafeIcon icon={FiPhone} className="text-primary-400" />
                <span className="text-gray-300">03-1234567</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-2">
                <SafeIcon icon={FiMapPin} className="text-primary-400" />
                <span className="text-gray-300">תל אביב, ישראל</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm hebrew-body">
            © 2024 פורטל עסקים. כל הזכויות שמורות.
          </p>
          <div className="flex space-x-reverse space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              מדיניות פרטיות
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              תנאי שימוש
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;