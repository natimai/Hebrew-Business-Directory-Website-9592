import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { QuestProvider } from '@questlabs/react-sdk';
import '@questlabs/react-sdk/dist/style.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import BusinessDirectory from './pages/BusinessDirectory';
import BusinessProfile from './pages/BusinessProfile';
import Categories from './pages/Categories';
import Login from './pages/Login';
import Register from './pages/Register';
import BusinessOwnerPortal from './pages/BusinessOwnerPortal';
import AddBusiness from './pages/AddBusiness';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import Profile from './pages/Profile';
import GetStarted from './pages/GetStarted';
import { questConfig } from './config/questConfig';
import './App.css';

function App() {
  return (
    <QuestProvider
      apiKey={questConfig.APIKEY}
      entityId={questConfig.ENTITYID}
      apiType="PRODUCTION"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gray-50"
      >
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/directory" element={<BusinessDirectory />} />
            <Route path="/business/:id" element={<BusinessProfile />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:categoryId" element={<BusinessDirectory />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/business-portal" element={<BusinessOwnerPortal />} />
            <Route path="/add-business" element={<AddBusiness />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </Layout>
      </motion.div>
    </QuestProvider>
  );
}

export default App;