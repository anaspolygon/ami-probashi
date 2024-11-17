import {
  downloadCardsBmetService,
  downloadCardsPdo,
  downloadCardsTrainingCertificate,
  media,
} from "@/api";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Media = () => {
  const t = useTranslations("media");
  const services = [
    {
      title: t("title"),
      items: [
        {
          key: t("blog"),
          value: media.blog,
        },
        {
          key: t("article"),
          value: media.article,
        },
        {
          key: t("videoGallery"),
          value: media.videoGallery,
        },
        {
          key: t("photoGallery"),
          value: media.photoGallery,
        },
      ],
    },
  ];
  return (
    <div className="absolute w-full left-0  barlow invisible group-hover:visible z-50 pt-5 bg-white">
      <div className="bg-white w-full flex justify-center  gap-16 p-8 border-t border-t-[#E2E8F0]">
        {services.map((service, index) => (
          <div className="w-[500px]  flex" key={`media_${index}`}>
            {service.items.map((item, index) => (
              <a
                key={`media_item_${index}`}
                className="font-medium hover:text-primary hover:bg-[#F8FAFC] py-2.5  pl-[15px] pr-[19px] rounded-[6px]   text-lg leading-[21.6px] text-[#0F172A]  mt-1  min-h-10"
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

export default Media;
