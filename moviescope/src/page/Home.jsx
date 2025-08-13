import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import '../style/Home.css'
import { useNavigate } from "react-router-dom";
import Best from "../compenents/Best";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="hero">
        <Swiper modules={[Autoplay]} autoplay={{ delay: 2500 }} className="mySwiper">
          <SwiperSlide><img src="../public/1.jfif" /></SwiperSlide>
          <SwiperSlide><img src="../public/2.jfif" /></SwiperSlide>
          <SwiperSlide><img src="../public/3.jfif" /></SwiperSlide>
          <SwiperSlide><img src="../public/4.jfif" /></SwiperSlide>
          <SwiperSlide><img src="../public/5.jfif" /></SwiperSlide>
          <SwiperSlide><img src="../public/6.jfif" /></SwiperSlide>
          <SwiperSlide><img src="../public/7.jfif" /></SwiperSlide>
          <SwiperSlide><img src="../public/8.jfif" /></SwiperSlide>
          <SwiperSlide><img src="../public/9.jfif" /></SwiperSlide>
        </Swiper>
        <div className="hero-content">
          <h1 className="title">MOVIESCOPE</h1>
          <h2>THE BEST PLACE FOR MOVIES</h2>
          <button onClick={() => navigate("/movies")}>ALLER A MOVIES</button>
        </div>
      </div>
      <Best />
      <div className="nos">
        
      </div>
    </>
  )
}

export default Home