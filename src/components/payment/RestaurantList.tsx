// src/components/payment/RestaurantList.tsx
import React, { useState } from 'react';
import { Restaurant } from '@/types/rappi';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Star, Clock, ChevronRight } from 'lucide-react';

interface RestaurantListProps {
    restaurants: Restaurant[];
    onSelectRestaurant: (restaurant: Restaurant) => void;
}

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants, onSelectRestaurant }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filtrar restaurantes por término de búsqueda
    const filteredRestaurants = restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.categories.some(category =>
            category.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <div className="space-y-4">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                    className="pl-10"
                    placeholder="Buscar restaurantes o categorías..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredRestaurants.length > 0 ? (
                    filteredRestaurants.map(restaurant => (
                        <Card
                            key={restaurant.id}
                            className="cursor-pointer hover:shadow-md transition-shadow"
                            onClick={() => onSelectRestaurant(restaurant)}
                        >
                            <CardContent className="p-4">
                                <div className="flex items-center space-x-4">
                                    <div className="text-4xl">{restaurant.logo}</div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-lg">{restaurant.name}</h3>
                                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                                            <div className="flex items-center mr-3">
                                                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                                                <span>{restaurant.rating}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Clock className="w-4 h-4 mr-1" />
                                                <span>{restaurant.deliveryTime}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-1 mt-2">
                                            {restaurant.categories.slice(0, 3).map((category, index) => (
                                                <span key={index} className="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">
                          {category}
                        </span>
                                            ))}
                                            {restaurant.categories.length > 3 && (
                                                <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full">
                          +{restaurant.categories.length - 3}
                        </span>
                                            )}
                                        </div>
                                    </div>
                                    <ChevronRight className="text-muted-foreground" size={20} />
                                </div>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <div className="col-span-full text-center py-8 text-muted-foreground">
                        No se encontraron restaurantes que coincidan con &quot;{searchTerm}&quot;
                    </div>
                )}
            </div>
        </div>
    );
};

export default RestaurantList;
