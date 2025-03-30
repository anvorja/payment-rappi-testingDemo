// src/components/payment/OrderConfirmation.tsx
import React from 'react';
import { Restaurant, Address, PaymentMethod, CartItem, OrderStatus } from '@/types/rappi';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Clock, CheckCircle, Package, Truck, Store, CreditCard, MapPin, ShoppingBag } from 'lucide-react';
import {
    isCreditCardPayment,
    isCashPayment
} from '@/types/rappi';

interface OrderConfirmationProps {
    orderStatus: OrderStatus | null;
    orderTime: Date | null;
    restaurant: Restaurant | null;
    address: Address | null;
    paymentMethod: PaymentMethod | null;
    cartItems: CartItem[];
    orderSummary: {
        subtotal: number;
        discount: number;
        deliveryFee: number;
        total: number;
    };
    onNewOrder: () => void;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
                                                                 orderStatus,
                                                                 orderTime,
                                                                 restaurant,
                                                                 address,
                                                                 paymentMethod,
                                                                 cartItems,
                                                                 orderSummary,
                                                                 onNewOrder
                                                             }) => {
    // Renderizar estado según el status
    const renderOrderStatus = () => {
        switch (orderStatus) {
            case 'processing':
                return (
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 border-t-4 border-b-4 border-primary rounded-full animate-spin mx-auto"></div>
                        <h3 className="font-semibold text-lg">Procesando tu pedido</h3>
                        <p className="text-muted-foreground">Estamos confirmando tu pedido con la tienda...</p>
                    </div>
                );
            case 'confirmed':
                return (
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-full mx-auto">
                            <CheckCircle size={32} className="text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="font-semibold text-lg">¡Pedido confirmado!</h3>
                        <p className="text-muted-foreground">Tu pedido ha sido recibido por la tienda</p>
                    </div>
                );
            case 'preparing':
                return (
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full mx-auto">
                            <Package size={32} className="text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="font-semibold text-lg">Preparando tu pedido</h3>
                        <p className="text-muted-foreground">La tienda está preparando tus productos</p>
                    </div>
                );
            case 'onWay':
                return (
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-full mx-auto">
                            <Truck size={32} className="text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 className="font-semibold text-lg">¡En camino!</h3>
                        <p className="text-muted-foreground">Tu pedido está en camino a tu dirección</p>
                        {orderTime && (
                            <div className="flex items-center justify-center space-x-2 text-sm bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 w-fit mx-auto">
                                <Clock size={16} className="text-gray-500" />
                                <span>
                  Llegada estimada: {orderTime.getHours()}:{orderTime.getMinutes().toString().padStart(2, '0')}
                </span>
                            </div>
                        )}
                    </div>
                );
            case 'delivered':
                return (
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-full mx-auto">
                            <CheckCircle size={32} className="text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="font-semibold text-lg">¡Pedido entregado!</h3>
                        <p className="text-muted-foreground">Disfruta tus productos</p>
                        <Button onClick={onNewOrder} className="mt-4">
                            Hacer un nuevo pedido
                        </Button>
                    </div>
                );
            default:
                return null;
        }
    };

    // Renderizar ícono según el método de pago
    const renderPaymentIcon = () => {
        if (!paymentMethod) return <CreditCard size={16} />;

        switch (paymentMethod.type) {
            case 'credit_card':
                return <CreditCard size={16} />;
            case 'cash':
                return <ShoppingBag size={16} />;
            case 'bank_transfer':
                return <CreditCard size={16} />;
            case 'digital_wallet':
                return <CreditCard size={16} />;
            default:
                return <CreditCard size={16} />;
        }
    };

    return (
        <div className="space-y-6">
            <Card className="overflow-hidden">
                <CardContent className="p-6">
                    {renderOrderStatus()}
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-4 space-y-4">
                    <h3 className="font-semibold text-lg">Resumen del pedido</h3>

                    {restaurant && (
                        <div className="flex items-center space-x-3">
                            <div className="p-2 rounded-full bg-muted">
                                <Store size={16} />
                            </div>
                            <div>
                                <p className="font-medium">{restaurant.name}</p>
                                <p className="text-sm text-muted-foreground">{restaurant.deliveryTime}</p>
                            </div>
                        </div>
                    )}

                    {address && (
                        <div className="flex items-center space-x-3">
                            <div className="p-2 rounded-full bg-muted">
                                <MapPin size={16} />
                            </div>
                            <div>
                                <p className="font-medium">{address.name}</p>
                                <p className="text-sm text-muted-foreground">{address.address}</p>
                                {address.details && (
                                    <p className="text-xs text-muted-foreground">{address.details}</p>
                                )}
                            </div>
                        </div>
                    )}

                    {paymentMethod && (
                        <div className="flex items-center space-x-3">
                            <div className="p-2 rounded-full bg-muted">
                                {renderPaymentIcon()}
                            </div>
                            <div>
                                <p className="font-medium">{paymentMethod.name}</p>
                                {isCreditCardPayment(paymentMethod) && (
                                    <p className="text-sm text-muted-foreground">{paymentMethod.details.number}</p>
                                )}
                                {isCashPayment(paymentMethod) && (
                                    <p className="text-sm text-muted-foreground">{paymentMethod.details.description}</p>
                                )}
                            </div>
                        </div>
                    )}

                    <Separator />

                    <div>
                        <h4 className="font-medium mb-2">Productos</h4>
                        <div className="space-y-2">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex justify-between text-sm">
                                    <span>{item.quantity}x {item.name}</span>
                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Subtotal</span>
                            <span>${orderSummary.subtotal.toFixed(2)}</span>
                        </div>

                        {orderSummary.discount > 0 && (
                            <div className="flex justify-between text-sm">
                                <span className="text-green-600">Descuento</span>
                                <span className="text-green-600">-${orderSummary.discount.toFixed(2)}</span>
                            </div>
                        )}

                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Costo de envío</span>
                            <span>${orderSummary.deliveryFee.toFixed(2)}</span>
                        </div>

                        <div className="pt-2 flex justify-between font-bold">
                            <span>Total</span>
                            <span>${orderSummary.total.toFixed(2)}</span>
                        </div>
                    </div>
                </CardContent>

                {orderStatus === 'delivered' && (
                    <CardFooter className="p-4">
                        <Button className="w-full" onClick={onNewOrder}>
                            Realizar un nuevo pedido
                        </Button>
                    </CardFooter>
                )}
            </Card>
        </div>
    );
};

export default OrderConfirmation;