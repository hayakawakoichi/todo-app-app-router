import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ClerkProvider } from '@clerk/nextjs'

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans'
})

export const metadata: Metadata = {
    title: 'TODO APP | Next.js App Router Sample App',
    description: 'TODO APP | Next.js App Router Sample App'
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body
                    className={cn(
                        'min-h-screen bg-background font-sans antialiased',
                        fontSans.variable
                    )}
                >
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}
