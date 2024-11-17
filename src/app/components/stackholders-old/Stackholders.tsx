import React from "react";
import StackholdersTab from "./StackholdersTab";

const Stackholders = () => {
  return (
    <div className="md:px-18.75 web:px-33.75 pt-2 pb-6 md:pt-0 md:pb-[82px]">
      <h2 className="barlow font-semibold text-[32px] leading-[38.4px] mb-[41px] text-black hidden md:block ">
        Integrated Government stakeholders
      </h2>
      <h2 className="barlow font-semibold text-2xl leading-[38.4px] mb-[12px] text-black  pl-4 md:hidden">
        Government Stockholders
      </h2>
      <StackholdersTab />
    </div>
  );
};

export default Stackholders;
