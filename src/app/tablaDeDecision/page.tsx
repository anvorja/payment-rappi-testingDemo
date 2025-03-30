// src/app/tablaDeDecision/page.tsx
"use client"

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { freeShippingDecisionTable } from '@/data/RappiMockData';
import DecisionTableViewer from "@/components/tablaDeDecision/DecisionTableViewer";
import BusinessRules from "@/components/tablaDeDecision/BusinessRules";
import DecisionTableExplanation from "@/components/tablaDeDecision/DecisionTableExplanation";

export default function TablaDeDecisionPage() {
    return (
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Tabla de Decisión - Proceso de Venta Rappi</CardTitle>
                    <CardDescription>
                        Visualización de las reglas de negocio para el proceso de compra en formato de tabla de decisión.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="table">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="table">Tabla de Decisión</TabsTrigger>
                            <TabsTrigger value="rules">Reglas de Negocio</TabsTrigger>
                            <TabsTrigger value="explanation">Explicación</TabsTrigger>
                        </TabsList>
                        <TabsContent value="table" className="pt-4">
                            <DecisionTableViewer decisionTable={freeShippingDecisionTable} />
                        </TabsContent>
                        <TabsContent value="rules" className="pt-4">
                            <BusinessRules />
                        </TabsContent>
                        <TabsContent value="explanation" className="pt-4">
                            <DecisionTableExplanation />
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    );
}