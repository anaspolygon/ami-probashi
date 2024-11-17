"use client";
import React from "react";
import InfoCard from "./InfoCard";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import CountUp from "react-countup";

interface Value {
  text_bn: string;
  text_en: string;
  number_bn: string;
  number_en: string;
}

interface Props {
  title?: string;
  statistics: Value[];
}

const Info = ({ title, statistics: data }: Props) => {
  const t = useTranslations("info");
  const locale = useLocale();
  const isBn = locale === "bn";
  // const infoCards = [
  //   {
  //     title: t("aspiring"),
  //     count: isBn ? 50 : 5,
  //     subtitle: t("aspiringText"),
  //     bgColor: "#C9DDDD",
  //     bgImage: "info_card_bg_1.png",
  //     className:
  //       "bg-[#C9DDDD]  bg-[url('/assets/images/info/info_card_bg_1.png')]",
  //   },
  //   {
  //     title: t("quicker"),
  //     count: 12,
  //     subtitle: t("quickerText"),
  //     bgColor: "#B4DDD6",
  //     bgImage: "info_card_bg_2.png",
  //     className:
  //       "bg-[#B4DDD6]  bg-[url('/assets/images/info/info_card_bg_2.png')]",
  //   },
  //   {
  //     title: t("saved"),
  //     count: isBn ? 50 : 500,
  //     subtitle: t("savedText"),
  //     isSaved: true && !isBn,
  //     bgColor: "#B4DDD6",
  //     bgImage: "info_card_bg_3.png",
  //     className:
  //       "bg-[#B4DDD6]  bg-[url('/assets/images/info/info_card_bg_3.png')]",
  //   },
  //   {
  //     title: t("employers"),
  //     count: 2500,
  //     subtitle: t("employersText"),
  //     bgColor: "#CFE6DB",
  //     bgImage: "info_card_bg_4.png",
  //     className:
  //       "bg-[#CFE6DB]  bg-[url('/assets/images/info/info_card_bg_4.png')]",
  //   },
  // ];

  const infoCards = [
    {
      title: t("aspiring"),
      count: isBn ? data && data[1].number_bn : data && data[1].number_en,
      subtitle: isBn ? data && data[1].text_bn : data && data[1].text_en,
      bgColor: "#C9DDDD",
      bgImage: "info_card_bg_1.png",
      className:
        "bg-[#C9DDDD]  bg-[url('/assets/images/info/info_card_bg_1.png')]",
    },
    {
      title: t("quicker"),
      count: isBn && data ? data[2].number_bn : data && data[2].number_en,
      subtitle: isBn && data ? data[2].text_bn : data && data[2].text_en,
      bgColor: "#B4DDD6",
      bgImage: "info_card_bg_2.png",
      className:
        "bg-[#B4DDD6]  bg-[url('/assets/images/info/info_card_bg_2.png')]",
    },
    {
      title: t("saved"),
      count: isBn && data ? data[3].number_bn : data && data[3].number_en,
      subtitle: isBn && data ? data[3].text_bn : data && data[3].text_en,
      isSaved: true && !isBn,
      bgColor: "#B4DDD6",
      bgImage: "info_card_bg_3.png",
      className:
        "bg-[#B4DDD6]  bg-[url('/assets/images/info/info_card_bg_3.png')]",
    },
    {
      title: t("employers"),
      count: isBn ? data && data[4].number_bn : data && data[4].number_en,
      subtitle: isBn ? data && data[4].text_bn : data && data[4].text_en,
      bgColor: "#CFE6DB",
      bgImage: "info_card_bg_4.png",
      className:
        "bg-[#CFE6DB]  bg-[url('/assets/images/info/info_card_bg_4.png')]",
    },
  ];
  const englishToBanglaDigits = (num: number) => {
    const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

    return num
      .toString()
      .split("")
      .map((digit) =>
        englishDigits.includes(digit)
          ? banglaDigits[englishDigits.indexOf(digit)]
          : digit
      )
      .join("");
  };

  return (
    <div>
      <div className="px-0 md:px-0 web:px-0 mt-4 md:mt-0">
        {title ? (
          <h2 className="barlow font-semibold text-2xl md:text-[34px] leading-[28.8px] md:leading-[40.8px] mb-4 md:mb-8">
            {title}
          </h2>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[30px]">
          <div className="h-[189px] md:min-w-[555px] md:h-auto bg-[#CFE6DB] bg-[url('/assets/images/info/info_bg.png')] bg-no-repeat bg-right-top  bg-[length:143px_137px] md:bg-[length:251px_240px] rounded-md md:rounded-xl pt-[22px] md:pt-10 relative">
            <div className="pl-[22px] md:pl-10">
              <h2 className="text-primary font-semibold barlow text-[32px] md:text-5xl leading-[38.4px] md:leading-[57.6px] mb-1 md:mb-2">
                <CountUp
                  start={0}
                  end={isBn ? 70 : 7}
                  duration={3}
                  formattingFn={isBn ? englishToBanglaDigits : undefined}
                ></CountUp>{" "}
                {t("service")}
              </h2>
              <p className="text-[#0F172A] text-sm md:text-2xl font-medium leading-[16.8px] md:leading-[28.8px] w-[237px] md:w-[348px]">
                {/* {t("serviceText")} */}
                {isBn ? data && data[0].text_bn : data   && data[0].text_en}
              </p>
            </div>
            <div className="pl-[13px] md:pl-[23px] absolute bottom-0">
              <Image
                src="/assets/images/info/info.svg"
                className="w-[135px]  md:w-[301px] md:h-[156px]"
                width={301}
                height={156}
                alt=""
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 md:gap-[31px]">
            {infoCards.map((card, index) => (
              <InfoCard key={`info_card_key_${index}`} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
