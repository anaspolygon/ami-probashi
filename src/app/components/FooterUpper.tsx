import React from "react";
import Image from "next/image";
import {useTranslations} from "next-intl";

const FooterUpper = () => {
  const t = useTranslations("footer");
  return (
    <div className="bg-secondary flex justify-between rounded-2xl w-full  pl-10.5 mb-12">
      <div className="py-14.25">
        <p className="barlow text-3xl font-medium mb-6 leading-48">
            {t("callNow")}
          <span className="text-primary font-semibold pl-1">
            {t("letUsKnow")}
          </span>
        </p>
        <div>
          <div className="flex items-center gap-3">
            <button className="flex items-center justify-center gap-2.5 bg-primary  w-40.25 h-13.5 rounded-60">
              <Image
                src="/assets/icons/phone.svg"
                alt="Phone Logo"
                width={30}
                height={30}
              />
              <p className="text-white text-2xl font-semibold barlow leading-29">
                {t("16768")}
              </p>
            </button>
            <p className="text-2xl text-primary font-medium barlow leading-30">
              {t("or")}
            </p>
            <button className="text-2xl text-primary font-medium barlow w-55.75 h-13.5 border border-primary leading-29 rounded-40">
              {t("09638-016768")}
            </button>
          </div>
        </div>
      </div>
      <Image
        src="/assets/images/people.webp"
        alt="People Logo"
        width={361}
        height={240}
      />
    </div>
  );
};

export default FooterUpper;
