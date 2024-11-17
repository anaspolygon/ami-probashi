import { government } from "@/api";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { getImageUrl } from "@/helpers/helpers";

interface Tab {
  icon: string;
  image: string;
  tab_title_bn: string;
  tab_title_en: string;
  govt_tab_desc_bn: string;
  govt_tab_desc_en: string;
}

type Props = {
  imageUrl: string;
  union: Tab;
};

const Union = ({ imageUrl, union }: Props) => {
  const t = useTranslations("governmentStackholders.tabs.tabThree");
  const m = useTranslations("common");
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const locale = useLocale();
  const isBn = locale === "bn";

  return (
    <div className="px-4 md:px-0 flex flex-col md:flex-row mt-[4%] md:mt-8">
      <div
        className="flex-1 order-2 md:order-1 bmet"
        dangerouslySetInnerHTML={{
          __html: isBn ? union?.govt_tab_desc_bn : union?.govt_tab_desc_en,
        }}
      >
        {/* <p className="md:mb-10 roboto font-normal text-sm md:text-lg leading-5 md:leading-8 text-[#475569]">
          {t("textOne")}{" "}
        </p>
        <p className="md:mb-8 roboto font-normal text-sm md:text-lg leading-5 md:leading-8 text-[#475569]">
          {t("textTwo")}{" "}
          <Link
            className="text-[#187E7D] text-sm md:text-lg font-semibold underline underline-offset-4"
            href={government.unionDigitalCenters}
          >
            {m("learnmore")}
          </Link>
        </p> */}

        {/* <p className="mb-8 roboto font-normal text-sm md:text-lg leading-5 md:leading-8 text-[#475569]">
          By offering these services locally, UDCs ensure that aspiring migrants
          from all regions have the support they need to pursue employment
          abroad effectively and efficiently
        </p> */}
      </div>
      <div
        className="min-w-full md:min-w-[493px] order-1 md:order-2 pb-6 md:pb-0"
        data-aos="fade-up"
      >
        <Image
          className="w-full md:w-[493px] h-auto"
          // src="/assets/images/stackholders/union_digital_1.webp"
          // src="/assets/images/stackholders/images_3.webp"
          src={union && getImageUrl(imageUrl, union.image ?? "")}
          width={493}
          height={470}
          alt=""
        />
      </div>
    </div>
  );
};

export default Union;
