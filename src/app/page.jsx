// 'use client'
// import { useRouter } from 'next/navigation'
// import UserImage from "../static/img/user-onboarding-left.png"
import Image from "next/image"
// import UserImage from "../../public/user-onboarding-left.png"
export default function Home() {
  // const router = useRouter()

  return (
    <>
      {/* 现在的问题是页面内容过多，假如你把最外层的div设置为铺满屏幕，当你里面的内容超出屏幕的时候，里面的div宽度没有
          充满盒子，所以就会看到大片空白，这个时候应该如何解决呢
      */}
      {/* start 第一种方法，最外层设置最小高度 */}
      {/* <div className="min-h-screen bg-purple-400">
          <div className="h-[2000px] bg-red-600 w-[400px]"></div>
      </div> */}
      {/* end */}

      {/* start 第一种方法，最外层设置最小高度 */}
      <div className="min-h-screen bg-purple-400">
          <div className="h-[2000px] bg-red-600 w-[400px]"></div>
      </div>
      {/* end */}
    </>
  )
}
