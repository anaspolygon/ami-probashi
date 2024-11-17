import React from "react";
import { useLocale, useTranslations } from "next-intl";

interface Community {
  title_bn: string;
  title_en: string;
  description_left_bn: string;
  description_left_en: string;
  description_right_bn: string;
  description_right_en: string;
}

type Props = {
  community: Community;
};

export default function CommunitySection({ community }: Props) {
  const t = useTranslations("communitySection");
  const locale = useLocale();
  const isBn = locale === "bn";
  const title = isBn ? community?.title_bn : community?.title_en;
  const descriptionOne = isBn
    ? community?.description_left_bn
    : community?.description_left_en;

  const descriptionTwo = isBn
    ? community?.description_right_bn
    : community?.description_right_en;

  return (
    <section className="barlow px-6 md:px-0 mb-8 md:mb-0 md:py-18 w-full md:w-[1170px] md:mx-auto">
      <h1 className="text-xl md:text-[40px] font-semibold text-greyscale mb-3 md:mb-8 md:leading-48">
        {/* {t("title")} */}
        {title}
      </h1>
      <div className="rounded-lg grid grid-cols-1 gap-3 md:gap-[55px] md:grid-cols-2 roboto text-greyscale text-[14px] md:text-[24px] leading-5 md:leading-[36px]">
        <div className="space-y-6">
          {/* <p className="">{t("descriptionOne")}</p> */}
          <p className="">{descriptionOne}</p>
        </div>
        <div className="space-y-6">
          <p className="">{descriptionTwo}</p>
        </div>
      </div>
    </section>
  );
}
