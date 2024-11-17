"use client";
import Head from "next/head";
import WeAre from "./components/WeAre";
import JourneyMigrate from "./components/JourneyMigrate";
import Info from "./components/Info";
import ProbashiApp from "./components/ProbashiApp";
const Newspaper = dynamic(() => import("./components/newspaper/Newspaper"), {
  ssr: false,
});
const Customer = dynamic(() => import("./components/customers/Customer"), {
  ssr: false,
});
const CustomerMobile = dynamic(
  () => import("./components/customers/CustomerMobile"),
  { ssr: false }
);
import Workers from "./components/workers/Workers";
import Stackholders from "./components/stackholders/Stackholders";
import Partner from "./components/partnership/Partner";
import Recruit from "./components/recruit/Recruit";
import BannerSection from "./components/banner/BannerSection";
import { useTranslations } from "next-intl";
import Title from "./components/Title";
import dynamic from "next/dynamic";
import BannerMobile from "./components/bannermobile/BannerMobile";
import { Metadata } from "next";
import KeyImpacts from "./components/KeyImpacts";
import { useEffect, useState } from "react";
import MixPanel from "./components/MixPanel";
import Blog from "./components/blogs/Blog";
import { _get, getCmsUrl } from "@/api";

export default function Home() {
  const t = useTranslations("pages");

  const [page, setPage] = useState<any>();
  const call = async () => {
    const res = await _get(getCmsUrl("/1"));
    setPage(res.data.page);
  };



  useEffect(() => {
    call();
  }, []);



  return (
    <main>
      <Title title={t("home")} />
      <MixPanel event="Home_Page_Viewed" />
      <BannerSection
        imageUrl={page?.image_url}
        slider={page?.components.slider.data}
      />
      <BannerMobile
        imageUrl={page?.image_url}
        slider={page?.components.slider.data}
      />
      <div className="pb-8 md:pt-12 md:pb-[72px]">
        <WeAre statistics={page?.components.statistics.data} />
      </div>
      <Workers
        imageUrl={page?.image_url}
        workers={page?.components.migration.data}
      />
      {/* <Info /> */}
      <KeyImpacts
        imageUrl={page?.image_url}
        impacts={page?.components.WWR.data}
      />
      <Recruit
        imageUrl={page?.image_url}
        recruit={page?.components.recruit.data}
      />
      <Stackholders
        imageUrl={page?.image_url}
        stackholders={page?.components.govt_stakeholders.data}
      />
      <Partner
        imageUrl={page?.image_url}
        partner={page?.components.partners.data}
      />
      <Newspaper />
      {/* <Blog/> */}
      <ProbashiApp
        imageUrl={page?.image_url}
        appSection={page?.components.app_section.data}
      />
      <Customer
        imageUrl={page?.image_url}
        customers={page?.components.customer_review.data}
      />
      <CustomerMobile
        imageUrl={page?.image_url}
        customers={page?.components.customer_review.data}
      />
      <JourneyMigrate />
    </main>
  );
}
