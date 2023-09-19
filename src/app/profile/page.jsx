import React from 'react'
import Image from 'next/image'


export default function ProfilePage() {
  return (
    <div>
      {/* 头像加简单信息 */}
      <div className='bg-blue-300 flex h-80'>
        <div>
          <img 
            className='w-40 h-40 rounded-full'
            src="https://avatars.githubusercontent.com/u/59086082?v=4" 
            alt="头像加载失败" 
          />
        </div>
        <div className='ml-5'>
          <div><span className='mr-5'>Name:</span>duoluodexiaoxiaoyuan</div>
          <div><span className='mr-5'>From:</span>China <Image src="/china.svg" alt="Vercel Logo" width={72} height={16} /></div>
        </div>
      </div>
    </div>
  )
}
