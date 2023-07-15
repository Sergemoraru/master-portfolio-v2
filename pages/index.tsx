import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/navbar'
import TypeWriterText from '@/components/typeWriterText'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div>
    <div>
      <NavBar />
    </div>
    <div className=''>
      <div className='flex flex-row justify-center items-center'>
        <TypeWriterText />
      </div>
    </div>
  </div>
    )
}