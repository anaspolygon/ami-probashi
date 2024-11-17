import React from "react";
// import WorkersTab from "./WorkersTab";
const WorkersTab = dynamic(() => import("./WorkersTab"), { ssr: false });
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import "./Workers.css";

interface Tab {
  icon: string;
  image: string;
  tab_title_bn: string;
  tab_title_en: string;
  migrate_tab_desc_bn: string;
  migrate_tab_desc_en: string;
}
interface Workers {
  tabs: Tab[];
  title_bn: string;
  title_en: string;
}

type Props = {
  imageUrl: string;
  workers: Workers;
};

const Workers = ({ imageUrl, workers }: Props) => {
  const t = useTranslations("migrantWorkers");
  return (
    <div className="py-6 md:py-[72px]  bg-[#CFE6DB4D] bg-[url('/assets/images/workers/workers_bg.svg')] bg-no-repeat bg-right-bottom bg-[length:210px_auto] md:bg-[length:375px_267px] mb-8 md:mb-[72px]">
      <div className="w-full md:w-[1170px] md:mx-auto">
        <h2 className="barlow font-semibold text-[32px] leading-[38.4px] mb-[41px]  text-black hidden md:block ">
          {t("title")}
        </h2>
        <h2 className="barlow font-semibold text-2xl leading-[38.4px] mb-[12px] text-black  pl-4 md:hidden">
          {t("title")}
        </h2>
        <WorkersTab imageUrl={imageUrl} workersTabs={workers?.tabs} />
      </div>
    </div>
  );
};

export default Workers;
