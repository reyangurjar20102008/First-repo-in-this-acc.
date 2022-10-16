import { useEffect } from "react";
import AnimeCardSlider from "./components/AnimeCardSlider";
import "./global.css";
import SideNav from './components/SideNav'
import Slider from './components/Slider'
import LatestAnimeSection from "./components/LatestAnimeSection";
function App() {
  useEffect(() => {
    document.title = "Anime Gate";
  }, []);



  return (
    <div className="App  flex">

      <SideNav />
      <div className="body ml-[240px] text-white overflow-hidden bg-[#1a1a1d] w-[calc(100vw_-_240px)]">
        {/* Nav Done */}

        <div className="nav h-[78px]   w-[calc(100vw_-_240px)] text-white bg-[#1a1a1d]">
          <div className="relative ml-[30px] top-[22px]  text-gray-600 ">
            <label>
              <input
                className="flex items-center w-[500px] border-2 border-gray-300 bg-white h-10 pl-9 pr-8 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
              />
            </label>
          </div>
          <div className="absolute items-center right-6 top-[24px] flex ">
            <a href="#" className="block     ml-3  mt-4 fill-white lg:mt-0">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM6.15 6l2.4 5h7l2.75-5ZM5.2 4h14.75q.575 0 .875.512.3.513.025 1.038l-3.55 6.4q-.275.5-.738.775Q16.1 13 15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988-.575-.987-.05-1.962L6.6 11.6 3 4H1V2h3.25Zm3.35 7h7Z" />
              </svg>
            </a>

            {/* Avatar */}

            <img
              className="ml-3 rounded-full w-10 h-10 align-middle"
              src="./avatar.webp"
              alt=""
            />

          </div>
        </div>
       
        <Slider />
        {/* <div className="Latest p-5  ">
          <h1 className="ml-3">
            Latest Episodes (sub)
          </h1>
            
          <div class="item-wrap m-auto flex flex-wrap   ">
            <div class="item m-2 w-[calc(15%_-_14px)]">
              <div class="item-poster group hover:after:opacity-90 group pb-[130%] relative">
                <div class="tick z-10 absolute bottom-2 left-[10px] ltr">
                  <div class="tick-item-sub bg-[#7bfcfc] text-black text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">SUB</div>
                </div>
                <div class="tick z-10 absolute bottom-2 right-[10px]  rtl">
                  <div class="tick-item-episode bg-[#C3073F] text-white text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">Episode 24</div>
                </div>
                <img class=" anime-poster-img absolute  w-[100%] h-[100%] left-0 top-0 right-0 bottom-0" data-src="https://gogocdn.net/cover/ao-ashi.png" src="https://gogocdn.net/cover/ao-ashi.png" alt="Ao Ashi" />
                <a class="anime-poster-ahref z-10  group-hover:block hidden absolute w-[100%] h-[100%] left-0 top-0 right-0 bottom-0 " href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi"><i className=" fas fa-play"></i></a>
              </div>
              <div class="anime-detail bg-[#25262d] text-[12px] p-[10px] ">
                <h3 class="anime-name text-[14px] mb-[8px] h-[37px] font-[500]">
                  <a href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi">Ao Ashi</a>
                </h3>
                <div class="fd-infor">
                  <span class="fdi-item">Latest</span>
                  <span class="dot w-[6px] h-[6px] bg-white rounded-full my-[1px] mx-[6px] inline-block "></span>
                  <span class="fdi-item">SUB</span>
                </div>
              </div>
              
            </div>
            <div class="item m-2 w-[calc(15%_-_14px)]">
              <div class="item-poster group hover:after:opacity-90 group pb-[130%] relative">
                <div class="tick z-10 absolute bottom-2 left-[10px] ltr">
                  <div class="tick-item-sub bg-[#7bfcfc] text-black text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">SUB</div>
                </div>
                <div class="tick z-10 absolute bottom-2 right-[10px]  rtl">
                  <div class="tick-item-episode bg-[#C3073F] text-white text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">Episode 24</div>
                </div>
                <img class=" anime-poster-img absolute  w-[100%] h-[100%] left-0 top-0 right-0 bottom-0" data-src="https://gogocdn.net/cover/ao-ashi.png" src="https://gogocdn.net/cover/ao-ashi.png" alt="Ao Ashi" />
                <a class="anime-poster-ahref z-10  group-hover:block hidden absolute w-[100%] h-[100%] left-0 top-0 right-0 bottom-0 " href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi"><i className=" fas fa-play"></i></a>
              </div>
              <div class="anime-detail bg-[#25262d] text-[12px] p-[10px] ">
                <h3 class="anime-name text-[14px] mb-[8px] h-[37px] font-[500]">
                  <a href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi">Ao Ashi</a>
                </h3>
                <div class="fd-infor">
                  <span class="fdi-item">Latest</span>
                  <span class="dot w-[6px] h-[6px] bg-white rounded-full my-[1px] mx-[6px] inline-block "></span>
                  <span class="fdi-item">SUB</span>
                </div>
              </div>
              
            </div>
            <div class="item m-2 w-[calc(15%_-_14px)]">
              <div class="item-poster group hover:after:opacity-90 group pb-[130%] relative">
                <div class="tick z-10 absolute bottom-2 left-[10px] ltr">
                  <div class="tick-item-sub bg-[#7bfcfc] text-black text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">SUB</div>
                </div>
                <div class="tick z-10 absolute bottom-2 right-[10px]  rtl">
                  <div class="tick-item-episode bg-[#C3073F] text-white text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">Episode 24</div>
                </div>
                <img class=" anime-poster-img absolute  w-[100%] h-[100%] left-0 top-0 right-0 bottom-0" data-src="https://gogocdn.net/cover/ao-ashi.png" src="https://gogocdn.net/cover/ao-ashi.png" alt="Ao Ashi" />
                <a class="anime-poster-ahref z-10  group-hover:block hidden absolute w-[100%] h-[100%] left-0 top-0 right-0 bottom-0 " href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi"><i className=" fas fa-play"></i></a>
              </div>
              <div class="anime-detail bg-[#25262d] text-[12px] p-[10px] ">
                <h3 class="anime-name text-[14px] mb-[8px] h-[37px] font-[500]">
                  <a href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi">Ao Ashi</a>
                </h3>
                <div class="fd-infor">
                  <span class="fdi-item">Latest</span>
                  <span class="dot w-[6px] h-[6px] bg-white rounded-full my-[1px] mx-[6px] inline-block "></span>
                  <span class="fdi-item">SUB</span>
                </div>
              </div>
              
            </div>
            <div class="item m-2 w-[calc(15%_-_14px)]">
              <div class="item-poster group hover:after:opacity-90 group pb-[130%] relative">
                <div class="tick z-10 absolute bottom-2 left-[10px] ltr">
                  <div class="tick-item-sub bg-[#7bfcfc] text-black text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">SUB</div>
                </div>
                <div class="tick z-10 absolute bottom-2 right-[10px]  rtl">
                  <div class="tick-item-episode bg-[#C3073F] text-white text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">Episode 24</div>
                </div>
                <img class=" anime-poster-img absolute  w-[100%] h-[100%] left-0 top-0 right-0 bottom-0" data-src="https://gogocdn.net/cover/ao-ashi.png" src="https://gogocdn.net/cover/ao-ashi.png" alt="Ao Ashi" />
                <a class="anime-poster-ahref z-10  group-hover:block hidden absolute w-[100%] h-[100%] left-0 top-0 right-0 bottom-0 " href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi"><i className=" fas fa-play"></i></a>
              </div>
              <div class="anime-detail bg-[#25262d] text-[12px] p-[10px] ">
                <h3 class="anime-name text-[14px] mb-[8px] h-[37px] font-[500]">
                  <a href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi">Ao Ashi</a>
                </h3>
                <div class="fd-infor">
                  <span class="fdi-item">Latest</span>
                  <span class="dot w-[6px] h-[6px] bg-white rounded-full my-[1px] mx-[6px] inline-block "></span>
                  <span class="fdi-item">SUB</span>
                </div>
              </div>
              
            </div>
            <div class="item m-2 w-[calc(15%_-_14px)]">
              <div class="item-poster group hover:after:opacity-90 group pb-[130%] relative">
                <div class="tick z-10 absolute bottom-2 left-[10px] ltr">
                  <div class="tick-item-sub bg-[#7bfcfc] text-black text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">SUB</div>
                </div>
                <div class="tick z-10 absolute bottom-2 right-[10px]  rtl">
                  <div class="tick-item-episode bg-[#C3073F] text-white text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">Episode 24</div>
                </div>
                <img class=" anime-poster-img absolute  w-[100%] h-[100%] left-0 top-0 right-0 bottom-0" data-src="https://gogocdn.net/cover/ao-ashi.png" src="https://gogocdn.net/cover/ao-ashi.png" alt="Ao Ashi" />
                <a class="anime-poster-ahref z-10  group-hover:block hidden absolute w-[100%] h-[100%] left-0 top-0 right-0 bottom-0 " href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi"><i className=" fas fa-play"></i></a>
              </div>
              <div class="anime-detail bg-[#25262d] text-[12px] p-[10px] ">
                <h3 class="anime-name text-[14px] mb-[8px] h-[37px] font-[500]">
                  <a href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi">Ao Ashi</a>
                </h3>
                <div class="fd-infor">
                  <span class="fdi-item">Latest</span>
                  <span class="dot w-[6px] h-[6px] bg-white rounded-full my-[1px] mx-[6px] inline-block "></span>
                  <span class="fdi-item">SUB</span>
                </div>
              </div>
              
            </div>
            <div class="item m-2 w-[calc(15%_-_14px)]">
              <div class="item-poster group hover:after:opacity-90 group pb-[130%] relative">
                <div class="tick z-10 absolute bottom-2 left-[10px] ltr">
                  <div class="tick-item-sub bg-[#7bfcfc] text-black text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">SUB</div>
                </div>
                <div class="tick z-10 absolute bottom-2 right-[10px]  rtl">
                  <div class="tick-item-episode bg-[#C3073F] text-white text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">Episode 24</div>
                </div>
                <img class=" anime-poster-img absolute  w-[100%] h-[100%] left-0 top-0 right-0 bottom-0" data-src="https://gogocdn.net/cover/ao-ashi.png" src="https://gogocdn.net/cover/ao-ashi.png" alt="Ao Ashi" />
                <a class="anime-poster-ahref z-10  group-hover:block hidden absolute w-[100%] h-[100%] left-0 top-0 right-0 bottom-0 " href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi"><i className=" fas fa-play"></i></a>
              </div>
              <div class="anime-detail bg-[#25262d] text-[12px] p-[10px] ">
                <h3 class="anime-name text-[14px] mb-[8px] h-[37px] font-[500]">
                  <a href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi">Ao Ashi</a>
                </h3>
                <div class="fd-infor">
                  <span class="fdi-item">Latest</span>
                  <span class="dot w-[6px] h-[6px] bg-white rounded-full my-[1px] mx-[6px] inline-block "></span>
                  <span class="fdi-item">SUB</span>
                </div>
              </div>
              
            </div>
            <div class="item m-2 w-[calc(15%_-_14px)]">
              <div class="item-poster group hover:after:opacity-90 group pb-[130%] relative">
                <div class="tick z-10 absolute bottom-2 left-[10px] ltr">
                  <div class="tick-item-sub bg-[#7bfcfc] text-black text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">SUB</div>
                </div>
                <div class="tick z-10 absolute bottom-2 right-[10px]  rtl">
                  <div class="tick-item-episode bg-[#C3073F] text-white text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">Episode 24</div>
                </div>
                <img class=" anime-poster-img absolute  w-[100%] h-[100%] left-0 top-0 right-0 bottom-0" data-src="https://gogocdn.net/cover/ao-ashi.png" src="https://gogocdn.net/cover/ao-ashi.png" alt="Ao Ashi" />
                <a class="anime-poster-ahref z-10  group-hover:block hidden absolute w-[100%] h-[100%] left-0 top-0 right-0 bottom-0 " href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi"><i className=" fas fa-play"></i></a>
              </div>
              <div class="anime-detail bg-[#25262d] text-[12px] p-[10px] ">
                <h3 class="anime-name text-[14px] mb-[8px] h-[37px] font-[500]">
                  <a href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi">Ao Ashi</a>
                </h3>
                <div class="fd-infor">
                  <span class="fdi-item">Latest</span>
                  <span class="dot w-[6px] h-[6px] bg-white rounded-full my-[1px] mx-[6px] inline-block "></span>
                  <span class="fdi-item">SUB</span>
                </div>
              </div>
              
            </div>
            <div class="item m-2 w-[calc(15%_-_14px)]">
              <div class="item-poster group hover:after:opacity-90 group pb-[130%] relative">
                <div class="tick z-10 absolute bottom-2 left-[10px] ltr">
                  <div class="tick-item-sub bg-[#7bfcfc] text-black text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">SUB</div>
                </div>
                <div class="tick z-10 absolute bottom-2 right-[10px]  rtl">
                  <div class="tick-item-episode bg-[#C3073F] text-white text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">Episode 24</div>
                </div>
                <img class=" anime-poster-img absolute  w-[100%] h-[100%] left-0 top-0 right-0 bottom-0" data-src="https://gogocdn.net/cover/ao-ashi.png" src="https://gogocdn.net/cover/ao-ashi.png" alt="Ao Ashi" />
                <a class="anime-poster-ahref z-10  group-hover:block hidden absolute w-[100%] h-[100%] left-0 top-0 right-0 bottom-0 " href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi"><i className=" fas fa-play"></i></a>
              </div>
              <div class="anime-detail bg-[#25262d] text-[12px] p-[10px] ">
                <h3 class="anime-name text-[14px] mb-[8px] h-[37px] font-[500]">
                  <a href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi">Ao Ashi</a>
                </h3>
                <div class="fd-infor">
                  <span class="fdi-item">Latest</span>
                  <span class="dot w-[6px] h-[6px] bg-white rounded-full my-[1px] mx-[6px] inline-block "></span>
                  <span class="fdi-item">SUB</span>
                </div>
              </div>
              
            </div>
            <div class="item m-2 w-[calc(15%_-_14px)]">
              <div class="item-poster group hover:after:opacity-90 group pb-[130%] relative">
                <div class="tick z-10 absolute bottom-2 left-[10px] ltr">
                  <div class="tick-item-sub bg-[#7bfcfc] text-black text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">SUB</div>
                </div>
                <div class="tick z-10 absolute bottom-2 right-[10px]  rtl">
                  <div class="tick-item-episode bg-[#C3073F] text-white text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">Episode 24</div>
                </div>
                <img class=" anime-poster-img absolute  w-[100%] h-[100%] left-0 top-0 right-0 bottom-0" data-src="https://gogocdn.net/cover/ao-ashi.png" src="https://gogocdn.net/cover/ao-ashi.png" alt="Ao Ashi" />
                <a class="anime-poster-ahref z-10  group-hover:block hidden absolute w-[100%] h-[100%] left-0 top-0 right-0 bottom-0 " href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi"><i className=" fas fa-play"></i></a>
              </div>
              <div class="anime-detail bg-[#25262d] text-[12px] p-[10px] ">
                <h3 class="anime-name text-[14px] mb-[8px] h-[37px] font-[500]">
                  <a href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi">Ao Ashi</a>
                </h3>
                <div class="fd-infor">
                  <span class="fdi-item">Latest</span>
                  <span class="dot w-[6px] h-[6px] bg-white rounded-full my-[1px] mx-[6px] inline-block "></span>
                  <span class="fdi-item">SUB</span>
                </div>
              </div>
              
            </div>
            <div class="item m-2 w-[calc(15%_-_14px)]">
              <div class="item-poster group hover:after:opacity-90 group pb-[130%] relative">
                <div class="tick z-10 absolute bottom-2 left-[10px] ltr">
                  <div class="tick-item-sub bg-[#7bfcfc] text-black text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">SUB</div>
                </div>
                <div class="tick z-10 absolute bottom-2 right-[10px]  rtl">
                  <div class="tick-item-episode bg-[#C3073F] text-white text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">Episode 24</div>
                </div>
                <img class=" anime-poster-img absolute  w-[100%] h-[100%] left-0 top-0 right-0 bottom-0" data-src="https://gogocdn.net/cover/ao-ashi.png" src="https://gogocdn.net/cover/ao-ashi.png" alt="Ao Ashi" />
                <a class="anime-poster-ahref z-10  group-hover:block hidden absolute w-[100%] h-[100%] left-0 top-0 right-0 bottom-0 " href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi"><i className=" fas fa-play"></i></a>
              </div>
              <div class="anime-detail bg-[#25262d] text-[12px] p-[10px] ">
                <h3 class="anime-name text-[14px] mb-[8px] h-[37px] font-[500]">
                  <a href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi">Ao Ashi</a>
                </h3>
                <div class="fd-infor">
                  <span class="fdi-item">Latest</span>
                  <span class="dot w-[6px] h-[6px] bg-white rounded-full my-[1px] mx-[6px] inline-block "></span>
                  <span class="fdi-item">SUB</span>
                </div>
              </div>
              
            </div>
            <div class="item m-2 w-[calc(15%_-_14px)]">
              <div class="item-poster group hover:after:opacity-90 group pb-[130%] relative">
                <div class="tick z-10 absolute bottom-2 left-[10px] ltr">
                  <div class="tick-item-sub bg-[#7bfcfc] text-black text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">SUB</div>
                </div>
                <div class="tick z-10 absolute bottom-2 right-[10px]  rtl">
                  <div class="tick-item-episode bg-[#C3073F] text-white text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">Episode 24</div>
                </div>
                <img class=" anime-poster-img absolute  w-[100%] h-[100%] left-0 top-0 right-0 bottom-0" data-src="https://gogocdn.net/cover/ao-ashi.png" src="https://gogocdn.net/cover/ao-ashi.png" alt="Ao Ashi" />
                <a class="anime-poster-ahref z-10  group-hover:block hidden absolute w-[100%] h-[100%] left-0 top-0 right-0 bottom-0 " href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi"><i className=" fas fa-play"></i></a>
              </div>
              <div class="anime-detail bg-[#25262d] text-[12px] p-[10px] ">
                <h3 class="anime-name text-[14px] mb-[8px] h-[37px] font-[500]">
                  <a href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi">Ao Ashi</a>
                </h3>
                <div class="fd-infor">
                  <span class="fdi-item">Latest</span>
                  <span class="dot w-[6px] h-[6px] bg-white rounded-full my-[1px] mx-[6px] inline-block "></span>
                  <span class="fdi-item">SUB</span>
                </div>
              </div>
              
            </div>
            <div class="item m-2 w-[calc(15%_-_14px)]">
              <div class="item-poster group hover:after:opacity-90 group pb-[130%] relative">
                <div class="tick z-10 absolute bottom-2 left-[10px] ltr">
                  <div class="tick-item-sub bg-[#7bfcfc] text-black text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">SUB</div>
                </div>
                <div class="tick z-10 absolute bottom-2 right-[10px]  rtl">
                  <div class="tick-item-episode bg-[#C3073F] text-white text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">Episode 24</div>
                </div>
                <img class=" anime-poster-img absolute  w-[100%] h-[100%] left-0 top-0 right-0 bottom-0" data-src="https://gogocdn.net/cover/ao-ashi.png" src="https://gogocdn.net/cover/ao-ashi.png" alt="Ao Ashi" />
                <a class="anime-poster-ahref z-10  group-hover:block hidden absolute w-[100%] h-[100%] left-0 top-0 right-0 bottom-0 " href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi"><i className=" fas fa-play"></i></a>
              </div>
              <div class="anime-detail bg-[#25262d] text-[12px] p-[10px] ">
                <h3 class="anime-name text-[14px] mb-[8px] h-[37px] font-[500]">
                  <a href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi">Ao Ashi</a>
                </h3>
                <div class="fd-infor">
                  <span class="fdi-item">Latest</span>
                  <span class="dot w-[6px] h-[6px] bg-white rounded-full my-[1px] mx-[6px] inline-block "></span>
                  <span class="fdi-item">SUB</span>
                </div>
              </div>
              
            </div>
           
            
          </div>



        </div> */}
        <AnimeCardSlider criteria="Popular"/>
        <LatestAnimeSection subOrDub="1" /> 
        {/* 1 = sub
        2= dub
        3 = chinese */}
        <LatestAnimeSection subOrDub="2" /> 
        
        
      </div>
    </div>
  );
}

export default App;
