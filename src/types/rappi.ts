// src/types/rappi.ts

export interface Restaurant {
  id: number;
  name: string;
  rating: number;
  deliveryTime: string;
  logo: string;
  categories: string[];
  deliveryFee: number;
  minOrder: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Address {
  id: number;
  name: string;
  address: string;
  details?: string;
  coordinates: Coordinates;
}
// Añadir estas funciones type guard en src/types/rappi.ts
export function isCreditCardPayment(method: PaymentMethod): method is PaymentMethod & {
  details: { number: string; brand: string; expiry: string }
} {
  return method.type === 'credit_card';
}

export function isCashPayment(method: PaymentMethod): method is PaymentMethod & {
  details: { description: string }
} {
  return method.type === 'cash';
}

export function isBankTransferPayment(method: PaymentMethod): method is PaymentMethod & {
  details: { account: string; bank: string }
} {
  return method.type === 'bank_transfer';
}

export function isDigitalWalletPayment(method: PaymentMethod): method is PaymentMethod & {
  details: { provider: string; balance: number }
} {
  return method.type === 'digital_wallet';
}

export interface PaymentMethod {
  id: number;
  name: string;
  type: 'credit_card' | 'cash' | 'bank_transfer' | 'digital_wallet';
  details:
    | { number: string; brand: string; expiry: string } // para credit_card
    | { description: string } // para cash
    | { account: string; bank: string } // para bank_transfer
    | { provider: string; balance: number }; // para digital_wallet
}

export interface PromoCode {
  code: string;
  discount: number;
  freeShipping?: boolean;
  description: string;
}

export interface Order {
  id: number;
  restaurantId: number;
  items: CartItem[];
  address: Address;
  paymentMethod: PaymentMethod;
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  promoCodeApplied?: string;
  status: 'processing' | 'confirmed' | 'preparing' | 'onWay' | 'delivered';
  createdAt: Date;
  estimatedDeliveryTime?: Date;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  type: 'new' | 'regular' | 'premium';
  orderCount: number;
  loyaltyPoints: number;
}

export interface TestCase {
  test: number;
  paymentMethod: string;
  deliveryArea: string;
  accountType: string;
  orderValue: string;
}

export interface TestResult{
  test: number;
  freeShipping: boolean;
  discount: number;
  deliveryFee: number;
  result: string;
  paymentMethod?: string;
  deliveryArea?: string;
  accountType?: string;
  orderValue?: string;
}

export interface DecisionTableRow {
  id: number;
  accountType: string;
  orderValue: string;
  result: string;
}

export type OrderStatus = 'processing' | 'confirmed' | 'preparing' | 'onWay' | 'delivered';
