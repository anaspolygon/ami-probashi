"use client";
import React, { useEffect, useState } from "react";
import NewspaperCard from "./NewspaperCard";
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
import Image from "next/image";
import { _get, wordpress } from "@/api";
import {
  extractFirstBnThreeSentences,
  getFirstSentences,
  removeTagsAndNewlinesAndEllipsis,
} from "@/helpers/helpers";

interface News {
  news: string;
  title: string;
  text: string;
  link: string;
}

const Newspaper = () => {
  const t = useTranslations("newspaper");
  const news = [
    {
      news: "/assets/images/newspaper/daily_star.svg",
      title: t("news1.title"),
      text: t("news1.text"),
      link: "https://www.thedailystar.net/tech-startup/news/making-migration-more-accessible-bangladeshis-3501231",
    },
    {
      news: "/assets/images/newspaper/tbs.svg",
      title: t("news3.title"),
      text: t("news3.text"),
      link: "https://www.tbsnews.net/bangladesh/how-ami-probashi-platform-could-be-better-utilised-ease-migration-bypassing-middlemen",
    },
    {
      news: "/assets/images/newspaper/fe.svg",
      title: t("news4.title"),
      text: t("news4.text"),
      link: "https://thefinancialexpress.com.bd/national/ami-probashi-saves-time-and-money-of-migrants",
    },
    {
      news: "/assets/images/newspaper/daily_star.svg",
      title: t("news2.title"),
      text: t("news2.text"),
      link: "https://www.thedailystar.net/business/organisation-news/press-releases/news/ami-probashi-a2i-and-brac-join-forces-erase-middlemen-migration-sector-3635056",
    },
  ];

  // const [news, setNews] = useState<Array<News> | null>(null);

  // const locale = useLocale();

  // useEffect(() => {
  //   const url =
  //     locale === "en"
  //       ? process.env.NEXT_PUBLIC_WORDPRESS_ARTICLE_EN_API ??
  //         wordpress.articleEnApi
  //       : process.env.NEXT_PUBLIC_WORDPRESS_ARTICLE_BN_API ??
  //         wordpress.articleBnApi;
  //   _get(url as string).then((res) => {
  //     const data = res.data.map((item: any) => ({
  //       news:
  //         item.better_featured_image?.source_url ??
  //         "/assets/images/newspaper/daily_star.svg",
  //       title: item.title.rendered,
  //       text: removeTagsAndNewlinesAndEllipsis(item.excerpt.rendered),
  //       link: item.link,
  //     }));
  //     setNews(data ?? null);
  //   });
  // }, [locale]);

  return (
    <div className="px-4 pb-4  w-full md:w-[1170px] mx-auto md:py-[72px]">
      <div className="flex  justify-between mb-[15px] md:mb-10">
        <h2 className="barlow font-semibold text-2xl md:text-[32px] text-[#0F172A] leading-[28.8px] md:leading-[38.4px]">
          {t("title")}
        </h2>
        {/* <a
          className="hidden md:flex gap-2 items-center"
          href={
            process.env.NEXT_PUBLIC_WORDPRESS_ARTICLE_URL ??
            wordpress.articleUrl
          }
          target="_blank"
        >
          <p className="barlow text-black text-xl font-medium leading-[24px]">
            {t("viewAll")}
          </p>
          <Image
            src="/assets/images/newspaper/green_arrow.svg"
            width={24}
            height={24}
            alt=""
          />
        </a> */}
      </div>
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        pagination={{ clickable: true }}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        loop={true}
        className="newspaper-slider"
      >
        {(news ?? []).map((item, index) => (
          <SwiperSlide key={`news_${index}`}>
            <NewspaperCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Newspaper;
