import Image from "next/image";
import React from "react";

const Airport = () => {
  return (
    <div className="px-4 md:px-0 flex flex-col md:flex-row md:mt-8">
      <div className="flex-1">
        <p className="mb-8 roboto font-normal text-sm md:text-lg leading-5 md:leading-8 text-[#475569]">
          Ami Probashi has revolutionized the emigration process for departing
          migrants, making it faster and more efficient. Migrants can now
          swiftly pass through emigration by simply scanning their digital
          QR-code cards at the gate.
        </p>

        <p className="mb-8 roboto font-normal text-sm md:text-lg leading-5 md:leading-8 text-[#475569]">
          This scan instantly retrieves all necessary information, enabling
          immigration officers to quickly verify their identity and details,
          ensuring secure and legitimate migration. As a result, this
          streamlined approach has significantly reduced immigration processing
          times and ensure safe and legitimate migration
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

export default Airport;
