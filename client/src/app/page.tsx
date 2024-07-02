import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
   return (
      <main>
         <Link href={'/login'}>login</Link>
         <Link href={'/register'}>register</Link>
      </main>
   )
}
