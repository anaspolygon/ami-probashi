import Image from "next/image";
import React, { useEffect } from "react";
import "./Partnership.css";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {
  item: {
    text: string;
    image: string;
  };
  index: number;
};

const Expatriate = ({ item, index }: Props) => {
  const { text, image } = item;
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="mt-3 md:mt-0 px-4 md:px-0 relative">
      <div
        className={`flex flex-col md:flex-row md:gap-6 p-4 md:py-6  md:px-8 border border-[#187E7D] rounded-2xl mt-[5%] md:mt-8 ami-probashi-arrow arrow${index}`}
      >
        <div className="flex-1 order-2 md:order-1">
          <p className="roboto font-normal text-sm md:text-lg leading-6 md:leading-7 text-[#334155] md:mb-8">
            {text}
          </p>
          {/* <p className="roboto font-normal text-lg leading-7 text-[#334155]">
            The combined efforts of Ami Probashi and BRAC ensure that
            individuals are well-prepared for overseas employment, enhancing
            their chances of success.
          </p> */}
        </div>
        <div
          className="min-w-full md:min-w-[260px] mb-3 md:mb-0 order-1 md:order-2"
          data-aos="fade-up"
        >
          <Image
            className="w-full  md:w-[260px] h-auto"
            src={image}
            width={260}
            height={216}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Expatriate;
