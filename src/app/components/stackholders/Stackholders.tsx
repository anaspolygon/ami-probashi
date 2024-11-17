import React from "react";
import StackholdersTab from "./StackholdersTab";
import { useLocale, useTranslations } from "next-intl";
import "./Stackholders.css";
interface Tab {
  icon: string;
  image: string;
  tab_title_bn: string;
  tab_title_en: string;
  govt_tab_desc_bn: string;
  govt_tab_desc_en: string;
}

interface Stackholders {
  tabs: Tab[];
  title_bn: string;
  title_en: string;
}

type Props = {
  imageUrl: string;
  stackholders: Stackholders;
};

const Stackholders = ({ imageUrl, stackholders }: Props) => {
  const t = useTranslations("governmentStackholders");
  const locale = useLocale();
  const isBn = locale === "bn";
  return (
    <div className="w-full md:w-[1170px] md:mx-auto pt-2 pb-6 md:pt-0 md:pb-[82px]">
      <h2 className="barlow font-semibold text-[32px] leading-[38.4px] mb-[41px] text-black hidden md:block ">
        {/* {t("title")} */}
        {isBn ? stackholders?.title_bn : stackholders?.title_en}
      </h2>
      <h2 className="barlow font-semibold text-2xl leading-[38.4px] mb-[12px] text-black  pl-4 md:hidden">
        {t("title")}
      </h2>
      <StackholdersTab
        imageUrl={imageUrl}
        stackholdersTabs={stackholders?.tabs}
      />
    </div>
  );
};

export default Stackholders;
