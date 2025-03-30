import React from 'react';
import { DecisionTableRow } from '@/types/rappi';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card } from '@/components/ui/card';

interface DecisionTableViewerProps {
  decisionTable: DecisionTableRow[];
}

const DecisionTableViewer: React.FC<DecisionTableViewerProps> = ({ decisionTable }) => {
  return (
    <div className="space-y-6">
      <Card>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Tabla de Decisión para Envío Gratuito</h2>
          <p className="mb-6 text-muted-foreground">
            Esta tabla de decisión modela las reglas que determinan cuándo un pedido califica para envío gratuito,
            basado en el tipo de cuenta del usuario y el valor del pedido.
          </p>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-bold">#</TableHead>
                  <TableHead className="font-bold">Tipo de Usuario</TableHead>
                  <TableHead className="font-bold">Valor del Pedido</TableHead>
                  <TableHead className="font-bold">Envío Gratuito</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {decisionTable.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.accountType}</TableCell>
                    <TableCell>{row.orderValue}</TableCell>
                    <TableCell className={row.result === 'Sí' ? 'text-green-600 font-medium' : ''}>
                      {row.result}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </Card>

      <Card>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3">Tabla de Decisión Completa del Proceso de Compra</h3>
          <p className="mb-4 text-muted-foreground">
            La tabla completa del proceso de compra incluye más condiciones y acciones.
          </p>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-bold">Condiciones / Acciones</TableHead>
                  <TableHead className="text-center font-bold">R1</TableHead>
                  <TableHead className="text-center font-bold">R2</TableHead>
                  <TableHead className="text-center font-bold">R3</TableHead>
                  <TableHead className="text-center font-bold">R4</TableHead>
                  <TableHead className="text-center font-bold">R5</TableHead>
                  <TableHead className="text-center font-bold">R6</TableHead>
                  <TableHead className="text-center font-bold">R7</TableHead>
                  <TableHead className="text-center font-bold">R8</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-blue-50 dark:bg-blue-950">
                  <TableCell colSpan={9} className="font-semibold">Carrito</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Carrito Vacío</TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Carrito Con Productos</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center">X</TableCell>
                </TableRow>

                <TableRow className="bg-blue-50 dark:bg-blue-950">
                  <TableCell colSpan={9} className="font-semibold">Código Promocional</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Código Válido</TableCell>
                  <TableCell className="text-center">-</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Código Inválido/Sin Código</TableCell>
                  <TableCell className="text-center">-</TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center">X</TableCell>
                </TableRow>

                <TableRow className="bg-blue-50 dark:bg-blue-950">
                  <TableCell colSpan={9} className="font-semibold">Dirección de Entrega</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Dirección Seleccionada</TableCell>
                  <TableCell className="text-center">-</TableCell>
                  <TableCell className="text-center">-</TableCell>
                  <TableCell className="text-center">-</TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center">X</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Dirección No Seleccionada</TableCell>
                  <TableCell className="text-center">-</TableCell>
                  <TableCell className="text-center">-</TableCell>
                  <TableCell className="text-center">-</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                </TableRow>

                <TableRow className="bg-blue-50 dark:bg-blue-950">
                  <TableCell colSpan={9} className="font-semibold">Método de Pago</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Método de Pago Seleccionado</TableCell>
                  <TableCell className="text-center">-</TableCell>
                  <TableCell className="text-center">-</TableCell>
                  <TableCell className="text-center">-</TableCell>
                  <TableCell className="text-center">-</TableCell>
                  <TableCell className="text-center">-</TableCell>
                  <TableCell className="text-center">-</TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center">X</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Método de Pago No Seleccionado</TableCell>
                  <TableCell className="text-center">-</TableCell>
                  <TableCell className="text-center">-</TableCell>
                  <TableCell className="text-center">-</TableCell>
                  <TableCell className="text-center">-</TableCell>
                  <TableCell className="text-center">-</TableCell>
                  <TableCell className="text-center">-</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                </TableRow>

                <TableRow className="bg-green-50 dark:bg-green-950">
                  <TableCell colSpan={9} className="font-semibold">Acciones</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mostrar &quot;Carrito Vacío&quot;</TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Permitir Proceder a Dirección</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Aplicar Descuento 10%</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Permitir Proceder a Pago</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Permitir Realizar Pedido</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center">X</TableCell>
                  <TableCell className="text-center">X</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DecisionTableViewer;