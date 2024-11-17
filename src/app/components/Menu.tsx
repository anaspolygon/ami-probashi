"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import SubMenu from "./SubMenu";
import { useLocale } from "next-intl";
import Link from "next/link";

interface Value {
  key: string;
  value: string;
}

interface Menu {
  title: string;
  link?: string;
  subtitle: Array<{
    name: string;
    values: Array<Value>;
  }>;
  items?: Array<{
    key: string;
    value: string;
  }>;
  fn?: (locale: string) => void;
  hasFun?: boolean;
}

const Menu = ({
  menu,
  isLastMenu,
  onClose,
  // handleOpen,
  index,
}: {
  menu: Menu;
  isLastMenu: boolean;
  onClose: () => void;
  // handleOpen: (index: number) => void;
  index: number;
}) => {
  const [open, setOpen] = useState(false);
  const { title, subtitle, link, items, fn, hasFun } = menu;
  const hasSubTitle = subtitle.length > 0 || (items ?? []).length > 0;
  const locale = useLocale();
  return (
    <div>
      <Disclosure>
        <DisclosureButton
          onClick={() => {
            setOpen(!open);
            // handleOpen(index);
          }}
          className={`flex justify-between  items-center w-full  ${
            isLastMenu ? null : "border-b border-b-[#EAECF0]"
          } pt-4 pb-5`}
        >
          {subtitle.length === 0 && (items ?? []).length === 0 && link ? (
            <a
              href={link}
              onClick={() => onClose()}
              className={`${
                open ? "text-primary text-lg" : "text-sm text-[#667085]"
              }  font-medium leading-6 barlow`}
            >
              {menu.title}
            </a>
          ) : (
            <p
              className={`${
                open ? "text-primary text-lg" : "text-sm text-[#667085]"
              }  font-medium leading-6 barlow`}
            >
              {menu.title}
            </p>
          )}
          {hasSubTitle ? (
            <button onClick={() => setOpen(!open)} className="py-2">
              <Image
                className={`${open ? "rotate-180" : ""}`}
                width={16}
                height={16}
                alt="arrow_down"
                src={
                  open
                    ? "/assets/icons/arrow_up.svg"
                    : "/assets/icons/arrow_down.svg"
                }
              />
            </button>
          ) : null}
        </DisclosureButton>
        {open && (
          <DisclosurePanel>
            <div className="px-5">
              {subtitle.map((subtitle, index) => (
                <SubMenu
                  key={`header_mobile_submenu_${index}`}
                  subtitle={subtitle}
                  onClose={onClose}
                />
              ))}
              <div>
                {items &&
                  !hasFun &&
                  items.map((item, index) => (
                    <a
                      onClick={() => {
                        onClose();
                      }}
                      key={`header_mobile_submenu_values_${index}`}
                      className="text-[#000000] text-base font-medium leading-[19.2px] barlow mt-5 block"
                      href={item.value}
                    >
                      {item.key}
                    </a>
                  ))}
                {items &&
                  hasFun &&
                  items.map((item, index) => (
                    <button
                      onClick={() => {
                        if (locale === "bn") {
                          fn?.("en");
                        } else {
                          fn?.("bn");
                        }
                        onClose();
                        setTimeout(() => window.location.reload(), 1000);
                      }}
                      key={`header_mobile_submenu_values_${index}`}
                      className="text-[#000000] text-base font-medium leading-[19.2px] barlow mt-5 block"
                    >
                      {item.key}
                    </button>
                  ))}
              </div>
            </div>
          </DisclosurePanel>
        )}
      </Disclosure>
    </div>
  );
};

export default Menu;
