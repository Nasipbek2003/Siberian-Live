import React, { useState } from 'react';
import { TrendingUp, Users, Award, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import { teamMembers } from '../data/team';

const Business: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    experience: '',
    motivation: ''
  });

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
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Присоединяйтесь к нашей команде!
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100">
              Начните зарабатывать с Siberian Wellness уже сегодня
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-300">25+</div>
                <div className="text-emerald-100">лет на рынке</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">500K+</div>
                <div className="text-emerald-100">довольных клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">30+</div>
                <div className="text-emerald-100">стран присутствия</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Как это работает
            </h2>
            <p className="text-xl text-gray-600">
              Простые шаги к финансовой свободе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-emerald-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Регистрация</h3>
              <p className="text-gray-600">
                Заполните форму и присоединитесь к нашей команде партнеров
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Обучение</h3>
              <p className="text-gray-600">
                Получите персональное обучение от опытных наставников
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-emerald-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Заработок</h3>
              <p className="text-gray-600">
                Начните продавать продукты и развивать свою команду
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Преимущества партнерства
            </h2>
            <p className="text-xl text-gray-600">
              Почему тысячи людей выбирают нас для своего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Растущий рынок</h3>
              <p className="text-gray-600">Рынок здоровья растет на 15% в год</p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Команда поддержки</h3>
              <p className="text-gray-600">Персональный наставник для каждого</p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Качество продукции</h3>
              <p className="text-gray-600">Сертификаты ISO и GMP</p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Высокие доходы</h3>
              <p className="text-gray-600">До 50% от продаж команды</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Истории успеха
            </h2>
            <p className="text-xl text-gray-600">
              Узнайте, как наши партнеры достигли финансовой свободы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.slice(0, 2).map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-emerald-600 font-medium">{member.level}</p>
                    <p className="text-lg font-bold text-gray-900">{member.achievement}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{member.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Income Potential */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Потенциал дохода
            </h2>
            <p className="text-xl text-gray-600">
              Ваш доход зависит только от ваших усилий
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white p-8 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">Бронза</div>
              <div className="text-2xl font-semibold mb-4">30-60K ₽</div>
              <ul className="text-left space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Персональные продажи
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Базовая поддержка
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-400 to-gray-600 text-white p-8 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">Серебро</div>
              <div className="text-2xl font-semibold mb-4">60-120K ₽</div>
              <ul className="text-left space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Командные бонусы
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Обучение команды
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 text-white p-8 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">Золото</div>
              <div className="text-2xl font-semibold mb-4">120-250K ₽</div>
              <ul className="text-left space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Лидерские бонусы
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Поездки и награды
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-600 to-gray-800 text-white p-8 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">Платина</div>
              <div className="text-2xl font-semibold mb-4">250K+ ₽</div>
              <ul className="text-left space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Максимальные бонусы
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  VIP программы
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Готовы начать?
            </h2>
            <p className="text-xl text-emerald-100">
              Заполните форму и мы свяжемся с вами в течение 24 часов
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 text-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Имя и фамилия *
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Город *
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Опыт в продажах
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="">Выберите опыт</option>
                  <option value="none">Нет опыта</option>
                  <option value="some">Есть опыт</option>
                  <option value="professional">Профессиональный опыт</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Что вас мотивирует?
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Расскажите о своих целях..."
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Присоединиться к команде
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Business;