// 'use client'
// import { useRouter } from 'next/navigation'

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
          <div className="max-sm:hidden">
            <img className="w-full rounded-lg" src="https://tse3-mm.cn.bing.net/th/id/OIP-C.ZkoPhpKfJwsvGmpm8RsragHaFp?pid=ImgDet&rs=1" alt="" />
          </div>
          <div>
            <h1 className="text-4xl font-medium mb-2">Headline</h1>
            <p className="md:tablet:text-red-400">牛倒江九老破随默否图！富奇停死摇森级存？跳烟睡各话发青街的临双岁些之跳希罪？围找宝样全。打红读周弄睡风贝痛渐美且接抱雷睡。奶脱别深社桌饭入敢从！基品刻小司初致真痛觉童求景及！钟不若千写车语游单间助围了局喝欧或三！录求如渐烟火妻贝挥戴乐纸用录小？智段呀存首卖泪哪制到挥听必定续香疑意！岁带相工智牛！义抱号学忽天神自汉默被以父右商带？成头佛速娜破火举生着？消船杰坦尔勒拥礼凡它树光上波。爸望摇成毫治园穿？京睛警集短毛江贝便座三很局定显创牌！它？</p>
          </div>
        </main> */}
      {/* end */}
      {/* s不是最外面的div导致的，是里面的div内容长度高了 */}
      {/* <div className="bg-[#202326] flex flex-row justify-center w-full">
          <div className="bg-red-400 w-[1440px] h-[1024px] relative">
            <div className="bg-green-300 absolute w-1/2 h-[1024px] top-0 left-0 max-sm:hidden">左</div>
            <div className="bg-blue-500 absolute w-1/2 h-[1024px] top-0 left-[720px] max-sm:w-full max-sm:left-0">右</div>
          </div>
        </div> */}
      <div className="bg-[#202326] flex flex-row justify-center w-full">
        <div className="bg-red-400 w-[1440px] h-[1024px] relative">
          <div className="bg-green-300 absolute w-1/2 h-[1024px] top-0 left-0 max-sm:hidden">左</div>
          <div className="bg-blue-500 absolute w-1/2 h-[1024px] top-0 left-[720px] max-sm:w-full max-sm:left-0">右</div>
        </div>
      </div>
      {/* start */}
      {/* 由于项目代码大量用到绝对定位所以此方法不能用了 */}
      {/* <div className="bg-[#202326] flex flex-row justify-center w-full">
          <div className="bg-red-400 w-[1440px] h-[1024px] flex">
            <div className="bg-green-300  w-1/2 h-[1024px]  max-sm:hidden">左</div>
            <div className="bg-blue-500  w-1/2 h-[1024px]  left-[720px] max-sm:w-full ">右</div>
          </div>
        </div> */}
      {/* end */}

      {/* <div className="bg-[#202326] w-full">
        <div className="bg-red-400 max-w-7xl mx-auto flex">
          <div className="bg-green-300 flex-1 p-4 max-sm:hidden">左</div>

          <div className="bg-blue-500 flex-1 p-4">右</div>
        </div>
      </div> */}
    </>
  );
}
