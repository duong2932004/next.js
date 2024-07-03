import Link from 'next/link'

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body>
                <nav>
                    <Link href={'/login'}>login</Link>
                    <Link href={'/register'}>register</Link>
                    <Link href={'/'}>home</Link>
                </nav>
                {children}
            </body>
        </html>
    )
}
