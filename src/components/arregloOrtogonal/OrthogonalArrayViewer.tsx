// src/components/arregloOrtogonal/OrthogonalArrayViewer.tsx
import React from 'react';
import { TestCase, TestResult } from '@/types/rappi';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle, X } from 'lucide-react';

interface OrthogonalArrayViewerProps {
  testCases: TestCase[];
  testResults: TestResult[];
}

const OrthogonalArrayViewer: React.FC<OrthogonalArrayViewerProps> = ({ testCases, testResults }) => {
  // Calcular la cantidad de pruebas totales que se evitaron
  const totalPossibleCombinations = 3 * 3 * 3 * 3; // 4 factores con 3 niveles cada uno
  const savedPercentage = ((totalPossibleCombinations - testCases.length) / totalPossibleCombinations) * 100;

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Arreglo Ortogonal L9(3<sup>4</sup>)</h2>
        <p className="mb-2 text-muted-foreground">
          Este arreglo ortogonal permite probar 4 factores con 3 niveles cada uno utilizando solo 9 casos de prueba
          en lugar de 81 (3<sup>4</sup>) que serían necesarios para una prueba exhaustiva.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-6">
          <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Casos de prueba totales</h3>
            <div className="flex items-end">
              <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">9</span>
              <span className="text-lg text-blue-600 dark:text-blue-400 ml-2">de 81</span>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-950 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Ahorro en esfuerzo de pruebas</h3>
            <div className="flex items-end">
              <span className="text-4xl font-bold text-green-600 dark:text-green-400">{savedPercentage.toFixed(0)}%</span>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-bold">#</TableHead>
                <TableHead className="font-bold">Método de Pago</TableHead>
                <TableHead className="font-bold">Área de Entrega</TableHead>
                <TableHead className="font-bold">Tipo de Usuario</TableHead>
                <TableHead className="font-bold">Valor del Pedido</TableHead>
                <TableHead className="font-bold">Resultado Esperado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {testCases.map((testCase) => {
                // Buscar el resultado correspondiente a este caso de prueba
                const result = testResults.find(r => r.test === testCase.test);

                return (
                  <TableRow key={testCase.test}>
                    <TableCell>{testCase.test}</TableCell>
                    <TableCell>{testCase.paymentMethod}</TableCell>
                    <TableCell>{testCase.deliveryArea}</TableCell>
                    <TableCell>{testCase.accountType}</TableCell>
                    <TableCell>{testCase.orderValue}</TableCell>
                    <TableCell>
                      {result && (
                        <Badge
                          variant="outline"
                          className={`
                            ${result.freeShipping ? 'bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-300' : ''}
                            ${result.deliveryFee > 4.0 ? 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' : ''}
                          `}
                        >
                          {result.result}
                        </Badge>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Características Específicas de los Resultados</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-bold">#</TableHead>
                <TableHead className="font-bold">Envío Gratis</TableHead>
                <TableHead className="font-bold">Descuento</TableHead>
                <TableHead className="font-bold">Tarifa de Envío</TableHead>
                <TableHead className="font-bold">Justificación</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {testResults.map((result) => (
                <TableRow key={result.test}>
                  <TableCell>{result.test}</TableCell>
                  <TableCell>
                    {result.freeShipping ? (
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        <span>Sí</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-red-600">
                        <X className="w-4 h-4 mr-1" />
                        <span>No</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell>{result.discount > 0 ? `${(result.discount * 100).toFixed(0)}%` : 'No'}</TableCell>
                  <TableCell>${result.deliveryFee.toFixed(2)}</TableCell>
                  <TableCell className="max-w-xs">{result.result}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default OrthogonalArrayViewer;