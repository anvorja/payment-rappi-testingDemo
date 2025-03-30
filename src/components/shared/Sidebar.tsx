// src/components/shared/Sidebar.tsx
"use client"
import React, {useState} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navigationData } from '@/data/NavigationMockData';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Sidebar() {
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="relative">
            {/* Toggle Button - Ahora fuera del Card principal para ser siempre visible */}
            <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-8 w-8 h-8 rounded-full border bg-background shadow-md hover:bg-accent hover:text-accent-foreground z-10 transform translate-x-1/2"
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                <ChevronRight className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    isCollapsed ? "" : "rotate-180"
                )} />
            </Button>

            <Card className={cn(
                "h-screen p-4 flex flex-col gap-6 rounded-none border-r transition-all duration-300",
                isCollapsed ? "w-20" : "w-64"
            )}>
                {/* Logo */}
                <Link href="/" className={cn(
                    "flex items-center gap-2 px-2",
                    isCollapsed && "justify-center"
                )}>
                    <Image
                        src="https://res.cloudinary.com/dv2xu8dwr/image/upload/v1743286802/27239f0e0e1611c19157c313b075ad36d189262885639b1c98e1cfb94f91efb8_200_uwydxt.webp"
                        alt="Logo"
                        width={24}
                        height={24}
                        className="block dark:hidden"
                    />
                    <Image
                        src="https://res.cloudinary.com/dv2xu8dwr/image/upload/v1743286802/27239f0e0e1611c19157c313b075ad36d189262885639b1c98e1cfb94f91efb8_200_uwydxt.webp"
                        alt="Logo"
                        width={24}
                        height={24}
                        className="hidden dark:block"
                    />
                    {!isCollapsed && <span className="font-bold text-xl">Rappi</span>}
                </Link>

                {/* Navigation */}
                <nav className="flex-1 flex flex-col gap-6">
                    {navigationData.map((section) => (
                        <div key={section.section}>
                            {!isCollapsed && (
                                <h2 className="font-semibold text-sm text-muted-foreground mb-2 px-2">
                                    {section.section}
                                </h2>
                            )}
                            <div className="flex flex-col gap-1">
                                {section.items.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={cn(
                                                "flex items-center gap-3 px-2 py-2 rounded-md text-sm transition-colors relative group",
                                                "hover:bg-primary/10 dark:hover:bg-primary/20",
                                                "hover:text-primary dark:hover:text-primary",
                                                isActive && "bg-primary/15 dark:bg-primary/25 text-primary dark:text-primary font-medium",
                                                !isActive && "text-foreground",
                                                isCollapsed && "justify-center"
                                            )}
                                        >
                                            <item.icon className="w-4 h-4" />
                                            {!isCollapsed && <span>{item.title}</span>}
                                            {/* Tooltip for collapsed state */}
                                            {isCollapsed && (
                                                <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded-md invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 whitespace-nowrap z-50">
                                                    {item.title}
                                                </div>
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </nav>

                {/* User Profile */}
                <div className="border-t pt-4">
                    <div className={cn(
                        "flex items-center gap-3 px-2",
                        isCollapsed && "justify-center"
                    )}>
                        <Image
                            src="https://res.cloudinary.com/dv2xu8dwr/image/upload/v1736765937/admin-avatar_vhly3y.jpg"
                            alt="Admin Avatar"
                            width={32}
                            height={32}
                            className="rounded-full object-cover"
                        />
                        {!isCollapsed && (
                            <div className="flex flex-col">
                                <span className="text-sm font-medium">anborja</span>
                                <span className="text-xs text-muted-foreground">borjauser@rappi.co</span>
                            </div>
                        )}
                    </div>
                </div>
            </Card>
        </div>
    );
}