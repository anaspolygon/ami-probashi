import Image from "next/image";
import React from "react";

const Bmet = () => {
  return (
    <div className="px-4 md:px-0 flex flex-col md:flex-row md:mt-8">
      <div className="flex-1">
        <p className="mb-8 roboto font-normal text-sm md:text-lg leading-5 md:leading-8 text-[#475569]">
          Ami Probashi revolutionized migrant registration by digitizing BMET&apos;s
          manual processes. Our 2021 launch enabled aspiring migrants to bypass
          long queues and hidden fees through hassle-free online registration.
          Over 3.5 million migrants have registered through our platform, a 500%
          increase from manual methods
        </p>

        <p className="mb-8 roboto font-normal text-sm md:text-lg leading-5 md:leading-8 text-[#475569]">
          We also simplified the emigration clearance process with our 2023
          launch of e-emigration clearance in partnership with BMET. By
          eliminating physical queues and paperwork, we&apos;ve made it easier for
          migrants and agencies to apply online. Our system streamlines
          approvals through automated data verification, offers real-time
          tracking, and instantly issues QR-code smart cards. By enabling
          aspiring migrant workers to apply for e-migration clearance, we have
          empowered them to bypass middlemen and save substantial amounts of
          money on hidden fees
        </p>

        <p className="mb-8 roboto font-normal text-sm md:text-lg leading-5 md:leading-8 text-[#475569]">
          Our seamless integration with the BMET has facilitated the digital
          issuance of all clearance cards, required for airport emigration. By
          replacing physical cards with QR-code equivalents, we have generated
          annual savings of 50 crore for the government.
          <a
            className="text-[#187E7D] text-sm md:text-lg font-semibold underline"
            href=""
          >
            {" "}
            Learn More
          </a>
        </p>
      </div>
      <div className="min-w-full md:min-w-[493px]">
        <Image
          className="w-full md:w-[493px] h-auto"
          src="/assets/images/stackholders/bmet_service.svg"
          width={493}
          height={470}
          alt=""
        />
      </div>
    </div>
  );
};

export default Bmet;
