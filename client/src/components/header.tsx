import { Link } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'

Link
export default function Header() {
   return (
      <div>
         <ul>
            <li>
               <Link href='/login'>Đăng ký</Link>
            </li>
            <li>
               <Link href='/register'>Đăng nhập</Link>
            </li>
         </ul>
         <ModeToggle />
      </div>
   )
}
