import { socials } from "@/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  banner: {
    title: string;
    subTitle: string;
    btnOne: string;
    btnOneIcon: string;
    btnOneLink: string;
    btnTwo?: string;
    btnTwoIcon?: string;
    btnTwoLink?: string;
    showBtnTwo: boolean;
    image: string;
    width: number;
    height: number;
    bannerMobileImage: string;
    bannerMobileImageWidth: number;
  };
  index: number;
}

const Banner = ({ banner, index }: Props) => {
  const {
    title,
    subTitle,
    btnOne,
    btnOneIcon,
    btnOneLink,
    btnTwo,
    btnTwoIcon,
    btnTwoLink,
    showBtnTwo,
    image,
    width,
    height,
    bannerMobileImage,
    bannerMobileImageWidth,
  } = banner;
  return (
    <div className="px-4 pt-6  md:pr-0 md:pt-[80px] z-20 relative banner-bg min-h-[820px] md:min-h-[600px] md:flex md:flex-col md:justify-end">
      <div className="w-[calc(100%-((100%-1170px)/2))] ml-auto">
        <div className="flex flex-col md:flex-row  relative">
          <div className="md:flex-1">
            <div className="md:mb-[64px]">
              <h2 className="barlow font-semibold text-[26px] md:text-[44px] leading-[31.2px] md:leading-[52.8px] text-white mb-[6px] pr-5 md:pr-0 md:mb-3">
                {title}
              </h2>
              <p className="roboto font-normal text-sm md:text-[20px] leading-5 md:leading-[33px] text-white mb-[22px] md:mb-6">
                {subTitle}
              </p>
              <div className="mt-6 mb-[31px] md:mt-0 md:mb-0">
                <Link href={btnOneLink}>
                  <button className="bg-white md:bg-primary flex items-center gap-2 pt-[6px] pb-2 px-2.5 md:py-2 md:pl-3 md:pr-[28px] rounded-lg mb-[14px] md:mb-4">
                    <Image
                      className="w-10 h-10 md:w-[44px] md:h-[44px]"
                      src={btnOneIcon}
                      width={44}
                      height={44}
                      alt=""
                    />
                    <p className="barlow font-semibold text-base md:text-[20px] leading-6 text-primary md:text-white">
                      {btnOne}
                    </p>
                  </button>
                </Link>
                <Link href={(btnTwoLink as string) ?? "#"}>
                  <button
                    className={`bg-white flex items-center gap-2 py-[7px] px-[11px] md:py-2 md:pl-3 md:pr-3 rounded-lg mb-4 ${
                      showBtnTwo ? "visible" : "invisible"
                    }`}
                  >
                    <Image
                      src={btnTwoIcon as string}
                      className="w-10 h-10 md:w-[44px] md:h-[44px]"
                      width={44}
                      height={44}
                      alt=""
                    />
                    <p className="barlow font-medium text-base md:text-[20px] leading-[19.2px] md:leading-6 text-black">
                      {btnTwo}
                    </p>
                  </button>
                </Link>
              </div>

              <div className={`flex gap-3 ${index === 0 ? "mt-[64px]" : ""}`}>
                <Link target="_blank" href={socials.appStore}>
                  <Image
                    src="/assets/icons/app-store.svg"
                    className="w-[161px] h-[54px] md:w-[180px] md:h-[60px]"
                    width={180}
                    height={60}
                    alt=""
                  />
                </Link>
                <Link target="_blank" href={socials.playStore}>
                  <Image
                    className="w-[161px] h-[54px] md:w-[173px] md:h-[60px]"
                    src="/assets/icons/google-store.svg"
                    width={173}
                    height={60}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className={`hidden md:min-w-[${width}px]   md:flex `}>
            <Image src={image} width={width} height={height} alt="" />
          </div>
          <div className="hidden md:block absolute bottom-0 -z-10 left-[18%]">
            <Image
              src="/assets/images/banner/banner_bg.svg"
              width={301}
              height={214}
              alt=""
            />
          </div>
        </div>
        {/* <div className="hidden md:block absolute bottom-0 z-10 left-[410px]">
          <Image
            src="/assets/images/banner/banner_bg.svg"
            width={301}
            height={214}
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
