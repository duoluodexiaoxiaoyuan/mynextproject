'use client'

import Image from 'next/image'
import Link from 'next/link'
import PostList from './blog/PostList'
import { useRouter } from 'next/navigation'

export default function Home() {

  const postData = [
    {id: 1, title: 'aaa', slug: 'aaa'},
    {id: 2, title: 'bbb', slug: 'bbb'},
    {id: 3, title: 'ccc', slug: 'ccc'},
  ]

  const router = useRouter()

  return (
    <>
       {/* <h1 className={"text-4xl text-orange-600"}>Hello Home Page</h1><br/>
       <Link href={"/dashboard"}>Dashboard</Link><br/><br/>
       <PostList  posts={postData}/> */}
       <Link href="/analytics">Analytics Page</Link><br/>
       <Link href="/team">Teams</Link><br />
       <button type={"button"} onClick={() => router.push('/dashboard')}>
          Dashboard
       </button>
    </>
  )
}
