import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { homeSlider, socials } from "@/api";
import { title } from "process";

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

const Banner3 = ({ banner }: Props) => {
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
  const t3 = useTranslations("bannerThree");

  return (
    <div className="pt-[34px]   min-h-[770px]  banner1 flex flex-col justify-between">
      <div className="px-4">
        <div>
          <h2 className="barlow font-semibold text-[26px] leading-[31.2px] text-white mb-1.5">
            {/* {t3("title")} */}
            {title}
          </h2>
          <p className="roboto font-normal text-sm text-white">
            {/* {t3("subTitle")} */}
            {subTitle}
          </p>
        </div>
        <div className="flex justify-between mt-8">
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
        <div className="mt-[22px]">
          {/* <Link href={homeSlider.sliderThree.login}>
            <button className="flex items-center gap-2 bg-[#187E7D] w-full px-2.5 pt-1.5 pb-2 rounded-lg h-[54px] border border-white">
              <Image
                src="/assets/images/bannermobile/login.svg"
                width={32}
                height={32}
                alt=""
              />
              <p className="barlow font-semibold text-base leading-[19.2px] text-white">
                {t3("btnOne")}
              </p>
            </button>
          </Link> */}
          <Link href={btnOneLink}>
            <button className="flex items-center gap-2 bg-[#187E7D] w-full px-2.5 pt-1.5 pb-2 rounded-lg h-[54px] border border-white">
              <Image src={btnOneIcon} width={32} height={32} alt="" />
              <p className="barlow font-semibold text-base leading-[19.2px] text-white">
                {/* {t3("btnOne")} */}
                {btnOne}
              </p>
            </button>
          </Link>
        </div>
      </div>
      <div className="flex-col justify-center items-center">
        <Image
          className="w-full h-full"
          // src="/assets/images/bannermobile/banner33.webp"
          src={bannerMobileImage}
          width={363}
          height={392}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner3;
