import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ClerkProvider } from '@clerk/nextjs'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

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
            <html lang="ja">
                <body
                    className={cn(
                        'min-h-screen bg-background font-sans antialiased',
                        fontSans.variable
                    )}
                >
                    <div className="flex min-h-screen flex-col items-center justify-between">
                        <Header />
                        <main className="flex-1 bg-slate-100 w-full overflow-y-auto">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </body>
            </html>
        </ClerkProvider>
    )
}
