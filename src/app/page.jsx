// 'use client'
// import { useRouter } from 'next/navigation'
// import UserImage from "../static/img/user-onboarding-left.png"
import Image from "next/image"
// import UserImage from "../../public/user-onboarding-left.png"
export default function Home() {
  // const router = useRouter()

  return (
    <>
     {/*pc start */}
      {/* 通过看效果发现padding的间距是随着像素而变化的 */}
       {/* <main className="h-screen">
          <div className="m-12 bg-green-400 h-2/3 flex justify-center items-center text-3xl md:p-14 lg:p-16 xl:p-20">
            <p className="bg-sky-400">nihaoshijie</p>  
          </div>
       </main> */}
       {/* end */}
       {/* start 响应式布局先写移动端 md768的时候开始改变 */}
        {/* <main className="grid gap-8 md:grid-cols-2 md:max-2xl:bg-blue-400 sm:text-left">
          <div>
            <img className="w-full rounded-lg" src="https://tse3-mm.cn.bing.net/th/id/OIP-C.ZkoPhpKfJwsvGmpm8RsragHaFp?pid=ImgDet&rs=1" alt="" />
          </div>
          <div>
            <h1 className="text-4xl font-medium mb-2">Headline</h1>
            <p className="md:tablet:text-red-400">牛倒江九老破随默否图！富奇停死摇森级存？跳烟睡各话发青街的临双岁些之跳希罪？围找宝样全。打红读周弄睡风贝痛渐美且接抱雷睡。奶脱别深社桌饭入敢从！基品刻小司初致真痛觉童求景及！钟不若千写车语游单间助围了局喝欧或三！录求如渐烟火妻贝挥戴乐纸用录小？智段呀存首卖泪哪制到挥听必定续香疑意！岁带相工智牛！义抱号学忽天神自汉默被以父右商带？成头佛速娜破火举生着？消船杰坦尔勒拥礼凡它树光上波。爸望摇成毫治园穿？京睛警集短毛江贝便座三很局定显创牌！它？</p>
          </div>
        </main> */}
        {/* end */}

        {/* 看下不变是什么效果 */}
        {/* md最小768    sm640 - md768 - lg1024 -xl1280 - 2xl1536 */}
        {/* md最小640生效，就是满足最小宽度生效 */}
        {/* max-md最大640 0-640生效， 比喻成买东西就理解了 */}
        <main className="grid gap-8 md:grid-cols-2 md:max-2xl:bg-blue-400 sm:text-left">
          <div>
            <img src="/user-onboarding-left.png"/>
            {/* <img className="w-full rounded-lg" src="https://tse3-mm.cn.bing.net/th/id/OIP-C.ZkoPhpKfJwsvGmpm8RsragHaFp?pid=ImgDet&rs=1" alt="" /> */}
          </div>
          <div>
            <h1 className="text-4xl font-medium mb-2">Headline</h1>
            <p className="md:tablet:text-red-400">牛倒江九老破随默否图！富奇停死摇森级存？跳烟睡各话发青街的临双岁些之跳希罪？围找宝样全。打红读周弄睡风贝痛渐美且接抱雷睡。奶脱别深社桌饭入敢从！基品刻小司初致真痛觉童求景及！钟不若千写车语游单间助围了局喝欧或三！录求如渐烟火妻贝挥戴乐纸用录小？智段呀存首卖泪哪制到挥听必定续香疑意！岁带相工智牛！义抱号学忽天神自汉默被以父右商带？成头佛速娜破火举生着？消船杰坦尔勒拥礼凡它树光上波。爸望摇成毫治园穿？京睛警集短毛江贝便座三很局定显创牌！它？</p>
          </div>
        </main>
    </>
  )
}
