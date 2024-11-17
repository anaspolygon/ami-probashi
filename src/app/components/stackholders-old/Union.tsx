import Image from "next/image";
import React from "react";

const Union = () => {
  return (
    <div className="px-4 md:px-0 flex flex-col md:flex-row md:mt-8">
      <div className="flex-1">
        <p className="mb-8 roboto font-normal text-sm md:text-lg leading-5 md:leading-8 text-[#475569]">
          Union Digital Centers (UDCs) play a vital role in extending Ami
          Probashi’s services to rural and remote areas. These centers assist
          individuals with BMET registration, biometric data collection, and
          emigration clearance application processes. UDCs also provide access
          to the Ami Probashi platform, helping users enroll in training
          programs and apply for verified job opportunities.
        </p>

        <p className="mb-8 roboto font-normal text-sm md:text-lg leading-5 md:leading-8 text-[#475569]">
          By offering these services locally, UDCs ensure that aspiring migrants
          from all regions have the support they need to pursue employment
          abroad effectively and efficiently
        </p>
      </div>
      <div className="min-w-full md:min-w-[493px]">
        <Image
          className="w-full md:w-[493px] h-auto"
          src="/assets/images/stackholders/union_digital.svg"
          width={493}
          height={470}
          alt=""
        />
      </div>
    </div>
  );
};

export default Union;
