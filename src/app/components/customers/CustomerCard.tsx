import Image from "next/image";
import React from "react";
import "./CustomerCard.css";
import { getImageUrl } from "@/helpers/helpers";
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

const CustomerCard = ({ story, index, imageUrl }: Props) => {
  const ratings = [1, 2, 3, 4, 5];
  const { name, designation, text, avatar, image, rating } = story;
  return (
    <div className="rounded-xl flex shadow-lg  md:min-h-[252px] customer-review">
      <div className="py-6 pl-6  flex-1 bg-[url('/assets/images/customers/customer_card_bg.svg')] bg-no-repeat bg-[right_top_12px] customer  relative">
        <div className="flex gap-3 items-center mb-2">
          <div className="w-[72px] h-[72px] rounded-full">
            <Image
              className="rounded-full"
              // src={avatar}
              src={
                (imageUrl && getImageUrl(imageUrl, (avatar && avatar) ?? "")) ??
                ""
              }
              width={72}
              height={72}
              alt=""
            />
          </div>
          <div>
            <h2 className="text-[#187E7D] barlow text-[26px] font-semibold leading-[31.2px] mb-[3px]">
              {name}
            </h2>
            <p className="text-[#475569] text-base font-normal roboto leading-[18.75px]">
              {designation}
            </p>
          </div>
        </div>
        <div className="mb-3 pr-3">
          <p className="roboto font-normal  text-[17px] leading-6 text-[#334155]">
            {text}
          </p>
        </div>
        <div className="flex gap-2">
          {/* {ratings.map((rating, index) => (
            <Image
              key={`rating_${index}`}
              src="/assets/images/customers/rating.svg"
              width={20}
              height={18}
              alt="rating"
            />
          ))} */}
          {Array(Number.isInteger(rating) && rating > 0 ? rating : 0)
            .fill(1)
            .map((rating, index) => (
              <Image
                key={`rating_${index}`}
                src="/assets/images/customers/rating.svg"
                width={20}
                height={18}
                alt="rating"
              />
            ))}
        </div>
        {/* <div className={`w-[62px] h-[34p]  absolute bottom-[-15%] right-[8%]`}>
          <Image
            src="/assets/images/customers/arrow.svg"
            width={62}
            height={34}
            alt=""
          />
        </div> */}
      </div>
      <div className="w-[202px]  relative">
        <Image
          className="w-full h-full border"
          // src={image}
          src={
            (imageUrl && getImageUrl(imageUrl, (image && image) ?? "")) ?? ""
          }
          width={200}
          height={230}
          alt=""
        />
        {/* <a className="absolute inset-0 m-auto w-[30px] h-[30px]" href="">
          <Image
            className="w-full h-auto"
            src="/assets/images/customers/youtube.svg"
            width={30}
            height={30}
            alt=""
          />
        </a> */}
      </div>
    </div>
  );
};

export default CustomerCard;
