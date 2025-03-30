// src/components/shared/Header.tsx
"use client"

import React from 'react';
import { CheckSquare } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ModeToggle } from "@/components/ModeToggle";
import { usePathname } from 'next/navigation';

export function Header() {
    const pathname = usePathname();

    // Función para obtener el título según la ruta actual
    const getPageTitle = () => {
        if (pathname === '/') return 'Inicio';
        if (pathname === '/payment') return 'Proceso de Compra';
        if (pathname === '/tablaDeDecision') return 'Tabla de Decisión';
        if (pathname === '/arregloOrtogonal') return 'Arreglo Ortogonal';
        if (pathname === '/settings') return 'Configuración';
        if (pathname === '/docs') return 'Documentación';
        return 'Pruebas Funcionales';
    };

    return (
        <Card className="h-16 rounded-none border-b relative">
            {/* Botón de tema en la esquina superior derecha */}
            <div className="absolute top-3 right-4 z-10">
                <ModeToggle />
            </div>

            {/* Título de la página centrado */}
            <div className="flex items-center justify-center h-full">
                <div className="flex items-center gap-2">
                    <CheckSquare className="h-5 w-5 text-primary" />
                    <h1 className="text-lg font-semibold">{getPageTitle()}</h1>
                </div>
            </div>
        </Card>
    );
}