// src/app/docs/page.tsx
"use client"

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, BookOpen, Code, CheckSquare } from 'lucide-react';

export default function DocumentationPage() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Documentación del Proyecto</CardTitle>
          <CardDescription>
            Información y recursos sobre pruebas funcionales con técnicas de caja negra
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="guides">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="guides">Guías</TabsTrigger>
              <TabsTrigger value="api">API</TabsTrigger>
              <TabsTrigger value="examples">Ejemplos</TabsTrigger>
              <TabsTrigger value="resources">Recursos</TabsTrigger>
            </TabsList>

            <TabsContent value="guides" className="pt-4">
              <div className="space-y-4">
                <div className="flex items-start p-4 border rounded-lg">
                  <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 mr-4">
                    <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Guía de Tablas de Decisión</h3>
                    <p className="text-sm text-muted-foreground">
                      Aprende a implementar y utilizar tablas de decisión para pruebas de caja negra
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-4 border rounded-lg">
                  <div className="p-2 rounded-full bg-green-100 dark:bg-green-900 mr-4">
                    <BookOpen className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Guía de Arreglos Ortogonales</h3>
                    <p className="text-sm text-muted-foreground">
                      Cómo utilizar arreglos ortogonales para reducir el número de casos de prueba
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-4 border rounded-lg">
                  <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900 mr-4">
                    <CheckSquare className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Buenas Prácticas</h3>
                    <p className="text-sm text-muted-foreground">
                      Recomendaciones y buenas prácticas para implementar pruebas funcionales
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="api" className="pt-4">
              <div className="space-y-4">
                <div className="flex items-start p-4 border rounded-lg">
                  <div className="p-2 rounded-full bg-amber-100 dark:bg-amber-900 mr-4">
                    <Code className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Documentación de API</h3>
                    <p className="text-sm text-muted-foreground">
                      Referencia técnica para desarrolladores que implementan pruebas automatizadas
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="examples" className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Ejemplo: Tabla de Decisión</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Caso práctico de implementación de tabla de decisión para validar reglas de negocio en una aplicación de e-commerce.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Ejemplo: Arreglo Ortogonal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Implementación de arreglo ortogonal L9(3^4) para pruebas de un sistema de pagos.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="resources" className="pt-4">
              <div className="space-y-4">
                <h3 className="font-semibold">Recursos Adicionales</h3>
                <ul className="space-y-2">
                  <li className="p-3 bg-muted rounded-md">
                    <span className="font-medium">Material del curso</span> - Presentaciones y documentos de referencia
                  </li>
                  <li className="p-3 bg-muted rounded-md">
                    <span className="font-medium">Biblioteca de casos de prueba</span> - Ejemplos y plantillas
                  </li>
                  <li className="p-3 bg-muted rounded-md">
                    <span className="font-medium">Herramientas recomendadas</span> - Software para automatización de pruebas
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}