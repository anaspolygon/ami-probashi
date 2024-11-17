"use client";
import React, { useRef, useState } from "react";
import CustomerCard from "./CustomerCard";
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

const Customer = ({ imageUrl, customers }: Props) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  const goToSlide = (index: any) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const slides = [0, 1, 2, 3];
  const t = useTranslations("stories");

  // const stories = [
  //   {
  //     name: t("story1.name"),
  //     designation: t("story1.designation"),
  //     text: t("story1.text"),
  //     avatar: "/assets/images/customers/avatar_1.png",
  //     image: "/assets/images/customers/customer_1.webp",
  //   },
  //   {
  //     name: t("story2.name"),
  //     designation: t("story2.designation"),
  //     text: t("story2.text"),
  //     avatar: "/assets/images/customers/avatar_2.png",
  //     image: "/assets/images/customers/customer_2.webp",
  //   },
  //   {
  //     name: t("story3.name"),
  //     designation: t("story3.designation"),
  //     text: t("story3.text"),
  //     avatar: "/assets/images/customers/avatar_3.png",
  //     image: "/assets/images/customers/customer_3.webp",
  //   },
  //   {
  //     name: t("story4.name"),
  //     designation: t("story4.designation"),
  //     text: t("story4.text"),
  //     avatar: "/assets/images/customers/avatar_4.png",
  //     image: "/assets/images/customers/customer_4.webp",
  //   },
  // ];

  const locale = useLocale();
  const isBn = locale === "bn";

  //   {
  //     name:
  //       customer && isBn
  //         ? customer && customer[0].name_bn
  //         : customer && customer[0].name_en,
  //     designation:
  //       customer && isBn
  //         ? customer && customer[0].designation_bn
  //       customer && isBn
  //         ? customer && customer[0].name_bn
  //         : customer && customer[0].name_en,
  //     designation:
  //       customer && isBn
  //         ? customer && customer[0].designation_bn
  //         : customer && customer[0].designation_en,
  //     text:
  //       customer && isBn
  //         ? customer && customer[0].review_bn
  //         : customer && customer[0].review_en,
  //     avatar: (customer && customer[0].icon) ?? "",
  //     image: (customer && customer[0].image) ?? "",
  //     rating: Number(customer && customer[0].rating),
  //   },
  //   {
  //     name:
  //       customer && isBn
  //         ? customer && customer[1].name_bn
  //         : customer && customer[1].name_en,
  //     designation:
  //       customer && isBn
  //         ? customer && customer[1].designation_bn
  //         : customer && customer[1].designation_en,
  //     text:
  //       customer && isBn
  //         ? customer && customer[1].review_bn
  //         : customer && customer[1].review_en,
  //     avatar: (customer && customer[1].icon) ?? "",
  //     image: (customer && customer[1].image) ?? "",
  //     rating: Number(customer && customer[1].rating),
  //   },
  //   {
  //     name:
  //       customer && isBn
  //         ? customer && customer[2].name_bn
  //         : customer && customer[2].name_en,
  //     designation:
  //       customer && isBn
  //         ? customer && customer[2].designation_bn
  //         : customer && customer[2].designation_en,
  //     text:
  //       customer && isBn
  //         ? customer && customer[2].review_bn
  //         : customer && customer[2].review_en,
  //     avatar: (customer && customer[2].icon) ?? "",
  //     image: (customer && customer[2].image) ?? "",
  //     rating: Number(customer && customer[2].rating),
  //   },
  // ];
  //         : customer && customer[0].designation_en,
  //     text:
  //       customer && isBn
  //         ? customer && customer[0].review_bn
  //         : customer && customer[0].review_en,
  //     avatar: (customer && customer[0].icon) ?? "",
  //     image: (customer && customer[0].image) ?? "",
  //     rating: Number(customer && customer[0].rating),
  //   },
  //   {
  //     name:
  //       customer && isBn
  //         ? customer && customer[0].name_bn
  //         : customer && customer[0].name_en,
  //     designation:
  //       customer && isBn
  //         ? customer && customer[0].designation_bn
  //         : customer && customer[0].designation_en,
  //     text:
  //       customer && isBn
  //         ? customer && customer[0].review_bn
  //         : customer && customer[0].review_en,
  //     avatar: (customer && customer[0].icon) ?? "",
  //     image: (customer && customer[0].image) ?? "",
  //     rating: Number(customer && customer[0].rating),
  //   },
  //   {
  //     name:
  //       customer && isBn
  //         ? customer && customer[1].name_bn
  //         : customer && customer[1].name_en,
  //     designation:
  //       customer && isBn
  //         ? customer && customer[1].designation_bn
  //         : customer && customer[1].designation_en,
  //     text:
  //       customer && isBn
  //         ? customer && customer[1].review_bn
  //         : customer && customer[1].review_en,
  //     avatar: (customer && customer[1].icon) ?? "",
  //     image: (customer && customer[1].image) ?? "",
  //     rating: Number(customer && customer[1].rating),
  //   },
  //   {
  //     name:
  //       customer && isBn
  //         ? customer && customer[2].name_bn
  //         : customer && customer[2].name_en,
  //     designation:
  //       customer && isBn
  //         ? customer && customer[2].designation_bn
  //         : customer && customer[2].designation_en,
  //     text:
  //       customer && isBn
  //         ? customer && customer[2].review_bn
  //         : customer && customer[2].review_en,
  //     avatar: (customer && customer[2].icon) ?? "",
  //     image: (customer && customer[2].image) ?? "",
  //     rating: Number(customer && customer[2].rating),
  //   },
  // ];

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
    <div className="w-[calc(100%-((100%-1170px)/2))] ml-auto pb-[72px] customer hidden md:block">
      <div className="flex justify-between items-center pr-33.75">
        <div className="mb-8">
          <h3 className="text-[#0F172A] font-semibold barlow text-[32px] leading-[38.4px]">
            {t("title")}
          </h3>
        </div>
        <div className="custom-pagination flex gap-2">
          {slides.map((_, index) => (
            <button
              key={`customer_slider_paginatin_${index}`}
              onClick={() => goToSlide(index)}
              className={`${
                activeIndex === index
                  ? "bg-[#187E7D] w-10"
                  : "w-2 bg-[#7AC19F] "
              } h-2 rounded-full `}
            ></button>
          ))}
        </div>
      </div>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        className="!pb-[34px] customer-slider-web"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      >
        {stories.map((story, index) => (
          <SwiperSlide key={`stories_${index}`}>
            <CustomerCard story={story} index={index} imageUrl={imageUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Customer;
