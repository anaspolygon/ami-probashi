"use client";
import React, { useEffect, useState, useTransition } from "react";
import type { DrawerProps } from "antd";
import { Drawer } from "antd";
import Image from "next/image";
import Menu from "./Menu";

import {
  brac,
  bracMenu,
  downloadCardsBmetService,
  downloadCardsPdo,
  downloadCardsTrainingCertificate,
  government,
  portalsGovernmentPortal,
  portalsRecruitmentPortal,
  recruitmentForeignEmployers,
  recruitmentLocalEmployers,
  recruitmentLocalEmployersMenu,
  recruitmentTrainingInstitute,
  servicesGoverment,
  servicesJob,
  servicesLifeStyle,
  socials,
  media,
} from "@/api";
import Link from "next/link";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import { locales } from "@/config";

const HeaderMobile = () => {
  const searchParams = useSearchParams();
  const pathnames = usePathname();
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const targetLocal = searchParams.get("lang");

  const onClose = () => {
    setOpen(false);
    // setTimeout(() => window.location.reload(), 500);
  };

  const t = useTranslations("header");
  // const locale = useLocale();
  const m = useTranslations("media");

  const router = useRouter();
  const [_, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  const changeLocale = (nextLocale: string) => {
    const locale = nextLocale as Locale;

    // Use startTransition for non-urgent update
    startTransition(() => {
      setUserLocale(locale); // Set the locale via cookies

      // Remove the lang query parameter from the URL without reloading the page
      const { pathname, search } = window.location;
      const params = new URLSearchParams(search);

      if (params.has("lang")) {
        params.delete("lang"); // Remove the 'lang' query param
        const newUrl = `${pathname}${
          params.toString() ? `?${params.toString()}` : ""
        }`;

        // Update the browser's URL without reloading the page
        window.history.replaceState(null, "", newUrl);
      }
    });
  };

  const [menus, setMenus] = useState([
    {
      title: t("home"),
      subtitle: [],
      link: "/",
    },
    {
      title: t("services"),
      subtitle: [
        {
          name: t("government"),
          values: [
            {
              key: t("bmetRegistration"),
              value: servicesGoverment.bmetRegistration,
            },
            {
              key: t("pdoPreDepartureOrientation"),
              value: servicesGoverment.pdo,
            },
            {
              key: t("generalTraining"),
              value: servicesGoverment.generalTraining,
            },
            {
              key: t("bmetClearanceSmartCard"),
              value: servicesGoverment.bmetClearanceSmartCard,
            },
          ],
        },
        {
          name: t("job"),
          values: [
            {
              key: t("findJob"),
              value: servicesJob.findJob,
            },
            {
              key: t("makeCV"),
              value: servicesJob.makeJob,
            },
            {
              key: t("takeCareerConsultancy"),
              value: servicesJob.takeCareerConsultancy,
            },
          ],
        },
        {
          name: t("lifeStyle"),
          values: [
            {
              key: t("onlineDoctorProbashiHealth"),
              value: servicesLifeStyle.onlineDoctor,
            },
            {
              key: t("entertainmentComingSoon"),
              value: "",
            },
            {
              key: t("eLearningComingSoon"),
              value: "",
            },
          ],
        },
        {
          name: t("brac"),
          values: [
            {
              key: t("returneeMigrants"),
              value: brac.returneeMigrants,
            },
            {
              key: t("skillTraining"),
              value: bracMenu.returneeMigrants,
            },
            {
              key: t("overseasEmployment"),
              value: bracMenu.returneeMigrants,
            },
          ],
        },
      ],
      open: false,
    },
    {
      title: t("recruitment"),
      subtitle: [
        {
          name: t("foreignEmployers"),
          values: [
            {
              key: t("talentPool"),
              value: recruitmentForeignEmployers.talentJob,
            },
            {
              key: t("postJob"),
              value: recruitmentForeignEmployers.postJob,
            },
            {
              key: t("videoInterview"),
              value: recruitmentForeignEmployers.videoInterview,
            },
            {
              key: t("connetToLocalRecruitingAgencies"),
              value: recruitmentForeignEmployers.connectLocalRecruitingAgency,
            },
            {
              key: t("governmentCompliance"),
              value: recruitmentForeignEmployers.governmentCompliance,
            },
          ],
        },
        {
          name: t("localEmployers"),
          values: [
            {
              key: t("talentPool"),
              value: recruitmentLocalEmployers.talentPool,
            },
            {
              key: t("postJob"),
              value: recruitmentLocalEmployersMenu.postJob,
            },
            {
              key: t("videoInterview"),
              value: recruitmentLocalEmployersMenu.videoInterview,
            },
          ],
        },
        {
          name: t("trainingInstitute"),
          values: [
            {
              key: t("broadcastCourses"),
              value: recruitmentTrainingInstitute.broadcastCourses,
            },
            {
              key: t("onlineEnrollment"),
              value: recruitmentTrainingInstitute.onlineEnrollment,
            },
            {
              key: t("digitalAttendance"),
              value: recruitmentTrainingInstitute.digitalAttendance,
            },
          ],
        },
      ],
      open: false,
    },
    {
      title: t("government"),
      subtitle: [],
      items: [
        {
          key: t("moewoeBmet"),
          value: government.moewoeAndBmet,
        },
        {
          key: t("ttc"),
          value: government.ttc,
        },
        {
          key: t("unionDigitalCenters"),
          value: government.unionDigitalCenters,
        },
        {
          key: t("airportEmigration"),
          value: government.airportEmigration,
        },
        {
          key: t("demoOffices"),
          value: government.demoOffices,
        },
      ],
      open: false,
    },
    {
      title: t("portals"),
      subtitle: [
        {
          name: t("governmentPortal"),
          values: [
            {
              key: t("bmet"),
              value: portalsGovernmentPortal.bmet,
            },
            {
              key: t("ttc"),
              value: portalsGovernmentPortal.ttc,
            },
            {
              key: t("demoOffice"),
              value: portalsGovernmentPortal.demoOffice,
            },
            {
              key: t("bimt"),
              value: portalsGovernmentPortal.bimt,
            },
          ],
        },
        {
          name: t("recruitmentPortal"),
          values: [
            {
              key: t("recruitingAgency"),
              value: portalsRecruitmentPortal.recruitingAgency,
            },
            {
              key: t("foreignEmployer"),
              value: portalsRecruitmentPortal.foreignEmployer,
            },
            {
              key: t("raAccountRequest"),
              value: portalsRecruitmentPortal.raAccountRequest,
            },
          ],
        },
      ],
      open: false,
    },
    {
      title: t("downloadCards"),
      subtitle: [
        {
          name: t("bmetService"),
          values: [
            {
              key: t("bmetRegistration"),
              value: downloadCardsBmetService.bmetRegistration,
            },
            {
              key: t("downloadClearanceCard"),
              value: downloadCardsBmetService.bmetSmartCard,
            },
            {
              key: t("trackClearanceApplication"),
              value: downloadCardsBmetService.trackApplication,
            },
            {
              key: t("verifyBmetClearanceCard"),
              value: downloadCardsBmetService.verifySmartCard,
            },
          ],
        },
        {
          name: t("trainingAndCertificate"),
          values: [
            {
              key: t("downloadGeneralCertificate"),
              value:
                downloadCardsTrainingCertificate.downloadGeneralCertificate,
            },
            {
              key: t("downloadHousekeepingCertificate"),
              value:
                downloadCardsTrainingCertificate.downloadHouseKeepingCertificate,
            },
            {
              key: t("downloadEnrollmentCardGeneralHousekeeping"),
              value:
                downloadCardsTrainingCertificate.downloadEnrollmentCardGeneralHousekeeping,
            },
          ],
        },
        {
          name: t("pdo"),
          values: [
            {
              key: t("downloadEnrollmentCard"),
              value: downloadCardsPdo.downloadEnrollmentCard,
            },
            {
              key: t("downloadPdoCertificate"),
              value: downloadCardsPdo.downloadPdoCertificateCard,
            },
          ],
        },
      ],
      open: false,
    },
    // {
    //   title: m("title"),
    //   subtitle: [],
    //   items: [
    //     {
    //       key: m("blog"),
    //       value: media.blog as string,
    //     },
    //     {
    //       key: m("article"),
    //       value: media.article as string,
    //     },
    //     {
    //       key: m("videoGallery"),
    //       value: media.videoGallery as string,
    //     },
    //     {
    //       key: m("photoGallery"),
    //       value: media.photoGallery as string,
    //     },
    //   ],
    //   open: false,
    // },
    {
      title: t("aboutUs"),
      subtitle: [],
      link: "/about",
      open: false,
    },
    {
      title: locale === "en" ? "ENGLISH" : "বাংলা",
      subtitle: [],
      items: [
        {
          key: locale === "en" ? "বাংলা" : "ENGLISH",
          value: locale === "en" ? "/bn" : "/en",
        },
      ],
      fn: changeLocale,
      hasFun: true,
      open: false,
    },
  ]);

  // const handleOpen = (index: number) => {
  //   const newMenus = menus
  //     .filter((item, i) => index !== i)
  //     .map((item) => ({
  //       ...item,
  //       open: false,
  //     }));

  

  //   setMenus(newMenus);

  // };

  const social = [
    {
      image: "/assets/icons/drawer/in.svg",
      link: socials.in,
    },
    {
      image: "/assets/icons/drawer/fb.svg",
      link: socials.facebook,
    },
    {
      image: "/assets/icons/drawer/instagram.svg",
      link: socials.instagram,
    },

    {
      image: "/assets/icons/drawer/yt.svg",
      link: socials.youtube,
    },
  ];

  useEffect(() => {
    if (targetLocal && locales.some((item) => item === targetLocal)) {
      changeLocale(targetLocal);
    }
  }, [targetLocal]);

  return (
    <div className="mobile-menu">
      <div className="flex justify-between items-center p-4">
        <a href="/">
          <Image
            src="/assets/logo.svg"
            alt="Example Image"
            width={80}
            height={40}
          />
        </a>
        <button onClick={showDrawer}>
          <Image
            src="/assets/menu.svg"
            alt="Example Image"
            width={30}
            height={30}
          />
        </button>
      </div>
      <Drawer
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <div className="flex justify-between items-center mb-[22px] px-4">
          <a href="/">
            <Image
              src="/assets/logo.svg"
              alt="Example Image"
              width={80}
              height={40}
            />
          </a>
          <button onClick={onClose}>
            <Image
              src="/assets/close.svg"
              alt="Example Image"
              width={35}
              height={35}
            />
          </button>
        </div>
        <div className="px-4">
          {menus.map((menu, index) => (
            <Menu
              key={`header_mobile_menu_${index}`}
              isLastMenu={menus.length - 1 === index}
              menu={menu}
              onClose={onClose}
              // handleOpen={handleOpen}
              index={index}
            />
          ))}
        </div>
        <div className="bg-[#F9FAFB] px-4 py-6 mt-[37px]">
          <div className="flex items-center gap-1.5 pb-3.5 border-b border-b-[#EAECF0]">
            <Image
              width={26}
              height={26}
              alt=""
              src="/assets/icons/phone_call.svg"
            />
            <p className="text-base text-[#0D2F3F] font-medium">
              16768 <span className="mx-2.5">Or</span>09638-016768
            </p>
          </div>
          <div className="flex gap-3 items-center justify-center mt-[18px]">
            {social.map((item, index) => (
              <Link
                key={`header_mobile_social_icons_${index}`}
                href={item.link}
              >
                <Image src={item.image} width={20} height={20} alt="" />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-2 items-center justify-center mt-[31px]">
          <Link href={socials.appStore}>
            <Image
              src="/assets/icons/app-store.svg"
              width={132}
              height={44}
              alt=""
            />
          </Link>
          <Link href={socials.playStore}>
            <Image
              src="/assets/icons/google-store.svg"
              width={132}
              height={44}
              alt=""
            />
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

export default HeaderMobile;
