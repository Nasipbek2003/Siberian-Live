export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  goal: string;
  rating: number;
  inStock: boolean;
  ingredients: string[];
  usage: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface TeamMember {
  id: string;
  name: string;
  level: string;
  achievement: string;
  image: string;
  quote: string;
}

export interface OrderForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  paymentMethod: string;
  deliveryMethod: string;
}