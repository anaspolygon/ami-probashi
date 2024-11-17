"use client";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";
import Bmet from "./Bmet";
import Training from "./Training";
import Union from "./Union";
import Airport from "./Airport";
import Demo from "./Demo";

interface Props {
  image: string;
  title: string;
}

const Label = ({ image, title }: Props) => {
  return (
    <div className="flex items-center gap-2 md:gap-3 text-left mr-6 md:mr-0">
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
function StackholdersTab() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabs = [
    {
      image: "/assets/images/stackholders/bmet.svg",
      title: "BMET Services",
    },
    {
      image: "/assets/images/stackholders/training.svg",
      title: "Training centers",
    },
    {
      image: "/assets/images/stackholders/training.svg",
      title: "Union digital centers",
    },
    {
      image: "/assets/images/stackholders/airport.svg",
      title: "Airport Emigration",
    },
    {
      image: "/assets/images/stackholders/demo.svg",
      title: "Demo Offices",
    },
  ];
  return (
    <div>
      <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <TabList className="flex gap-[45px] overflow-auto transparent-scrollbar pl-4 md:pl-0">
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
            <Bmet />
          </TabPanel>
          <TabPanel>
            <Training />
          </TabPanel>
          <TabPanel>
            <Union />
          </TabPanel>
          <TabPanel>
            <Airport />
          </TabPanel>
          <TabPanel>
            <Demo />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default StackholdersTab;
