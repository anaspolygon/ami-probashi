"use client";
import React, { useEffect } from "react";
import WeAreCard from "./WeAreCard";
import { useLocale, useTranslations } from "next-intl";
import AOS from "aos";
import "aos/dist/aos.css";
import { getImageUrl } from "@/helpers/helpers";

interface Impacts {
  image_1: string;
  image_2: string;
  image_3: string;
  image_4: string;
  image_5: string;
  title_bn: string;
  title_en: string;
  description_bn: string;
  description_en: string;
  image_text_1_bn: string;
  image_text_1_en: string;
  image_text_2_bn: string;
  image_text_2_en: string;
  image_text_3_bn: string;
  image_text_3_en: string;
  image_text_4_bn: string;
  image_text_4_en: string;
  image_text_5_bn: string;
  image_text_5_en: string;
}

type Props = {
  imageUrl: string;
  impacts: Impacts;
};

const  WeAreCards = ({ imageUrl, impacts }: Props) => {
  const t = useTranslations("weare");
  // const weare = [
  //   {
  //     title: t("cardOne"),
  //     image: "/assets/images/weare/card1.webp",
  //     bg: "bg-[#2B2846] py-2.5 pl-[23px]",
  //   },
  //   {
  //     title: t("cardTwo"),
  //     image: "/assets/images/weare/card2.webp",
  //     bg: "bg-[#50237A] py-2.5 pl-[23px]",
  //   },
  //   {
  //     title: t("cardThree"),
  //     image: "/assets/images/weare/card3.webp",
  //     bg: "we-are-card-bg py-2.5 pl-[15px]",
  //   },
  //   {
  //     title: t("cardFour"),
  //     image: "/assets/images/weare/card4.webp",
  //     bg: "bg-[#1E2D41] py-2.5 pl-[13px]",
  //   },

  //   {
  //     title: t("cardFive"),
  //     image: "/assets/images/weare/card5.webp",
  //     bg: "bg-[#187E7D] py-2.5 pl-[15px]",
  //   },
  // ];

  const locale = useLocale();
  const isBn = locale === "bn";

  const weare = [
    {
      title: isBn
        ? impacts && impacts.image_text_1_bn
        : impacts && impacts.image_text_1_en,
      image: impacts && getImageUrl(imageUrl, impacts.image_1),
      bg: "bg-[#2B2846] py-2.5 pl-[23px]",
    },
    {
      title: isBn
        ? impacts && impacts.image_text_2_bn
        : impacts && impacts.image_text_2_en,
      image: impacts && getImageUrl(imageUrl, impacts.image_2),
      bg: "bg-[#50237A] py-2.5 pl-[23px]",
    },
    {
      title: isBn
        ? impacts && impacts.image_text_3_bn
        : impacts && impacts.image_text_3_en,
      image: impacts && getImageUrl(imageUrl, impacts.image_3),
      bg: "we-are-card-bg py-2.5 pl-[15px]",
    },
    {
      title: isBn
        ? impacts && impacts.image_text_4_bn
        : impacts && impacts.image_text_4_en,
      image: impacts && getImageUrl(imageUrl, impacts.image_4),
      bg: "bg-[#1E2D41] py-2.5 pl-[13px]",
    },

    {
      title: isBn
        ? impacts && impacts.image_text_5_bn
        : impacts && impacts.image_text_5_en,
      image: impacts && getImageUrl(imageUrl, impacts.image_5),
      bg: "bg-[#187E7D] py-2.5 pl-[15px]",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="flex gap-5 justify-center" data-aos="fade-up">
      {weare.map((item, index) => (
        <WeAreCard key={`weare-card-${index}`} item={item} />
      ))}
    </div>
  );
};

export default WeAreCards;
