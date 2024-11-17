"use client";
import React, { useEffect } from "react";
import mixpanel from "mixpanel-browser";
import { usePathname } from "next/navigation";

mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN as string);

type Props = {
  event?: string | undefined;
};

const MixPanel = ({ event }: Props) => {
  const pathname = usePathname();

  useEffect(() => {
    if (!mixpanel || !process.env.NEXT_PUBLIC_MIXPANEL_TOKEN) {
      console.error("Mixpanel not initialized");
      return; // Early return if Mixpanel is not initialized
    }

    console.log("mixpanel initialized:", mixpanel);

    if (pathname === "/download-bmet.html") {
      mixpanel.track("BMET_Reg_Card_Page_Viewed");
    } else if (pathname === "/download-clearance.html") {
      mixpanel.track("BMET_Smart_Card_Page_Viewed");
    } else if (pathname === "/Verify-Smart-Clearance-Card") {
      mixpanel.track("Verify_Smart_Card_Page_Viewed");
    } else if (pathname === "/Track-Clearance-Application") {
      mixpanel.track("Application_Tracking_Page_Viewed");
    } else if (pathname === "/Download-PDO-Certificate") {
      mixpanel.track("PDO_Download_Page_Viewed");
    } else if (pathname === "/Download-Training-Certificate") {
      mixpanel.track("Training_Download_Page_Viewed");
    } else if (event) {
      mixpanel.track(event);
    }
  }, [pathname, event]);

  return null;
};

export default MixPanel;
