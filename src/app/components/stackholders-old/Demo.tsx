import Image from "next/image";
import React from "react";

const Demo = () => {
  return (
    <div className="px-4 md:px-0 flex flex-col md:flex-row md:mt-8">
      <div className="flex-1">
        <p className="mb-8 roboto font-normal text-sm md:text-lg leading-5 md:leading-8 text-[#475569]">
          DEMO offices nationwide are now equipped with Ami Probashis backend
          system, allowing migrants to register into the BMET database quickly,
          eliminating long waiting times and unnecessary paperwork. Enrolling
          through our portal instantly adds aspiring migrant workers to the
          national database, enabling them to swiftly pursue job opportunities.
        </p>

        <p className="mb-8 roboto font-normal text-sm md:text-lg leading-5 md:leading-8 text-[#475569]">
          Each DEMO office is equipped with Ami Probashi biometric devices,
          provided free of charge to the government. This enables migrant
          workers to register and verify their identity quickly and securely, a
          vital step in preventing illegal migration. Our devices cross-check
          biometric data at the airport, ensuring that only authorized
          individuals depart and preventing dangerous situations
        </p>
      </div>
      <div className="min-w-full md:min-w-[493px]">
        <Image
          className="w-full md:w-[493px] h-auto"
          src="/assets/images/stackholders/airport_emigration.svg"
          width={493}
          height={470}
          alt=""
        />
      </div>
    </div>
  );
};

export default Demo;
