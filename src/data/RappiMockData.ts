// src/data/RappiMockData.ts
import { Restaurant, Product, Address, PaymentMethod } from "@/types/rappi";

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Super Fresh Market",
    rating: 4.8,
    deliveryTime: "15-30 min",
    logo: "🏪",
    categories: ["Frutas", "Verduras", "Carnes", "Lácteos", "Panadería"],
    deliveryFee: 2.5,
    minOrder: 10,
  },
  {
    id: 2,
    name: "Fast Food Heaven",
    rating: 4.5,
    deliveryTime: "20-35 min",
    logo: "🍔",
    categories: ["Hamburguesas", "Pizza", "Pollo", "Tacos", "Bebidas"],
    deliveryFee: 3.0,
    minOrder: 15,
  },
  {
    id: 3,
    name: "Healthy Corner",
    rating: 4.7,
    deliveryTime: "25-40 min",
    logo: "🥗",
    categories: ["Ensaladas", "Smoothies", "Bowls", "Snacks", "Orgánicos"],
    deliveryFee: 3.5,
    minOrder: 12,
  },
  {
    id: 4,
    name: "Sweet Treats",
    rating: 4.6,
    deliveryTime: "30-45 min",
    logo: "🧁",
    categories: ["Pasteles", "Helados", "Chocolates", "Galletas", "Postres"],
    deliveryFee: 2.8,
    minOrder: 8,
  },
];

export const products: Record<number, Record<string, Product[]>> = {
  1: {
    "Frutas": [
      { id: 101, name: "Manzana Roja", price: 1.5, image: "🍎", description: "Manzana fresca y jugosa", stock: 50 },
      { id: 102, name: "Plátano", price: 0.8, image: "🍌", description: "Plátano maduro y dulce", stock: 65 },
      { id: 103, name: "Naranja", price: 1.2, image: "🍊", description: "Naranja jugosa y refrescante", stock: 40 },
    ],
    "Verduras": [
      { id: 104, name: "Zanahoria", price: 0.9, image: "🥕", description: "Zanahoria fresca y crujiente", stock: 45 },
      { id: 105, name: "Brócoli", price: 2.1, image: "🥦", description: "Brócoli verde y nutritivo", stock: 30 },
      { id: 106, name: "Espinaca", price: 1.8, image: "🍃", description: "Espinaca fresca y saludable", stock: 25 },
    ],
    "Carnes": [
      { id: 107, name: "Pechuga de Pollo", price: 5.9, image: "🍗", description: "Pechuga de pollo fresca", stock: 20 },
      { id: 108, name: "Carne Molida", price: 6.5, image: "🥩", description: "Carne molida premium", stock: 15 },
      { id: 109, name: "Filete de Pescado", price: 7.8, image: "🐟", description: "Filete de pescado fresco del día", stock: 12 },
    ],
  },
  2: {
    "Hamburguesas": [
      { id: 201, name: "Hamburguesa Clásica", price: 8.9, image: "🍔", description: "Carne, lechuga, tomate, queso", stock: 25 },
      { id: 202, name: "Hamburguesa Doble", price: 11.5, image: "🍔", description: "Doble carne, doble queso", stock: 20 },
      { id: 203, name: "Hamburguesa Vegetariana", price: 9.2, image: "🥬", description: "Hamburguesa a base de plantas", stock: 15 },
    ],
    "Pizza": [
      { id: 204, name: "Pizza Margarita", price: 12.0, image: "🍕", description: "Tomate, queso mozzarella, albahaca", stock: 18 },
      { id: 205, name: "Pizza Pepperoni", price: 14.5, image: "🍕", description: "Pepperoni, queso, salsa de tomate", stock: 16 },
      { id: 206, name: "Pizza Hawaiana", price: 13.8, image: "🍕", description: "Jamón, piña, queso", stock: 14 },
    ],
    "Bebidas": [
      { id: 207, name: "Refresco Cola", price: 2.5, image: "🥤", description: "Refresco de cola 355ml", stock: 50 },
      { id: 208, name: "Agua Mineral", price: 1.8, image: "💧", description: "Agua mineral 500ml", stock: 60 },
      { id: 209, name: "Jugo Natural", price: 3.2, image: "🧃", description: "Jugo de naranja natural 300ml", stock: 30 },
    ],
  },
  3: {
    "Ensaladas": [
      { id: 301, name: "Ensalada César", price: 9.5, image: "🥗", description: "Lechuga, pollo, crutones, aderezo César", stock: 18 },
      { id: 302, name: "Ensalada Griega", price: 8.7, image: "🥗", description: "Tomate, pepino, aceitunas, queso feta", stock: 15 },
      { id: 303, name: "Bowl de Quinoa", price: 10.2, image: "🥣", description: "Quinoa, aguacate, verduras, aderezo", stock: 12 },
    ],
    "Smoothies": [
      { id: 304, name: "Smoothie Verde", price: 6.5, image: "🥤", description: "Espinaca, manzana, apio, jengibre", stock: 20 },
      { id: 305, name: "Smoothie de Frutas", price: 5.8, image: "🥤", description: "Fresa, plátano, naranja, yogurt", stock: 25 },
      { id: 306, name: "Smoothie Proteico", price: 7.2, image: "🥤", description: "Proteína, avena, plátano, canela", stock: 18 },
    ],
  },
  4: {
    "Pasteles": [
      { id: 401, name: "Pastel de Chocolate", price: 22.0, image: "🍰", description: "Pastel de chocolate con ganache", stock: 8 },
      { id: 402, name: "Cheesecake", price: 24.5, image: "🍰", description: "Cheesecake con salsa de frutos rojos", stock: 6 },
      { id: 403, name: "Tiramisú", price: 18.5, image: "🍮", description: "Postre italiano con café y mascarpone", stock: 10 },
    ],
    "Helados": [
      { id: 404, name: "Helado de Vainilla", price: 4.5, image: "🍦", description: "Helado cremoso de vainilla", stock: 15 },
      { id: 405, name: "Helado de Chocolate", price: 4.5, image: "🍦", description: "Helado rico en chocolate", stock: 15 },
      { id: 406, name: "Sorbete de Limón", price: 3.8, image: "🍧", description: "Sorbete refrescante de limón", stock: 12 },
    ],
  },
};

export const addresses: Address[] = [
  {
    id: 1,
    name: "Casa",
    address: "Calle Principal 123",
    details: "Apto 456",
    coordinates: { lat: 4.710989, lng: -74.072092 }
  },
  {
    id: 2,
    name: "Trabajo",
    address: "Av. Empresarial 789",
    details: "Edificio Torre Alta, Piso 10",
    coordinates: { lat: 4.698430, lng: -74.030067 }
  },
  {
    id: 3,
    name: "Gimnasio",
    address: "Calle Fitness 321",
    details: "Local 5",
    coordinates: { lat: 4.675142, lng: -74.048160 }
  },
];

export const paymentMethods: PaymentMethod[] = [
  {
    id: 1,
    name: "Tarjeta de Crédito",
    type: "credit_card",
    details: { number: "**** **** **** 5678", brand: "Visa", expiry: "12/26" }
  },
  {
    id: 2,
    name: "Efectivo",
    type: "cash",
    details: { description: "Pagar al repartidor" }
  },
  {
    id: 3,
    name: "Transferencia Bancaria",
    type: "bank_transfer",
    details: { account: "**** 8901", bank: "Banco Nacional" }
  },
  {
    id: 4,
    name: "Billetera Digital",
    type: "digital_wallet",
    details: { provider: "RappiPay", balance: 45.20 }
  }
];

export const promotionalCodes = [
  { code: "RAPPI10", discount: 0.1, description: "10% de descuento en tu pedido" },
  { code: "WELCOME", discount: 0.15, description: "15% de descuento para nuevos usuarios" },
  { code: "FREESHIP", discount: 0, freeShipping: true, description: "Envío gratis en tu pedido" },
  { code: "DISCOUNT20", discount: 0.2, description: "20% de descuento en tu pedido" }
];

// Tabla de decisión para envío gratuito
export const freeShippingDecisionTable = [
  { id: 1, accountType: "Nuevo", orderValue: "Bajo (<$15)", result: "No" },
  { id: 2, accountType: "Nuevo", orderValue: "Medio ($15-$30)", result: "No" },
  { id: 3, accountType: "Nuevo", orderValue: "Alto (>$30)", result: "Sí" },
  { id: 4, accountType: "Regular", orderValue: "Bajo (<$15)", result: "No" },
  { id: 5, accountType: "Regular", orderValue: "Medio ($15-$30)", result: "No" },
  { id: 6, accountType: "Regular", orderValue: "Alto (>$30)", result: "Sí" },
  { id: 7, accountType: "Premium", orderValue: "Bajo (<$15)", result: "No" },
  { id: 8, accountType: "Premium", orderValue: "Medio ($15-$30)", result: "Sí" },
  { id: 9, accountType: "Premium", orderValue: "Alto (>$30)", result: "Sí" }
];

// Arreglo ortogonal para pruebas L9(3^4)
export const orthogonalArrayTests = [
  { test: 1, paymentMethod: "Efectivo", deliveryArea: "Cercana", accountType: "Nuevo", orderValue: "Bajo" },
  { test: 2, paymentMethod: "Efectivo", deliveryArea: "Media", accountType: "Regular", orderValue: "Medio" },
  { test: 3, paymentMethod: "Efectivo", deliveryArea: "Lejana", accountType: "Premium", orderValue: "Alto" },
  { test: 4, paymentMethod: "Tarjeta", deliveryArea: "Cercana", accountType: "Regular", orderValue: "Alto" },
  { test: 5, paymentMethod: "Tarjeta", deliveryArea: "Media", accountType: "Premium", orderValue: "Bajo" },
  { test: 6, paymentMethod: "Tarjeta", deliveryArea: "Lejana", accountType: "Nuevo", orderValue: "Medio" },
  { test: 7, paymentMethod: "Digital", deliveryArea: "Cercana", accountType: "Premium", orderValue: "Medio" },
  { test: 8, paymentMethod: "Digital", deliveryArea: "Media", accountType: "Nuevo", orderValue: "Alto" },
  { test: 9, paymentMethod: "Digital", deliveryArea: "Lejana", accountType: "Regular", orderValue: "Bajo" }
];

// Resultados esperados para las pruebas ortogonales
export const orthogonalArrayResults = [
  { test: 1, paymentMethod: "Efectivo", deliveryArea: "Cercana", accountType: "Nuevo", orderValue: "Bajo", freeShipping: false, discount: 0, deliveryFee: 2.5, result: "Cobro estándar" },
  { test: 2, paymentMethod: "Efectivo", deliveryArea: "Media", accountType: "Regular", orderValue: "Medio", freeShipping: false, discount: 0, deliveryFee: 3.5, result: "Cobro estándar" },
  { test: 3, paymentMethod: "Efectivo", deliveryArea: "Lejana", accountType: "Premium", orderValue: "Alto", freeShipping: true, discount: 0.05, deliveryFee: 0, result: "Envío gratis y descuento premium" },
  { test: 4, paymentMethod: "Tarjeta", deliveryArea: "Cercana", accountType: "Regular", orderValue: "Alto", freeShipping: true, discount: 0, deliveryFee: 0, result: "Envío gratis por monto alto" },
  { test: 5, paymentMethod: "Tarjeta", deliveryArea: "Media", accountType: "Premium", orderValue: "Bajo", freeShipping: false, discount: 0.05, deliveryFee: 3.5, result: "Descuento premium" },
  { test: 6, paymentMethod: "Tarjeta", deliveryArea: "Lejana", accountType: "Nuevo", orderValue: "Medio", freeShipping: false, discount: 0, deliveryFee: 4.5, result: "Recargo por distancia" },
  { test: 7, paymentMethod: "Digital", deliveryArea: "Cercana", accountType: "Premium", orderValue: "Medio", freeShipping: true, discount: 0.05, deliveryFee: 0, result: "Envío gratis por usuario premium" },
  { test: 8, paymentMethod: "Digital", deliveryArea: "Media", accountType: "Nuevo", orderValue: "Alto", freeShipping: true, discount: 0, deliveryFee: 0, result: "Envío gratis por monto alto" },
  { test: 9, paymentMethod: "Digital", deliveryArea: "Lejana", accountType: "Regular", orderValue: "Bajo", freeShipping: false, discount: 0, deliveryFee: 4.5, result: "Recargo por distancia" }
];