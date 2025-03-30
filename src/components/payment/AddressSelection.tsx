// src/components/payment/AddressSelection.tsx
import React from 'react';
import { Address } from '@/types/rappi';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, MapPin, CheckCircle } from 'lucide-react';
import { addresses } from '@/data/RappiMockData';

interface AddressSelectionProps {
    selectedAddress: Address | null;
    onSelectAddress: (address: Address) => void;
    onContinue: () => void;
    onGoBack: () => void;
}

const AddressSelection: React.FC<AddressSelectionProps> = ({
                                                               selectedAddress,
                                                               onSelectAddress,
                                                               onContinue,
                                                               onGoBack
                                                           }) => {

    return (
        <div className="space-y-4">
            <div className="flex items-center space-x-3">
                <Button variant="ghost" size="icon" className="rounded-full" onClick={onGoBack}>
                    <ChevronLeft size={20} />
                </Button>
                <h2 className="font-bold text-xl">Selecciona una dirección</h2>
            </div>

            <div className="grid grid-cols-1 gap-3">
                {addresses.map((address) => (
                    <Card
                        key={address.id}
                        className={`cursor-pointer transition-all ${
                            selectedAddress?.id === address.id
                                ? 'border-2 border-primary shadow-sm'
                                : 'hover:shadow-md'
                        }`}
                        onClick={() => onSelectAddress(address)}
                    >
                        <CardContent className="p-4">
                            <div className="flex items-start">
                                <div className={`p-2 rounded-full mr-4 ${
                                    selectedAddress?.id === address.id
                                        ? 'bg-primary text-primary-foreground'
                                        : 'bg-muted text-muted-foreground'
                                }`}>
                                    <MapPin size={16} />
                                </div>
                                <div className="flex-1">
                                    {/*<div className="flex items-center justify-between">*/}
                                    {/*    <h3 className="font-semibold text-lg">{address.name}</h3>*/}
                                    {/*    {selectedAddress?.id === address.id && (*/}
                                    {/*        <CheckCircle size={18} className="text-primary" />*/}
                                    {/*    )}*/}
                                    {/*</div>*/}

                                    <div className="flex items-center justify-between">
                                        <h3 className="font-semibold text-lg">{address.name}</h3>
                                        <div className="flex items-center">
                                        <span className={`px-2 py-1 text-xs rounded mr-2 ${
                                            address.id === 1
                                                ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                                                : address.id === 2
                                                    ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                                                    : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                                        }`}>
                                            {address.id === 1 ? 'Cercana' : address.id === 2 ? 'Media' : 'Lejana'}
                                        </span>
                                            {selectedAddress?.id === address.id && (
                                                <CheckCircle size={18} className="text-primary" />
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground">{address.address}</p>
                                    {address.details && (
                                        <p className="text-sm text-muted-foreground">{address.details}</p>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card>
                <CardFooter className="p-4">
                    <Button
                        className="w-full"
                        disabled={!selectedAddress}
                        onClick={onContinue}
                    >
                        Continuar con el pago
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default AddressSelection;