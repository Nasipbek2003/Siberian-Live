import React, { useState } from 'react';
import { TrendingUp, Users, Award, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import { teamMembers } from '../data/team';
import { motion } from 'framer-motion';

const Business: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    experience: '',
    motivation: ''
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
              Присоединяйтесь к нашей команде!
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-emerald-100"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              Начните зарабатывать с Siberian Wellness уже сегодня
            </motion.p>
            <motion.div 
              className="flex justify-center space-x-8 text-center"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeInUp}>
                <div className="text-3xl font-bold text-yellow-300">25+</div>
                <div className="text-emerald-100">лет на рынке</div>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <div className="text-3xl font-bold text-yellow-300">500K+</div>
                <div className="text-emerald-100">довольных клиентов</div>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <div className="text-3xl font-bold text-yellow-300">30+</div>
                <div className="text-emerald-100">стран присутствия</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Как это работает
            </h2>
            <p className="text-xl text-gray-600">
              Простые шаги к финансовой свободе
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
              <motion.div 
                className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-2xl font-bold text-emerald-600">1</span>
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">Регистрация</h3>
              <p className="text-gray-600">
                Заполните форму и присоединитесь к нашей команде партнеров
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">Обучение</h3>
              <p className="text-gray-600">
                Получите персональное обучение от опытных наставников
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-2xl font-bold text-emerald-600">3</span>
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">Заработок</h3>
              <p className="text-gray-600">
                Начните продавать продукты и развивать свою команду
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
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
              Преимущества партнерства
            </h2>
            <p className="text-xl text-gray-600">
              Почему стоит выбрать Siberian Wellness
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
              <motion.div 
                className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">Высокий доход</h3>
              <p className="text-gray-600">
                Возможность зарабатывать от 50,000 до 500,000 рублей в месяц
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Users className="h-8 w-8 text-emerald-600" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">Команда поддержки</h3>
              <p className="text-gray-600">
                Опытные наставники помогут вам достичь успеха
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Award className="h-8 w-8 text-emerald-600" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">Качественные продукты</h3>
              <p className="text-gray-600">
                Продавайте только проверенные и сертифицированные товары
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <DollarSign className="h-8 w-8 text-emerald-600" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">Гибкий график</h3>
              <p className="text-gray-600">
                Работайте в удобное для вас время
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Истории успеха
            </h2>
            <p className="text-xl text-gray-600">
              Наши партнеры делятся своими достижениями
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {teamMembers.slice(0, 3).map((member) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-lg shadow-md p-6 text-center"
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                                 <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                 <p className="text-emerald-600 mb-4">{member.level}</p>
                 <p className="text-gray-600 mb-4">{member.quote}</p>
                 <div className="text-2xl font-bold text-emerald-600">
                   {member.achievement}
                 </div>
                <div className="text-sm text-gray-500">доход в месяц</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Готовы начать?
            </h2>
            <p className="text-xl text-emerald-100">
              Заполните форму и мы свяжемся с вами в течение 24 часов
            </p>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp}>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Имя и Фамилия
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  required
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  required
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  required
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label htmlFor="city" className="block text-sm font-medium mb-2">
                  Город
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  required
                />
              </motion.div>
            </div>

            <motion.div variants={fadeInUp}>
              <label htmlFor="experience" className="block text-sm font-medium mb-2">
                Опыт в продажах
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                required
              >
                <option value="">Выберите опыт</option>
                <option value="none">Нет опыта</option>
                <option value="1-2">1-2 года</option>
                <option value="3-5">3-5 лет</option>
                <option value="5+">Более 5 лет</option>
              </select>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label htmlFor="motivation" className="block text-sm font-medium mb-2">
                Почему хотите присоединиться к нам?
              </label>
              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                required
              />
            </motion.div>

            <motion.div 
              className="text-center"
              variants={fadeInUp}
            >
              <motion.button
                type="submit"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Отправить заявку
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Business;