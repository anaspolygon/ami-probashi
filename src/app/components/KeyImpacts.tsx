import React from "react";
import WeAreSlider from "./WeAreSlider";
import WeAreCards from "./WeAreCards";
import { useTranslations } from "next-intl";

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

const KeyImpacts = ({ imageUrl, impacts }: Props) => {
  const t = useTranslations("keyImapacts");

  return (
    // <div className="md:px-18.75 web:px-33.75 ml-4 md:ml-0">
    <div className="md:w-[1170px]  ml-4 md:mx-auto">
      <h2 className="barlow font-semibold text-2xl md:text-[34px]  leading-[40.8px] text-[#163E37] md:mb-[38px]">
        {t("title")}
      </h2>
      <WeAreSlider />
      <div className="hidden md:block">
        <WeAreCards imageUrl={imageUrl} impacts={impacts} />
      </div>
    </div>
  );
};

export default KeyImpacts;
