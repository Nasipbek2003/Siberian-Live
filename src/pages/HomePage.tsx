import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Globe, Heart, Users, Play } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import team from '../assets/team.png';

const HomePage: React.FC = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Здоровье и Успех с <span className="text-yellow-300">Siberian Wellness</span>
              </h1>
              <p className="text-xl mb-8 text-emerald-100">
                Откройте для себя мир натуральных продуктов для здоровья и красоты. 
                Присоединяйтесь к нашей команде успешных партнеров!
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/catalog"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  Перейти в магазин
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/business"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-colors"
                >
                  Хочу в команду
                  <Users className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={team}
                alt="Team Achievement"
                className="w-full h-auto object-cover"
                style={{ background: 'transparent', borderRadius: 0, boxShadow: 'none' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Более 25 лет на рынке, миллионы довольных клиентов по всему миру
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">100% Натуральные продукты</h3>
              <p className="text-gray-600">
                Только природные ингредиенты, выращенные в экологически чистых районах Сибири
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Международный бренд</h3>
              <p className="text-gray-600">
                Присутствие в 25+ странах мира, доверие миллионов клиентов
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Сертификаты качества</h3>
              <p className="text-gray-600">
                Все продукты сертифицированы по международным стандартам ISO и GMP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Популярные продукты
            </h2>
            <p className="text-xl text-gray-600">
              Откройте для себя наши лучшие решения для здоровья и красоты
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/catalog"
              className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Смотреть все продукты
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Video Presentation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Узнайте больше о нашей миссии
            </h2>
            <p className="text-xl text-gray-600">
              Посмотрите видео-презентацию бренда Siberian Wellness
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
              <button className="bg-emerald-600 text-white w-20 h-20 rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors">
                <Play className="h-8 w-8 ml-1" />
              </button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы изменить свою жизнь?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Присоединяйтесь к тысячам успешных партнеров Siberian Wellness
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/business"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Начать бизнес
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/catalog"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Купить продукты
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;