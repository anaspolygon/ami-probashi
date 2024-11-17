"use client";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";
import Bmet from "./Bmet";
import Training from "./Training";
import Union from "./Union";
import Airport from "./Airport";
import Demo from "./Demo";
import { useLocale, useTranslations } from "next-intl";
import { getImageUrl } from "@/helpers/helpers";

interface Props {
  image: string;
  title: string;
}

const Label = ({ image, title }: Props) => {
  return (
    <div className="flex items-center gap-2 md:gap-3 text-left mr-6 md:mr-0 w-[100px] md:w-auto">
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
  image: string;
  tab_title_bn: string;
  tab_title_en: string;
  govt_tab_desc_bn: string;
  govt_tab_desc_en: string;
}

type StackProps = {
  imageUrl: string;
  stackholdersTabs: Tab[];
};

function StackholdersTab({ imageUrl, stackholdersTabs }: StackProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const t = useTranslations("governmentStackholders.tabs");
  const locale = useLocale();
  const isBn = locale === "bn";
  // const tabs = [
  //   {
  //     image: "/assets/images/stackholders/bmet.svg",
  //     title: t("tabOne.name"),
  //   },
  //   {
  //     image: "/assets/images/stackholders/training.svg",
  //     title: t("tabTwo.name"),
  //   },
  //   {
  //     image: "/assets/images/stackholders/training.svg",
  //     title: t("tabThree.name"),
  //   },
  //   {
  //     image: "/assets/images/stackholders/airport.svg",
  //     title: t("tabFour.name"),
  //   },
  //   {
  //     image: "/assets/images/stackholders/demo.svg",
  //     title: t("tabFive.name"),
  //   },
  // ];

  // const tabs = [
  //   {
  //     image:
  //       stackholdersTabs && getImageUrl(imageUrl, stackholdersTabs[0].icon),
  //     title:
  //       isBn && stackholdersTabs
  //         ? stackholdersTabs && stackholdersTabs[0]?.tab_title_bn
  //         : stackholdersTabs && stackholdersTabs[0]?.tab_title_en,
  //   },
  //   {
  //     image:
  //       stackholdersTabs && getImageUrl(imageUrl, stackholdersTabs[1].icon),
  //     title:
  //       isBn && stackholdersTabs
  //         ? stackholdersTabs && stackholdersTabs[1]?.tab_title_bn
  //         : stackholdersTabs && stackholdersTabs[1]?.tab_title_en,
  //   },
  //   {
  //     image:
  //       stackholdersTabs && getImageUrl(imageUrl, stackholdersTabs[2].icon),
  //     title:
  //       isBn && stackholdersTabs
  //         ? stackholdersTabs && stackholdersTabs[2]?.tab_title_bn
  //         : stackholdersTabs && stackholdersTabs[2]?.tab_title_en,
  //   },
  //   {
  //     image:
  //       stackholdersTabs && getImageUrl(imageUrl, stackholdersTabs[3].icon),
  //     title:
  //       isBn && stackholdersTabs
  //         ? stackholdersTabs && stackholdersTabs[3]?.tab_title_bn
  //         : stackholdersTabs && stackholdersTabs[3]?.tab_title_en,
  //   },
  //   {
  //     image:
  //       stackholdersTabs && getImageUrl(imageUrl, stackholdersTabs[4].icon),
  //     title:
  //       isBn && stackholdersTabs
  //         ? stackholdersTabs && stackholdersTabs[4]?.tab_title_bn
  //         : stackholdersTabs && stackholdersTabs[4]?.tab_title_en,
  //   },
  // ];

  const tabs = (stackholdersTabs ?? []).map((item) => {
    return {
      image: getImageUrl(imageUrl, item.icon),
      title: isBn ? item.tab_title_bn : item?.tab_title_en,
    };
  });
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
          <TabPanel>
            <Bmet
              imageUrl={imageUrl}
              bmet={stackholdersTabs && stackholdersTabs[0]}
            />
          </TabPanel>
          <TabPanel>
            <Training
              imageUrl={imageUrl}
              training={stackholdersTabs && stackholdersTabs[1]}
            />
          </TabPanel>
          <TabPanel>
            <Union
              imageUrl={imageUrl}
              union={stackholdersTabs && stackholdersTabs[1]}
            />
          </TabPanel>
          <TabPanel>
            <Airport
              imageUrl={imageUrl}
              airport={stackholdersTabs && stackholdersTabs[1]}
            />
          </TabPanel>
          <TabPanel>
            <Demo
              imageUrl={imageUrl}
              demo={stackholdersTabs && stackholdersTabs[1]}
            />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default StackholdersTab;
