"use client";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";
import Expatriate from "./Expatriate";
import { useLocale, useTranslations } from "next-intl";
import { getImageUrl, removeHtmlTags } from "@/helpers/helpers";

interface Props {
  image: string;
  title: string;
  className: string;
}

const Label = ({ image, title, className }: Props) => {
  return (
    <div className="flex items-center gap-2 md:gap-3 text-left mr-6 md:mr-0">
      <Image className={className} src={image} width={56} height={56} alt="" />
      <p className="barlow font-medium text-base  md:text-[20px] leading-[19.2px] md:leading-[30px]">
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
  partner_tab_desc_bn: string;
  partner_tab_desc_en: string;
}

type TabsProps = {
  imageUrl: string;
  partnerTabs: Tab[];
};

function PartnerTab({ imageUrl, partnerTabs }: TabsProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const t = useTranslations("partnership.tabs");
  const locale = useLocale();
  const isBn = locale === "bn";

  // const tabs = [
  //   {
  //     image: "/assets/images/partner/tab3.svg",
  //     title: t("tabThree.name"),
  //     className: "w-[42px] md:w-[88px] h-[42px] md:h-[30px]",
  //   },
  //   {
  //     image: "/assets/images/partner/tab1.svg",
  //     title: t("tabFour.name"),
  //     className: "w-[42px] md:w-[27px] h-[42px] md:h-[30px]",
  //   },

  //   {
  //     image: "/assets/images/partner/ministry.svg",
  //     title: t("tabOne.name"),
  //     className: "w-[38px] md:w-[30px] h-[38px] md:h-[30px]",
  //   },

  //   {
  //     image: "/assets/images/partner/tab2.svg",
  //     title: t("tabTwo.name"),
  //     className: "w-[42px] md:w-[55px] h-[42px] md:h-[30px]",
  //   },
  // ];

  // const tabs = [
  //   {
  //     image:
  //       imageUrl && partnerTabs ? imageUrl + "/" + partnerTabs[0]?.icon : "",
  //     title: isBn
  //       ? partnerTabs && partnerTabs[0]?.tab_title_bn
  //       : partnerTabs && partnerTabs[0]?.tab_title_en,
  //     className: "w-[42px] md:w-[88px] h-[42px] md:h-[30px]",
  //   },
  //   {
  //     image:
  //       imageUrl && partnerTabs ? imageUrl + "/" + partnerTabs[1]?.icon : "",
  //     title: isBn
  //       ? partnerTabs && partnerTabs[1]?.tab_title_bn
  //       : partnerTabs && partnerTabs[1]?.tab_title_en,
  //     className: "w-[42px] md:w-[27px] h-[42px] md:h-[30px]",
  //   },

  //   {
  //     image:
  //       imageUrl && partnerTabs ? imageUrl + "/" + partnerTabs[2]?.icon : "",
  //     title: isBn
  //       ? partnerTabs && partnerTabs[2]?.tab_title_bn
  //       : partnerTabs && partnerTabs[2]?.tab_title_en,
  //     className: "w-[38px] md:w-[30px] h-[38px] md:h-[30px]",
  //   },

  //   {
  //     image:
  //       imageUrl && partnerTabs ? imageUrl + "/" + partnerTabs[3]?.icon : "",
  //     title: isBn
  //       ? partnerTabs && partnerTabs[3]?.tab_title_bn
  //       : partnerTabs && partnerTabs[3]?.tab_title_en,
  //     className: "w-[42px] md:w-[55px] h-[42px] md:h-[30px]",
  //   },
  // ];

  const classNames: { [key: number]: string } = {
    0: "w-[42px] md:w-[88px] h-[42px] md:h-[30px]",
    1: "w-[42px] md:w-[27px] h-[42px] md:h-[30px]",
    2: "w-[38px] md:w-[30px] h-[38px] md:h-[30px]",
    3: "w-[42px] md:w-[55px] h-[42px] md:h-[30px]",
  };

  const tabs = (partnerTabs ?? []).map((item, index) => {
    return {
      image: getImageUrl(imageUrl, item.icon),
      title: isBn ? item.tab_title_bn : item.tab_title_en,
      className: classNames[index],
    };
  });

  // const data = [
  //   {
  //     text: t("tabThree.text1"),
  //     image: "/assets/images/partner/expatriate3.png",
  //   },

  //   {
  //     text: t("tabFour.text1"),
  //     image: "/assets/images/partner/expatriate4.png",
  //   },
  //   {
  //     text: t("tabOne.text1"),
  //     image: "/assets/images/partner/expatriate1.png",
  //   },
  //   {
  //     text: t("tabTwo.text1"),
  //     image: "/assets/images/partner/expatriate2.png",
  //   },
  // ];

  const data = (partnerTabs ?? []).map((item) => {
    return {
      text: isBn
        ? removeHtmlTags(item?.partner_tab_desc_bn)
        : removeHtmlTags(item?.partner_tab_desc_en),
      image: getImageUrl(imageUrl, item.image),
    };
  });

  return (
    <div>
      <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <TabList className="flex gap-5 md:gap-[45px] overflow-auto transparent-scrollbar pl-4 md:pl-0">
          {tabs.map((item, index) => (
            <Tab
              key={`workers_tab_${index}`}
              className={`border-b-[3px] pb-1.5 md:pb-4 min-w-[220px] md:flex-1 focus:outline-none  transition-colors duration-700 ease-in-out  ${
                selectedIndex === index
                  ? "border-b-[#187E7D]"
                  : "border-b-[#E2E8F0]"
              }`}
            >
              <Label
                image={item.image}
                title={item.title}
                className={item.className}
              />
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {data.map((item, index) => (
            <TabPanel key={`workers_tab_panel_${index}`}>
              <Expatriate item={item} index={index} />
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default PartnerTab;
