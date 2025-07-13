import React from "react"
import Navbar from "../layout/Navbar"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css"
import TickerNav from "../layout/TicketNav";
import Footer from "../layout/Footer";
// import Waves from "../blocks/Backgrounds/Waves/Waves";
import { toast, ToastContainer } from "react-toastify";
// import SmokeyCursor  from "../components/lightswind/smokey-cursor"
import "../App.css";
import About from "./About";
import Artists from "./Artists";
import Events from "./Events";
import SocialMediaFeeds from "./SocialMediaFeeds";
import Newsletter from "./Newsletter";
import Contacts from "./Contacts";
import LastestRelease from "./LastestRelease";





const Home: React.FC = () => {

  const slides = [
    "/bgNew.jpg",
    "/bgNew3.png",
    "/bgNew4.png",
    "/bgNew5.png",
    "/bgNew7.png",
    "/bgNew6.png"

  ];


  return (
    <>
    <div className="overflow-hidden">
      {/* <SmokeyCursor/> */}
      <ToastContainer autoClose={1000} draggable />

      <div className="z-50 fixed top-0 w-full ">
        <Navbar />
        <TickerNav />
      </div>



      <div id="home" className=" relative  w-full h-[800px] ">
        {/* Carousel */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className=" w-full h-full"
        >
          {slides.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full object-cover h-full top-0"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60" />
          

            </SwiperSlide>
          ))}

        </Swiper>

        {/* Overlay content */}
        <div className="absolute top-32 mt-[-150px]  left-0 right-0 z-30 flex flex-col items-center justify-center h-full text-center px-4 ">
          <h1 className="text-8xl md:text-9xl font-bold text-white bg-clip-text mb-10">
            Africa's Next Sound
          </h1>

          <p className="text-lg md:text-3xl text-gray-200 mb-10 ">
            Discover.   Create.   Elevate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => { toast('coming soon') }}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              {'Listen to Our Artists'}
            </button>
            <button onClick={() => { toast('coming soon') }} className="border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300">
              Join Our Movement
            </button>
          </div>

        </div>

        {/* Swiper pagination dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
          <div className="swiper-pagination"></div>
        </div>
      </div>

      <div className="  w-full">
        <Artists />

        <LastestRelease />

        <Events />

        <SocialMediaFeeds />

        <About />

        <Newsletter />

       <Contacts />

      </div>

      <Footer />

</div>

    </>
  )
}

export default Home