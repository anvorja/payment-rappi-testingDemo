import React from 'react';
import { CartItem, Restaurant } from '@/types/rappi';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Minus, Plus, ChevronLeft, Tag, CheckCircle } from 'lucide-react';
import { Label } from '@/components/ui/label';
import {promotionalCodes} from '@/data/RappiMockData';
import { toast } from 'sonner';

interface CartProps {
  cartItems: CartItem[];
  onAddItem: (product: CartItem) => void;
  onRemoveItem: (productId: number) => void;
  restaurant: Restaurant | null;
  promoCode: string;
  onPromoCodeChange: (code: string) => void;
  onApplyPromoCode: () => boolean;
  discountApplied: boolean;
  onContinue: () => void;
  onGoBack: () => void;
  discountPercentage?: number;
  freeShipping?: boolean;
}

const Cart: React.FC<CartProps> = ({
                                     cartItems,
                                     onAddItem,
                                     onRemoveItem,
                                     restaurant,
                                     promoCode,
                                     onPromoCodeChange,
                                     onApplyPromoCode,
                                     discountApplied,
                                     onContinue,
                                     onGoBack,
                                     discountPercentage = 0.1, // 10% por defecto
                                     freeShipping = false
                                   }) => {
  // Cálculos
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const discount = discountApplied ? subtotal * discountPercentage : 0;
  const deliveryFee = freeShipping ? 0 : (restaurant?.deliveryFee || 0);
  const total = subtotal - discount + deliveryFee;

  // Función local para verificar el código promocional
  const verifyPromoCode = () => {
    // Buscar el código en los códigos promocionales disponibles
    const foundPromo = promotionalCodes.find(
        promo => promo.code.toUpperCase() === promoCode.toUpperCase()
    );

    if (foundPromo) {
      const discountText = foundPromo.freeShipping
          ? "envío gratuito"
          : `${foundPromo.discount * 100}% de descuento`;

      toast.success("Código promocional aplicado", {
        description: `Se ha aplicado ${discountText} a tu pedido.`
      });

      return onApplyPromoCode();
    } else {
      toast.error("Código inválido", {
        description: "El código promocional no es válido."
      });
      return false;
    }
  };

  if (cartItems.length === 0) {
    return (
        <div className="text-center py-8">
          <div className="text-5xl mb-4">🛒</div>
          <h3 className="font-semibold text-xl mb-2">Tu carrito está vacío</h3>
          <p className="text-muted-foreground mb-4">Agrega productos para continuar con tu compra</p>
          <Button onClick={onGoBack}>Volver a los productos</Button>
        </div>
    );
  }

  return (
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="rounded-full" onClick={onGoBack}>
            <ChevronLeft size={20} />
          </Button>
          <h2 className="font-bold text-xl">Tu carrito</h2>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-4 space-y-4">
            {cartItems.map((item) => (
                <div key={item.id} className="flex items-center py-2 border-b last:border-0">
                  <div className="mr-3 text-3xl">{item.image}</div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => onRemoveItem(item.id)}
                    >
                      <Minus size={16} />
                    </Button>
                    <span className="font-medium w-6 text-center">{item.quantity}</span>
                    <Button
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => onAddItem(item)}
                    >
                      <Plus size={16} />
                    </Button>
                  </div>
                </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="space-y-4">
              <Label htmlFor="promo-code" className="font-medium">Código promocional</Label>
              <div className="flex space-x-2">
                <div className="relative flex-1">
                  <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                  <Input
                      id="promo-code"
                      placeholder="Ingresa tu código"
                      className="pl-10"
                      value={promoCode}
                      onChange={(e) => onPromoCodeChange(e.target.value)}
                  />
                </div>
                <Button
                    variant={discountApplied ? "outline" : "default"}
                    disabled={discountApplied || !promoCode}
                    onClick={verifyPromoCode}
                >
                  {discountApplied ? (
                      <>
                        <CheckCircle size={16} className="mr-2 text-green-600" />
                        <span>Aplicado</span>
                      </>
                  ) : (
                      'Aplicar'
                  )}
                </Button>
              </div>
              {discountApplied && (
                  <p className="text-sm text-green-600 flex items-center">
                    <CheckCircle size={14} className="mr-1" />
                    Descuento aplicado
                  </p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            {discountApplied && (
                <div className="flex justify-between text-sm">
                  <span className="text-green-600">Descuento</span>
                  <span className="text-green-600">-${discount.toFixed(2)}</span>
                </div>
            )}
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Costo de envío</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>

            <div className="border-t pt-3 flex justify-between font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </CardContent>

          <CardFooter className="px-4 pb-4">
            <Button className="w-full" onClick={onContinue}>
              Continuar con la dirección
            </Button>
          </CardFooter>
        </Card>
      </div>
  );
};

export default Cart;