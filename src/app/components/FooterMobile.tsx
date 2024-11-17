import React from "react";
import Image from "next/image";
import Social from "./Icons/Social";
import { useTranslations } from "next-intl";
import { footer, socials } from "@/api";
import Link from "next/link";

const FooterMobile = () => {
  const t = useTranslations("footer");

  return (
    <div className="md:hidden " id="mobile-er-fota">
      <div className="h-[243px] bg-secondary bg-[url('/assets/images/footer/footer_mobile_bg.png')] bg-no-repeat bg-right-bottom pl-4 pt-7 ">
        <p className="barlow text-[15px] font-medium mb-[12.26px] leading-[24.52px]">
          {t("callNow")}
          <span className="text-primary font-semibold pl-1">
            {t("letUsKnow")}
          </span>
        </p>
        <div>
          <button className="flex items-center justify-center gap-2 bg-primary w-[118px] h-10 rounded-[44.15px] py-2">
            <Image
              src="/assets/icons/phone.svg"
              alt="Phone Logo"
              width={22}
              height={22}
            />
            <p className="text-white text-lg font-semibold barlow leading-[21.6px]">
              {t("16768")}
            </p>
          </button>
          <div className="w-[125px] text-center">
            <p className="text-base text-primary font-medium barlow leading-[15.33px] my-3">
              {t("or")}
            </p>
          </div>
          <button className="text-3.5 text-primary font-medium barlow w-[125px] h-8 border border-primary  leading-[16.8px] rounded-[20px]">
            {t("09638-016768")}
          </button>
        </div>
      </div>
      <div className="bg-[#CFE6DB66] py-6 px-4">
        <div className="flex gap-7 mb-6">
          <div className="left">
            <div className="mb-8">
              <h2 className="text-black text-xl font-semibold leading-[24px] barlow mb-3">
                {t("amiProbashi")}
              </h2>
              <ul className="text-greyscale text-base font-medium leading-[19.2px]">
                <li className="mb-3 hover:text-cadetgrey">
                  <Link href={footer.findJob}>{t("findJob")}</Link>
                </li>
                <li className="mb-3 hover:text-cadetgrey">
                  <Link href={footer.makeCV}>{t("makeCV")}</Link>
                </li>
                <li className="hover:text-cadetgrey">
                  <Link href={footer.careerConsultancy}>
                    {t("careerConsultancy")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-black text-xl font-semibold leading-[24px] barlow mb-3">
                {t("lifeStyleService")}
              </h2>
              <ul className="text-greyscale text-base font-medium leading-[19.2px]">
                <li className="mb-3 hover:text-cadetgrey">
                  <Link href={footer.onlineDoctor}>{t("onlineDoctor")}</Link>
                </li>
                <li className="mb-3 hover:text-cadetgrey">
                  <Link
                    className="text-[#8D9CB0] font-normal"
                    style={{
                      pointerEvents: "none",
                    }}
                    href="#"
                  >
                    {t("probashiLearning")}
                  </Link>
                </li>
                <li className="hover:text-cadetgrey">
                  <Link
                    className="text-[#8D9CB0] font-normal"
                    style={{
                      pointerEvents: "none",
                    }}
                    href="#"
                  >
                    {t("entertainment")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="mb-8">
              <h2 className="text-black text-xl font-semibold leading-[24px] barlow mb-3">
                {t("business")}
              </h2>
              <ul className="text-greyscale text-base font-medium leading-[19.2px]">
                <li className="mb-3 hover:text-cadetgrey">
                  <Link href={footer.connectLocalRecruitingAgency}>
                    {t("localRecruitingAgency")}
                  </Link>
                </li>
                <li className="mb-3 hover:text-cadetgrey">
                  <Link href={footer.foreignEmployers}>
                    {t("foreignEmployer")}
                  </Link>
                </li>
                <li className="hover:text-cadetgrey">
                  <Link href={footer.trainingInstitute}>
                    {t("trainingInstitute")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-black text-xl font-semibold leading-[24px] barlow mb-3">
                {t("ourCompany")}
              </h2>
              <ul className="text-greyscale text-base font-medium leading-[19.2px]">
                <li className="mb-3 hover:text-cadetgrey">
                  <Link href={footer.aboutUs}>{t("aboutUs")}</Link>
                </li>
                <li className="mb-3 hover:text-cadetgrey">
                  <Link
                    className="text-[#8D9CB0] font-normal"
                    style={{
                      pointerEvents: "none",
                    }}
                    href={footer.contactUs}
                  >
                    {t("contactUs")}
                  </Link>
                </li>
                <li className="hover:text-cadetgrey">
                  <Link
                    className="text-[#8D9CB0] font-normal"
                    style={{
                      pointerEvents: "none",
                    }}
                    href={footer.faq}
                  >
                    {t("faq")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-black text-xl font-semibold leading-6 barlow mb-6">
            {t("connectWithUs")}
          </h2>
          <Social />
          <h2 className="text-black text-lg font-semibold leading-8 barlow mt-4 mb-2">
            {t("getTheAmiProbashiApp")}
          </h2>
          <div className="flex gap-2">
            <Link target="_blank" href={socials.appStore}>
              <Image
                src="/assets/icons/app-store.svg"
                alt="Iphone Logo"
                width={132}
                height={44}
              />
            </Link>
            <Link target="_blank" href={socials.playStore}>
              <Image
                src="/assets/icons/google-store.svg"
                alt="Google Logo"
                width={132}
                height={44}
              />
            </Link>
          </div>
        </div>
        <div className="border border-[#C9DDDD] mb-3.5"></div>
        <p className="text-sm text-[#0F172A] font-medium barlow leading-[16.8px] mb-3">
          {t("copyright")}
        </p>
        <ul className="flex gap-3 text-black text-sm font-medium leading-[16.8px] barlow">
          <li>
            <Link href={footer.siteMap}>{t("siteMap")}</Link>
          </li>
          <li>
            <Link href={footer.termsAndConditions}>
              {t("termsAndConditions")}
            </Link>
          </li>
          <li>
            <Link href={footer.refundPolicy}>{t("refundPolicy")}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterMobile;
