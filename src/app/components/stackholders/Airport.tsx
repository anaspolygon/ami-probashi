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
  airport: Tab;
};

const Airport = ({ imageUrl, airport }: Props) => {
  const t = useTranslations("governmentStackholders.tabs.tabFour");
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
          __html: isBn ? airport?.govt_tab_desc_bn : airport?.govt_tab_desc_en,
        }}
      >
        {/* <p className="mb-8 md:mb-8 roboto font-normal text-sm md:text-lg leading-5 md:leading-8 text-[#475569]">
          {t("textOne")}
        </p>
        <p className="md:mb-8 roboto font-normal text-sm md:text-lg leading-5 md:leading-8 text-[#475569]">
          {t("textTwo")}{" "}
          <Link
            className="text-[#187E7D] text-sm md:text-lg font-semibold underline underline-offset-4"
            href={government.airportEmigration}
          >
            {m("learnmore")}
          </Link>
        </p> */}

        {/* <p className="mb-8 roboto font-normal text-sm md:text-lg leading-5 md:leading-8 text-[#475569]">
          This scan instantly retrieves all necessary information, enabling
          immigration officers to quickly verify their identity and details,
          ensuring secure and legitimate migration. As a result, this
          streamlined approach has significantly reduced immigration processing
          times and ensure safe and legitimate migration.
        </p> */}
      </div>
      <div
        className="min-w-full md:min-w-[493px] order-1 md:order-2 pb-6 md:pb-0"
        data-aos="fade-up"
      >
        <Image
          className="w-full md:w-[493px] h-auto"
          // src="/assets/images/stackholders/airport_emigration_1.webp"
          // src="/assets/images/stackholders/images_4.webp"
          src={airport && getImageUrl(imageUrl, airport.image ?? "")}
          width={493}
          height={470}
          alt=""
        />
      </div>
    </div>
  );
};

export default Airport;
