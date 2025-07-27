import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Анимации
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              Контакты
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-emerald-100"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              Мы всегда готовы помочь и ответить на ваши вопросы
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white rounded-lg shadow-md p-8 text-center"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Phone className="h-8 w-8 text-emerald-600" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">Телефон</h3>
              <p className="text-gray-600">+7 (800) 123-45-67</p>
              <p className="text-gray-600">+7 (495) 987-65-43</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-md p-8 text-center"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Mail className="h-8 w-8 text-emerald-600" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <p className="text-gray-600">info@siberian.com</p>
              <p className="text-gray-600">support@siberian.com</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-md p-8 text-center"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <MessageCircle className="h-8 w-8 text-emerald-600" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">Мессенджеры</h3>
              <p className="text-gray-600">Telegram: @siberian_wellness</p>
              <p className="text-gray-600">WhatsApp: +7 (800) 123-45-67</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-md p-8 text-center"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <MapPin className="h-8 w-8 text-emerald-600" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">Адрес</h3>
              <p className="text-gray-600">г. Москва</p>
              <p className="text-gray-600">ул. Тверская, 1</p>
            </motion.div>
          </motion.div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              className="bg-white rounded-lg shadow-md p-8"
              variants={slideInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-2xl font-bold text-gray-900 mb-6"
                variants={fadeInUp}
              >
                Напишите нам
              </motion.h2>
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                variants={staggerContainer}
              >
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  variants={fadeInUp}
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Имя *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </motion.div>

                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  variants={fadeInUp}
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Тема *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Расскажите о вашем вопросе..."
                  />
                </motion.div>

                <motion.div 
                  className="text-center"
                  variants={fadeInUp}
                >
                  <motion.button
                    type="submit"
                    className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Отправить сообщение
                    <Send className="ml-2 h-5 w-5" />
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>

            {/* Map */}
            <motion.div 
              className="bg-white rounded-lg shadow-md p-8"
              variants={slideInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-2xl font-bold text-gray-900 mb-6"
                variants={fadeInUp}
              >
                Наш офис
              </motion.h2>
              <motion.div 
                className="bg-gray-200 rounded-lg h-64 mb-6 flex items-center justify-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Интерактивная карта</p>
                  <p className="text-sm text-gray-500">г. Москва, ул. Тверская, 1</p>
                </div>
              </motion.div>
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
              >
                <motion.div 
                  className="flex items-start"
                  variants={fadeInUp}
                >
                  <MapPin className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Адрес</h4>
                    <p className="text-gray-600">г. Москва, ул. Тверская, 1</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  variants={fadeInUp}
                >
                  <Phone className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Телефон</h4>
                    <p className="text-gray-600">+7 (800) 123-45-67</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  variants={fadeInUp}
                >
                  <Mail className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@siberian.com</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Время работы
            </h2>
            <p className="text-xl text-gray-600">
              Мы работаем для вас каждый день
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-emerald-600">ПН-ПТ</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Будние дни</h3>
              <p className="text-gray-600">9:00 - 18:00</p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-emerald-600">СБ</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Суббота</h3>
              <p className="text-gray-600">10:00 - 16:00</p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-emerald-600">ВС</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Воскресенье</h3>
              <p className="text-gray-600">Выходной</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/78001234567"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default Contacts;