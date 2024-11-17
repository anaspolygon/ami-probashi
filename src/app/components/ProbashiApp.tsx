import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
// import ProbashiAppSlider from "./ProbashiAppSlider";
const ProbashiAppSlider = dynamic(() => import("./ProbashiAppSlider"), {
  ssr: false,
});
import { useTranslations } from "next-intl";
import Link from "next/link";
import { socials } from "@/api";

interface Value {
  image: string;
  button_link: string;
}
interface Props {
  appSection: Array<Value>;
  imageUrl: string;
}

const ProbashiApp = ({ appSection, imageUrl }: Props) => {
  const t = useTranslations("probashiApp");
  return (
    <div className="w-full md:w-[1170px] md:mx-auto md:flex md:justify-center mb-8 md:my-[72px]">
      <div className="flex  md:gap-[30px]">
        <div className="md:flex md:flex-col md:justify-between bg-[#CFE6DB80] md:rounded-2xl  md:relative">
          <div>
            <div className="pt-[31px] md:pt-12 px-[25px] md:px-[38px]">
              <h2 className="text-[#0F172A] text-[18.36px] md:text-[28px] text-center leading-[20.98px] md:leading-8 font-semibold barlow mb-2 md:mb-3">
                {t("title")}
              </h2>
              <p className="text-black text-[13.12px] md:text-[20px] text-center font-normal leading-[15.74px] md:leading-6 roboto mb-2.5 md:mb-4">
                {t("description")}
              </p>
            </div>
            <div className="flex justify-center gap-2 md:gap-2.5 mb-[29px] md:mb-[31px]">
              <Link target="_blank" href={socials.appStore}>
                <Image
                  src="/assets/icons/app-store.svg"
                  className="w-[132px] md:w-[160px] h-[44px] md:h-[53px]"
                  alt="Iphone Logo"
                  width={160}
                  height={53}
                />
              </Link>
              <Link target="_blank" href={socials.playStore}>
                <Image
                  src="/assets/icons/google-store.svg"
                  className="w-[132px] md:w-[160px] h-[44px] md:h-[53px]"
                  alt="Google Logo"
                  width={160}
                  height={53}
                />
              </Link>
            </div>
          </div>
          <div className="flex pl-[30%]">
            <Image
              src="/assets/images/probashi/probashi.webp"
              className="w-[247px] md:w-[377px] h-auto md:h-[279px]"
              width={377}
              height={279}
              alt=""
            />
          </div>
        </div>
        <div>
          <ProbashiAppSlider imageUrl={imageUrl} appSection={appSection} />
        </div>
      </div>
    </div>
  );
};

export default ProbashiApp;
