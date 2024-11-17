import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  item: {
    news: string;
    title: string;
    text: string;
    link: string;
  };
};

const NewspaperCard = ({ item }: Props) => {
  const { news, title, text, link } = item;
  const t = useTranslations("common");
  return (
    <div className="p-3 md:px-6 md:pt-4 md:pb-[25px] border border-[#187E7D] rounded-xl shadow-md min-h-[205px] md:min-h-[272px] 2xl:min-h-[250px]">
      <div className="pb-[7px] md:pb-3 border-b border-b-[#CBD5E1] mb-2 md:mb-[13px]">
        <Image
          className="w-[114px] md:w-[200px]"
          src={news}
          width={200}
          height={40}
          alt=""
        />
      </div>
      <div className="mb-3 md:mb-6">
        <h2 className="barlow text-[#1E293B] font-semibold text-base md:text-2xl leading-[18.36px] md:leading-[32px] mb-1.5 md:mb-2">
          {title}
        </h2>
        <p className="roboto text-[#475569] text-base font-medium leading-[23px]">
          {text}
        </p>
      </div>
      <Link target="_blank" href={link} className="flex gap-1 md:gap-2">
        <p className="barlow text-[#187E7D] font-semibold text-xs md:text-[20px] leading-[12.62px] md:leading-[22px]">
          {t("learnmore")}
        </p>
        <Image
          className="w-3.5 h-3.5 md:w-6 md:h-6"
          src="/assets/images/newspaper/green_arrow.svg"
          width={24}
          height={24}
          alt=""
        />
      </Link>
    </div>
  );
};

export default NewspaperCard;
