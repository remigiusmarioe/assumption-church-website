import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import Lightbox from "yet-another-react-lightbox";

import "swiper/css";
import "swiper/css/navigation";
import "yet-another-react-lightbox/styles.css";
import { Link } from "react-router-dom";

import img1 from "../assets/church2.jpg";
import img2 from "../assets/velankanni.jpeg";
import img3 from "../assets/sacredheart.png";
import img4 from "../assets/lourdes.jpeg";

const images = [img1, img2, img3, img4];

const Gallery = () => {

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="flex flex-col gap-10 py-20 px-6 bg-gray-100">

      {/* Heading */}
      <h1 className="text-center text-4xl font-bold text-blue-900 mb-16">
        CHURCH GALLERY
      </h1>

      {/* Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        className="max-w-7xl"
      >

        {images.map((img, i) => (
          <SwiperSlide key={i}>

            <div
              className="overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              onClick={() => {
                setOpen(true);
                setIndex(i);
              }}
            >
              <img
                src={img}
                alt=""
                className="w-full h-[350px] object-cover object-top transition duration-500 hover:scale-105"
              />
            </div>

          </SwiperSlide>
        ))}

      </Swiper>

      {/* View More Button */}
<div className="flex justify-center mt-12">
  <Link to="/gallery">
    <button className="view-more-btn bg-blue-700 hover:bg-blue-900 text-white px-8 py-3 rounded-4xl text-lg shadow-lg transition duration-300 hover:cursor-pointer ">
      View More
    </button>
  </Link>
</div>

      {/* Lightbox Popup */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((img) => ({ src: img }))}
        index={index}
      />

    </section>
  );
};

export default Gallery;