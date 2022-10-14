import { useState, useEffect } from "react";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { useSwiper, Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Slider() {
    const [data, setData] = useState([])

    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
          const response = await fetch('https://api.consumet.org/meta/anilist/popular');
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
        <>
            <div className="p-5 rounded-lg">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ dynamicBullets: true }}
                    loop={true}
                // autoplay={{
                //   delay: 4000,
                //   disableOnInteraction: false,
                // }}
                >



                    {data.map((item) => 
                        <SwiperSlide>
                            <div className="slide group relative  h-[56vh]  ">
                                <img draggable="false" className="object-cover   group-hover:opacity-90 h-[100%] w-[100%] absolute left-0 top-0 right-0 bottom-0" src={item.cover} alt="" />

                                <div className="content z-10    relative text-white pl-14 pt-10">
                                    <h1 className="text-5xl font-[800] my-3">{item.title.english}</h1>
                                    <div className=" flex my-3">
                                        <div>
                                            <i className="fas fa-play-circle fa-lg font-[700]  mr-1"></i> {item.type}
                                        </div>
                                        <div className="ml-2">
                                            <i className="fas fa-calendar font-[700] mr-1"></i>{item.releaseDate}
                                        </div>

                                    </div>
                                    <div className="my-3 mb-4  description font-[600] ellipsis"><p dangerouslySetInnerHTML={{__html: item.description}} className="discText pr-[600px] "></p>

                                    </div>
                                    <button className="bg-[#950740] px-4 py-2 rounded-md"> <i className="fas fa-play-circle fa-lg  mr-1"></i>  Watch Now</button>
                                </div>

                            </div>

                        </SwiperSlide>

                    )}
                </Swiper>
            </div>
            
        </>
    );
}






export default Slider;
