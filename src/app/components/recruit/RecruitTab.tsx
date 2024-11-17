"use client";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";
import Employee from "./Employee";
import { useLocale, useTranslations } from "next-intl";
import { recruitFromBangladesh } from "@/api";
import { getImageUrl } from "@/helpers/helpers";

interface Props {
  image: string;
  title: string;
}

const Label = ({ image, title }: Props) => {
  return (
    <div className="flex items-center gap-2 md:gap-3 text-left mr-6 md:mr-0 w-[105px] md:w-auto">
      <Image
        className="w-[42px] md:w-[56px] h-[42px] md:h-[56px]"
        src={image}
        width={56}
        height={56}
        alt=""
      />
      <p className="barlow font-medium text-base  md:text-[22px] leading-[19.2px] md:leading-[26.4px]">
        {title}
      </p>
    </div>
  );
};

interface Tab {
  icon: string;
  image1: string;
  image2: string;
  image3: string;
  button_link: string;
  tab_title_bn: string;
  tab_title_en: string;
  button_title_bn: string;
  button_title_en: string;
  recruit_tab_desc_bn: string;
  recruit_tab_desc_en: string;
}

type RecruitTabProps = {
  imageUrl: string;
  recruitTabs: Tab[];
};

function RecruitTab({ imageUrl, recruitTabs }: RecruitTabProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const t = useTranslations("rcruitTab");
  const locale = useLocale();
  const isBn = locale === "bn";

  // const tabs = [
  //   {
  //     image: "/assets/images/recruit/local.svg",
  //     title: t("tabOne"),
  //   },
  //   {
  //     image: "/assets/images/recruit/foreign.svg",
  //     title: t("tabTwo"),
  //   },
  //   {
  //     image: "/assets/images/recruit/training.svg",
  //     title: t("tabThree"),
  //   },
  // ];

  // const tabs = [
  //   {
  //     image: recruitTabs && getImageUrl(imageUrl, recruitTabs[0]?.icon),
  //     title: isBn
  //       ? recruitTabs && recruitTabs[0].tab_title_bn
  //       : recruitTabs && recruitTabs[0].tab_title_en,
  //   },
  //   {
  //     image: recruitTabs && getImageUrl(imageUrl, recruitTabs[1]?.icon),
  //     title: isBn
  //       ? recruitTabs && recruitTabs[1].tab_title_bn
  //       : recruitTabs && recruitTabs[1].tab_title_en,
  //   },
  //   {
  //     image: recruitTabs && getImageUrl(imageUrl, recruitTabs[2]?.icon),
  //     title: isBn
  //       ? recruitTabs && recruitTabs[2].tab_title_bn
  //       : recruitTabs && recruitTabs[2].tab_title_en,
  //   },
  // ];

  const tabs = (recruitTabs ?? []).map((item) => {
    return {
      image: recruitTabs && getImageUrl(imageUrl, item.icon),
      title: isBn ? item.tab_title_bn : item.tab_title_en,
    };
  });

  // const items = [
  //   {
  //     title: t("tabOneTitle"),
  //     text: t("tabOneText"),
  //     images: [
  //       "/assets/images/recruit/local_employers/images_1.webp",
  //       "/assets/images/recruit/local_employers/images_2.webp",
  //       "/assets/images/recruit/local_employers/images_3.webp",
  //     ],
  //     signup: recruitFromBangladesh.localEmployers,
  //     learnMore: "/services/local-recrute",
  //   },
  //   {
  //     title: t("tabTwoTitle"),
  //     text: t("tabTwoText"),
  //     images: [
  //       "/assets/images/recruit/foreign_employers/images_1.webp",
  //       "/assets/images/recruit/foreign_employers/images_2.webp",
  //       "/assets/images/recruit/foreign_employers/images_3.webp",
  //     ],
  //     signup: recruitFromBangladesh.foreignEmployers,
  //     learnMore: "/services/foreign-employer",
  //   },
  //   {
  //     title: t("tabThreeTitle"),
  //     text: t("tabThreeText"),
  //     images: [
  //       "/assets/images/recruit/training_institutes/images_1.webp",
  //       "/assets/images/recruit/training_institutes/images_2.webp",
  //       "/assets/images/recruit/training_institutes/images_3.webp",
  //     ],
  //     signup: recruitFromBangladesh.trainingInstitutes,
  //     learnMore: "/services/training-institute",
  //   },
  // ];

  // const items = [
  //   {
  //     images: [
  //       recruitTabs && getImageUrl(imageUrl, recruitTabs[0]?.image1),
  //       recruitTabs && getImageUrl(imageUrl, recruitTabs[0]?.image2),
  //       recruitTabs && getImageUrl(imageUrl, recruitTabs[0]?.image3),
  //     ],
  //     content: recruitTabs && recruitTabs[0],
  //   },
  //   {
  //     images: [
  //       recruitTabs && getImageUrl(imageUrl, recruitTabs[1]?.image1),
  //       recruitTabs && getImageUrl(imageUrl, recruitTabs[1]?.image2),
  //       recruitTabs && getImageUrl(imageUrl, recruitTabs[1]?.image3),
  //     ],
  //     content: recruitTabs && recruitTabs[1],
  //   },
  //   {
  //     images: [
  //       recruitTabs && getImageUrl(imageUrl, recruitTabs[2]?.image1),
  //       recruitTabs && getImageUrl(imageUrl, recruitTabs[2]?.image2),
  //       recruitTabs && getImageUrl(imageUrl, recruitTabs[2]?.image3),
  //     ],
  //     content: recruitTabs && recruitTabs[2],
  //   },
  // ];

  const items = (recruitTabs ?? []).map((item, index) => {
    return {
      images: [
        getImageUrl(imageUrl, item.image1),
        getImageUrl(imageUrl, item.image2),
        getImageUrl(imageUrl, item.image3),
      ],
      content: recruitTabs[index],
    };
  });

  console.log(items);

  return (
    <div>
      <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <TabList className="flex gap-5 md:gap-[45px] overflow-auto transparent-scrollbar pl-4 md:pl-0">
          {tabs.map((item, index) => (
            <Tab
              key={`workers_tab_${index}`}
              className={`border-b-[3px] pb-1.5 md:pb-4 flex-1 focus:outline-none  transition-colors duration-700 ease-in-out  ${
                selectedIndex === index
                  ? "border-b-[#187E7D]"
                  : "border-b-[#E2E8F0]"
              }`}
            >
              <Label image={item.image} title={item.title} />
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {items.map((item, index) => (
            <TabPanel key={`recruit_employee_${index}`}>
              <Employee employee={item} />
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default RecruitTab;
