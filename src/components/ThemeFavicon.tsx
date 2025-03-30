'use client'

import { useEffect } from 'react'
import { useTheme } from 'next-themes'

export function ThemeFavicon() {
    const { theme, systemTheme } = useTheme()

    useEffect(() => {
        const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement
        const currentTheme = theme === 'system' ? systemTheme : theme

        if (link) {
            if (currentTheme === 'dark') {
                link.href = 'https://res.cloudinary.com/dv2xu8dwr/image/upload/v1743286802/27239f0e0e1611c19157c313b075ad36d189262885639b1c98e1cfb94f91efb8_200_uwydxt.webp'
            } else {
                link.href = 'https://res.cloudinary.com/dv2xu8dwr/image/upload/v1743286802/27239f0e0e1611c19157c313b075ad36d189262885639b1c98e1cfb94f91efb8_200_uwydxt.webp'
            }
        }
    }, [theme, systemTheme])

    return null
}