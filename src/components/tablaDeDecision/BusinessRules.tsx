import React from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const BusinessRules: React.FC = () => {
  const rules = [
    {
      id: 1,
      title: "Reglas de Envío Gratuito",
      rules: [
        "Los usuarios Premium reciben envío gratuito en pedidos de valor medio (entre $15.000 y $30.000) y alto (mayor a $30.000).",
        "Los usuarios Regulares y Nuevos reciben envío gratuito solo en pedidos de valor alto (mayor a $30.000).",
        "Ningún usuario recibe envío gratuito en pedidos de valor bajo (menor a $15.000), independientemente de su tipo de cuenta."
      ]
    },
    {
      id: 2,
      title: "Reglas de Descuentos",
      rules: [
        "Se aplica un descuento del 10% cuando se ingresa un código promocional válido.",
        "Los usuarios Premium reciben un descuento adicional del 5% en todos sus pedidos.",
        "Los usuarios Nuevos reciben un descuento de bienvenida de $2.000 en su primer pedido."
      ]
    },
    {
      id: 3,
      title: "Reglas de Costos de Envío",
      rules: [
        "Distancia local (1-3 km): $2.500",
        "Media distancia (4-7 km): $4.000",
        "Larga distancia (8+ km): $6.000"
      ]
    },
    {
      id: 4,
      title: "Reglas de Flujo de Proceso",
      rules: [
        "Si el carrito está vacío, el usuario no puede proceder a la selección de dirección.",
        "Si no se ha seleccionado una dirección de entrega, el usuario no puede proceder al pago.",
        "Si no se ha seleccionado un método de pago, el usuario no puede realizar el pedido.",
        "El usuario puede aplicar un solo código promocional por pedido.",
        "Los códigos promocionales válidos son: 'RAPPI10', 'WELCOME', 'DISCOUNT'."
      ]
    },
    {
      id: 5,
      title: "Reglas de Estado del Pedido",
      rules: [
        "Un pedido nuevo comienza en estado 'processing'.",
        "Cuando la tienda recibe el pedido, pasa a estado 'confirmed'.",
        "Cuando la tienda comienza a preparar el pedido, pasa a estado 'preparing'.",
        "Cuando el repartidor recoge el pedido, pasa a estado 'onWay'.",
        "Cuando el pedido es entregado, pasa a estado 'delivered'."
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <p className="text-lg text-muted-foreground mb-6">
        Las siguientes reglas de negocio son aplicadas en el proceso de compra de Rappi.
        Estas reglas definen el comportamiento del sistema y las condiciones que se evalúan
        en cada etapa del proceso de compra.
      </p>

      {rules.map((ruleGroup) => (
        <Card key={ruleGroup.id} className="p-5">
          <h3 className="text-xl font-bold mb-4">{ruleGroup.title}</h3>
          <ul className="space-y-3">
            {ruleGroup.rules.map((rule, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
};

export default BusinessRules;