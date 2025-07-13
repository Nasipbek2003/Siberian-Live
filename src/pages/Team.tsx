import React from 'react';
import { Award, TrendingUp, Users, Heart } from 'lucide-react';
import { teamMembers } from '../data/team';

const Team: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Наша команда
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100">
              Познакомьтесь с успешными партнерами Siberian Wellness
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Истории успеха
            </h2>
            <p className="text-xl text-gray-600">
              Люди, которые изменили свою жизнь благодаря Siberian Wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                    <div className="flex items-center space-x-2">
                      <Award className="h-5 w-5 text-yellow-400" />
                      <span className="text-sm font-medium text-emerald-600">{member.level}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-emerald-600">{member.achievement}</span>
                    <span className="text-gray-600 ml-2">ежемесячно</span>
                  </div>
                  <p className="text-gray-600 italic mb-6">"{member.quote}"</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>500+ клиентов</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span>3 года в компании</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Levels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Уровни достижений
            </h2>
            <p className="text-xl text-gray-600">
              Система карьерного роста для всех партнеров
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white p-8 rounded-lg mb-4">
                <div className="text-3xl font-bold mb-2">Бронза</div>
                <div className="text-xl">30-60K ₽</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Начинающий партнер</h3>
              <p className="text-gray-600">Первые шаги в бизнесе</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-gray-400 to-gray-600 text-white p-8 rounded-lg mb-4">
                <div className="text-3xl font-bold mb-2">Серебро</div>
                <div className="text-xl">60-120K ₽</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Активный партнер</h3>
              <p className="text-gray-600">Развитие собственной команды</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 text-white p-8 rounded-lg mb-4">
                <div className="text-3xl font-bold mb-2">Золото</div>
                <div className="text-xl">120-250K ₽</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Успешный лидер</h3>
              <p className="text-gray-600">Наставничество и развитие</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-gray-600 to-gray-800 text-white p-8 rounded-lg mb-4">
                <div className="text-3xl font-bold mb-2">Платина</div>
                <div className="text-xl">250K+ ₽</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Топ-лидер</h3>
              <p className="text-gray-600">Максимальные возможности</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support System */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Обучение и поддержка
            </h2>
            <p className="text-xl text-gray-600">
              Мы заботимся о развитии каждого партнера
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Персональный наставник</h3>
              <p className="text-gray-600">
                Каждый новый партнер получает опытного наставника для успешного старта
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Регулярные тренинги</h3>
              <p className="text-gray-600">
                Еженедельные онлайн-тренинги по продажам и развитию команды
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Маркетинговая поддержка</h3>
              <p className="text-gray-600">
                Готовые материалы для продвижения и привлечения клиентов
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы стать частью нашей команды?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Присоединяйтесь к успешным партнерам Siberian Wellness
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/business"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Начать бизнес
            </a>
            <a
              href="/contacts"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Связаться с нами
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;