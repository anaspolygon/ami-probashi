"use client";
import React from "react";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useLocale } from "next-intl";
import { getImageUrl } from "@/helpers/helpers";

interface Slider {
  image: string;
  image_mobile: string;
  button_one_link: string;
  button_two_link: string;
  slider_title_bn: string;
  slider_title_en: string;
  button_one_title_bn: string;
  button_one_title_en: string;
  button_two_title_bn: string;
  button_two_title_en: string;
  slider_description_bn: string;
  slider_description_en: string;
}

type Props = {
  imageUrl: string;
  slider: Slider[];
};

const BannerMobile = ({ imageUrl, slider }: Props) => {
  const locale = useLocale();
  const isBn = locale === "bn";
  const banners = [
    slider &&
      slider[0] && {
        title: isBn
          ? slider && slider[0].slider_title_bn
          : slider && slider[0].slider_title_en,
        subTitle: isBn
          ? slider && slider[0].slider_description_bn
          : slider && slider[0].slider_description_en,
        btnOne: isBn
          ? slider && slider[0].button_one_title_bn
          : slider && slider[0].button_one_title_en,
        btnOneIcon: "/assets/images/banner/barcode.png",
        btnOneLink: (slider && slider[0].button_one_link) ?? "",
        btnTwo: isBn
          ? slider && slider[0].button_two_title_bn
          : slider && slider[0].button_one_title_en,
        btnTwoIcon: "/assets/images/banner/verify.png",
        btnTwoLink: (slider && slider[0].button_two_link) ?? "",
        showBtnTwo: true,
        image: slider && getImageUrl(imageUrl, slider[0].image),
        width: 654,
        height: 540,
        bannerMobileImage:
          slider && getImageUrl(imageUrl, slider[0].image_mobile),
        bannerMobileImageWidth: 285,
      },
    slider &&
      slider[1] && {
        title: isBn
          ? slider && slider[1].slider_title_bn
          : slider && slider[1].slider_title_en,
        subTitle: isBn
          ? slider && slider[1].slider_description_bn
          : slider && slider[1].slider_description_en,
        btnOne: isBn
          ? slider && slider[1].button_one_title_bn
          : slider && slider[1].button_one_title_en,
        btnOneIcon: "/assets/images/banner/login.png",
        btnOneLink: (slider && slider[1].button_one_link) ?? "",
        showBtnTwo: false,
        image: slider && getImageUrl(imageUrl, slider[1].image),
        width: 731,
        height: 523,
        bannerMobileImage:
          slider && getImageUrl(imageUrl, slider[1].image_mobile),
        bannerMobileImageWidth: 304,
      },
    slider &&
      slider[2] && {
        title: isBn
          ? slider && slider[2].slider_title_bn
          : slider && slider[2].slider_title_en,
        subTitle: isBn
          ? slider && slider[2].slider_description_bn
          : slider && slider[2].slider_description_en,
        btnOne: isBn
          ? slider && slider[2].button_one_title_bn
          : slider && slider[2].button_one_title_en,
        btnOneIcon: "/assets/images/banner/login.png",
        btnOneLink: (slider && slider[1].button_one_link) ?? "",
        showBtnTwo: false,
        image: slider && getImageUrl(imageUrl, slider[2].image),
        width: 653,
        height: 523,
        bannerMobileImage:
          slider && getImageUrl(imageUrl, slider[2].image_mobile),
        bannerMobileImageWidth: 285,
      },
  ];

  return (
    <div className="md:hidden">
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        // autoplay={{
        //   delay: 8000,
        //   disableOnInteraction: false,
        // }}
        className="banner-slider-mobile  h-[825px]"
      >
        {slider && slider[0] && (
          <SwiperSlide>
            <Banner1 banner={banners[0]} />
          </SwiperSlide>
        )}

        {slider && slider[1] && (
          <SwiperSlide>
            <Banner2 banner={banners[1]} />
          </SwiperSlide>
        )}
        {slider && slider[2] && (
          <SwiperSlide>
            <Banner3 banner={banners[2]} />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default BannerMobile;
