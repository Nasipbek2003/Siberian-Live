import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';

const OrderSuccess: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-emerald-600" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Заказ успешно оформлен!
        </h1>
        
        <p className="text-gray-600 mb-6">
          Спасибо за ваш заказ. Мы свяжемся с вами в ближайшее время для подтверждения.
        </p>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-600">
            Номер заказа: <span className="font-semibold">#SW-{Date.now().toString().slice(-6)}</span>
          </p>
        </div>
        
        <div className="flex flex-col space-y-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <Home className="h-5 w-5 mr-2" />
            На главную
          </Link>
          
          <Link
            to="/catalog"
            className="inline-flex items-center justify-center px-6 py-3 border border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
          >
            Продолжить покупки
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;