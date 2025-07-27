import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Heart className="h-5 w-5 text-gray-400 hover:text-red-500 transition-colors" />
        </motion.div>
        {!product.inStock && (
          <motion.div
            className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            Нет в наличии
          </motion.div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-emerald-600 font-medium">{product.category}</span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
          </div>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <motion.h3 
            className="text-lg font-semibold text-gray-900 mb-2 hover:text-emerald-600 transition-colors"
            whileHover={{ color: '#059669' }}
          >
            {product.name}
          </motion.h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">{product.price.toLocaleString()} ₽</span>
          <motion.button
            className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
              product.inStock
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            whileHover={product.inStock ? { scale: 1.05 } : {}}
            whileTap={product.inStock ? { scale: 0.95 } : {}}
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {product.inStock ? 'В корзину' : 'Нет в наличии'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;