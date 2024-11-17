"use client";
import React, { useEffect } from "react";
import Banner from "./Banner";
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
import { useLocale, useTranslations } from "next-intl";
import { homeSlider } from "@/api";
import { getImageUrl } from "@/helpers/helpers";

interface Slider {
  image: string;
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

const BannerSection = ({ imageUrl, slider }: Props) => {
  const t1 = useTranslations("bannerOne");
  const t2 = useTranslations("bannerTwo");
  const t3 = useTranslations("bannerThree");

  // const banners = [
  //   {
  //     title: t1("title"),
  //     subTitle: t1("subTitle"),
  //     btnOne: t1("btnOne"),
  //     btnOneIcon: "/assets/images/banner/barcode.png",
  //     btnOneLink: homeSlider.sliderOne.downloadQr,
  //     btnTwo: t1("btnTwo"),
  //     btnTwoIcon: "/assets/images/banner/verify.png",
  //     btnTwoLink: homeSlider.sliderOne.verifySmartCard,
  //     showBtnTwo: true,
  //     image: "/assets/images/banner/banner1.webp",
  //     width: 654,
  //     height: 540,
  //     bannerMobileImage: "/assets/images/banner/banner_mobile_1.png",
  //     bannerMobileImageWidth: 285,
  //   },
  //   {
  //     title: t2("title"),
  //     subTitle: t2("subTitle"),
  //     btnOne: t2("btnOne"),
  //     btnOneIcon: "/assets/images/banner/login.png",
  //     btnOneLink: homeSlider.sliderTwo.login,
  //     showBtnTwo: false,
  //     image: "/assets/images/banner/banner2.webp",
  //     width: 731,
  //     height: 523,
  //     bannerMobileImage: "/assets/images/banner/banner_mobile_1.png",
  //     bannerMobileImageWidth: 304,
  //   },
  //   {
  //     title: t3("title"),
  //     subTitle: t3("subTitle"),
  //     btnOne: t3("btnOne"),
  //     btnOneIcon: "/assets/images/banner/login.png",
  //     btnOneLink: homeSlider.sliderThree.login,
  //     showBtnTwo: false,
  //     image: "/assets/images/banner/banner3.webp",
  //     width: 653,
  //     height: 523,
  //     bannerMobileImage: "/assets/images/banner/banner_mobile_1.png",
  //     bannerMobileImageWidth: 285,
  //   },
  // ];

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
        bannerMobileImage: "/assets/images/banner/banner_mobile_1.png",
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
        bannerMobileImage: "/assets/images/banner/banner_mobile_1.png",
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
        bannerMobileImage: "/assets/images/banner/banner_mobile_1.png",
        bannerMobileImageWidth: 285,
      },
  ];

  return (
    <div className="hidden md:block">
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        // autoplay={{
        //   delay: 8000,
        //   disableOnInteraction: false,
        // }}
        className="banner-slider"
      >
        {banners
          .filter((item) => item !== undefined)
          .map((banner, index) => (
            <SwiperSlide key={`home_page_banner_${index}`}>
              <Banner banner={banner} index={index} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default BannerSection;
