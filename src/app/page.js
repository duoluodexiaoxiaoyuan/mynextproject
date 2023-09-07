'use client'

import Image from 'next/image'
import Link from 'next/link'
import PostList from './blog/PostList'
import { useRouter } from 'next/navigation'
import photos from './photo'

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
       {/* <button type={"button"} onClick={() => router.push('/dashboard')}>
          Dashboard
       </button> */}
       <main>
        <div className='grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 auto-rows-max gap-6'>
          {console.log(photos)}
          {photos.map((photo) => {
            return <Link key={photo.id} href={`/photos/${photo.id}`}>
              <Image
                alt=''
                src={photo.imageSrc}
                height={100}
                width={100}
              />
            </Link>
          })}
        </div>
       </main>
    </>
  )
}
