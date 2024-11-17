"use client";
import Image from "next/image";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { servicesGoverment, servicesJob } from "@/api";
import Link from "next/link";
import { getImageUrl } from "@/helpers/helpers";

interface Value {
  image: string;
  button_link: string;
}
interface Props {
  appSection: Array<Value>;
  imageUrl: string;
}

const ProbashiAppSlider = ({ appSection, imageUrl }: Props) => {
  console.log(appSection);

  // const images = [
  //   {
  //     image: "/assets/images/probashi/probashi_1.webp",
  //     link: servicesGoverment.bmetRegistration,
  //   },
  //   {
  //     image: "/assets/images/probashi/probashi_2.webp",
  //     link: servicesGoverment.pdo,
  //   },
  //   {
  //     image: "/assets/images/probashi/probashi_3.webp",
  //     link: servicesGoverment.generalTraining,
  //   },
  //   {
  //     image: "/assets/images/probashi/probashi_4.webp",
  //     link: servicesGoverment.bmetClearanceSmartCard,
  //   },
  // ];

  const images = (appSection ?? []).map((item) => ({
    image: getImageUrl(imageUrl, item.image),
    link: item.button_link,
  }));

  return (
    <div className="w-[570px] h-[520px] hidden md:block">
      <Swiper
        spaceBetween={50}
        modules={[Autoplay, Pagination]}
        centeredSlides={false}
        loop={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="recruit-slider"
      >
        {images.map((item, index) => (
          <SwiperSlide key={`amiprobasi_slider_image_${index}`}>
            <div className="w-[570px] h-[520px] relative">
              <Image
                src={item.image}
                className="w-full"
                width={570}
                height={520}
                alt=""
              />
              <Link
                className="absolute top-[84px] right-[22px]"
                href={item.link}
              >
                <Image
                  src="/assets/images/probashi/btn.svg"
                  width={56}
                  height={56}
                  alt=""
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProbashiAppSlider;
