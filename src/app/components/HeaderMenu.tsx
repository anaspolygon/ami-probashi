"use client";
import { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Service from "./headerItems/Service";
import Recruitment from "./headerItems/Recruiment";
import Government from "./headerItems/Government";
import Portals from "./headerItems/Portals";
import DownloadCards from "./headerItems/DownloadCards";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import useAppStoreUrl from "@/hook/useAppStoreUrl";
import { useSearchParams } from "next/navigation";
import { locales } from "@/config";
import Media from "./headerItems/Media";

const HeaderMenu = () => {
  const storeUrl = useAppStoreUrl();
  const searchParams = useSearchParams();
  const [_, startTransition] = useTransition();
  const locale = useLocale();
  const [visible, setVisible] = useState("invisible");
  const [visibleRecruite, setVisibleRecruite] = useState("invisible");

  const targetLocal = searchParams.get("lang");

  const changeLocale = (nextLocale: string) => {
    const locale = nextLocale as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  };
  // const changeLocale = (nextLocale: string) => {
  //   const locale = nextLocale as Locale;

  //   startTransition(() => {
  //     setUserLocale(locale);

  //     const { pathname, search } = window.location;
  //     const params = new URLSearchParams(search);

  //     if (params.has("lang")) {
  //       params.delete("lang");
  //       const newUrl = `${pathname}${params.toString() ? `?${params.toString()}` : ''}`;

  //       window.history.replaceState(null, "", newUrl);
  //     }
  //   });
  // };

  const inVisible = () => {
    setVisible("invisible");
  };

  const inVisibleRecruite = () => {
    setVisibleRecruite("invisible");
  };

  const t = useTranslations("header");
  const m = useTranslations("media");
  const menus = [
    {
      name: t("services"),
      item: <Service visible={visible} inVisible={inVisible} />,
    },
    {
      name: t("recruitment"),
      item: (
        <Recruitment
          visibleRecruite={visibleRecruite}
          inVisibleRecruite={inVisibleRecruite}
        />
      ),
    },
    {
      name: t("government"),
      item: <Government />,
    },
    {
      name: t("portals"),
      item: <Portals />,
    },
    {
      name: t("downloadCards"),
      item: <DownloadCards />,
    },
    // {
    //   name: m("title"),
    //   item: <Media />,
    // },
  ];

  useEffect(() => {
    if (targetLocal && locales.some((item) => item === targetLocal)) {
      changeLocale(targetLocal);
    }
  }, [targetLocal]);

  return (
    <div className="h-[66px] hidden web-menu">
      <div
        className={`px-18.75 web:px-33.75 pt-2 pb-4 bg-white hidden fixed web-menu w-full z-50 shadow-lg`}
      >
        <div className="w-[1270px] mx-auto flex items-center justify-between">
          <div className="flex items-end gap-[37px]">
            <a href="/">
              <Image src="/assets/logo.svg" width={84} height={42} alt="" />
            </a>
            <div className="">
              <div className="flex items-end gap-5">
                <div>
                  <Link
                    className="text-[#0F172A] hover:text-primary text-lg hover:border-b-2 hover:pb-1.5 font-semibold leading-[21.6px]  px-1 barlow"
                    href="/"
                  >
                    {t("home")}
                  </Link>
                </div>
                <div>
                  <ul className="flex gap-5 items-center">
                    {menus.map((menu, index) => (
                      <li
                        onMouseEnter={() => {
                          if (index === 0) {
                            setVisible("visible");
                          }

                          if (index === 1) {
                            setVisibleRecruite("visible");
                          }
                        }}
                        onMouseLeave={() => {
                          if (index === 0) {
                            setVisible("invisible");
                          }
                          if (index === 1) {
                            setVisibleRecruite("invisible");
                          }
                        }}
                        key={`header_mega_menu_${index}`}
                        className="group"
                      >
                        <p className="flex hover:text-primary justify-center items-center gap-x-1.5 rounded-md bg-white text-lg font-medium text-[#0F172A] leading-[21.6px]">
                          {menu.name}
                          <Image
                            src="/assets/icons/menu_arrow_down.svg"
                            width={12}
                            height={12}
                            alt=""
                          />
                        </p>
                        {menu.item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <Link target="_blank" href={storeUrl}>
              <div className="flex items-center justify-center gap-1.5 border border-[#C9DDDD] w-[117px] h-9 rounded-[19px]">
                <Image
                  src="/assets/icons/barcode.svg"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  alt=""
                />
                <div>
                  <p className="barlow font-semibold text-[10px] text-[#0F172A] leading-[10px]">
                    Get Ami <br /> Probashi App
                  </p>
                </div>
              </div>
            </Link>
            <Image
              className="mx-3"
              src="/assets/icons/line.svg"
              width={2}
              height={30}
              alt=""
            />
            <div className="flex gap-2 border border-[#C9DDDD] w-[94px] h-[36px] px-1 items-center justify-center rounded-60">
              <button
                onClick={() => changeLocale("en")}
                className={`${
                  locale === "en"
                    ? "bg-primary text-white pt-1 pb-[7px] pl-3 pr-[13px] rounded-60"
                    : "font-semibold  text-[#334155]"
                }  barlow font-semibold text-sm leading-[16.8px] w-[43px] h-[28px]`}
              >
                EN
              </button>
              <button
                onClick={() => changeLocale("bn")}
                className={`${
                  locale === "bn"
                    ? "bg-primary text-white py-1 pl-3 pr-[13px] font-semibold rounded-60"
                    : "text-[#334155]"
                } barlow font-semibold  text-sm leading-[16.8px] w-[43px] h-[28px]`}
              >
                বাং
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
