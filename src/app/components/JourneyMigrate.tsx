"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";

const JourneyMigrate = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const t = useTranslations("journey");
  return (
    <div>
      <div className="md:hidden" data-aos="fade-up">
        {/* <Image
          src="/assets/images/journey_migrate_mb.svg"
          alt="Example Image"
          width={500}
          height={500}
          style={{ width: "100%", height: "auto" }}
        /> */}
        <h2 className="barlow font-semibold text-2xl leading-[28.8px] text-black px-4">
          {t("title")}
        </h2>
        <div className="pt-5 pb-[30px] px-4">
          <Image
            src="/assets/images/journey/journey_mobile.webp"
            alt="Example Image"
            width={500}
            height={500}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div className="hidden md:block" data-aos="fade-up">
        {/* <Image
          src="/assets/images/journey_migrate.svg"
          alt="Example Image"
          width={500}
          height={500}
          style={{ width: "100%", height: "auto" }}
        /> */}
        <h2 className="barlow font-semibold text-[32px] leading-[38.4px] text-black md:w-[1170px] md:mx-auto">
          {t("title")}
        </h2>
        <div className="pb-[75px]">
          <Image
            src="/assets/images/journey/journey_web.webp"
            alt="Example Image"
            width={1200}
            height={1200}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default JourneyMigrate;
