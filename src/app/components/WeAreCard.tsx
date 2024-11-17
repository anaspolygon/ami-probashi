import Image from "next/image";
import React from "react";

type Props = {
  item: {
    title: string;
    image: string;
    bg: string;
  };
};

const WeAreCard = ({ item }: Props) => {
  return (
    <div className="relative w-full h-full md:w-[218px] md:h-[300px]">
      <Image
        className="w-full h-full md:w-[218px] md:h-[300px]"
        src={item.image}
        width={218}
        height={300}
        alt=""
      />
      <div
        className={`${item.bg}  w-full rounded-tr-[30px] absolute bottom-[19.58px] md:bottom-[29px]`}
      >
        <p className="barlow font-normal text-sm md:text-2xl  text-white">
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default WeAreCard;
