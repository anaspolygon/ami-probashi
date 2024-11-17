import {
  recruitmentForeignEmployers,
  recruitmentLocalEmployers,
  recruitmentLocalEmployersMenu,
  recruitmentTrainingInstitute,
} from "@/api";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";

type Types = {
  onClose?: () => void;
  visibleRecruite: string;
  inVisibleRecruite: () => void;
};

const Recruitment = ({
  onClose,
  visibleRecruite,
  inVisibleRecruite,
}: Types) => {
  const t = useTranslations("header");
  const services = [
    {
      title: t("foreignEmployers"),
      items: [
        {
          key: t("talentPool"),
          value: recruitmentForeignEmployers.talentJob,
        },
        {
          key: t("postJob"),
          value: recruitmentForeignEmployers.postJob,
        },
        {
          key: t("videoInterview"),
          value: recruitmentForeignEmployers.videoInterview,
        },
        {
          key: t("connetToLocalRecruitingAgencies"),
          value: recruitmentForeignEmployers.connectLocalRecruitingAgency,
        },
        {
          key: t("governmentCompliance"),
          value: recruitmentForeignEmployers.governmentCompliance,
        },
      ],
    },
    {
      title: t("localEmployers"),
      items: [
        {
          key: t("talentPool"),
          value: recruitmentLocalEmployers.talentPool,
        },
        {
          key: t("postJob"),
          value: recruitmentLocalEmployersMenu.postJob,
        },
        {
          key: t("videoInterview"),
          value: recruitmentLocalEmployersMenu.videoInterview,
        },
      ],
    },
    {
      title: t("trainingInstitute"),
      items: [
        {
          key: t("broadcastCourses"),
          value: recruitmentTrainingInstitute.broadcastCourses,
        },
        {
          key: t("onlineEnrollment"),
          value: recruitmentTrainingInstitute.onlineEnrollment,
        },
        {
          key: t("digitalAttendance"),
          value: recruitmentTrainingInstitute.digitalAttendance,
        },
      ],
    },
  ];
  return (
    <div
      className={`absolute w-full left-0  barlow ${visibleRecruite} z-50 pt-5 bg-white`}
    >
      <div className="bg-white w-full flex justify-center  gap-16 p-8 border-t border-t-[#E2E8F0]">
        {services.map((service, index) => (
          <div className="min-w-[300px]" key={`service_${index}`}>
            <h2 className="font-semibold text-xl leading-7 text-primary pl-[15px] mb-1.5">
              {service.title}
            </h2>
            {service.items.map((item, index) => (
              <>
                <a
                  onClick={inVisibleRecruite}
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

export default Recruitment;
