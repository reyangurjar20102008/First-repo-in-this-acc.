
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar,Navigation } from "swiper";


import "swiper/css";
import "swiper/css/scrollbar";

function AnimeCardSlider(props) {
 
  const [data,setData] = useState([])
  useEffect(() => {
    // declare the data fetching function
    
    const fetchData = async () => {
        let fetchUrl = `https://api.consumet.org/meta/anilist/popular`
        const response = await fetch(fetchUrl);
      
     
      const responseJson = await response.json()
      setData(responseJson.results)
      console.log(responseJson.results)
    }
  
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [])

  return (
    <div className="px-5">
    <h1  className="ml-3">{props.criteria}</h1>
    
    <div className="item-wrap m-auto flex flex-wrap p-2">
      
        <Swiper
          slidesPerView={6}
          spaceBetween={25}
          navigation={true}
          modules={[Navigation]}
          loop={true}
          className="mySwiper"
        >
          
            
            {data.map((item) => 
            <SwiperSlide>
            <div data-id={item.id}  class="item m-2 ">
              <div class="item-poster group hover:after:opacity-90 group pb-[130%] relative">
                <div class="tick z-10 absolute bottom-2 left-[10px] ltr">
                  <div class="tick-item-sub bg-[#7bfcfc] text-black text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">{item.type}</div>
                </div>
                <div class="tick z-10 absolute bottom-2 right-[10px]  rtl">
                  <div class="tick-item-episode bg-[#C3073F] text-white text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">{item.releaseDate}</div>
                </div>
                <img class=" anime-poster-img absolute  w-[100%] h-[100%] left-0 top-0 right-0 bottom-0"  src={item.image} alt="Ao Ashi" />
                <a class="anime-poster-ahref z-10  group-hover:block hidden absolute w-[100%] h-[100%] left-0 top-0 right-0 bottom-0 " href={`/search/${item.title.userPreferred}`} ><i className=" fas fa-play"></i></a>
              </div>
              <div class="anime-detail bg-[#25262d] text-[12px] p-[10px] ">
                <h3 class="anime-name text-[14px] mb-[8px] h-[37px] font-[500]">
                  <a href={`/search/${item.title.userPreferred}`}  >{item.title.userPreferred}</a>
                </h3>
                <div class="fd-infor">
                  <span class="fdi-item">TotalEp {item.totalEpisodes}</span>
                  <span class="dot w-[6px] h-[6px] bg-white rounded-full my-[1px] mx-[6px] inline-block "></span>
                  <span class="fdi-item">{props.subOrDub === "1" ? "Sub" : "Dub"}</span>
                </div>
              </div>
              
            </div>  
            </SwiperSlide>
            )}
           
         
        </Swiper>
    
    </div>
    </div>
  );
}


export default AnimeCardSlider;