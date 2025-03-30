import React, { useState } from 'react';
import { TestCase } from '@/types/rappi';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Check, CreditCard, MapPin, User, DollarSign, AlertCircle, Play } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';

interface TestCaseSimulatorProps {
  testCases: TestCase[];
}

const TestCaseSimulator: React.FC<TestCaseSimulatorProps> = ({ testCases }) => {
  const [selectedTest, setSelectedTest] = useState<TestCase | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState<{
    freeShipping: boolean;
    discount: number;
    deliveryFee: number;
    total: number;
    result: string;
  } | null>(null);

  // Simular la ejecución de un caso de prueba
  const runTest = () => {
    if (!selectedTest) return;

    setIsRunning(true);
    setResult(null);

    // Simular un tiempo de procesamiento
    setTimeout(() => {
      let freeShipping = false;
      let discount = 0;
      let deliveryFee = 3.5; // valor por defecto
      let result = "Cobro estándar";

      // Aplicar reglas según el tipo de usuario
      if (selectedTest.accountType === "Premium") {
        discount = 0.05; // 5% de descuento para usuarios premium

        // Envío gratis para Premium con pedidos Medium o Alto
        if (selectedTest.orderValue === "Medio" || selectedTest.orderValue === "Alto") {
          freeShipping = true;
          deliveryFee = 0;
          result = "Envío gratis por usuario premium";
        }
      }

      // Envío gratis para todos los usuarios con pedidos de valor Alto
      if (selectedTest.orderValue === "Alto") {
        freeShipping = true;
        deliveryFee = 0;
        result = "Envío gratis por monto alto";
      }

      // Ajustar tarifa de envío según área
      if (!freeShipping) {
        if (selectedTest.deliveryArea === "Cercana") {
          deliveryFee = 2.5;
        } else if (selectedTest.deliveryArea === "Media") {
          deliveryFee = 3.5;
        } else if (selectedTest.deliveryArea === "Lejana") {
          deliveryFee = 4.5;
          result = "Recargo por distancia";
        }
      }

      // Calcular total (asumiendo un subtotal base según valor del pedido)
      const subtotal = selectedTest.orderValue === "Bajo" ? 10 :
                     selectedTest.orderValue === "Medio" ? 22 : 35;

      const total = subtotal * (1 - discount) + (freeShipping ? 0 : deliveryFee);

      setResult({
        freeShipping,
        discount,
        deliveryFee,
        total,
        result
      });

      setIsRunning(false);
    }, 1500); // Simular 1.5 segundos de procesamiento
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Simulador de Casos de Prueba</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="test-case">Seleccionar caso de prueba</Label>
            <Select
              onValueChange={(value) => {
                const test = testCases.find(t => t.test === parseInt(value));
                if (test) setSelectedTest(test);
              }}
            >
              <SelectTrigger id="test-case" className="w-full">
                <SelectValue placeholder="Selecciona un caso de prueba" />
              </SelectTrigger>
              <SelectContent>
                {testCases.map((test) => (
                  <SelectItem key={test.test} value={test.test.toString()}>
                    Caso #{test.test}: {test.accountType} - {test.orderValue}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedTest && (
            <Card className="border-dashed">
              <CardHeader>
                <CardTitle>Detalles del caso de prueba #{selectedTest.test}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900">
                      <CreditCard className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Método de pago</p>
                      <p className="font-medium">{selectedTest.paymentMethod}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-green-100 dark:bg-green-900">
                      <MapPin className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Área de entrega</p>
                      <p className="font-medium">{selectedTest.deliveryArea}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900">
                      <User className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Tipo de usuario</p>
                      <p className="font-medium">{selectedTest.accountType}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-amber-100 dark:bg-amber-900">
                      <DollarSign className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Valor del pedido</p>
                      <p className="font-medium">{selectedTest.orderValue}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={runTest}
                  disabled={isRunning}
                  className="w-full"
                >
                  {isRunning ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Ejecutando...
                    </>
                  ) : (
                    <>
                      <Play className="mr-2 h-4 w-4" />
                      Ejecutar caso de prueba
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          )}

          {!selectedTest && !isRunning && (
            <Alert variant="default">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Selecciona un caso de prueba</AlertTitle>
              <AlertDescription>
                Selecciona uno de los casos de prueba del arreglo ortogonal para ver sus detalles y ejecutar la simulación.
              </AlertDescription>
            </Alert>
          )}

          {isRunning && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-4 h-4 rounded-full bg-blue-500 animate-ping"></div>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Ejecutando caso de prueba...</p>
              </div>

              <Skeleton className="h-8 w-full rounded-md mb-2" />
              <Skeleton className="h-8 w-full rounded-md mb-2" />
              <Skeleton className="h-8 w-full rounded-md mb-2" />
              <Skeleton className="h-8 w-full rounded-md" />
            </div>
          )}

          {result && !isRunning && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  Resultado de la prueba
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-y-2">
                  <p className="text-muted-foreground">Envío gratis:</p>
                  <p className={result.freeShipping ? "text-green-600 font-medium" : ""}>
                    {result.freeShipping ? "Sí" : "No"}
                  </p>

                  <p className="text-muted-foreground">Descuento:</p>
                  <p>{result.discount > 0 ? `${(result.discount * 100).toFixed(0)}%` : "No aplicado"}</p>

                  <p className="text-muted-foreground">Tarifa de envío:</p>
                  <p>${result.deliveryFee.toFixed(2)}</p>

                  <p className="text-muted-foreground">Total estimado:</p>
                  <p className="font-bold">${result.total.toFixed(2)}</p>
                </div>

                <Alert variant="default" className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                  <AlertTitle className="text-blue-800 dark:text-blue-300">Resultado de la prueba</AlertTitle>
                  <AlertDescription className="text-blue-700 dark:text-blue-400">
                    {result.result}
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TestCaseSimulator;