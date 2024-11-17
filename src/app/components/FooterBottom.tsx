import Image from "next/image";
import React from "react";
import Social from "./Icons/Social";
import { useTranslations } from "next-intl";
import { footer, socials } from "@/api";
import Link from "next/link";

const FooterBottom = () => {
  const t = useTranslations("footer");

  return (
    <div className="w-full flex justify-between">
      <div>
        <h2 className="text-black text-2xl font-semibold leading-29 barlow mb-6">
          {t("amiProbashi")}
        </h2>
        <ul className="text-greyscale text-lg font-medium">
          <li className="mb-4 hover:text-cadetgrey">
            <Link href={footer.findJob}>{t("findJob")}</Link>
          </li>
          <li className="mb-4 hover:text-cadetgrey">
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
        <h2 className="text-black text-2xl font-semibold leading-29 barlow mb-6">
          {t("probashiBusiness")}
        </h2>
        <ul className="text-greyscale text-lg font-medium">
          <li className="mb-4 hover:text-cadetgrey">
            <Link href={footer.connectLocalRecruitingAgency}>
              {t("localRecruitingAgency")}
            </Link>
          </li>
          <li className="mb-4 hover:text-cadetgrey">
            <Link href={footer.foreignEmployers}>{t("foreignEmployer")}</Link>
          </li>
          <li className="hover:text-cadetgrey">
            <Link href={footer.trainingInstitute}>
              {t("trainingInstitute")}
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-black text-2xl font-semibold leading-29 barlow mb-6">
          {t("lifeStyleService")}
        </h2>
        <ul className="text-greyscale  text-lg font-medium">
          <li className="mb-4 hover:text-cadetgrey">
            <Link href={footer.onlineDoctor}>{t("onlineDoctor")}</Link>
          </li>
          <li className="mb-4 hover:text-cadetgrey">
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
      <div>
        <h2 className="text-black text-2xl font-semibold leading-29 barlow mb-6">
          {t("ourCompany")}
        </h2>
        <ul className="text-greyscale text-lg font-medium">
          <li className="mb-4 hover:text-cadetgrey">
            <Link href={footer.aboutUs}>{t("aboutUs")}</Link>
          </li>
          <li className="mb-4 hover:text-cadetgrey">
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
      <div>
        <h2 className="text-black text-2xl font-semibold leading-29 barlow mb-6">
          {t("connectWithUs")}
        </h2>
        <div className="mb-4">
          <Social />
        </div>
        <h2 className="text-black text-xl font-semibold leading-29 barlow mb-2">
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
    </div>
  );
};

export default FooterBottom;
