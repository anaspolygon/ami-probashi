"use client";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";
import GovernmentService from "./GovernmentService";
import BracService from "./BracService";
import JobTraining from "./JobTraining";
import CareerContsultancy from "./CareerContsultancy";
import LifeStyle from "./LifeStyle";
import { useLocale, useTranslations } from "next-intl";
import { getImageUrl } from "@/helpers/helpers";

interface Props {
  image: string;
  title: string;
}

const Label = ({ image, title }: Props) => {
  return (
    <div className="flex items-center gap-2 md:gap-3 text-left mr-6 md:mr-0 w-[110px] md:w-auto">
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
  migrate_tab_desc_bn: string;
  migrate_tab_desc_en: string;
}

type WorksersProps = {
  imageUrl: string;
  workersTabs: Tab[];
};

function WorkersTab({ imageUrl, workersTabs }: WorksersProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const t = useTranslations("migrantWorkers.tabs");
  const locale = useLocale();
  const isBn = locale === "bn";
  // const tabs = [
  //   {
  //     image: "/assets/images/workers/brac.svg",
  //     title: t("tabOne.name"),
  //   },
  //   {
  //     image: "/assets/images/workers/government.svg",
  //     title: t("tabTwo.name"),
  //   },
  //   {
  //     image: "/assets/images/workers/job.svg",
  //     title: t("tabThree.name"),
  //   },
  //   {
  //     image: "/assets/images/workers/career.svg",
  //     title: t("tabFour.name"),
  //   },
  //   {
  //     image: "/assets/images/workers/life.svg",
  //     title: t("tabFive.name"),
  //   },
  // ];

  const tabs = (workersTabs ?? []).map((item) => {
    return {
      image: getImageUrl(imageUrl, item.icon),
      title: isBn ? item.tab_title_bn : item.tab_title_en,
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
            <GovernmentService
              imageUrl={imageUrl}
              government={workersTabs && workersTabs[0]}
            />
          </TabPanel>
          <TabPanel>
            <BracService
              imageUrl={imageUrl}
              brac={workersTabs && workersTabs[1]}
            />
          </TabPanel>
          <TabPanel>
            <JobTraining
              imageUrl={imageUrl}
              job={workersTabs && workersTabs[2]}
            />
          </TabPanel>
          <TabPanel>
            <CareerContsultancy
              imageUrl={imageUrl}
              career={workersTabs && workersTabs[3]}
            />
          </TabPanel>
          <TabPanel>
            <LifeStyle
              imageUrl={imageUrl}
              lifeStyle={workersTabs && workersTabs[4]}
            />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default WorkersTab;
