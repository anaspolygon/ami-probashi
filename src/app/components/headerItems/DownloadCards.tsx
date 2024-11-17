import {
  downloadCardsBmetService,
  downloadCardsPdo,
  downloadCardsTrainingCertificate,
} from "@/api";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const DownloadCards = () => {
  const t = useTranslations("header");
  const services = [
    {
      title: t("bmetService"),
      items: [
        {
          key: t("bmetRegistration"),
          value: downloadCardsBmetService.bmetRegistration,
        },
        {
          key: t("downloadClearanceCard"),
          value: downloadCardsBmetService.bmetSmartCard,
        },
        {
          key: t("trackClearanceApplication"),
          value: downloadCardsBmetService.trackApplication,
        },
        {
          key: t("verifyBmetClearanceCard"),
          value: downloadCardsBmetService.verifySmartCard,
        },
      ],
    },
    {
      title: t("trainingAndCertificate"),
      items: [
        {
          key: t("downloadGeneralCertificate"),
          value: downloadCardsTrainingCertificate.downloadGeneralCertificate,
        },
        {
          key: t("downloadHousekeepingCertificate"),
          value:
            downloadCardsTrainingCertificate.downloadHouseKeepingCertificate,
        },
        {
          key: t("downloadEnrollmentCardGeneralHousekeeping"),
          value:
            downloadCardsTrainingCertificate.downloadEnrollmentCardGeneralHousekeeping,
        },
      ],
    },
    {
      title: t("pdo"),
      items: [
        {
          key: t("downloadEnrollmentCard"),
          value: downloadCardsPdo.downloadEnrollmentCard,
        },
        {
          key: t("downloadPdoCertificate"),
          value: downloadCardsPdo.downloadPdoCertificateCard,
        },
      ],
    },
  ];
  return (
    <div className="absolute w-full left-0  barlow invisible group-hover:visible z-50 pt-5 bg-white">
      <div className="bg-white w-full flex justify-center  gap-16 p-8 border-t border-t-[#E2E8F0]">
        {services.map((service, index) => (
          <div
            className={`${index === 1 ? "w-[500px]" : "w-[350px]"}`}
            key={`service_${index}`}
          >
            <h2 className="font-semibold text-xl leading-7 text-primary pl-[15px] mb-1.5">
              {service.title}
            </h2>
            {service.items.map((item, index) => (
              <a
                key={`service_item_${index}`}
                className="font-medium hover:text-primary hover:bg-[#F8FAFC] py-2.5  pl-[15px] pr-[19px] rounded-[6px] inline-block  text-lg leading-[21.6px] text-[#0F172A]  mt-1  min-h-10"
                href={item.value}
              >
                {item.key}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadCards;
