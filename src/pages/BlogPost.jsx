import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiUser, FiArrowRight, FiShare2, FiHeart } = FiIcons;

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock blog post data
  const mockPost = {
    id: 1,
    title: '10 טיפים להצלחה בעסק קטן',
    excerpt: 'גלה את הסודות להצלחה בניהול עסק קטן ואיך להתמודד עם האתגרים היומיומיים',
    content: `
      <p>ניהול עסק קטן הוא אחד האתגרים המרתקים ביותר בעולם היזמות. בין אם אתם רק מתחילים או כבר בדרך, ישנם כמה עקרונות בסיסיים שיכולים לעזור לכם להצליח.</p>
      
      <h2>1. תכנון עסקי מפורט</h2>
      <p>תכנון עסקי הוא הבסיס לכל עסק מוצלח. הוא כולל הגדרת מטרות ברורות, ניתוח שוק יעד, ותחזית פיננסית מדויקת. ללא תכנון נכון, קשה לדעת לאן אתם הולכים ואיך תגיעו לשם.</p>
      
      <h2>2. ניהול פיננסי חכם</h2>
      <p>אחת המסיבות העיקריות לכישלון עסקים קטנים היא ניהול פיננסי לקוי. חשוב לעקוב אחר הוצאות, לנהל תזרים מזומנים, ולהקצות תקציב למטרות שונות.</p>
      
      <h2>3. שירות לקוחות מעולה</h2>
      <p>לקוחות מרוצים הם הנכס החשוב ביותר של כל עסק. השקיעו בהכשרת הצוות, הקשיבו למשוב הלקוחות, ותמיד שאפו לחרוג מהציפיות.</p>
      
      <h2>4. שיווק דיגיטלי יעיל</h2>
      <p>בעידן הדיגיטלי, נוכחות אונליין היא חיונית. בנו אתר אינטרנט מקצועי, נהלו רשתות חברתיות באופן פעיל, והשתמשו בכלי שיווק דיגיטלי כמו גוגל אדוורדס ופייסבוק אדס.</p>
      
      <h2>5. רשתות מקצועיות</h2>
      <p>בניית רשת מקצועית חזקה יכולה לפתוח הזדמנויות עסקיות חדשות. השתתפו באירועים, הצטרפו לארגונים מקצועיים, ובנו קשרים עם עסקים אחרים.</p>
      
      <h2>6. חדשנות והסתגלות</h2>
      <p>השוק משתנה כל הזמן, וחשוב להישאר רלוונטיים. הקשיבו למגמות בתחום שלכם, היו פתוחים לשינויים, ואל תפחדו לנסות דברים חדשים.</p>
      
      <h2>7. ניהול זמן יעיל</h2>
      <p>כבעלי עסק קטן, הזמן שלכם הוא משאב יקר. למדו לתעדף משימות, להאציל סמכויות כשצריך, ולהשתמש בכלי ניהול זמן.</p>
      
      <h2>8. הכשרה מתמשכת</h2>
      <p>עולם העסקים משתנה מהר, וחשוב להישאר מעודכנים. השתתפו בקורסים, קראו ספרים מקצועיים, והאזינו לפודקאסטים עסקיים.</p>
      
      <h2>9. ניתוח תחרות</h2>
      <p>הכירו את המתחרים שלכם, למדו מההצלחות והכישלונות שלהם, ומצאו דרכים להתבדל מהם.</p>
      
      <h2>10. סבלנות והתמדה</h2>
      <p>הצלחה עסקית לא מגיעה בין לילה. היו סבלנים, תמשיכו לעבוד קשה, ואל תוותרו במהרה. רוב העסקים המוצלחים עברו תקופות קשות לפני שהצליחו.</p>
      
      <h3>סיכום</h3>
      <p>ניהול עסק קטן מוצלח דורש שילוב של תכנון חכם, ביצוע מקצועי, וגמישות להסתגלות. היישמו את הטיפים הללו בהדרגה, ותראו איך העסק שלכם גדל ומתפתח.</p>
    `,
    author: 'דני לוי',
    date: '2024-01-15',
    category: 'tips',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    readTime: '5 דקות קריאה',
    tags: ['עסק קטן', 'יזמות', 'ניהול', 'הצלחה']
  };

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      setPost(mockPost);
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">המאמר לא נמצא</h2>
          <Link to="/blog" className="text-primary-600 hover:text-primary-700">
            חזור לבלוג
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white"
            >
              <nav className="flex items-center space-x-reverse space-x-2 text-sm mb-4">
                <Link to="/" className="hover:text-primary-300">בית</Link>
                <span>/</span>
                <Link to="/blog" className="hover:text-primary-300">בלוג</Link>
                <span>/</span>
                <span>{post.title}</span>
              </nav>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 hebrew-heading">
                {post.title}
              </h1>
              
              <div className="flex items-center space-x-reverse space-x-6 text-sm">
                <div className="flex items-center space-x-reverse space-x-2">
                  <SafeIcon icon={FiUser} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-2">
                  <SafeIcon icon={FiCalendar} />
                  <span>{post.date}</span>
                </div>
                <span>{post.readTime}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                {/* Content */}
                <div 
                  className="prose prose-lg max-w-none hebrew-body"
                  dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
                  style={{
                    direction: 'rtl',
                    lineHeight: '1.8'
                  }}
                />

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 hebrew-heading">
                    תגיות
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-gray-900 hebrew-heading">
                      שתף את המאמר
                    </h4>
                    <div className="flex space-x-reverse space-x-3">
                      <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
                        <SafeIcon icon={FiShare2} />
                      </button>
                      <button className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors">
                        <SafeIcon icon={FiHeart} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* Author Info */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 hebrew-heading">
                    על הכותב
                  </h4>
                  <div className="flex items-center space-x-reverse space-x-3 mb-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiUser} className="text-primary-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{post.author}</p>
                      <p className="text-sm text-gray-600">יועץ עסקי</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 hebrew-body">
                    יועץ עסקי עם ניסיון של למעלה מ-10 שנים בליווי עסקים קטנים ובינוניים
                  </p>
                </div>

                {/* Related Posts */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 hebrew-heading">
                    מאמרים קשורים
                  </h4>
                  <div className="space-y-4">
                    {[
                      { title: 'איך לבנות תכנית עסקית', link: '/blog/2' },
                      { title: 'שיווק דיגיטלי לעסק קטן', link: '/blog/3' },
                      { title: 'ניהול תזרים מזומנים', link: '/blog/4' }
                    ].map((relatedPost, index) => (
                      <Link
                        key={index}
                        to={relatedPost.link}
                        className="block text-gray-700 hover:text-primary-600 text-sm hebrew-body border-b border-gray-100 pb-2 last:border-b-0"
                      >
                        {relatedPost.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Back to Blog */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <Link
                    to="/blog"
                    className="flex items-center justify-center space-x-reverse space-x-2 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <SafeIcon icon={FiArrowRight} />
                    <span>חזור לבלוג</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;