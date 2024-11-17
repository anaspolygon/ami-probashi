import { getImageUrl } from "@/helpers/helpers";
import Image from "next/image";
import React from "react";

type Props = {
  story: {
    name: string;
    designation: string;
    text: string;
    avatar: string;
    image: string;
    rating: number;
  };
  index: number;
  imageUrl: string;
};

const CustomerCardMobile = ({ story, index, imageUrl }: Props) => {
  const ratings = [1, 2, 3, 4, 5];
  const { name, designation, text, avatar, image, rating } = story;
  return (
    <div className="rounded-[7.86px] flex shadow-lg p-3 min-h-[182px]">
      <div className="w-full bg-[url('/assets/images/customers/customer_card_bg.svg')] bg-no-repeat bg-[right_top_6px]">
        <div className="flex gap-1.5 items-center mb-[5px]">
          <div className="w-[47x] h-[47px] rounded-full">
            <Image
              className="rounded-full"
              // src={avatar}
              src={avatar && getImageUrl(imageUrl, avatar)}
              width={47}
              height={47}
              alt=""
            />
          </div>
          <div>
            <h2 className="text-[#187E7D] barlow text-[17.04px] font-semibold leading-[20.45px] mb-[2px]">
              {name}
            </h2>
            <p className="text-[#475569] text-[10.48px] font-normal roboto leading-[12.29px]">
              {designation}
            </p>
          </div>
        </div>
        <div className="mb-2.5">
          <p className="roboto font-normal text-sm leading-[20px] text-[#334155]">
            {text}
          </p>
        </div>
        <div className="flex gap-2  mb-1">
          {Array(Number.isInteger(rating) && rating > 0 ? rating : 0)
            .fill(1)
            .map((rating, index) => (
              <Image
                key={`rating_${index}`}
                src="/assets/images/customers/rating.svg"
                width={13}
                height={11}
                alt="rating"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerCardMobile;
