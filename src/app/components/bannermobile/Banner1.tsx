import React from "react";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { homeSlider, socials } from "@/api";

interface Banner {
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
}

type Props = {
  banner: Banner;
};

const Banner1 = ({ banner }: Props) => {
  const {
    title,
    subTitle,
    btnOne,
    btnOneIcon,
    btnOneLink,
    btnTwo,
    btnTwoIcon,
    btnTwoLink,
    image,
    width,
    height,
    bannerMobileImage,
  } = banner;

  const t1 = useTranslations("bannerOne");
  return (
    <div className="pt-6 min-h-[770px]  banner1 flex flex-col justify-between">
      <div className="px-4">
        <div>
          <h2 className="barlow font-semibold text-[26px] leading-[31.2px] text-white mb-1.5">
            {/* {t1("title")} */}
            {title}
          </h2>
          <p className="roboto font-normal text-sm text-white">
            {/* {t1("subTitle")} */}
            {subTitle}
          </p>
        </div>
        <div className="flex justify-between mt-[22px]">
          <Link target="_blank" href={socials.appStore}>
            <Image
              src="/assets/images/bannermobile/app_store.svg"
              width={161}
              height={54}
              alt=""
            />
          </Link>
          <Link target="_blank" href={socials.playStore}>
            <Image
              src="/assets/images/bannermobile/google_play.svg"
              width={161}
              height={54}
              alt=""
            />
          </Link>
        </div>
        <div className="mt-6">
          {/* <Link href={homeSlider.sliderOne.downloadQr}>
            <button className="flex items-center gap-2 bg-[#FFFFFF] px-2.5 pt-1.5 pb-2 rounded-lg">
              <Image
                src="/assets/images/bannermobile/barcode.svg"
                width={40}
                height={40}
                alt=""
              />
              <p className="barlow font-semibold text-base leading-[19.2px] text-[#187E7D]">
                {t1("btnOne")}
              </p>
            </button>
          </Link> */}

          <Link href={btnOneLink}>
            <button className="flex items-center gap-2 bg-[#FFFFFF] px-2.5 pt-1.5 pb-2 rounded-lg">
              <Image src={btnOneIcon} width={40} height={40} alt="" />
              <p className="barlow font-semibold text-base leading-[19.2px] text-[#187E7D]">
                {/* {t1("btnOne")} */}
                {btnOne}
              </p>
            </button>
          </Link>

          {/* <Link href={homeSlider.sliderOne.verifySmartCard}>
            <button className="flex items-center gap-2 bg-[#FFFFFF] px-2.5 pt-1.5 pb-2 rounded-lg mt-3.5">
              <Image
                src="/assets/images/bannermobile/verify.svg"
                width={40}
                height={40}
                alt=""
              />
              <p className="barlow font-semibold text-base leading-[19.2px] text-[#0F172A]">
                {t1("btnTwo")}
              </p>
            </button>
          </Link> */}
          <Link href={btnTwoLink as string}>
            <button className="flex items-center gap-2 bg-[#FFFFFF] px-2.5 pt-1.5 pb-2 rounded-lg mt-3.5">
              <Image src={btnTwoIcon as string} width={40} height={40} alt="" />
              <p className="barlow font-semibold text-base leading-[19.2px] text-[#0F172A]">
                {btnTwo}
              </p>
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-6 flex flex-col justify-center items-center">
        <Image
          className="mx-auto w-full h-full"
          // src="/assets/images/bannermobile/banner1.webp"
          src={bannerMobileImage}
          width={364}
          height={339}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner1;
