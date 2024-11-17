import React from "react";
import RecruitTab from "./RecruitTab";
import { useLocale, useTranslations } from "next-intl";

interface Tab {
  icon: string;
  image1: string;
  image2: string;
  image3: string;
  button_link: string;
  tab_title_bn: string;
  tab_title_en: string;
  button_title_bn: string;
  button_title_en: string;
  recruit_tab_desc_bn: string;
  recruit_tab_desc_en: string;
}

interface Recruit {
  tabs: Tab[];
  title_bn: string;
  title_en: string;
}

type Props = {
  imageUrl: string;
  recruit: Recruit;
};

const Recruit = ({ recruit, imageUrl }: Props) => {
  const t = useTranslations("recruit");
  const locale = useLocale();
  const isBn = locale === "bn";
  return (
    // <div className="md:px-18.75 web:px-33.75 py-6 md:py-[72px]">
    <div className="w-full md:w-[1170px] md:mx-auto py-6 md:py-[72px]">
      <h2 className="barlow font-semibold text-[32px] leading-[38.4px] mb-[41px] text-black hidden md:block ">
        {/* {t("title")} */}
        {isBn ? recruit?.title_bn : recruit?.title_en}
      </h2>
      <h2 className="barlow font-semibold text-2xl leading-[38.4px] mb-[12px] text-black  pl-4 md:hidden">
        {/* {t("title")} */}
        {isBn ? recruit?.title_bn : recruit?.title_en}
      </h2>
      <RecruitTab imageUrl={imageUrl} recruitTabs={recruit?.tabs} />
    </div>
  );
};

export default Recruit;
