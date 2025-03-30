// src/app/arregloOrtogonal/page.tsx
"use client"

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { orthogonalArrayTests, orthogonalArrayResults } from '@/data/RappiMockData';
import TestCaseSimulator from '@/components/arregloOrtogonal/TestCaseSimulator';
import OrthogonalArrayViewer from "@/components/arregloOrtogonal/OrthogonalArrayViewer";
import OrthogonalArrayExplanation from "@/components/arregloOrtogonal/OrthogonalArrayExplanation";

export default function ArregloOrtogonalPage() {
    return (
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Arreglos Ortogonales para Pruebas de Software</CardTitle>
                    <CardDescription>
                        Aplicación de arreglos ortogonales para reducir el número de casos de prueba manteniendo la cobertura en el proceso de compra.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="viewer">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="viewer">Arreglo Ortogonal</TabsTrigger>
                            <TabsTrigger value="simulator">Simulador</TabsTrigger>
                            <TabsTrigger value="explanation">Explicación</TabsTrigger>
                        </TabsList>
                        <TabsContent value="viewer" className="pt-4">
                            <OrthogonalArrayViewer
                                testCases={orthogonalArrayTests}
                                testResults={orthogonalArrayResults}
                            />
                        </TabsContent>
                        <TabsContent value="simulator" className="pt-4">
                            <TestCaseSimulator testCases={orthogonalArrayTests} />
                        </TabsContent>
                        <TabsContent value="explanation" className="pt-4">
                            <OrthogonalArrayExplanation />
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    );
}