import Link from 'next/link'
export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang='en'>
         <Link href={'/login'}>login</Link>
         <Link href={'/register'}>register</Link>
         <Link href={'/'}>home</Link>
         <body>{children}</body>
         {/* <body className={inter.className}>{children}</body> */}
      </html>
   )
}
