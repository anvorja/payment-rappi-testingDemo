import React from 'react';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info } from 'lucide-react';

const DecisionTableExplanation: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">¿Qué es una Tabla de Decisión?</h2>
        <p className="mb-4">
          Una tabla de decisión es una herramienta para representar reglas de negocio complejas de manera estructurada y sin ambigüedades.
          Permite visualizar todas las posibles combinaciones de condiciones y las acciones correspondientes a tomar en cada caso.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Componentes principales</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            <strong>Condiciones:</strong> Factores que se evalúan y pueden ser verdaderos (S) o falsos (N).
          </li>
          <li>
            <strong>Acciones:</strong> Operaciones que se realizan basadas en las combinaciones de condiciones.
          </li>
          <li>
            <strong>Reglas:</strong> Columnas que representan combinaciones específicas de condiciones y sus acciones correspondientes.
          </li>
          <li>
            <strong>Entradas:</strong> Valores en las celdas que indican si una condición es verdadera (S), falsa (N) o indiferente (-).
          </li>
        </ul>

        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Nota importante</AlertTitle>
          <AlertDescription>
            Las tablas de decisión son especialmente útiles en pruebas de software, ya que permiten identificar
            casos de prueba exhaustivos que cubren todas las combinaciones posibles de condiciones.
          </AlertDescription>
        </Alert>

        <h3 className="text-xl font-semibold mt-6 mb-3">Ventajas en el contexto de pruebas</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Facilitan la comprensión de reglas de negocio complejas</li>
          <li>Permiten identificar combinaciones ilógicas o inconsistentes</li>
          <li>Ayudan a asegurar la completitud de las pruebas</li>
          <li>Proporcionan una documentación clara de las reglas de negocio</li>
          <li>Mejoran la comunicación entre el equipo técnico y los stakeholders</li>
        </ul>
      </Card>

      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Aplicación en el Proceso de Compra Rappi</h2>
        <p className="mb-4">
          En el contexto de Rappi, utilizamos tablas de decisión para modelar el flujo de compra y las reglas que determinan:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Cuándo se aplica envío gratuito</li>
          <li>Qué descuentos se aplican según el tipo de usuario y valor del pedido</li>
          <li>Qué acciones son permitidas en cada etapa del flujo</li>
          <li>Cómo se calculan los costos según la distancia y tipo de cuenta</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Ejemplo: Tabla de Decisión de Envío Gratuito</h3>
        <p className="mb-4">
          La tabla de envío gratuito utiliza dos condiciones principales:
        </p>

        <ol className="list-decimal pl-6 space-y-2 mb-6">
          <li>
            <strong>Tipo de Usuario:</strong> Nuevo, Regular o Premium
          </li>
          <li>
            <strong>Valor del Pedido:</strong> Bajo (&lt;$15.000), Medio ($15.000-$30.000) o Alto (&gt;$30.000)
          </li>
        </ol>

        <p className="mb-4">
          Estas dos condiciones generan 9 combinaciones posibles (3×3), cada una con un resultado específico
          sobre si se aplica o no el envío gratuito. La tabla permite visualizar todas estas combinaciones
          de manera clara y estructurada.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Interpretación de la tabla completa</h3>
        <p>
          La tabla completa del proceso de compra combina múltiples condiciones, como el estado del carrito,
          la validez del código promocional, la selección de dirección y método de pago. Cada columna (R1 a R8)
          representa un escenario específico en el flujo de compra y las acciones que el sistema debe tomar
          en ese escenario.
        </p>
      </Card>
    </div>
  );
};

export default DecisionTableExplanation;