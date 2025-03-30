// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import { Sidebar } from "@/components/shared/Sidebar";
import { Header } from "@/components/shared/Header";
import { ThemeProvider } from "@/providers/theme-provider";
import { ThemeFavicon } from "@/components/ThemeFavicon";
import {Toaster} from "sonner";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Rappi-Payment",
    description: "Flujo de pago",
    icons: {
        icon: "https://res.cloudinary.com/dv2xu8dwr/image/upload/v1743286802/27239f0e0e1611c19157c313b075ad36d189262885639b1c98e1cfb94f91efb8_200_uwydxt.webp"
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <ThemeFavicon />
            <div className="flex h-screen">
                <Sidebar />
                <div className="flex-1 flex flex-col bg-purple-50/50 dark:bg-neutral-900/95">
                    <Header />
                    <main className="flex-1 p-6 overflow-auto">
                        {children}
                    </main>
                </div>
            </div>
            <Toaster/>
        </ThemeProvider>
        </body>
        </html>
    );
}

