"use client";
import React, { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import WeAreCard from "./WeAreCard";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";

const WeAreSlider = () => {
  const t = useTranslations("weare");
  const weare = [
    {
      title: t("cardOne"),
      image: "/assets/images/weare/card1.webp",
      bg: "bg-[#2B2846] py-2.5 pl-2.5 md:pl-[23px]",
    },
    {
      title: t("cardTwo"),
      image: "/assets/images/weare/card2.webp",
      bg: "bg-[#50237A] py-2.5  pl-2.5 md:pl-[23px]",
    },
    {
      title: t("cardThree"),
      image: "/assets/images/weare/card3.webp",
      bg: "we-are-card-bg py-2.5  pl-2.5 md:pl-[15px]",
    },
    {
      title: t("cardFour"),
      image: "/assets/images/weare/card4.webp",
      bg: "bg-[#1E2D41] py-2.5  pl-2.5 md:pl-[13px]",
    },

    {
      title: t("cardFive"),
      image: "/assets/images/weare/card5.webp",
      bg: "bg-[#187E7D] py-2.5  pl-2.5 md:pl-[15px]",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="mt-4 md:hidden" data-aos="fade-left">
      <Swiper spaceBetween={16} slidesPerView={2.3}>
        {weare.map((item, index) => (
          <SwiperSlide key={`we_are_slider_${index}`}>
            <WeAreCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WeAreSlider;
