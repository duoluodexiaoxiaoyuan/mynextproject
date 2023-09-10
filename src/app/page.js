'use client'
import { useRouter } from 'next/navigation'
import EveryWord from './_lib/EveryWord'

export default function Home() {
  const router = useRouter()

  return (
    <>
       <main>
        <EveryWord/>
       </main>
    </>
  )
}
