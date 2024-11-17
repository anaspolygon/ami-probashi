import {
  brac,
  bracMenu,
  servicesGoverment,
  servicesJob,
  servicesLifeStyle,
} from "@/api";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";

type Types = {
  onClose?: () => void;
  visible: string;
  inVisible: () => void;
};

const Service = ({ onClose, visible, inVisible }: Types) => {
  const t = useTranslations("header");
  const services = [
    {
      title: t("government"),
      items: [
        {
          key: t("bmetRegistration"),
          value: servicesGoverment.bmetRegistration,
        },
        {
          key: t("pdoPreDepartureOrientation"),
          value: servicesGoverment.pdo,
        },
        {
          key: t("generalTraining"),
          value: servicesGoverment.generalTraining,
        },
        {
          key: t("bmetClearanceSmartCard"),
          value: servicesGoverment.bmetClearanceSmartCard,
        },
      ],
    },
    {
      title: t("job"),
      items: [
        {
          key: t("findJob"),
          value: servicesJob.findJob,
        },
        {
          key: t("makeCV"),
          value: servicesJob.makeJob,
        },
        {
          key: t("takeCareerConsultancy"),
          value: servicesJob.takeCareerConsultancy,
        },
      ],
    },
    {
      title: t("lifeStyle"),
      items: [
        {
          key: t("onlineDoctorProbashiHealth"),
          value: servicesLifeStyle.onlineDoctor,
        },
        {
          key: t("entertainmentComingSoon"),
          value: servicesLifeStyle.entertainment,
        },
        {
          key: t("eLearningComingSoon"),
          value: servicesLifeStyle.eLearning,
        },
      ],
    },
    {
      title: t("brac"),
      items: [
        {
          key: t("returneeMigrants"),
          value: brac.returneeMigrants,
        },
        {
          key: t("skillTraining"),
          value: bracMenu.returneeMigrants,
        },
        {
          key: t("overseasEmployment"),
          value: bracMenu.overseasEmployment,
        },
      ],
    },
  ];

  const getWidth = (index: number) => {
    if (index === 0) {
      return "w-[300px]";
    }
    if (index === 1) {
      return "w-[250px]";
    }
    if (index === 2) {
      return "w-[300px]";
    }
    if (index === 3) {
      return "w-[250px]";
    }
  };
  return (
    <div
      className={`absolute w-full left-0  barlow ${visible} z-50 pt-5 bg-white`}
    >
      <div className="bg-white w-full flex justify-center  gap-16 p-8 border-t border-t-[#E2E8F0]">
        {services.map((service, index) => (
          <div className={`${getWidth(index)}`} key={`service_${index}`}>
            <h2 className="font-semibold text-xl leading-7 text-primary pl-[15px] mb-1.5">
              {service.title}
            </h2>
            {service.items.map((item, index) => (
              <>
                <a
                  onClick={inVisible}
                  key={`service_item_${index}`}
                  className="font-medium hover:text-primary hover:bg-[#F8FAFC] py-2.5  pl-[15px] pr-[19px] rounded-[6px] inline-block text-lg leading-[21.6px] text-[#0F172A] mt-1  min-h-10"
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

export default Service;
