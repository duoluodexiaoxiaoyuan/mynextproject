'use client';

import Image from 'next/image';
import Link from 'next/link';
import PostList from './blog/PostList';
import { useRouter } from 'next/navigation';
import photos from './photo';

export default function Home() {
  const postData = [
    { id: 1, title: 'aaa', slug: 'aaa' },
    { id: 2, title: 'bbb', slug: 'bbb' },
    { id: 3, title: 'ccc', slug: 'ccc' },
  ];

  const router = useRouter();

  return (
    <>
      {/* text-sm font-size line-height */}
      {/* items-center alitem-center */}
      {/* px-4 py-3  padding 左右上下间距*/}
      {/* bg-gray-900 背景颜色 */}
      {/* justify-between 两端对齐 */}
      <div className={'text-sm text-gray-900'}>
        <nav
          className={'flex items-center px-4 py-3 bg-gray-900 justify-between'}
        >
          <div className={'text-white flex items-center space-x-4'}>
            <a className={'w-6 fill-current hover:text-green-200'} href="#">
              <svg
                className={'w-6'}
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                data-view-component="true"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
            </a>
            <div className={'relative'}>
              <input
                type="text"
                className={
                  'rounder bg-gray-900 border border-gray-600 placeholder-gray-400 w-72 px-3 py-1'
                }
                placeholder="Search or jump to ..."
              />
              <div
                className={
                  'absolute  ute top-0 right-0 flex items-center h-full'
                }
              >
                <div
                  className={
                    'border border-gray-600 rounded text-xs text-gray-400 px-2 mr-2'
                  }
                >
                  /
                </div>
              </div>
            </div>
            <ul className={'flex items-center font-semibold space-x-4'}>
              <li>
                <a href="" className={'hover:text-gray-400'}>
                  Pull requests
                </a>
              </li>
              <li>
                <a href="" className={'hover:text-gray-400'}>
                  Issues
                </a>
              </li>
              <li>
                <a href="" className={'hover:text-gray-400'}>
                  Marketplace
                </a>
              </li>
              <li>
                <a href="" className={'hover:text-gray-400'}>
                  Explore
                </a>
              </li>
            </ul>
          </div>
          <div className={'text-white flex items-center space-x-4'}>
            <a href="#" className={'relative hover:text-gray-400'}>
              <svg
                className={'w-5 fill-current'}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
              <div
                className={
                  'bg-blue-400 rounded-full w-2 h-2 absolute top-0 right-0'
                }
              ></div>
            </a>
            <a href="#" className={'flex items-center hover:text-gray-400'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={'w-6 h-6'}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={'w-3 h-3'}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </a>

            <a
              href="https://github.com/duoluodexiaoxiaoyuan"
              className={'flex items-center hover:text-gray-400'}
            >
              <div className={'w-6 h-6 rounded-full bg-blue-600'}>
                <img
                  src="https://avatars.githubusercontent.com/u/59086082?v=4"
                  alt=""
                  size="32"
                  height="32"
                  width="32"
                  data-view-component="true"
                  className={'w-6 h-6 rounded-full'}
                />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={'w-3 h-3'}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </a>
          </div>
        </nav>
        {/* repo=stats只是标注这个仓库的功能，并没有实际的意义 */}
        <div
          className={
            'repo-stats bg-gray-100 flex items-center justify-between px-8 py-4'
          }
        >
          <div className={'flex items-center'}>
            <svg
              aria-hidden="true"
              className={'w-4 fill-current text-gray-600'}
              viewBox="0 0 16 16"
              data-view-component="true"
            >
              <path
                fill-rule="evenodd"
                d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
              ></path>
            </svg>
            <div className={'flex items-center text-xl ml-2'}>
              <a
                href="https://github.com/duoluodexiaoxiaoyuan"
                className={'text-blue-600 hover:underline'}
              >
                duoluodexiaoxiaoyuan
              </a>
              <span className={'mx-1'}>/</span>
              <a
                href="https://github.com/duoluodexiaoxiaoyuan/scriptcatList"
                className={'text-blue-600 hover:underline font-semibold'}
              >
                scriptcatList
              </a>
            </div>
            <div
              className={
                'flex items-center p-2 h-4 bg-gray-100 rounded-xl border border-gray-300 text-gray-600 text-xs ml-2'
              }
            >
              Public
            </div>
          </div>
          <div className={'flex space-x-2'}>
            <div className={'flex text-xs shadow-sm h-7'}>
              <button
                className={
                  'border border-gray-300 rounded-lg rounded-r-none px-3 py-1 flex items-center space-x-4'
                }
              >
                <svg
                  className={'w-4 h-4'}
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  data-view-component="true"
                >
                  <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>
                </svg>
                <span className={'font-semibold'}>Watch</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={'w-3 h-3'}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <a
                href="#"
                className={
                  'flex items-center border border-gray-300 rounded-lg rounder-l-none px-3 py-1 border-l-0 font-semibold hover:text-blue-400 bg-white'
                }
              >
                548
              </a>
            </div>
            <div className="flex text-xs h-7">
              <button
                className="
                    border
                    border-gray-300
                    rounded rounded-r-none
                    px-3
                    py-1
                    flex
                    items-center
                    space-x-1
                "
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
                <span>Star</span>
              </button>
              <a
                className="
                    flex
                    items-center
                    border
                    border-gray-300
                    rounded rounded-l-none
                    px-3
                    py-1
                    border-l-0
                    font-semibold
                    hover:text-blue-400
                "
              >
                66.8k
              </a>
            </div>
            <div className="flex text-xs h-7">
              <button
                className="
                    border
                    border-gray-300
                    rounded rounded-r-none
                    px-3
                    py-1
                    flex
                    items-center
                    space-x-1
                "
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  data-view-component="true"
                  className="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  ></path>
                </svg>
                <span>Fork</span>
              </button>
              <a
                className="
                    flex
                    items-center
                    border
                    border-gray-300
                    rounded rounded-l-none
                    px-3
                    py-1
                    border-l-0
                    font-semibold
                    hover:text-blue-400
                "
              >
                21.6k
              </a>
            </div>
          </div>
        </div>
        {/* end repo stats */}
        <ul className="repo-nav bg-gray-100 border-b border-gray-300 flex items-center px-8 pt-4">
          <li className="font-semibold">
            <a
              href="#"
              className="flex items-center border-b-2 border-red-500 px-4 pb-3"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                data-view-component="true"
              >
                <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
              </svg>
              <span className="ml-2">Code</span>
            </a>
          </li>
          <li className="font-semibold">
            <a
              href="#"
              className="
                  flex
                  items-center
                  border-b
                  px-4
                  pb-3
                  hover:border-gray-300
                  text-gray-700
              "
            >
              <svg
                className="w-4 h-4 fill-current"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
              >
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
              </svg>
              <span className="ml-2">Issues</span>
              <div className="flex items-center bggray-200 rounded-lg px-2 ml-2">
                28
              </div>
            </a>
          </li>
          <li className="font-semibold">
            <a
              href="#"
              className="
                  flex
                  items-center
                  border-b
                  px-4
                  pb-3
                  hover:border-gray-300
                  text-gray-700
              "
            >
              <svg
                class="w-4 h-4 fill-current"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                data-view-component="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
                ></path>
              </svg>
              <span class="ml-2">Pull requests</span>
              <div className="flex items-center bggray-200 rounded-lg px-2 ml-2">
                18
              </div>
            </a>
          </li>
          <li className="font-semibold">
            <a
              href="#"
              className="
                  flex
                  items-center
                  border-b
                  px-4
                  pb-3
                  hover:border-gray-300
                  text-gray-700
              "
            >
              <svg
                className="w-4 h-4 fill-current"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                data-view-component="true"
              >
                <path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path>
              </svg>
              <span class="ml-2">Discussions</span>
            </a>
          </li>

          <li className="font-semibold">
            <a
              href="#"
              className="
                  flex
                  items-center
                  border-b
                  px-4
                  pb-3
                  hover:border-gray-300
                  text-gray-700
              "
            >
              <svg
                className="w-4 h-4 fill-current"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                data-view-component="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"
                ></path>
              </svg>
              <span className="ml-2">Actions</span>
            </a>
          </li>
          <li className="font-semibold">
            <a
              href="#"
              className="
                  hidden
                  lg:flex
                  items-center
                  border-b
                  px-4
                  pb-3
                  hover:border-gray-300
                  text-gray-700
                  "
            >
              <svg
                className="w-4 h-4 fill-current"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                data-view-component="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"
                ></path>
              </svg>
              <span className="ml-2">Security</span>
            </a>
          </li>
          <li className="font-semibold">
            <a
              href="#"
              className="
                  hidden
                  lg:flex
                  items-center
                  border-b
                  px-4
                  pb-3
                  hover:border-gray-300
                  text-gray-700
              "
            >
              <svg
                className="w-4 h-4 fill-current"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                data-view-component="true"
              >
                <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
              </svg>
              <span className="ml-2">Insights</span>
            </a>
          </li>
        </ul>
        {/* end repo nav */}
        <div className="container mx-auto my-8 px-4 flex">
          <div className="file-explorer-container w-3/4 mr-8">
            <div className="branch-navigation flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <button className="border border-gray-300 bg-gray-100 rounded-md px-4 py-1 hover:bg-gray-200 flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    text="gray"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    data-view-component="true"
                  >
                    <path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path>
                  </svg>
                  <span>Main</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                <a
                  href="#"
                  className="px-4 py-1 hover:text-blue-400 flex items-center space-x-1"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    text="gray"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    data-view-component="true"
                  >
                    <path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path>
                  </svg>
                  <span>45 branches</span>
                </a>

                <a
                  href="#"
                  className="px-4 py-1 hover:text-blue-400 flex items-center space-x-1"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    text="gray"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    data-view-component="true"
                  >
                    <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
                  </svg>
                  <span>181 tags</span>
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-4 py-1 border border-gray-300 rounded bg-gray-100 hover:bg-gray-300">
                  Go to file
                </button>
                <button className="px-4 py-1 border border-gray-300 rounded bg-gray-100 hover:bg-gray-300 flex items-center">
                  Add file
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                <button className="px-4 py-1 border border-green-700 rounded bg-green-600 hover:bg-gray-700 text-white flex items-center">
                  Code
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>{' '}
            {/* end branch navigation */}
            <div className="commits-container bg-gray-100 rounded-md rounded-b-none border border-gray-300 border-b-0 flex items-center justify-between px-4 py-4 mt-5">
              <div className="flex items-center space-x-2">
                <div className={'w-6 h-6 rounded-full bg-blue-600'}>
                  <img
                    src="https://avatars.githubusercontent.com/u/59086082?v=4"
                    alt=""
                    data-view-component="true"
                    className={'w-6 h-6 rounded-full'}
                  />
                </div>
                <a href="#" className="font-semibold hover:underline">
                  duoluodexiaoxiaoyuan
                </a>
                <a href="#" className="font-semibold hover:underline">
                  feature:提交脚本
                </a>
              </div>
              <div className="flex items-center">
                <a
                  href="#"
                  className="hover:underline hover:text-blue-600 text-gray-600 ml-1"
                >
                  a7c57bf
                </a>
                <a
                  href="#"
                  className="hover:underline hover:text-blue-600 text-gray-600 ml-1"
                >
                  yesterday
                </a>
                <div className="flex items-center space-x-2 hover:text-blue-600 cursor-pointer ml-3">
                  <svg
                    text="gray"
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="octicon octicon-history"
                  >
                    <path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path>
                  </svg>
                  <span className="font-semibold">32</span>
                  <span>commits</span>
                </div>
              </div>
            </div>
            {/*end commits container  */}
            <div className="file-explorer rounded-md rounded-t-none border border-gray-300 divide-y divide-gray-300">
              <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100">
                <div className="w-4/12 flex items-center">
                  <svg
                    className="w-4 h-4 fill-current text-blue-600"
                    aria-label="Directory"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    data-view-component="true"
                  >
                    <path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path>
                  </svg>
                  <a
                    href="#"
                    className="hover:underline hover:text-blue-600 ml-3"
                  >
                    .vscode
                  </a>
                </div>
                <div className="w-6/12">
                  <a href="#" className="hover:underline hover:text-blue-600">
                    b站查看收藏里面删除视频的up是谁
                  </a>
                </div>
                <div className="2-2/12 text-right">
                  <span className="text-gray-600">last year</span>
                </div>
              </div>
              <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100">
                <div className="w-4/12 flex items-center">
                  <svg
                    className="w-4 h-4 fill-current text-blue-600"
                    aria-label="Directory"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    data-view-component="true"
                  >
                    <path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path>
                  </svg>
                  <a
                    href="#"
                    className="hover:underline hover:text-blue-600 ml-3"
                  >
                    CSP的使用
                  </a>
                </div>
                <div className="w-6/12 truncate">
                  <a href="#" className="hover:underline hover:text-blue-600">
                    当我们className中加了truncate以后，文本内容超过一行，将不会导致换行
                  </a>
                </div>
                <div className="2-2/12 text-right">
                  <span className="text-gray-600">last year</span>
                </div>
              </div>
              <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100">
                <div className="w-4/12 flex items-center">
                  <svg
                    className="w-4 h-4 fill-current text-blue-600"
                    aria-label="Directory"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    data-view-component="true"
                  >
                    <path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path>
                  </svg>
                  <a
                    href="#"
                    className="hover:underline hover:text-blue-600 ml-3"
                  >
                    IndexedDB
                  </a>
                </div>
                <div className="w-6/12">
                  <a href="#" className="hover:underline hover:text-blue-600">
                    b站查看收藏里面删除视频的up是谁
                  </a>
                </div>
                <div className="2-2/12 text-right">
                  <span className="text-gray-600">last year</span>
                </div>
              </div>
            </div>
            {/* end file explorer body */}
          </div>
          {/* end file explorer */}
          <div className="sidebar w-1/4">
            <div className="about">
              <h4 className="font-semibold">About</h4>
              <p className="mt-4">写的油猴脚本集合</p>
              <div className="flex items-center space-x-2 mt-4">
                <svg
                  className="w-4 fill-current"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  data-view-component="true"
                >
                  <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
                </svg>
                <a
                  className="text-blue-600 hover:underline font-semibold"
                  href="https://scriptcat.org/users/40310"
                  target="_blank"
                >
                  scriptcat.org/users/40310
                </a>
              </div>

              <div className="tags text-xs font-semibold flex flex-wrap items-center mt-2">
                <a
                  href="#"
                  className="bg-blue-100 hover:bg-blue-800 hover:text-white text-blue-600 rounded-full px-2 py-1 mt-2 mr-2"
                >
                  javascript
                </a>
              </div>
              {/* end tags */}
              <a href="#" className="flex items-center space-x-2 mt-4 group">
                <svg
                  className="w-4 fill-current group-hover:text-blue-600"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  data-view-component="true"
                >
                  <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
                </svg>
                <span className="group-hover:text-blue-600">Readme</span>
              </a>
              <a href="#" className="flex items-center space-x-2 mt-4 group">
                <svg
                  className="w-4 fill-current group-hover:text-blue-600"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  data-view-component="true"
                >
                  <path d="M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z"></path>
                </svg>
                <span className="group-hover:text-blue-600">MIT licence</span>
              </a>
            </div>
            {/* end about */}

            <div className="releases border-t border-gray-300 mt-6 pt-6">
              <h4 className="font-semibold flex items-center">
                <span>Releases</span>
                <div className="text-xs rounded-lg bg-gray-100 text-gray-800 px-2 ml-1">
                  163
                </div>
              </h4>
              <a href="#" className="flex items-start group mt-4">
                <svg
                  className="mt-1 w-4 fill-current text-green-500 group-hover:text-blue-500"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  data-view-component="true"
                >
                  <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
                </svg>
                <span className="ml-2">
                  <span className="font-semibold group-hover:text-blue-600 mr-1">
                    v.2.2.6
                  </span>
                  <span className="text-xs border border-green-500 text-green-600 rounded-full font-semibold inline-block px-2">
                    Latest
                  </span>
                  <span className="block text-xs group-hover:text-blue-600">
                    16 days age
                  </span>
                </span>
              </a>
              <div className="mt-4">
                <a href="#" className="text-blue-600 hover:underline">
                  + 162 releases
                </a>
              </div>
            </div>
            {/* end releases */}
            <div className="packages border-t border-gray-300 mt-6 pt-6">
              <h4 className="font-semibold flex items-center">
                <span>Packages</span>
              </h4>
              <div className="mt-6">
                <span className="text-xs text-gray-600">
                  No packages published
                </span>
              </div>
            </div>
            {/* end pakages */}

            <div className="used-by border-t border-gray-300 mt-6 pt-6">
              <h4 className="font-semibold flex items-center">
                <span>Used By</span>
                <div className="text-xs rounded-lg bg-gray-100 text-gray-800 px-2 ml-1">
                  320k
                </div>
              </h4>
              <div className="flex items-center mt-4">
                <a
                  href="#"
                  className="inline-flex items-center group -space-x-2"
                >
                  <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white">
                    <img
                      src="https://avatars.githubusercontent.com/u/59086082?v=4"
                      alt=""
                      size="32"
                      height="32"
                      width="32"
                      data-view-component="true"
                      className={'w-6 h-6 rounded-full'}
                    />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white">
                    <img
                      src="https://avatars.githubusercontent.com/u/120007119?s=100&v=4"
                      alt=""
                      size="32"
                      height="32"
                      width="32"
                      data-view-component="true"
                      className={'w-6 h-6 rounded-full'}
                    />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white">
                    <img
                      src="https://avatars.githubusercontent.com/u/76876045?s=100&v=4"
                      alt=""
                      size="32"
                      height="32"
                      width="32"
                      data-view-component="true"
                      className={'w-6 h-6 rounded-full'}
                    />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white">
                    <img
                      src="https://avatars.githubusercontent.com/u/22783163?s=64&v=4"
                      alt=""
                      size="32"
                      height="32"
                      width="32"
                      data-view-component="true"
                      className={'w-6 h-6 rounded-full'}
                    />
                  </div>
                </a>
                <span className="text-xs font-semibold text-blue-500 group-hover:underline ml-2 h-full">
                  + 322,331
                </span>
              </div>
            </div>
            {/* end used by */}

            <div className="contributors-by border-t border-gray-300 mt-6 pt-6">
              <h4 className="font-semibold flex items-center">
                <span>Contributors</span>
                <div className="text-xs rounded-lg bg-gray-100 text-gray-800 px-2 ml-1">
                  320k
                </div>
              </h4>
              <div className="flex flex-wrap items-center mt-4">
                <a
                  href="https://github.com/duoluodexiaoxiaoyuan"
                  target="_blank"
                  className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"
                >
                  <img
                    src="https://avatars.githubusercontent.com/u/59086082?v=4"
                    alt=""
                    size="32"
                    height="32"
                    width="32"
                    data-view-component="true"
                    className={'w-6 h-6 rounded-full'}
                  />
                </a>
                <a
                  href="https://github.com/devjiwonchoi"
                  target="_blank"
                  className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"
                >
                  <img
                    src="https://avatars.githubusercontent.com/u/120007119?s=100&v=4"
                    alt=""
                    size="32"
                    height="32"
                    width="32"
                    data-view-component="true"
                    className={'w-6 h-6 rounded-full'}
                  />
                </a>
                <a
                  href="https://github.com/sinhapaurush"
                  target="_blank"
                  className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"
                >
                  <img
                    src="https://avatars.githubusercontent.com/u/76876045?s=100&v=4"
                    alt=""
                    size="32"
                    height="32"
                    width="32"
                    data-view-component="true"
                    className={'w-6 h-6 rounded-full'}
                  />
                </a>
                <a
                  href="https://github.com/CodFrm"
                  target="_blank"
                  className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"
                >
                  <img
                    src="https://avatars.githubusercontent.com/u/22783163?s=64&v=4"
                    alt=""
                    size="32"
                    height="32"
                    width="32"
                    data-view-component="true"
                    className={'w-6 h-6 rounded-full'}
                  />
                </a>
              </div>
              <div className="text-xs font-semibold text-blue-500 group-hover:underline mt-2 h-full">
                +191 contributors
              </div>
            </div>
            {/* end Contributors by */}

            <div className="languages border-t border-gray-300 mt-6 pt-6">
              <h4 className="font-semibold flex items-center">
                <span>languages</span>
                <div className="text-xs rounded-lg bg-gray-100 text-gray-800 px-2 ml-1">
                  320k
                </div>
              </h4>
              <div className="mt-4 flex">
                <div className="w-8/12 h-2 rounded-md rounded-r-none bg-yellow-300"></div>
                <div className="w-3/12 h-2 bg-purple-300 border-l border-white"></div>
                <div className="w-1/12 h-2 bg-red-300 border-l border-white"></div>
              </div>
              <ul class="mt-2 flex flex-wrap space-y-1 items-center text-xs">
                  <li class="flex items-center mr-8">
                    <span class="w-2 h-2 rounded-full bg-yellow-300"></span>
                    <span class="ml-4 group cursor-pointer">
                      <span class="font-semibold group-hover:text-blue-600">
                        Javascript
                      </span>
                      <span class="group-hover:text-blue-600">77.0%</span>
                    </span>
                  </li>
                  <li class="flex items-center mr-8">
                    <span class="w-2 h-2 rounded-full bg-purple-300"></span>
                    <span class="ml-4 group cursor-pointer">
                      <span class="font-semibold group-hover:text-blue-600">
                        Css
                      </span>
                      <span class="group-hover:text-blue-600">16.8%</span>
                    </span>
                  </li>
                  <li class="flex items-center mr-8">
                    <span class="w-2 h-2 rounded-full bg-red-300"></span>
                    <span class="ml-4 group cursor-pointer">
                      <span class="font-semibold group-hover:text-blue-600">
                        Html
                      </span>
                      <span class="group-hover:text-blue-600">6.1%</span>
                    </span>
                  </li>
                  <li class="flex items-center mr-8">
                    <span class="w-2 h-2 rounded-full bg-gray-300"></span>
                    <span class="ml-4">
                      <span class="font-semibold">other</span>
                      <span>0.1%</span>
                    </span>
                  </li>
                </ul>
            </div>
            {/* end languages by */}
          </div>
        </div>

        <footer class="container mx-auto text-xs border-t border-gray-300 py-10 flex flex-col lg:flex-row items-center justify-between">
                <ul class="flex items-center space-x-6 lg:space-x-12">
                    <li>&copy; 2021 Github,Inc.</li>
                    <li><a href="#" class="text-blue-600 hover:underline">Terms</a></li>
                    <li><a href="#" class="text-blue-600 hover:underline">Privacy</a></li>
                    <li><a href="#" class="text-blue-600 hover:underline">Security</a></li>
                    <li><a href="#" class="text-blue-600 hover:underline">Status</a></li>
                    <li><a href="#" class="text-blue-600 hover:underline">Docs</a></li>
                </ul>

                <div class="hidden lg:block">
                    <svg class="w-6 fill-current text-gray-400 hover:text-gray-600" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true">
                        <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                </div>

                <ul class="flex items-center space-x-6 lg:space-x-12 mt-4 lg:mt-0">
                    <li><a href="#" class="text-blue-600 hover:underline">Contact Github</a></li>
                    <li><a href="#" class="text-blue-600 hover:underline">Pricing</a></li>
                    <li><a href="#" class="text-blue-600 hover:underline">Api</a></li>
                    <li><a href="#" class="text-blue-600 hover:underline">Training</a></li>
                    <li><a href="#" class="text-blue-600 hover:underline">Blog</a></li>
                    <li><a href="#" class="text-blue-600 hover:underline">About</a></li>
                </ul>
            </footer>{/*'end of footer'*/}
      </div>
    </>
  );
}
