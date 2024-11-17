import React from "react";
import { useLocale, useTranslations } from "next-intl";

interface Mission {
  image_1: string;
  image_2: string;
  image_3: string;
  image_4: string;
  title_bn: string;
  title_en: string;
  description_bn: string;
  description_en: string;
}

type Props = {
  mission: Mission;
};

export default function MissionVision({ mission }: Props) {
  const t = useTranslations("missionVision");
  const locale = useLocale();
  const isBn = locale === "bn";
  const title = isBn ? mission?.title_bn : mission?.title_en;
  const description = isBn ? mission?.description_bn : mission?.description_en;
  return (
    <section className="barlow px-6 md:px-0 pt-8 pb-6 md:pt-18 w-full md:w-[1170px] md:mx-auto">
      <h1 className="text-xl md:text-[40px] font-semibold text-greyscale mb-3 md:mb-8">
        {/* {t("title")} */}
        {title}
      </h1>
      <div className="rounded-lg grid gap-6 roboto text-greyscale text-[14px] md:text-[24px] leading-5 md:leading-[36px]">
        <div className="space-y-6">
          {/* <p className="">{t("descriptionOne")}</p> */}
          <p className="">{description}</p>
        </div>
        {/* <div className="space-y-6">
          <p className="">{t("descriptionTwo")}</p>
        </div> */}
      </div>
    </section>
  );
}
