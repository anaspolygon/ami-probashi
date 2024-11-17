"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Value {
  key: string;
  value: string;
}
interface SubTitle {
  name: string;
  values: Array<Value>;
}

const SubMenu = ({
  subtitle,
  onClose,
}: {
  subtitle: SubTitle;
  onClose: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const { name, values } = subtitle;

  return (
    <div className="mt-4">
      <Disclosure>
        <DisclosureButton
          onClick={() => setOpen(!open)}
          className="flex justify-between items-center w-full border-b border-b-[#EAECF0] pb-2.5"
        >
          <p
            className={`${
              open ? "text-primary text-lg" : "text-sm text-[#667085]"
            }  font-medium leading-6 barlow text-left`}
          >
            {name}
          </p>

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
        </DisclosureButton>

        <DisclosurePanel className="text-gray-500">
          <div className="pl-2 pt-3">
            {values &&
              values.map((item, index) => (
                <a
                  onClick={() => onClose()}
                  key={`header_mobile_submenu_values_${index}`}
                  className="text-[#000000] text-base font-medium leading-[19.2px] barlow mb-5 block"
                  href={item.value}
                >
                  {item.key}
                </a>
              ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export default SubMenu;
