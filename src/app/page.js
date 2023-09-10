'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
// import axios from 'axios'
import EveryWord from './_lib/EveryWord'

export default function Home() {

  const postData = [
    {id: 1, title: 'aaa', slug: 'aaa'},
    {id: 2, title: 'bbb', slug: 'bbb'},
    {id: 3, title: 'ccc', slug: 'ccc'},
  ]

  const router = useRouter()

  useEffect(() => {
    // getEveryWord()
    // getArticles()
  }, [])

  const getEveryWord = async () => {
    const res = await fetch('http://localhost:12600/ziji', {
    });
    const data = await res.json();
    console.log(data)
  }

  // const  getArticles = async (uid, cursor) => {
  //   const res = await axios.post(
  //     "https://api.juejin.cn/content_api/v1/article/query_list",
  //     {
  //       cursor: cursor + "",
  //       sort_type: 2,
  //       user_id: uid + "",
  //     }
  //   );
  
  //   return res.data;
  // }
  

  return (
    <>
       <main>
        <EveryWord/>
       </main>
    </>
  )
}
