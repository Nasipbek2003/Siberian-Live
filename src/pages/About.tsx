import React from 'react';
import { Award, Globe, Users, Heart, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              О компании Siberian Wellness
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100">
              Более 25 лет заботимся о здоровье людей по всему миру
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Наша история
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Siberian Wellness была основана в 1996 году с простой, но амбициозной миссией: 
                создавать натуральные продукты для здоровья и красоты, используя уникальные 
                сибирские травы и растения.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                За четверть века мы выросли из небольшой компании в международную корпорацию, 
                присутствующую в 30+ странах мира и объединяющую миллионы довольных клиентов.
              </p>
              <p className="text-lg text-gray-600">
                Наша философия основана на принципах натуральности, качества и заботы о людях. 
                Каждый продукт создается с любовью и проходит строгий контроль качества.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Siberian nature"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Миссия и ценности
            </h2>
            <p className="text-xl text-gray-600">
              Принципы, которыми мы руководствуемся в своей работе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Забота о здоровье</h3>
              <p className="text-gray-600">
                Создаем продукты, которые действительно помогают людям быть здоровыми и красивыми
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Качество</h3>
              <p className="text-gray-600">
                Используем только натуральные ингредиенты и строго контролируем каждый этап производства
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Сообщество</h3>
              <p className="text-gray-600">
                Объединяем людей, которые стремятся к здоровому образу жизни и финансовой свободе
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Достижения в цифрах
            </h2>
            <p className="text-xl text-emerald-100">
              Результаты, которыми мы гордимся
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">25+</div>
              <div className="text-emerald-100">лет на рынке</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">500K+</div>
              <div className="text-emerald-100">довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">30+</div>
              <div className="text-emerald-100">стран присутствия</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">200+</div>
              <div className="text-emerald-100">уникальных продуктов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Сертификаты и награды
            </h2>
            <p className="text-xl text-gray-600">
              Признание качества нашей продукции
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">ISO 9001</h3>
              <p className="text-gray-600">
                Международный стандарт качества менеджмента
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">GMP</h3>
              <p className="text-gray-600">
                Надлежащая производственная практика
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">HACCP</h3>
              <p className="text-gray-600">
                Система контроля критических точек
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Production */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Production facility"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Производство
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Наш современный производственный комплекс оснащен новейшим оборудованием 
                и использует передовые технологии для создания продуктов высочайшего качества.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Экологически чистое сырье</h4>
                    <p className="text-gray-600">Собираем растения в экологически чистых районах Сибири</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Строгий контроль качества</h4>
                    <p className="text-gray-600">Каждая партия проходит многоступенчатый контроль</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Научные исследования</h4>
                    <p className="text-gray-600">Собственная лаборатория и сотрудничество с НИИ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="h-10 w-10 text-emerald-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Международное присутствие
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Наши продукты доступны в 30+ странах мира
            </p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
              <div>Россия</div>
              <div>Казахстан</div>
              <div>Беларусь</div>
              <div>Украина</div>
              <div>Узбекистан</div>
              <div>Киргизия</div>
              <div>Латвия</div>
              <div>Литва</div>
              <div>Эстония</div>
              <div>Польша</div>
              <div>Чехия</div>
              <div>Словакия</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;