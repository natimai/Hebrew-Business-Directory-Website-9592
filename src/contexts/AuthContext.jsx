import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Mock authentication - replace with real API
    const mockUser = {
      id: '1',
      email,
      name: 'משתמש דוגמה',
      role: email === 'admin@example.com' ? 'admin' : 'user',
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent('משתמש דוגמה')}&background=0ea5e9&color=fff`
    };

    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    
    // Store user ID for Quest SDK
    localStorage.setItem('userId', mockUser.id);
    
    return mockUser;
  };

  const register = async (userData) => {
    // Mock registration - replace with real API
    const newUser = {
      id: Date.now().toString(),
      ...userData,
      role: 'user',
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.name)}&background=0ea5e9&color=fff`
    };

    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    
    // Store user ID for Quest SDK
    localStorage.setItem('userId', newUser.id);
    
    return newUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
  };

  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const value = {
    user,
    login,
    register,
    logout,
    updateProfile,
    loading,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};