import { useEffect } from "react";
import AnimeCardSlider from "./components/AnimeCardSlider";
import "./global.css";
import SideNav from './components/SideNav'
import Slider from './components/Slider'
import LatestAnimeSection from "./components/LatestAnimeSection";
import Navbar from "./components/Navbar";
function App() {
  useEffect(() => {
    document.title = "Anime Gate";
  }, []);



  return (
    <div className="flex">

      <SideNav />
      <div className="body ml-[240px] text-white overflow-hidden bg-[#1a1a1d] w-[calc(100vw_-_240px)]">
        
      <Navbar />
        
        
       
        <Slider />
        
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
