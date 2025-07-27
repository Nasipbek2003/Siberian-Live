import React from 'react';
import { Award, Globe, Users, Heart, CheckCircle, Leaf, Factory, Microscope, Truck, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
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
              О компании Siberian Wellness
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-emerald-100"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              Лидер в области здорового образа жизни с 1996 года
            </motion.p>
            <motion.div 
              className="flex justify-center space-x-8 text-emerald-100"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div className="text-center" variants={fadeInUp}>
                <div className="text-3xl font-bold text-yellow-300">25+</div>
                <div>лет опыта</div>
              </motion.div>
              <motion.div className="text-center" variants={fadeInUp}>
                <div className="text-3xl font-bold text-yellow-300">25+</div>
                <div>стран мира</div>
              </motion.div>
              <motion.div className="text-center" variants={fadeInUp}>
                <div className="text-3xl font-bold text-yellow-300">200+</div>
                <div>продуктов</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={slideInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                variants={fadeInUp}
              >
                Наша история
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 mb-6"
                variants={fadeInUp}
              >
                Компания Siberian Wellness была основана в 1996 году в Новосибирске. 
                Наша миссия — создавать продукты для поддержания здорового образа жизни, 
                используя уникальные природные ресурсы Сибири.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600 mb-6"
                variants={fadeInUp}
              >
                За более чем 25 лет мы стали одной из ведущих компаний в области 
                здорового образа жизни, присутствуя в 25+ странах мира и объединяя 
                миллионы людей, которые заботятся о своем здоровье.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600"
                variants={fadeInUp}
              >
                Мы гордимся тем, что помогаем людям вести активный и здоровый образ жизни, 
                предоставляя качественные продукты на основе натуральных ингредиентов.
              </motion.p>
            </motion.div>
            <motion.div 
              className="relative"
              variants={slideInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.img
                src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Siberian nature"
                className="rounded-lg shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
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
              Миссия и ценности
            </h2>
            <p className="text-xl text-gray-600">
              Принципы, которыми мы руководствуемся в своей работе
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
                className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Heart className="h-8 w-8 text-emerald-600" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">Забота о здоровье</h3>
              <p className="text-gray-600">
                Создаем продукты для поддержания здорового образа жизни, используя 
                натуральные ингредиенты и научные разработки
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
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">Качество и безопасность</h3>
              <p className="text-gray-600">
                Строгий контроль качества на всех этапах производства, 
                соответствие международным стандартам
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
              <h3 className="text-xl font-semibold mb-4">Сообщество</h3>
              <p className="text-gray-600">
                Объединяем людей, которые стремятся к здоровому образу жизни 
                и хотят помочь другим достичь своих целей
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Достижения в цифрах
            </h2>
            <p className="text-xl text-emerald-100">
              Результаты, которыми мы гордимся
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-4xl font-bold text-yellow-300 mb-2">25+</div>
              <div className="text-emerald-100">лет на рынке</div>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-4xl font-bold text-yellow-300 mb-2">25+</div>
              <div className="text-emerald-100">стран присутствия</div>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-4xl font-bold text-yellow-300 mb-2">200+</div>
              <div className="text-emerald-100">уникальных продуктов</div>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-4xl font-bold text-yellow-300 mb-2">1M+</div>
              <div className="text-emerald-100">довольных клиентов</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Production Process */}
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
              Производственный процесс
            </h2>
            <p className="text-xl text-gray-600">
              От сырья до готового продукта — полный контроль качества
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
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
                <Leaf className="h-8 w-8 text-emerald-600" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">Сбор сырья</h3>
              <p className="text-gray-600">
                Сбор растений в экологически чистых районах Сибири в оптимальное время
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
                <Factory className="h-8 w-8 text-emerald-600" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">Производство</h3>
              <p className="text-gray-600">
                Современное оборудование и технологии для создания качественных продуктов
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
                <Microscope className="h-8 w-8 text-emerald-600" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">Контроль качества</h3>
              <p className="text-gray-600">
                Многоступенчатый контроль качества в собственной лаборатории
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
                <Truck className="h-8 w-8 text-emerald-600" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">Доставка</h3>
              <p className="text-gray-600">
                Надежная система логистики для доставки продуктов по всему миру
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certificates */}
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
              Сертификаты и награды
            </h2>
            <p className="text-xl text-gray-600">
              Признание качества нашей продукции международными организациями
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
              className="bg-gray-50 rounded-lg shadow-md p-8 text-center"
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
              <h3 className="text-xl font-semibold mb-4">ISO 9001:2015</h3>
              <p className="text-gray-600">
                Международный стандарт системы менеджмента качества
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 rounded-lg shadow-md p-8 text-center"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Shield className="h-8 w-8 text-emerald-600" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">GMP</h3>
              <p className="text-gray-600">
                Надлежащая производственная практика для фармацевтической продукции
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 rounded-lg shadow-md p-8 text-center"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">HACCP</h3>
              <p className="text-gray-600">
                Система анализа опасных факторов и критических контрольных точек
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Research & Development */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={slideInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                variants={fadeInUp}
              >
                Научные исследования и разработки
              </motion.h2>
              <motion.p 
                className="text-lg text-emerald-100 mb-6"
                variants={fadeInUp}
              >
                Собственный научно-исследовательский центр и сотрудничество с ведущими 
                научными институтами России и мира.
              </motion.p>
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
              >
                <motion.div 
                  className="flex items-start"
                  variants={fadeInUp}
                >
                  <CheckCircle className="h-6 w-6 text-yellow-300 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Собственная лаборатория</h4>
                    <p className="text-emerald-100">Современное оборудование для исследований и разработок</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  variants={fadeInUp}
                >
                  <CheckCircle className="h-6 w-6 text-yellow-300 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Сотрудничество с НИИ</h4>
                    <p className="text-emerald-100">Партнерство с ведущими научными институтами</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  variants={fadeInUp}
                >
                  <CheckCircle className="h-6 w-6 text-yellow-300 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Клинические исследования</h4>
                    <p className="text-emerald-100">Проведение клинических испытаний эффективности продуктов</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative"
              variants={slideInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.img
                src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Research laboratory"
                className="rounded-lg shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Globe className="h-10 w-10 text-emerald-600" />
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              Международное присутствие
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              Наши продукты доступны в 25+ странах мира
            </motion.p>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {['Россия', 'Казахстан', 'Беларусь', 'Украина', 'Узбекистан', 'Киргизия', 'Латвия', 'Литва', 'Эстония', 'Польша', 'Чехия', 'Словакия', 'Венгрия', 'Румыния', 'Болгария'].map((country, index) => (
                <motion.div
                  key={country}
                  className="bg-gray-50 p-4 rounded-lg"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, backgroundColor: '#f0fdf4' }}
                  transition={{ duration: 0.3 }}
                >
                  {country}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p 
            className="text-sm text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            *Продукты не являются лекарственными средствами. Перед применением проконсультируйтесь со специалистом.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default About;