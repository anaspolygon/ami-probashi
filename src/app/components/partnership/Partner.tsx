import React from "react";
import PartnerTab from "./PartnerTab";
import { useLocale, useTranslations } from "next-intl";

interface Tab {
  icon: string;
  image: string;
  tab_title_bn: string;
  tab_title_en: string;
  partner_tab_desc_bn: string;
  partner_tab_desc_en: string;
}

interface Partner {
  tabs: Tab[];
  title_bn: string;
  title_en: string;
}

type Props = {
  imageUrl: string;
  partner: Partner;
};

const Partner = ({ imageUrl, partner }: Props) => {
  const t = useTranslations("partnership");
  const locale = useLocale();
  const isBn = locale === "bn";

  console.log(imageUrl);

  return (
    <div className="pt-2 pb-8 md:py-[70px]  md:bg-[#CFE6DB4D] md:bg-[url('/assets/images/workers/workers_bg.svg')] bg-no-repeat bg-[right_bottom_0px] bg-[length:210px_auto] md:bg-[length:375px_267px]  md:mb-0">
      <div className="w-full md:w-[1170px] md:mx-auto">
        <h2 className="barlow font-semibold text-[32px] leading-[38.4px] mb-[41px] text-black hidden md:block ">
          {/* {t("title")} */}
          {isBn ? partner?.title_bn : partner?.title_en}
        </h2>
        <h2 className="barlow font-semibold text-2xl leading-[38.4px] mb-[12px] text-black  pl-4 md:hidden">
          {/* {t("title")} */}
          {isBn ? partner?.title_bn : partner?.title_en}
        </h2>
        <PartnerTab imageUrl={imageUrl} partnerTabs={partner?.tabs} />
      </div>
    </div>
  );
};

export default Partner;
