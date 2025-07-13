import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Heart, Share2 } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Продукт не найден</h1>
          <Link
            to="/catalog"
            className="text-emerald-600 hover:text-emerald-700 flex items-center justify-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Вернуться в каталог
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            to="/catalog"
            className="text-emerald-600 hover:text-emerald-700 flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Вернуться в каталог
          </Link>
        </nav>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="p-8">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="p-8">
              <div className="mb-4">
                <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">({product.rating} из 5)</span>
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-emerald-600">
                  {product.price.toLocaleString()} ₽
                </span>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                    product.inStock
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>{product.inStock ? 'В корзину' : 'Нет в наличии'}</span>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4 mb-8">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors">
                  <Heart className="h-5 w-5" />
                  <span>В избранное</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors">
                  <Share2 className="h-5 w-5" />
                  <span>Поделиться</span>
                </button>
              </div>

              {/* Stock Status */}
              <div className="text-sm text-gray-600">
                {product.inStock ? (
                  <span className="text-emerald-600">✓ В наличии</span>
                ) : (
                  <span className="text-red-600">✗ Нет в наличии</span>
                )}
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="border-t border-gray-200">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('description')}
                className={`px-8 py-4 font-medium transition-colors ${
                  activeTab === 'description'
                    ? 'border-b-2 border-emerald-600 text-emerald-600'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                Описание
              </button>
              <button
                onClick={() => setActiveTab('ingredients')}
                className={`px-8 py-4 font-medium transition-colors ${
                  activeTab === 'ingredients'
                    ? 'border-b-2 border-emerald-600 text-emerald-600'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                Состав
              </button>
              <button
                onClick={() => setActiveTab('usage')}
                className={`px-8 py-4 font-medium transition-colors ${
                  activeTab === 'usage'
                    ? 'border-b-2 border-emerald-600 text-emerald-600'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                Применение
              </button>
            </div>

            <div className="p-8">
              {activeTab === 'description' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Описание продукта</h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>
              )}

              {activeTab === 'ingredients' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Состав</h3>
                  <ul className="space-y-2">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'usage' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Способ применения</h3>
                  <p className="text-gray-600 leading-relaxed">{product.usage}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;