import React from 'react';
import { Restaurant, Product, CartItem } from '@/types/rappi';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, Plus, ShoppingCart } from 'lucide-react';
import { products } from '@/data/RappiMockData';

interface ProductListProps {
  restaurant: Restaurant | null;
  selectedCategory: string | null;
  onSelectCategory: (category: string) => void;
  onAddToCart: (product: Product) => void;
  cart: CartItem[];
  onGoToCart: () => void;
}

const ProductList: React.FC<ProductListProps> = ({
  restaurant,
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  cart,
  onGoToCart
}) => {
  if (!restaurant) return null;

  const restaurantProducts = products[restaurant.id] || {};
  const categoryProducts = selectedCategory ? restaurantProducts[selectedCategory] || [] : [];

  // Calcular el total de productos en el carrito
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ChevronLeft size={20} />
          </Button>
          <h2 className="font-bold text-xl">{restaurant.name}</h2>
        </div>
        {cartItemCount > 0 && (
          <Button onClick={onGoToCart} variant="outline" className="flex items-center gap-2">
            <ShoppingCart size={16} />
            <span>{cartItemCount} items • ${cartTotal.toFixed(2)}</span>
          </Button>
        )}
      </div>

      <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
        {restaurant.categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className="whitespace-nowrap"
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categoryProducts.length > 0 ? (
          categoryProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-start p-4">
                  <div className="mr-4 text-4xl">{product.image}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold">${product.price.toFixed(2)}</span>
                      {product.stock > 0 ? (
                        <Button
                          size="sm"
                          className="rounded-full"
                          onClick={() => onAddToCart(product)}
                        >
                          <Plus size={16} />
                        </Button>
                      ) : (
                        <Badge variant="outline" className="text-red-500 bg-red-50">
                          Agotado
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-8 text-muted-foreground">
            No hay productos disponibles en esta categoría
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;