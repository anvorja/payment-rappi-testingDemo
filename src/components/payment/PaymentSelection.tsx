// src/components/payment/PaymentSelection.tsx
import React from 'react';
import { PaymentMethod } from '@/types/rappi';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, CreditCard, CircleDollarSign, Landmark, Wallet, CheckCircle } from 'lucide-react';
import { paymentMethods } from '@/data/RappiMockData';
import {
    isCreditCardPayment,
    isCashPayment,
    isBankTransferPayment,
    isDigitalWalletPayment
} from '@/types/rappi';

interface PaymentSelectionProps {
    selectedPaymentMethod: PaymentMethod | null;
    onSelectPaymentMethod: (method: PaymentMethod) => void;
    orderSummary: {
        subtotal: number;
        discount: number;
        deliveryFee: number;
        total: number;
    };
    onProcessOrder: () => void;
    onGoBack: () => void;
    userType: string;
    onUserTypeChange: (type: string) => void;
}

const PaymentSelection: React.FC<PaymentSelectionProps> = ({
                                                               selectedPaymentMethod,
                                                               onSelectPaymentMethod,
                                                               orderSummary,
                                                               onProcessOrder,
                                                               onGoBack,
                                                               userType,
                                                               onUserTypeChange
                                                           }) => {
    // Función para renderizar el icono según el tipo de pago
    const renderPaymentIcon = (type: string) => {
        switch (type) {
            case 'credit_card':
                return <CreditCard size={16} />;
            case 'cash':
                return <CircleDollarSign size={16} />;
            case 'bank_transfer':
                return <Landmark size={16} />;
            case 'digital_wallet':
                return <Wallet size={16} />;
            default:
                return <CreditCard size={16} />;
        }
    };

    // Función para renderizar detalles según el tipo de pago
    const renderPaymentDetails = (method: PaymentMethod) => {
        if (isCreditCardPayment(method)) {
            return (
                <>
                    <p className="text-muted-foreground">{method.details.number}</p>
                    <p className="text-xs text-muted-foreground">Vence: {method.details.expiry}</p>
                </>
            );
        }

        if (isCashPayment(method)) {
            return <p className="text-muted-foreground">{method.details.description}</p>;
        }

        if (isBankTransferPayment(method)) {
            return (
                <>
                    <p className="text-muted-foreground">Cuenta: {method.details.account}</p>
                    <p className="text-xs text-muted-foreground">{method.details.bank}</p>
                </>
            );
        }

        if (isDigitalWalletPayment(method)) {
            return (
                <>
                    <p className="text-muted-foreground">{method.details.provider}</p>
                    <p className="text-xs text-muted-foreground">Saldo: ${method.details.balance}</p>
                </>
            );
        }

        return null;
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center space-x-3">
                <Button variant="ghost" size="icon" className="rounded-full" onClick={onGoBack}>
                    <ChevronLeft size={20} />
                </Button>
                <h2 className="font-bold text-xl">Selecciona un método de pago</h2>
            </div>

            <div className="mb-4 p-4 border rounded-lg bg-muted/20">
                <h3 className="font-semibold mb-2">Tipo de usuario</h3>
                <div className="flex flex-wrap gap-2">
                    <Button
                        variant={userType === "new" ? "default" : "outline"}
                        onClick={() => onUserTypeChange("new")}
                        size="sm"
                    >
                        Usuario nuevo
                    </Button>
                    <Button
                        variant={userType === "regular" ? "default" : "outline"}
                        onClick={() => onUserTypeChange("regular")}
                        size="sm"
                    >
                        Usuario regular
                    </Button>
                    <Button
                        variant={userType === "premium" ? "default" : "outline"}
                        onClick={() => onUserTypeChange("premium")}
                        size="sm"
                    >
                        Usuario premium
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
                {paymentMethods.map((method) => (
                    <Card
                        key={method.id}
                        className={`cursor-pointer transition-all ${
                            selectedPaymentMethod?.id === method.id
                                ? 'border-2 border-primary shadow-sm'
                                : 'hover:shadow-md'
                        }`}
                        onClick={() => onSelectPaymentMethod(method)}
                    >
                        <CardContent className="p-4">
                            <div className="flex items-start">
                                <div className={`p-2 rounded-full mr-4 ${
                                    selectedPaymentMethod?.id === method.id
                                        ? 'bg-primary text-primary-foreground'
                                        : 'bg-muted text-muted-foreground'
                                }`}>
                                    {renderPaymentIcon(method.type)}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-semibold">{method.name}</h3>
                                        {selectedPaymentMethod?.id === method.id && (
                                            <CheckCircle size={18} className="text-primary" />
                                        )}
                                    </div>
                                    {renderPaymentDetails(method)}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card>
                <CardContent className="p-4 space-y-3">
                    <h3 className="font-semibold">Resumen del pedido</h3>
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

                        <div className="border-t pt-2 flex justify-between font-bold">
                            <span>Total a pagar</span>
                            <span>${orderSummary.total.toFixed(2)}</span>
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="p-4">
                    <Button
                        className="w-full"
                        disabled={!selectedPaymentMethod}
                        onClick={onProcessOrder}
                    >
                        Realizar pedido
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default PaymentSelection;