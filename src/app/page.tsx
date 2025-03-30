// src/app/page.tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ShoppingCart, Table2, Grid3X3 } from 'lucide-react';

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle className="text-2xl">Pruebas Funcionales usando Técnicas de Caja Negra</CardTitle>
          <CardDescription>
            Aplicación de técnicas de pruebas de caja negra al proceso de compra en una aplicación estilo Rappi
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Esta aplicación demuestra la implementación de pruebas funcionales usando técnicas de caja negra,
            específicamente tablas de decisión y arreglos ortogonales, aplicadas a un flujo de compra similar al de Rappi.
          </p>
          <p>
            Selecciona una de las secciones a continuación para explorar cada aspecto del proyecto:
          </p>
        </CardContent>
      </Card>

      {/* Tarjeta de Proceso de Compra */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Proceso de Compra
          </CardTitle>
          <CardDescription>
            Simula el flujo completo de compra desde la selección de restaurante hasta la confirmación del pedido
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Implementa todas las etapas de un proceso de compra: selección de tienda, productos, carrito, dirección,
            pago y confirmación. Incluye lógica de negocio para descuentos, códigos promocionales y envío gratuito.
          </p>
        </CardContent>
        <CardFooter>
          <Link href="/payment" className="w-full">
            <Button className="w-full">
              Probar flujo de compra
            </Button>
          </Link>
        </CardFooter>
      </Card>

      {/* Tarjeta de Tabla de Decisión */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Table2 className="h-5 w-5" />
            Tabla de Decisión
          </CardTitle>
          <CardDescription>
            Visualización de las reglas de negocio para el proceso de compra
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Muestra cómo las tablas de decisión representan reglas de negocio complejas de manera estructurada,
            permitiendo identificar todas las combinaciones posibles de condiciones y sus acciones correspondientes.
          </p>
        </CardContent>
        <CardFooter>
          <Link href="/tablaDeDecision" className="w-full">
            <Button className="w-full">
              Ver tabla de decisión
            </Button>
          </Link>
        </CardFooter>
      </Card>

      {/* Tarjeta de Arreglos Ortogonales */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Grid3X3 className="h-5 w-5" />
            Arreglos Ortogonales
          </CardTitle>
          <CardDescription>
            Reducción eficiente de casos de prueba manteniendo la cobertura
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Demuestra cómo los arreglos ortogonales permiten reducir un conjunto de pruebas exhaustivas de 81 casos
            a solo 9 casos, manteniendo una cobertura óptima de las interacciones entre las diferentes variables.
          </p>
        </CardContent>
        <CardFooter>
          <Link href="/arregloOrtogonal" className="w-full">
            <Button className="w-full">
              Explorar arreglo ortogonal
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}