import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

// Создаем axios-экземпляр для аутентификации
export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Важно для работы с сессиями Django
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface ApiProduct {
  id: number;
  name: string;
  description: string;
  price: string;
  image?: string;
  category: {
    id: number;
    name: string;
  };
  stock: number;
  is_active: boolean;
  rating: string;
  average_rating: string;
  created_at: string;
}

export interface ApiCategory {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface ApiOrder {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postal_code: string;
  country: string;
  status: string;
  total_amount: string;
  created_at: string;
  updated_at: string;
}

class ApiService {
  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    return response.json();
  }

  // Products
  async getProducts(): Promise<{ results: ApiProduct[] }> {
    return this.request<{ results: ApiProduct[] }>('/products/');
  }

  async getProduct(id: number): Promise<ApiProduct> {
    return this.request<ApiProduct>(`/products/${id}/`);
  }

  async getFeaturedProducts(): Promise<{ results: ApiProduct[] }> {
    return this.request<{ results: ApiProduct[] }>('/products/featured/');
  }

  // Categories
  async getCategories(): Promise<{ results: ApiCategory[] }> {
    return this.request<{ results: ApiCategory[] }>('/products/categories/');
  }

  async getCategoryProducts(categoryId: number): Promise<{ results: ApiProduct[] }> {
    return this.request<{ results: ApiProduct[] }>(`/products/categories/${categoryId}/products/`);
  }

  // Orders
  async createOrder(orderData: any): Promise<ApiOrder> {
    return this.request<ApiOrder>('/orders/', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  }

  async getOrders(): Promise<{ results: ApiOrder[] }> {
    return this.request<{ results: ApiOrder[] }>('/orders/');
  }

  async getOrder(id: number): Promise<ApiOrder> {
    return this.request<ApiOrder>(`/orders/${id}/`);
  }
}

export const apiService = new ApiService(); 