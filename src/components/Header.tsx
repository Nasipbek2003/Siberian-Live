import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const { getTotalItems } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const cartItemsCount = getTotalItems();

  const handleLogout = () => {
    logout();
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsRegisterModalOpen(false);
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
    setIsLoginModalOpen(false);
  };

  const closeModals = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
  };

  const switchToRegister = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const switchToLogin = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SW</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Siberian Wellness</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <motion.div whileHover={{ y: -2 }}>
                <Link to="/" className="text-gray-700 hover:text-emerald-600 transition-colors">
                  Главная
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }}>
                <Link to="/catalog" className="text-gray-700 hover:text-emerald-600 transition-colors">
                  Каталог
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }}>
                <Link to="/about" className="text-gray-700 hover:text-emerald-600 transition-colors">
                  О компании
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }}>
                <Link to="/business" className="text-gray-700 hover:text-emerald-600 transition-colors">
                  Бизнес
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }}>
                <Link to="/contacts" className="text-gray-700 hover:text-emerald-600 transition-colors">
                  Контакты
                </Link>
              </motion.div>
            </nav>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              {/* Cart */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/cart" className="relative p-2 text-gray-700 hover:text-emerald-600 transition-colors">
                  <ShoppingCart className="h-6 w-6" />
                  {cartItemsCount > 0 && (
                    <motion.span
                      className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    >
                      {cartItemsCount}
                    </motion.span>
                  )}
                </Link>
              </motion.div>

              {/* Auth buttons */}
              {isAuthenticated ? (
                <motion.div
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="flex items-center space-x-2 text-gray-700"
                    whileHover={{ scale: 1.05 }}
                  >
                    <User className="h-5 w-5" />
                    <span className="hidden sm:block">{user?.first_name || 'Пользователь'}</span>
                  </motion.div>
                  <motion.button
                    onClick={handleLogout}
                    className="text-gray-700 hover:text-emerald-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Выйти
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    onClick={openLoginModal}
                    className="text-gray-700 hover:text-emerald-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Войти
                  </motion.button>
                  <motion.button
                    onClick={openRegisterModal}
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Регистрация
                  </motion.button>
                </motion.div>
              )}

              {/* Mobile menu button */}
              <motion.button
                className="md:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="md:hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="py-4 space-y-2 border-t border-gray-200">
                  <motion.div
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/"
                      className="block px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Главная
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/catalog"
                      className="block px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Каталог
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/about"
                      className="block px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      О компании
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/business"
                      className="block px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Бизнес
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/contacts"
                      className="block px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Контакты
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Modals */}
      <AnimatePresence>
        {isLoginModalOpen && (
          <LoginModal
            isOpen={isLoginModalOpen}
            onClose={closeModals}
            onSwitchToRegister={switchToRegister}
          />
        )}
        {isRegisterModalOpen && (
          <RegisterModal
            isOpen={isRegisterModalOpen}
            onClose={closeModals}
            onSwitchToLogin={switchToLogin}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;