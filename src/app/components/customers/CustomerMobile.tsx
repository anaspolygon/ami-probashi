"use client";
import React from "react";
import CustomerCardMobile from "./CustomerCardMobile";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useLocale, useTranslations } from "next-intl";

interface Item {
  icon: string;
  image: string;
  name_bn: string;
  name_en: string;
  review_bn: string;
  rating: string;
  review_en: string;
  designation_bn: string;
  designation_en: string;
}

type Props = {
  imageUrl: string;
  customers: Item[];
};

const CustomerMobile = ({ imageUrl, customers }: Props) => {
  const t = useTranslations("stories");

  // const stories = [
  //   {
  //     name: t("story1.name"),
  //     designation: t("story1.designation"),
  //     text: t("story1.text"),
  //     avatar: "/assets/images/customers/avatar_1.png",
  //     image: "/assets/images/customers/customer_1.png",
  //   },
  //   {
  //     name: t("story2.name"),
  //     designation: t("story2.designation"),
  //     text: t("story2.text"),
  //     avatar: "/assets/images/customers/avatar_2.png",
  //     image: "/assets/images/customers/customer_2.png",
  //   },
  //   {
  //     name: t("story3.name"),
  //     designation: t("story3.designation"),
  //     text: t("story3.text"),
  //     avatar: "/assets/images/customers/avatar_3.png",
  //     image: "/assets/images/customers/customer_3.png",
  //   },
  //   {
  //     name: t("story4.name"),
  //     designation: t("story4.designation"),
  //     text: t("story4.text"),
  //     avatar: "/assets/images/customers/avatar_4.png",
  //     image: "/assets/images/customers/customer_4.png",
  //   },
  // ];

  const locale = useLocale();
  const isBn = locale === "bn";

  const stories = (customers ?? []).map((item, index) => {
    return {
      name: isBn ? item.name_bn : item.name_en,
      designation: isBn ? item.designation_bn : item.designation_en,
      text: isBn ? item.review_bn : item.review_en,
      avatar: item.icon,
      image: item.image,
      rating: Number(item.rating),
    };
  });

  return (
    <div className="px-4 md:hidden mb-8">
      <div className="mb-[17px]">
        <h3 className="text-[#0F172A] font-semibold barlow text-2xl leading-[28.8px]">
          {t("title")}
        </h3>
      </div>
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        pagination={{ clickable: true }}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        className="newspaper-slider"
      >
        {stories.map((story: any, index: number) => (
          <SwiperSlide key={index}>
            <CustomerCardMobile
              imageUrl={imageUrl}
              story={story}
              index={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerMobile;
