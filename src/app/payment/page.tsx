// src/app/payment/page.tsx
"use client"

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RestaurantList from "@/components/payment/RestaurantList";
import ProductList from "@/components/payment/ProductList";
import Cart from "@/components/payment/Cart";
import AddressSelection from "@/components/payment/AddressSelection";
import PaymentSelection from "@/components/payment/PaymentSelection";
import OrderConfirmation from "@/components/payment/OrderConfirmation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Restaurant, CartItem, Address, PaymentMethod, OrderStatus, Product } from '@/types/rappi';
import { restaurants, promotionalCodes } from '@/data/RappiMockData';
import { ShoppingBag, CreditCard, MapPin, CheckCircle, Store } from 'lucide-react';
import { toast } from 'sonner';

export default function PaymentPage() {
    //const { toast } = useToast();
    const [activeTab, setActiveTab] = useState("restaurants");
    const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod | null>(null);
    const [promoCode, setPromoCode] = useState("");

    // Código promocional aplicado
    const [appliedPromoCode, setAppliedPromoCode] = useState<string | null>(null);
    const [discountApplied, setDiscountApplied] = useState(false);

    const [orderStatus, setOrderStatus] = useState<OrderStatus | null>(null);
    const [orderTime, setOrderTime] = useState<Date | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const [userType, setUserType] = useState<string>("regular");

    // Cálculo del total
// Modifica la función calculateTotal
    const calculateTotal = () => {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        // Aplicar descuento según el código promocional y tipo de usuario
        let discount = 0;
        if (discountApplied && appliedPromoCode) {
            // Descuento por código promocional
            if (appliedPromoCode === 'RAPPI10') {
                discount = subtotal * 0.1; // 10% de descuento
            } else if (appliedPromoCode === 'WELCOME') {
                discount = subtotal * 0.15; // 15% de descuento para nuevos usuarios
            } else if (appliedPromoCode === 'DISCOUNT') {
                discount = subtotal * 0.2; // 20% de descuento
            } else {
                discount = subtotal * 0.1; // Descuento por defecto
            }
        }

        // Descuento adicional para usuarios premium (5%)
        if (userType === "premium") {
            discount += subtotal * 0.05;
        }

        // Descuento de bienvenida para usuarios nuevos ($2.000)
        if (userType === "new") {
            discount += 2.0; // $2 equivalente a $2.000
        }

        // Determinar tarifa de envío según la dirección seleccionada
        let deliveryFee = 3.5; // Valor por defecto (media)
        if (selectedAddress) {
            if (selectedAddress.id === 1) deliveryFee = 2.5; // Cercana
            else if (selectedAddress.id === 2) deliveryFee = 3.5; // Media
            else if (selectedAddress.id === 3) deliveryFee = 4.5; // Lejana
        }

        // Determinar si aplica envío gratis
        let freeShipping = false;

        // Por valor alto del pedido (>$30) para cualquier usuario
        if (subtotal > 30) {
            freeShipping = true;
        }

        // Por tipo de usuario Premium con pedido medio o alto
        if (userType === "premium" && subtotal >= 15) {
            freeShipping = true;
        }

        return {
            subtotal,
            discount,
            deliveryFee: freeShipping ? 0 : deliveryFee,
            total: subtotal - discount + (freeShipping ? 0 : deliveryFee),
            freeShipping // Nuevo campo para indicar si se aplicó envío gratis
        };
    };


    // Manejo del carrito
    const addToCart = (product: Product) => {
        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            setCart(prevCart =>
                prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
        }

        toast.success(`${product.name} añadido`, {
            description: "El producto se ha añadido al carrito."
        });
    };

    const removeFromCart = (productId: number) => {
        const existingItem = cart.find(item => item.id === productId);

        if (existingItem && existingItem.quantity > 1) {
            setCart(prevCart =>
                prevCart.map(item =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            );
        } else {
            setCart(prevCart => prevCart.filter(item => item.id !== productId));
        }
    };

// Validación y aplicación de código promocional
    const applyPromoCode = () => {
        // Buscar el código promocional en la lista
        const promo = promotionalCodes.find(p =>
            p.code.toUpperCase() === promoCode.toUpperCase()
        );

        if (promo) {
            setDiscountApplied(true);
            setAppliedPromoCode(promo.code);

            toast.success("Código promocional aplicado", {
                description: promo.freeShipping
                    ? "Se ha aplicado envío gratis a tu pedido."
                    : `Se ha aplicado ${promo.discount * 100}% de descuento a tu pedido.`
            });

            return true;
        } else {
            toast.error("Código inválido", {
                description: "El código promocional no es válido."
            });
            return false;
        }
    };

    // Procesar el pedido
// Procesar el pedido
    const processOrder = () => {
        if (!selectedPaymentMethod || !selectedAddress || cart.length === 0) {
            toast.error("No se puede completar el pedido", {
                description: "Por favor completa todos los datos requeridos."
            });
            return;
        }

        setIsProcessing(true);
        setOrderStatus('processing');

        // Simulamos el tiempo de entrega estimado (20-40 min)
        const deliveryMinutes = Math.floor(Math.random() * 20) + 20;
        const estimatedTime = new Date();
        estimatedTime.setMinutes(estimatedTime.getMinutes() + deliveryMinutes);
        setOrderTime(estimatedTime);

        // Simulamos el proceso de pedido con timeout
        setTimeout(() => {
            setOrderStatus('confirmed');
            setTimeout(() => {
                setOrderStatus('preparing');
                setTimeout(() => {
                    setOrderStatus('onWay');
                    setTimeout(() => {
                        setOrderStatus('delivered');
                        setIsProcessing(false);
                    }, 5000);
                }, 3000);
            }, 3000);
        }, 2000);
    };

    // Resetear todo el flujo
    const resetOrder = () => {
        setActiveTab("restaurants");
        setSelectedRestaurant(null);
        setSelectedCategory(null);
        setCart([]);
        setSelectedAddress(null);
        setSelectedPaymentMethod(null);
        setPromoCode("");
        setDiscountApplied(false);
        setAppliedPromoCode(null);
        setOrderStatus(null);
        setOrderTime(null);
    };

    // Función para cambiar a la siguiente pestaña
    const goToNextTab = (nextTab: string) => {
        setActiveTab(nextTab);
    };

    // Cuando se selecciona un restaurante
    const handleRestaurantSelect = (restaurant: Restaurant) => {
        setSelectedRestaurant(restaurant);
        if (restaurant.categories.length > 0) {
            setSelectedCategory(restaurant.categories[0]);
        }
        goToNextTab("products");
    };

    return (
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Proceso de Compra Rappi</CardTitle>
                    <CardDescription>
                        Simula el proceso completo de compra en Rappi, desde la selección del restaurante hasta la confirmación del pedido.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs
                        value={activeTab}
                        onValueChange={setActiveTab}
                        className="w-full"
                    >
                        <TabsList className="grid grid-cols-6 w-full">
                            <TabsTrigger value="restaurants" disabled={isProcessing} className="flex flex-col gap-1 p-3">
                                <Store className="h-4 w-4" />
                                <span className="text-xs">Tiendas</span>
                            </TabsTrigger>
                            <TabsTrigger value="products" disabled={!selectedRestaurant || isProcessing} className="flex flex-col gap-1 p-3">
                                <ShoppingBag className="h-4 w-4" />
                                <span className="text-xs">Productos</span>
                            </TabsTrigger>
                            <TabsTrigger value="cart" disabled={cart.length === 0 || isProcessing} className="flex flex-col gap-1 p-3">
                                <ShoppingBag className="h-4 w-4" />
                                <span className="text-xs">Carrito</span>
                            </TabsTrigger>
                            <TabsTrigger value="address" disabled={cart.length === 0 || isProcessing} className="flex flex-col gap-1 p-3">
                                <MapPin className="h-4 w-4" />
                                <span className="text-xs">Dirección</span>
                            </TabsTrigger>
                            <TabsTrigger value="payment" disabled={!selectedAddress || isProcessing} className="flex flex-col gap-1 p-3">
                                <CreditCard className="h-4 w-4" />
                                <span className="text-xs">Pago</span>
                            </TabsTrigger>
                            <TabsTrigger value="confirmation" disabled={!orderStatus} className="flex flex-col gap-1 p-3">
                                <CheckCircle className="h-4 w-4" />
                                <span className="text-xs">Confirmación</span>
                            </TabsTrigger>
                        </TabsList>

                        <div className="mt-4">
                            <TabsContent value="restaurants" className="space-y-4">
                                <RestaurantList
                                    restaurants={restaurants}
                                    onSelectRestaurant={handleRestaurantSelect}
                                />
                            </TabsContent>

                            <TabsContent value="products" className="space-y-4">
                                <ProductList
                                    restaurant={selectedRestaurant}
                                    selectedCategory={selectedCategory}
                                    onSelectCategory={setSelectedCategory}
                                    onAddToCart={addToCart}
                                    cart={cart}
                                    onGoToCart={() => goToNextTab("cart")}
                                />
                            </TabsContent>

                            <TabsContent value="cart" className="space-y-4">
                                <Cart
                                    cartItems={cart}
                                    onAddItem={addToCart}
                                    onRemoveItem={removeFromCart}
                                    restaurant={selectedRestaurant}
                                    promoCode={promoCode}
                                    onPromoCodeChange={setPromoCode}
                                    onApplyPromoCode={applyPromoCode}
                                    discountApplied={discountApplied}
                                    discountPercentage={
                                        appliedPromoCode
                                            ? (promotionalCodes.find(p => p.code === appliedPromoCode)?.discount || 0.1)
                                            : 0.1
                                    }
                                    freeShipping={
                                        appliedPromoCode
                                            ? (promotionalCodes.find(p => p.code === appliedPromoCode)?.freeShipping || false)
                                            : false
                                    }
                                    onContinue={() => goToNextTab("address")}
                                    onGoBack={() => goToNextTab("products")}
                                />
                            </TabsContent>

                            <TabsContent value="address" className="space-y-4">
                                <AddressSelection
                                    selectedAddress={selectedAddress}
                                    onSelectAddress={setSelectedAddress}
                                    onContinue={() => goToNextTab("payment")}
                                    onGoBack={() => goToNextTab("cart")}
                                />
                            </TabsContent>

                            <TabsContent value="payment" className="space-y-4">
                                <PaymentSelection
                                    selectedPaymentMethod={selectedPaymentMethod}
                                    onSelectPaymentMethod={setSelectedPaymentMethod}
                                    orderSummary={calculateTotal()}
                                    onProcessOrder={() => {
                                        processOrder();
                                        goToNextTab("confirmation");
                                    }}
                                    onGoBack={() => goToNextTab("address")}
                                    userType={userType}
                                    onUserTypeChange={setUserType}
                                />
                            </TabsContent>

                            <TabsContent value="confirmation" className="space-y-4">
                                <OrderConfirmation
                                    orderStatus={orderStatus}
                                    orderTime={orderTime}
                                    restaurant={selectedRestaurant}
                                    address={selectedAddress}
                                    paymentMethod={selectedPaymentMethod}
                                    cartItems={cart}
                                    orderSummary={calculateTotal()}
                                    onNewOrder={resetOrder}
                                    freeShipping={calculateTotal().freeShipping}
                                />
                            </TabsContent>
                        </div>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    );
}