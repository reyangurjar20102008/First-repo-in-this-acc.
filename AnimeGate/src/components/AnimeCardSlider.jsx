
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar,Navigation } from "swiper";


import "swiper/css";
import "swiper/css/scrollbar";

function AnimeCardSlider() {
 

  
  return (
    <div className="px-5">
    <h1  className="ml-3">Trending</h1>
    <div className="item-wrap m-auto flex flex-wrap p-2">
        <Swiper
          slidesPerView={6}
          spaceBetween={25}
          navigation={true}
          modules={[Navigation]}
          loop={true}
          className="mySwiper"
        >
          
            <SwiperSlide>
            <div class="item m-2  ">
              <div class="item-poster group hover:after:opacity-90 group pb-[130%] relative">
                <div class="tick z-10 absolute bottom-2 left-[10px] ltr">
                  <div class="tick-item-sub bg-[#7bfcfc] text-black text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">SUB</div>
                </div>
                <div class="tick z-10 absolute bottom-2 right-[10px]  rtl">
                  <div class="tick-item-episode bg-[#C3073F] text-white text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">Episode 24</div>
                </div>
                <img class="rounded-t-md anime-poster-img absolute  w-[100%] h-[100%] left-0 top-0 right-0 bottom-0" data-src="https://gogocdn.net/cover/ao-ashi.png" src="https://gogocdn.net/cover/ao-ashi.png" alt="Ao Ashi" />
                <a class="anime-poster-ahref z-10  group-hover:block hidden absolute w-[100%] h-[100%] left-0 top-0 right-0 bottom-0 " href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi"><i className=" fas fa-play"></i></a>
              </div>
              <div class="anime-detail bg-[#25262d] text-[12px] p-[10px] rounded-b-md">
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
            </SwiperSlide>
            <SwiperSlide>
            <div class="item m-2  ">
              <div class="item-poster group hover:after:opacity-90 group pb-[130%] relative">
                <div class="tick z-10 absolute bottom-2 left-[10px] ltr">
                  <div class="tick-item-sub bg-[#7bfcfc] text-black text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">SUB</div>
                </div>
                <div class="tick z-10 absolute bottom-2 right-[10px]  rtl">
                  <div class="tick-item-episode bg-[#C3073F] text-white text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">Episode 24</div>
                </div>
                <img class="rounded-t-md anime-poster-img absolute  w-[100%] h-[100%] left-0 top-0 right-0 bottom-0" data-src="https://gogocdn.net/cover/ao-ashi.png" src="https://gogocdn.net/cover/ao-ashi.png" alt="Ao Ashi" />
                <a class="anime-poster-ahref z-10  group-hover:block hidden absolute w-[100%] h-[100%] left-0 top-0 right-0 bottom-0 " href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi"><i className=" fas fa-play"></i></a>
              </div>
              <div class="anime-detail bg-[#25262d] text-[12px] p-[10px] rounded-b-md">
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
            </SwiperSlide>
            <SwiperSlide>
            <div class="item m-2  ">
              <div class="item-poster group hover:after:opacity-90 group pb-[130%] relative">
                <div class="tick z-10 absolute bottom-2 left-[10px] ltr">
                  <div class="tick-item-sub bg-[#7bfcfc] text-black text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">SUB</div>
                </div>
                <div class="tick z-10 absolute bottom-2 right-[10px]  rtl">
                  <div class="tick-item-episode bg-[#C3073F] text-white text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">Episode 24</div>
                </div>
                <img class="rounded-t-md anime-poster-img absolute  w-[100%] h-[100%] left-0 top-0 right-0 bottom-0" data-src="https://gogocdn.net/cover/ao-ashi.png" src="https://gogocdn.net/cover/ao-ashi.png" alt="Ao Ashi" />
                <a class="anime-poster-ahref z-10  group-hover:block hidden absolute w-[100%] h-[100%] left-0 top-0 right-0 bottom-0 " href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi"><i className=" fas fa-play"></i></a>
              </div>
              <div class="anime-detail bg-[#25262d] text-[12px] p-[10px] rounded-b-md">
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
            </SwiperSlide>
            <SwiperSlide>
            <div class="item m-2  ">
              <div class="item-poster group hover:after:opacity-90 group pb-[130%] relative">
                <div class="tick z-10 absolute bottom-2 left-[10px] ltr">
                  <div class="tick-item-sub bg-[#7bfcfc] text-black text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">SUB</div>
                </div>
                <div class="tick z-10 absolute bottom-2 right-[10px]  rtl">
                  <div class="tick-item-episode bg-[#C3073F] text-white text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">Episode 24</div>
                </div>
                <img class="rounded-t-md anime-poster-img absolute  w-[100%] h-[100%] left-0 top-0 right-0 bottom-0" data-src="https://gogocdn.net/cover/ao-ashi.png" src="https://gogocdn.net/cover/ao-ashi.png" alt="Ao Ashi" />
                <a class="anime-poster-ahref z-10  group-hover:block hidden absolute w-[100%] h-[100%] left-0 top-0 right-0 bottom-0 " href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi"><i className=" fas fa-play"></i></a>
              </div>
              <div class="anime-detail bg-[#25262d] text-[12px] p-[10px] rounded-b-md">
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
            </SwiperSlide>
            <SwiperSlide>
            <div class="item m-2  ">
              <div class="item-poster group hover:after:opacity-90 group pb-[130%] relative">
                <div class="tick z-10 absolute bottom-2 left-[10px] ltr">
                  <div class="tick-item-sub bg-[#7bfcfc] text-black text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">SUB</div>
                </div>
                <div class="tick z-10 absolute bottom-2 right-[10px]  rtl">
                  <div class="tick-item-episode bg-[#C3073F] text-white text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">Episode 24</div>
                </div>
                <img class="rounded-t-md anime-poster-img absolute  w-[100%] h-[100%] left-0 top-0 right-0 bottom-0" data-src="https://gogocdn.net/cover/ao-ashi.png" src="https://gogocdn.net/cover/ao-ashi.png" alt="Ao Ashi" />
                <a class="anime-poster-ahref z-10  group-hover:block hidden absolute w-[100%] h-[100%] left-0 top-0 right-0 bottom-0 " href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi"><i className=" fas fa-play"></i></a>
              </div>
              <div class="anime-detail bg-[#25262d] text-[12px] p-[10px] rounded-b-md">
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
            </SwiperSlide>
            <SwiperSlide>
            <div class="item m-2  ">
              <div class="item-poster group hover:after:opacity-90 group pb-[130%] relative">
                <div class="tick z-10 absolute bottom-2 left-[10px] ltr">
                  <div class="tick-item-sub bg-[#7bfcfc] text-black text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">SUB</div>
                </div>
                <div class="tick z-10 absolute bottom-2 right-[10px]  rtl">
                  <div class="tick-item-episode bg-[#C3073F] text-white text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">Episode 24</div>
                </div>
                <img class="rounded-t-md anime-poster-img absolute  w-[100%] h-[100%] left-0 top-0 right-0 bottom-0" data-src="https://gogocdn.net/cover/ao-ashi.png" src="https://gogocdn.net/cover/ao-ashi.png" alt="Ao Ashi" />
                <a class="anime-poster-ahref z-10  group-hover:block hidden absolute w-[100%] h-[100%] left-0 top-0 right-0 bottom-0 " href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi"><i className=" fas fa-play"></i></a>
              </div>
              <div class="anime-detail bg-[#25262d] text-[12px] p-[10px] rounded-b-md">
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
            </SwiperSlide>
            <SwiperSlide>
            <div class="item m-2  ">
              <div class="item-poster group hover:after:opacity-90 group pb-[130%] relative">
                <div class="tick z-10 absolute bottom-2 left-[10px] ltr">
                  <div class="tick-item-sub bg-[#7bfcfc] text-black text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">SUB</div>
                </div>
                <div class="tick z-10 absolute bottom-2 right-[10px]  rtl">
                  <div class="tick-item-episode bg-[#C3073F] text-white text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">Episode 24</div>
                </div>
                <img class="rounded-t-md anime-poster-img absolute  w-[100%] h-[100%] left-0 top-0 right-0 bottom-0" data-src="https://gogocdn.net/cover/ao-ashi.png" src="https://gogocdn.net/cover/ao-ashi.png" alt="Ao Ashi" />
                <a class="anime-poster-ahref z-10  group-hover:block hidden absolute w-[100%] h-[100%] left-0 top-0 right-0 bottom-0 " href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi"><i className=" fas fa-play"></i></a>
              </div>
              <div class="anime-detail bg-[#25262d] text-[12px] p-[10px] rounded-b-md">
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
            </SwiperSlide>
            <SwiperSlide>
            <div class="item m-2  ">
              <div class="item-poster group hover:after:opacity-90 group pb-[130%] relative">
                <div class="tick z-10 absolute bottom-2 left-[10px] ltr">
                  <div class="tick-item-sub bg-[#7bfcfc] text-black text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">SUB</div>
                </div>
                <div class="tick z-10 absolute bottom-2 right-[10px]  rtl">
                  <div class="tick-item-episode bg-[#C3073F] text-white text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">Episode 24</div>
                </div>
                <img class="rounded-t-md anime-poster-img absolute  w-[100%] h-[100%] left-0 top-0 right-0 bottom-0" data-src="https://gogocdn.net/cover/ao-ashi.png" src="https://gogocdn.net/cover/ao-ashi.png" alt="Ao Ashi" />
                <a class="anime-poster-ahref z-10  group-hover:block hidden absolute w-[100%] h-[100%] left-0 top-0 right-0 bottom-0 " href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi"><i className=" fas fa-play"></i></a>
              </div>
              <div class="anime-detail bg-[#25262d] text-[12px] p-[10px] rounded-b-md">
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
            </SwiperSlide>
            <SwiperSlide>
            <div class="item m-2  ">
              <div class="item-poster group hover:after:opacity-90 group pb-[130%] relative">
                <div class="tick z-10 absolute bottom-2 left-[10px] ltr">
                  <div class="tick-item-sub bg-[#7bfcfc] text-black text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">SUB</div>
                </div>
                <div class="tick z-10 absolute bottom-2 right-[10px]  rtl">
                  <div class="tick-item-episode bg-[#C3073F] text-white text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">Episode 24</div>
                </div>
                <img class="rounded-t-md anime-poster-img absolute  w-[100%] h-[100%] left-0 top-0 right-0 bottom-0" data-src="https://gogocdn.net/cover/ao-ashi.png" src="https://gogocdn.net/cover/ao-ashi.png" alt="Ao Ashi" />
                <a class="anime-poster-ahref z-10  group-hover:block hidden absolute w-[100%] h-[100%] left-0 top-0 right-0 bottom-0 " href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi"><i className=" fas fa-play"></i></a>
              </div>
              <div class="anime-detail bg-[#25262d] text-[12px] p-[10px] rounded-b-md">
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
            </SwiperSlide>
            <SwiperSlide>
            <div class="item m-2  ">
              <div class="item-poster group hover:after:opacity-90 group pb-[130%] relative">
                <div class="tick z-10 absolute bottom-2 left-[10px] ltr">
                  <div class="tick-item-sub bg-[#7bfcfc] text-black text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">SUB</div>
                </div>
                <div class="tick z-10 absolute bottom-2 right-[10px]  rtl">
                  <div class="tick-item-episode bg-[#C3073F] text-white text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">Episode 24</div>
                </div>
                <img class="rounded-t-md anime-poster-img absolute  w-[100%] h-[100%] left-0 top-0 right-0 bottom-0" data-src="https://gogocdn.net/cover/ao-ashi.png" src="https://gogocdn.net/cover/ao-ashi.png" alt="Ao Ashi" />
                <a class="anime-poster-ahref z-10  group-hover:block hidden absolute w-[100%] h-[100%] left-0 top-0 right-0 bottom-0 " href="/watch/ao-ashi-episode-24" title="Ao Ashi" data-jname="Ao Ashi"><i className=" fas fa-play"></i></a>
              </div>
              <div class="anime-detail bg-[#25262d] text-[12px] p-[10px] rounded-b-md">
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
            </SwiperSlide>
           
         
        </Swiper>
    
    </div>
    </div>
  );
}


export default AnimeCardSlider;