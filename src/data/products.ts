import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Эпам-7 Иммунитет',
    description: 'Натуральный комплекс для укрепления иммунитета',
    price: 2890,
    image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Иммунитет',
    goal: 'Укрепление иммунитета',
    rating: 4.8,
    inStock: true,
    ingredients: ['Эхинацея', 'Женьшень', 'Лимонник', 'Элеутерококк'],
    usage: 'По 1 капсуле 2 раза в день во время еды'
  },
  {
    id: '2',
    name: 'Адаптовит Энергия',
    description: 'Комплекс для повышения энергии и выносливости',
    price: 3150,
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Энергия',
    goal: 'Повышение энергии',
    rating: 4.9,
    inStock: true,
    ingredients: ['Адаптогены', 'Витамины группы B', 'Коэнзим Q10'],
    usage: 'По 1 капсуле утром натощак'
  },
  {
    id: '3',
    name: 'Новомин Красота',
    description: 'Комплекс для здоровья кожи, волос и ногтей',
    price: 2750,
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Красота',
    goal: 'Здоровье кожи',
    rating: 4.7,
    inStock: true,
    ingredients: ['Коллаген', 'Гиалуроновая кислота', 'Витамин C', 'Биотин'],
    usage: 'По 2 капсулы в день после еды'
  },
  {
    id: '4',
    name: 'Фиточай Детокс',
    description: 'Натуральный травяной чай для очищения организма',
    price: 1450,
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Очищение',
    goal: 'Детоксикация',
    rating: 4.6,
    inStock: true,
    ingredients: ['Зеленый чай', 'Имбирь', 'Лимон', 'Мята'],
    usage: 'Заваривать 1 пакетик на стакан кипятка, настаивать 5 минут'
  },
  {
    id: '5',
    name: 'Омега-3 Премиум',
    description: 'Высококачественные омега-3 жирные кислоты',
    price: 3890,
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Здоровье',
    goal: 'Поддержка сердца',
    rating: 4.9,
    inStock: true,
    ingredients: ['EPA', 'DHA', 'Витамин E'],
    usage: 'По 1 капсуле 2 раза в день во время еды'
  },
  {
    id: '6',
    name: 'Магний B6 Форте',
    description: 'Комплекс для нервной системы и мышц',
    price: 1890,
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Здоровье',
    goal: 'Поддержка нервной системы',
    rating: 4.5,
    inStock: false,
    ingredients: ['Магний', 'Витамин B6', 'Таурин'],
    usage: 'По 1 таблетке 3 раза в день'
  }
];