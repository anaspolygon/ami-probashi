"use client";
import { useState, useEffect } from "react";
import UAParser from "ua-parser-js";

export default function useAppStoreUrl(): string {
  const [storeUrl, setStoreUrl] = useState("");

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const parser = new UAParser();
      const result = parser.getResult();
      const device = result.device.type;
      const os = result.os.name;

      if (os === "iOS" || os === "Mac OS") {
        setStoreUrl("https://apps.apple.com/us/app/ami-probashi/id1626946419");
      } else if (os === "Android") {
        setStoreUrl(
          "https://play.google.com/store/apps/details?id=com.thane.amiprobashi&hl=en&gl=US"
        );
      } else {
        // Default to Google Play Store
        setStoreUrl(
          "https://play.google.com/store/apps/details?id=com.thane.amiprobashi&hl=en&gl=US"
        );
      }
    }
  }, []);

  return storeUrl;
}
