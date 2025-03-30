import React from 'react';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info, BarChart, TableProperties } from 'lucide-react';

const OrthogonalArrayExplanation: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">¿Qué son los Arreglos Ortogonales?</h2>
        <p className="mb-4">
          Los arreglos ortogonales son herramientas matemáticas que permiten reducir significativamente el número de casos de prueba
          necesarios para verificar un sistema, manteniendo una cobertura óptima de las interacciones entre las diferentes variables o factores.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Principios fundamentales</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            <strong>Reducción de casos:</strong> Permiten reducir un conjunto de pruebas exhaustivas a un subconjunto mucho más pequeño y manejable.
          </li>
          <li>
            <strong>Cobertura de interacciones:</strong> Garantizan que todas las interacciones entre pares de variables sean probadas al menos una vez.
          </li>
          <li>
            <strong>Balanceo de niveles:</strong> Cada nivel de cada factor aparece el mismo número de veces en el arreglo.
          </li>
          <li>
            <strong>Ortogonalidad:</strong> Los vectores columna del arreglo son ortogonales entre sí, lo que garantiza independencia.
          </li>
        </ul>

        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Ventaja principal</AlertTitle>
          <AlertDescription>
            Un arreglo ortogonal L9(3^4) permite probar 4 factores con 3 niveles cada uno utilizando solo 9 casos
            de prueba en lugar de 81 (3^4) que serían necesarios para una prueba exhaustiva, logrando una reducción del 89%.
          </AlertDescription>
        </Alert>

        <h3 className="text-xl font-semibold mt-6 mb-3">Notación</h3>
        <p className="mb-4">
          Los arreglos ortogonales se denotan como L<sub>a</sub>(b<sup>c</sup>), donde:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>a:</strong> Número de pruebas o filas en el arreglo</li>
          <li><strong>b:</strong> Número de niveles para cada factor</li>
          <li><strong>c:</strong> Número de factores (variables) que se pueden estudiar</li>
        </ul>
      </Card>

      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Aplicación al Proceso de Compra Rappi</h2>
        <p className="mb-4">
          En el contexto de Rappi, utilizamos un arreglo ortogonal L9(3^4) para probar el proceso de compra considerando
          cuatro factores principales, cada uno con tres posibles valores:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 mr-3">
                <TableProperties className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold">Factores (Variables)</h3>
            </div>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Método de pago:</strong> Efectivo, Tarjeta, Digital</li>
              <li><strong>Área de entrega:</strong> Cercana, Media, Lejana</li>
              <li><strong>Tipo de usuario:</strong> Nuevo, Regular, Premium</li>
              <li><strong>Valor del pedido:</strong> Bajo, Medio, Alto</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="p-2 rounded-full bg-green-100 dark:bg-green-900 mr-3">
                <BarChart className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold">Resultados Evaluados</h3>
            </div>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Envío gratuito:</strong> Sí/No</li>
              <li><strong>Descuentos aplicados:</strong> Porcentaje</li>
              <li><strong>Tarifa de envío:</strong> Monto calculado</li>
              <li><strong>Resultado global:</strong> Clasificación del caso</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">¿Por qué funciona?</h3>
        <p className="mb-4">
          Este enfoque funciona porque la mayoría de los errores en los sistemas son causados por interacciones entre
          apenas dos factores. Los arreglos ortogonales garantizan que todas las combinaciones de pares de factores
          sean probadas, permitiendo detectar la mayoría de los defectos con un número mucho menor de pruebas.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Ventajas en pruebas de software</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Reducción significativa del tiempo y costo de pruebas</li>
          <li>Mantenimiento de una alta cobertura de escenarios clave</li>
          <li>Identificación eficiente de errores en interacciones entre variables</li>
          <li>Capacidad para probar sistemas complejos de manera sistemática</li>
          <li>Trazabilidad clara entre casos de prueba y factores estudiados</li>
        </ul>
      </Card>
    </div>
  );
};
export default OrthogonalArrayExplanation;