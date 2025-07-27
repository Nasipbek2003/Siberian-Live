import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-emerald-400" />
              <span className="text-lg font-bold">Siberian Wellness</span>
            </div>
            <p className="text-gray-400 text-sm">
              Натуральные продукты для здоровья и красоты. Присоединяйтесь к нашей команде успешных партнеров!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/catalog" className="text-gray-400 hover:text-emerald-400 transition-colors">Каталог</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">О компании</Link></li>
              <li><Link to="/business" className="text-gray-400 hover:text-emerald-400 transition-colors">Бизнес</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-emerald-400 transition-colors">Команда</Link></li>
              <li><Link to="/contacts" className="text-gray-400 hover:text-emerald-400 transition-colors">Контакты</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Продукция</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Иммунитет</span></li>
              <li><span className="text-gray-400">Энергия</span></li>
              <li><span className="text-gray-400">Красота</span></li>
              <li><span className="text-gray-400">Здоровье</span></li>
              <li><span className="text-gray-400">Очищение</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span className="text-gray-400">+996 (554) 85 44 89 </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-emerald-400" />
                <span className="text-gray-400">abdrahmanovnasi.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span className="text-gray-400">Кыргызстан, Бишкек</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Siberian Wellness. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;