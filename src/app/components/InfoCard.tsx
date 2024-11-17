import { useLocale } from "next-intl";
import React from "react";
import CountUp from "react-countup";
interface Card {
  title: string | number;
  count?: string | number;
  isSaved?: boolean;
  subtitle: string;
  bgColor: string;
  bgImage: string;
  className: string;
}
const InfoCard = ({ card }: { card: Card }) => {
  const { count, isSaved } = card;
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
  const locale = useLocale();
  const isBn = locale === "bn";
  return (
    <div
      className={`${card.className} rounded-xl bg-no-repeat bg-right-top bg-[length:80px_69px] md:bg-[length:138px_111px] pt-[13px] md:pt-[31px] pl-[13px] md:pl-6  pb-[15px] md:pb-[35px] pr-[13px] md:pr-6 min-w-[162px] md:min-w-[270px] min-[1441px]:w-full h-[82px] md:min-h-[144px]`}
    >
      <h2 className="text-primary font-semibold barlow text-lg md:text-[32px] leading-[21.6px] md:leading-[38.4px] mb-1">
        {isSaved ? "$" : null}
        <CountUp
          start={0}
          end={count as any}
          duration={3}
          formattingFn={isBn ? englishToBanglaDigits : undefined}
        ></CountUp>{" "}
        {card.title}
      </h2>
      <p className="text-[#0F172A] text-xs md:text-[20px] font-medium leading-[14.4px] md:leading-[24px]">
        {card.subtitle}
      </p>
    </div>
  );
};

export default InfoCard;
