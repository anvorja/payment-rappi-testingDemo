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
  1: { // Super Fresh Market
    "Frutas": [
      { id: 101, name: "Manzana Roja", price: 1.5, image: "🍎", description: "Manzana fresca y jugosa", stock: 50 },
      { id: 102, name: "Plátano", price: 0.8, image: "🍌", description: "Plátano maduro y dulce", stock: 65 },
      { id: 103, name: "Naranja", price: 1.2, image: "🍊", description: "Naranja jugosa y refrescante", stock: 40 },
      { id: 104, name: "Fresas", price: 3.2, image: "🍓", description: "Fresas frescas de temporada", stock: 30 },
      { id: 105, name: "Uvas", price: 2.8, image: "🍇", description: "Racimo de uvas dulces", stock: 25 },
    ],
    "Verduras": [
      { id: 106, name: "Zanahoria", price: 0.9, image: "🥕", description: "Zanahoria fresca y crujiente", stock: 45 },
      { id: 107, name: "Brócoli", price: 2.1, image: "🥦", description: "Brócoli verde y nutritivo", stock: 30 },
      { id: 108, name: "Espinaca", price: 1.8, image: "🍃", description: "Espinaca fresca y saludable", stock: 25 },
      { id: 109, name: "Aguacate", price: 2.5, image: "🥑", description: "Aguacate maduro y cremoso", stock: 20 },
      { id: 110, name: "Tomate", price: 1.2, image: "🍅", description: "Tomate rojo y jugoso", stock: 40 },
    ],
    "Carnes": [
      { id: 111, name: "Pechuga de Pollo", price: 5.9, image: "🍗", description: "Pechuga de pollo fresca", stock: 20 },
      { id: 112, name: "Carne Molida", price: 6.5, image: "🥩", description: "Carne molida premium", stock: 15 },
      { id: 113, name: "Filete de Pescado", price: 7.8, image: "🐟", description: "Filete de pescado fresco del día", stock: 12 },
      { id: 114, name: "Chuletas de Cerdo", price: 8.2, image: "🥓", description: "Chuletas de cerdo jugosas", stock: 10 },
      { id: 115, name: "Costillas", price: 9.5, image: "🍖", description: "Costillas ahumadas", stock: 8 },
    ],
    "Lácteos": [
      { id: 116, name: "Queso", price: 4.2, image: "🧀", description: "Queso gourmet de cabra", stock: 22 },
      { id: 117, name: "Leche", price: 2.0, image: "🥛", description: "Leche fresca entera", stock: 35 },
      { id: 118, name: "Yogurt", price: 1.8, image: "🧉", description: "Yogurt natural cremoso", stock: 40 },
      { id: 119, name: "Mantequilla", price: 3.5, image: "🧈", description: "Mantequilla sin sal", stock: 25 },
      { id: 120, name: "Crema", price: 2.7, image: "🥄", description: "Crema para batir", stock: 18 },
    ],
    "Panadería": [
      { id: 121, name: "Cake", price: 15.0, image: "🎂", description: "Pastel de vainilla con fresas", stock: 10 },
      { id: 122, name: "Doughnut", price: 1.5, image: "🍩", description: "Dona glaseada", stock: 30 },
      { id: 123, name: "Cupcake", price: 2.2, image: "🧁", description: "Cupcake de chocolate", stock: 25 },
      { id: 124, name: "Pie", price: 12.0, image: "🥧", description: "Pie de manzana casero", stock: 12 },
      { id: 125, name: "Bread", price: 3.5, image: "🍞", description: "Pan recién horneado", stock: 20 },
      { id: 126, name: "Croissant", price: 2.3, image: "🥐", description: "Croissant de mantequilla", stock: 15 },
    ],
  },
  2: { // Fast Food Heaven
    "Hamburguesas": [
      { id: 201, name: "Hamburguesa Clásica", price: 8.9, image: "🍔", description: "Carne, lechuga, tomate, queso", stock: 25 },
      { id: 202, name: "Hamburguesa Doble", price: 11.5, image: "🍔", description: "Doble carne, doble queso", stock: 20 },
      { id: 203, name: "Hamburguesa Vegetariana", price: 9.2, image: "🥬", description: "Hamburguesa a base de plantas", stock: 15 },
      { id: 204, name: "Hamburguesa BBQ", price: 10.5, image: "🍔", description: "Con salsa BBQ y cebolla caramelizada", stock: 18 },
      { id: 205, name: "Hamburguesa Mexicana", price: 10.8, image: "🍔", description: "Con jalapeños y guacamole", stock: 16 },
    ],
    "Pizza": [
      { id: 206, name: "Pizza Margarita", price: 12.0, image: "🍕", description: "Tomate, queso mozzarella, albahaca", stock: 18 },
      { id: 207, name: "Pizza Pepperoni", price: 14.5, image: "🍕", description: "Pepperoni, queso, salsa de tomate", stock: 16 },
      { id: 208, name: "Pizza Hawaiana", price: 13.8, image: "🍕", description: "Jamón, piña, queso", stock: 14 },
      { id: 209, name: "Pizza Vegetariana", price: 13.5, image: "🍕", description: "Variedad de vegetales frescos", stock: 12 },
      { id: 210, name: "Pizza 4 Quesos", price: 15.2, image: "🍕", description: "Combinación de cuatro quesos", stock: 10 },
    ],
    "Pollo": [
      { id: 211, name: "Alitas BBQ", price: 9.5, image: "🍗", description: "Alitas de pollo con salsa BBQ", stock: 22 },
      { id: 212, name: "Pollo Frito", price: 8.8, image: "🍗", description: "Pollo frito crujiente", stock: 25 },
      { id: 213, name: "Nuggets", price: 6.5, image: "🍗", description: "Nuggets de pollo", stock: 30 },
      { id: 214, name: "Pollo a la Parrilla", price: 10.2, image: "🍗", description: "Pollo a la parrilla con especias", stock: 18 },
      { id: 215, name: "Muslo de Pollo", price: 5.5, image: "🍗", description: "Muslos de pollo marinados", stock: 20 },
    ],
    "Tacos": [
      { id: 216, name: "Taco de Carne", price: 3.5, image: "🌮", description: "Taco con carne asada", stock: 25 },
      { id: 217, name: "Taco de Pollo", price: 3.2, image: "🌮", description: "Taco con pollo marinado", stock: 28 },
      { id: 218, name: "Taco Vegetariano", price: 3.0, image: "🌮", description: "Taco con vegetales", stock: 15 },
      { id: 219, name: "Burrito Grande", price: 7.5, image: "🌯", description: "Burrito con frijoles y carne", stock: 20 },
      { id: 220, name: "Taco al Pastor", price: 3.8, image: "🌮", description: "Taco tradicional al pastor", stock: 22 },
    ],
    "Bebidas": [
      { id: 221, name: "Refresco Cola", price: 2.5, image: "🥤", description: "Refresco de cola 355ml", stock: 50 },
      { id: 222, name: "Agua Mineral", price: 1.8, image: "💧", description: "Agua mineral 500ml", stock: 60 },
      { id: 223, name: "Jugo Natural", price: 3.2, image: "🧃", description: "Jugo de naranja natural 300ml", stock: 30 },
      { id: 224, name: "Batido", price: 4.5, image: "🧋", description: "Batido de chocolate", stock: 20 },
      { id: 225, name: "Café", price: 2.8, image: "☕", description: "Café americano caliente", stock: 35 },
    ],
  },
  3: { // Healthy Corner
    "Ensaladas": [
      { id: 301, name: "Ensalada César", price: 9.5, image: "🥗", description: "Lechuga, pollo, crutones, aderezo César", stock: 18 },
      { id: 302, name: "Ensalada Griega", price: 8.7, image: "🥗", description: "Tomate, pepino, aceitunas, queso feta", stock: 15 },
      { id: 303, name: "Bowl de Quinoa", price: 10.2, image: "🥣", description: "Quinoa, aguacate, verduras, aderezo", stock: 12 },
      { id: 304, name: "Ensalada de Frutas", price: 7.5, image: "🥙", description: "Frutas frescas de temporada", stock: 20 },
      { id: 305, name: "Ensalada Thai", price: 9.8, image: "🥗", description: "Ensalada con aderezo tailandés", stock: 14 },
    ],
    "Smoothies": [
      { id: 306, name: "Smoothie Verde", price: 6.5, image: "🥤", description: "Espinaca, manzana, apio, jengibre", stock: 20 },
      { id: 307, name: "Smoothie de Frutas", price: 5.8, image: "🧋", description: "Fresa, plátano, naranja, yogurt", stock: 25 },
      { id: 308, name: "Smoothie Proteico", price: 7.2, image: "🥤", description: "Proteína, avena, plátano, canela", stock: 18 },
      { id: 309, name: "Smoothie Tropical", price: 6.2, image: "🧋", description: "Piña, mango, coco", stock: 22 },
      { id: 310, name: "Smoothie Energético", price: 6.8, image: "🥤", description: "Café, plátano, cacao, avena", stock: 15 },
    ],
    "Bowls": [
      { id: 311, name: "Steaming Bowl", price: 11.5, image: "🍜", description: "Bowl caliente con verduras y tofu", stock: 14 },
      { id: 312, name: "Pot of Food", price: 12.2, image: "🍲", description: "Guiso saludable de legumbres", stock: 12 },
      { id: 313, name: "Bowl Mediterráneo", price: 10.8, image: "🥗", description: "Hummus, falafel, vegetales frescos", stock: 16 },
      { id: 314, name: "Bowl Mexicano", price: 11.2, image: "🌮", description: "Frijoles, arroz, guacamole", stock: 15 },
      { id: 315, name: "Poke Bowl", price: 13.5, image: "🐟", description: "Arroz, pescado crudo, aguacate", stock: 10 },
    ],
    "Snacks": [
      { id: 316, name: "Waffle Integral", price: 4.8, image: "🧇", description: "Waffle con harina integral", stock: 22 },
      { id: 317, name: "Chocolate Bar Light", price: 3.2, image: "🍫", description: "Barra de chocolate sin azúcar", stock: 30 },
      { id: 318, name: "Custard Natural", price: 4.5, image: "🍮", description: "Natilla sin azúcar añadido", stock: 18 },
      { id: 319, name: "Mix de Frutos Secos", price: 5.5, image: "🥜", description: "Mezcla de nueces, almendras y arándanos", stock: 25 },
      { id: 320, name: "Chips de Vegetales", price: 3.8, image: "🥕", description: "Chips horneados de vegetales", stock: 28 },
    ],
    "Orgánicos": [
      { id: 321, name: "Strawberry Orgánica", price: 4.2, image: "🍓", description: "Fresas de cultivo orgánico", stock: 15 },
      { id: 322, name: "Honey Pot Natural", price: 8.5, image: "🍯", description: "Miel 100% natural", stock: 20 },
      { id: 323, name: "Té Verde Orgánico", price: 3.8, image: "🍵", description: "Té verde de cultivo orgánico", stock: 25 },
      { id: 324, name: "Aceite de Coco", price: 9.5, image: "🥥", description: "Aceite de coco prensado en frío", stock: 18 },
      { id: 325, name: "Granola Casera", price: 6.2, image: "🥣", description: "Granola orgánica sin azúcares refinados", stock: 22 },
    ],
  },
  4: { // Sweet Treats
    "Pasteles": [
      { id: 401, name: "Pastel de Chocolate", price: 22.0, image: "🍰", description: "Pastel de chocolate con ganache", stock: 8 },
      { id: 402, name: "Cheesecake", price: 24.5, image: "🍰", description: "Cheesecake con salsa de frutos rojos", stock: 6 },
      { id: 403, name: "Tiramisú", price: 18.5, image: "🍮", description: "Postre italiano con café y mascarpone", stock: 10 },
      { id: 404, name: "Pastel Red Velvet", price: 25.0, image: "🍰", description: "Pastel rojo con frosting de queso", stock: 5 },
      { id: 405, name: "Tarta de Frutas", price: 20.5, image: "🥧", description: "Tarta con frutas frescas", stock: 7 },
    ],
    "Helados": [
      { id: 406, name: "Helado de Vainilla", price: 4.5, image: "🍦", description: "Helado cremoso de vainilla", stock: 15 },
      { id: 407, name: "Helado de Chocolate", price: 4.5, image: "🍦", description: "Helado rico en chocolate", stock: 15 },
      { id: 408, name: "Sorbete de Limón", price: 3.8, image: "🍧", description: "Sorbete refrescante de limón", stock: 12 },
      { id: 409, name: "Helado de Fresa", price: 4.5, image: "🍨", description: "Helado cremoso de fresa", stock: 14 },
      { id: 410, name: "Sundae de Caramelo", price: 6.2, image: "🍨", description: "Sundae con salsa de caramelo y nueces", stock: 10 },
    ],
    "Chocolates": [
      { id: 411, name: "Bombones Surtidos", price: 12.5, image: "🍫", description: "Selección de bombones finos", stock: 20 },
      { id: 412, name: "Chocolate Negro", price: 5.8, image: "🍫", description: "Chocolate negro 70% cacao", stock: 25 },
      { id: 413, name: "Trufas", price: 14.2, image: "🍫", description: "Trufas de chocolate con licor", stock: 15 },
      { id: 414, name: "Chocolate con Avellanas", price: 6.5, image: "🍫", description: "Chocolate con trozos de avellana", stock: 18 },
      { id: 415, name: "Chocolate Blanco", price: 5.5, image: "🍫", description: "Barra de chocolate blanco", stock: 22 },
    ],
    "Galletas": [
      { id: 416, name: "Cookies de Chocolate", price: 3.5, image: "🍪", description: "Galletas con chispas de chocolate", stock: 30 },
      { id: 417, name: "Macarons", price: 8.5, image: "🍪", description: "Surtido de macarons franceses", stock: 20 },
      { id: 418, name: "Galletas de Mantequilla", price: 4.2, image: "🍪", description: "Galletas caseras de mantequilla", stock: 25 },
      { id: 419, name: "Alfajores", price: 5.5, image: "🍪", description: "Alfajores rellenos de dulce de leche", stock: 18 },
      { id: 420, name: "Galletas de Avena", price: 3.8, image: "🍪", description: "Galletas saludables de avena", stock: 22 },
    ],
    "Postres": [
      { id: 421, name: "Flan", price: 5.2, image: "🍮", description: "Flan casero con caramelo", stock: 15 },
      { id: 422, name: "Brownie", price: 4.8, image: "🍫", description: "Brownie caliente con helado", stock: 20 },
      { id: 423, name: "Crepes", price: 7.5, image: "🥞", description: "Crepes con Nutella y fresas", stock: 12 },
      { id: 424, name: "Arroz con Leche", price: 4.5, image: "🍚", description: "Arroz con leche y canela", stock: 18 },
      { id: 425, name: "Profiteroles", price: 6.8, image: "🍮", description: "Profiteroles rellenos de crema", stock: 14 },
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