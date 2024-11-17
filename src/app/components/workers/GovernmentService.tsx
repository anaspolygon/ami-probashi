import { migrantWorkers } from "@/api";
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
  migrate_tab_desc_bn: string;
  migrate_tab_desc_en: string;
}

type Props = {
  imageUrl: string;
  government: Tab;
};

const GovernmentService = ({ imageUrl, government }: Props) => {
  const t = useTranslations("migrantWorkers.tabs.tabOne");
  const m = useTranslations("common");
  const locale = useLocale();
  const isBn = locale === "bn";
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="px-4 md:px-0 flex flex-col md:flex-row justify-between md:gap-16 mt-[4%] md:mt-8">
      <div className="flex-1 order-2 md:order-1">
        <div
          dangerouslySetInnerHTML={{
            __html: isBn
              ? government && government.migrate_tab_desc_bn
              : government && government.migrate_tab_desc_en,
          }}
          className="worker"
        >
          {/* <h2 className="barlow font-semibold text-lg md:text-2xl leading-[21.43px] md:leading-9 text-[#0F172A] mb-[2px] md:mb-1">
            {t("titleOne")}
          </h2>
          <p className="roboto font-normal text-sm md:text-lg leading-5 md:leading-7 text-[#475569] ">
            {t("textOne")}{" "}
            <Link
              className="text-[#187E7D] text-sm md:text-lg font-semibold underline underline-offset-4"
              href={migrantWorkers.governmentServices.bmetService}
            >
              {m("learnmore")}
            </Link>
          </p> */}
        </div>
        {/* <div className="mb-4 md:mb-6">
          <h2 className="barlow font-semibold text-lg md:text-2xl leading-[21.43px] md:leading-9 text-[#0F172A] mb-[2px] md:mb-1">
            {t("titleOne")}
          </h2>
          <p className="roboto font-normal text-sm md:text-lg leading-5 md:leading-7 text-[#475569] ">
            {t("textOne")}{" "}
            <Link
              className="text-[#187E7D] text-sm md:text-lg font-semibold underline underline-offset-4"
              href={migrantWorkers.governmentServices.bmetService}
            >
              {m("learnmore")}
            </Link>
          </p>
        </div>
        <div className="mb-4 md:mb-6">
          <h2 className="barlow font-semibold text-lg md:text-2xl leading-[21.43px] md:leading-9 text-[#0F172A] mb-[2px] md:mb-1">
            {t("titleTwo")}
          </h2>
          <p className="roboto font-normal text-sm md:text-lg leading-5 md:leading-7 text-[#475569] ">
            {t("textTwo")}{" "}
            <Link
              className="text-[#187E7D] text-sm md:text-lg font-semibold underline underline-offset-4"
              href={migrantWorkers.governmentServices.pdo}
            >
              {m("learnmore")}
            </Link>
          </p>
        </div>
        <div className="mb-4 md:mb-6">
          <h2 className="barlow font-semibold text-lg md:text-2xl leading-[21.43px] md:leading-9 text-[#0F172A] mb-[2px] md:mb-1">
            {t("titleThree")}
          </h2>
          <p className="roboto font-normal text-sm md:text-lg leading-5 md:leading-7 text-[#475569] ">
            {t("textThree")}{" "}
            <Link
              className="text-[#187E7D] text-sm md:text-lg font-semibold underline underline-offset-4"
              href={migrantWorkers.governmentServices.generalTraining}
            >
              {m("learnmore")}
            </Link>
          </p>
        </div>
        <div className="mb-4 md:mb-6">
          <h2 className="barlow font-semibold text-lg md:text-2xl leading-[21.43px] md:leading-9 text-[#0F172A] mb-[2px] md:mb-1">
            {t("titleFour")}
          </h2>
          <p className="roboto font-normal text-sm md:text-lg leading-5 md:leading-7 text-[#475569] ">
            {t("textFour")}{" "}
            <Link
              className="text-[#187E7D] text-sm md:text-lg font-semibold underline underline-offset-4"
              href={migrantWorkers.governmentServices.bmetClearanceSmartCard}
            >
              {m("learnmore")}
            </Link>
          </p>
        </div> */}
      </div>
      <div
        className="min-w-full md:min-w-[433px] pb-8 md:pt-[78px] order-1 md:order-2"
        data-aos="fade-up"
      >
        <Image
          className="w-full md:w-[433px] h-auto"
          // src="/assets/images/workers/government_service.webp"
          src={
            imageUrl &&
            getImageUrl(imageUrl, (government && government?.image) ?? "")
          }
          width={433}
          height={487}
          alt=""
        />
      </div>
    </div>
  );
};

export default GovernmentService;
