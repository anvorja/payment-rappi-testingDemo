import {
    Home,
    ShoppingCart,
    Table2,
    Grid3X3,
    Settings,
    BookOpen
} from 'lucide-react';
import { NavigationSection } from "@/types/navigation";

export const navigationData: NavigationSection[] = [
    {
        section: "Principal",
        items: [
            {
                title: "Inicio",
                href: "/",
                icon: Home
            },
            {
                title: "Proceso de Compra",
                href: "/payment",
                icon: ShoppingCart
            },
            {
                title: "Tabla de Decisión",
                href: "/tablaDeDecision",
                icon: Table2
            },
            {
                title: "Arreglo Ortogonal",
                href: "/arregloOrtogonal",
                icon: Grid3X3
            }
        ]
    },
    {
        section: "Recursos",
        items: [
            {
                title: "Documentación",
                href: "/docs",
                icon: BookOpen
            },
            {
                title: "Configuración",
                href: "/settings",
                icon: Settings
            }
        ]
    }
];