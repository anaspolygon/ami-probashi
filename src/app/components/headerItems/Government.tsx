import { government } from "@/api";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

type Types = {
  onClose?: () => void;
};

const Government = ({ onClose }: Types) => {
  const t = useTranslations("header");
  const services = [
    {
      title: "",
      items: [
        {
          key: t("moewoeBmet"),
          value: government.moewoeAndBmet,
        },
        {
          key: t("ttc"),
          value: government.ttc,
        },
      ],
    },
    {
      title: "",
      items: [
        {
          key: t("unionDigitalCenters"),
          value: government.unionDigitalCenters,
        },
        {
          key: t("airportEmigration"),
          value: government.airportEmigration,
        },
      ],
    },
    {
      title: "",
      items: [
        {
          key: t("demoOffices"),
          value: government.demoOffices,
        },
      ],
    },
  ];
  return (
    <div className="absolute w-full left-0  barlow invisible group-hover:visible z-50 pt-5 bg-white">
      <div className="bg-white w-full flex justify-center  gap-16 p-8 border-t border-t-[#E2E8F0]">
        {services.map((service, index) => (
          <div className="min-w-[300px]" key={`service_${index}`}>
            <h2 className="font-semibold text-xl leading-7 text-primary pl-[15px] mb-1.5">
              {service.title}
            </h2>
            {service.items.map((item, index) => (
              <>
                <a
                  key={`service_item_${index}`}
                  className="font-medium hover:text-primary hover:bg-[#F8FAFC] py-2.5  pl-[15px] pr-[19px] rounded-[6px] inline-block  text-lg leading-[21.6px] text-[#0F172A]  mt-1  min-h-10"
                  href={item.value}
                >
                  {item.key}
                </a>
                <br />
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Government;
