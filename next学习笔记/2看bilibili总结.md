# [视频地址](https://www.bilibili.com/video/BV1Eh4y1x71F/?spm_id_from=333.337.search-card.all.click&vd_source=90a9c7618953f5d275200b2fa7aed461)


# 经常用的
* [id] 动态路由
  *  通过 import { useParams } from 'next/navigation'来获取参数
  * const {id} = useParams() (需要使用'use client')
  * useSearchParams() 获取的是?后面的那层参数
* _components 下划线开头不会自动解析为路由


# 支持
* 静态渲染
* 服务器渲染
* 文件路由
* API路由(整合服务器编码)