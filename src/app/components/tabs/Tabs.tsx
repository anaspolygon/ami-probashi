"use client"
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Image from 'next/image';
import { useState } from 'react';
import Government from './Government';
import Bmet from './Bmet';
import Expatriate from './Expatriate';

const Label = () => {
    return <div className='flex items-center gap-2 md:gap-3 text-left mr-6 md:mr-0'>
        <Image className='w-[42px] md:w-[56px] h-[42px] md:h-[56px]' src="/tabs/tab1.svg" width={56} height={56} alt="" />
        <p className='barlow font-medium text-base  md:text-[22px] leading-[19.2px] md:leading-[26.4px]'>Government
            Services</p>
    </div>
}
function Tabs() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const tabs = [0, 1, 2, 3, 4];

    return (
        <div className=' md:px-[135px] py-[72px] '>
            <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                <TabList className="flex gap-[45px] overflow-auto transparent-scrollbar">
                    {
                        // eslint-disable-next-line react/jsx-key
                        tabs.map((_, i) => <Tab key={`government_services_tab_${i}`} className={`border-b-[3px] pb-1.5 md:pb-4 flex-1 focus:outline-none  transition-colors duration-700 ease-in-out  ${selectedIndex === i ? "border-b-[#187E7D]" : "border-b-[#E2E8F0]"}`}><Label /></Tab>)
                    }
                </TabList>
                <TabPanels >
                    <TabPanel><Expatriate/></TabPanel>
                    <TabPanel><Bmet /></TabPanel>
                    <TabPanel><Government /></TabPanel>
                    <TabPanel>Content 4</TabPanel>
                    <TabPanel>Content 5</TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    )
}

export default Tabs;