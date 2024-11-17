import React, { useEffect } from "react";
import WeAreCards from "./WeAreCards";
import WeAreSlider from "./WeAreSlider";
import { useTranslations } from "next-intl";
import "./style.css";
import Info from "./Info";

interface Value {
  text_bn: string;
  text_en: string;
  number_bn: string;
  number_en: string;
}

type Props = {
  statistics: Value[];
};

const WeAre = ({ statistics }: Props) => {
  const t = useTranslations("weare");

  return (
    <div className="w-full md:w-[1170px] md:mx-auto text-[#163E37]">
      <div className="md:mb-6 mx-4 md:mx-0 md:my-0">
        <h2 className="text-2xl md:text-8.5 font-semibold  barlow mb-3 md:mb-3.5">
          {t("title")}
        </h2>
        <p className="text-sm leading-[21px] md:text-xl md:leading-9 roboto md:mb-6">
          {t("text1")}
        </p>
        {/* <WeAreSlider /> */}
        <Info statistics={statistics} />
      </div>
      <div className="hidden md:block">{/* <WeAreCards /> */}</div>
    </div>
  );
};

export default WeAre;
