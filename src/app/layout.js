import './globals.css'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import Loading from '@/app/loading.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'github',
  description: 'Imitation Github',
}
// 默认写的是{children}，但是我们写成props的时候要把{}去掉
export default function RootLayout(props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {props.children}
        {/* {props.modal}  */}
        {/* {props.team}
        {props.analytics} */}
        {/* <Suspense fallback={<Loading/>}>
          {props.children}
          {props.team}
          {props.analytics}
        </Suspense> */}
      </body>
    </html>
  )
}
