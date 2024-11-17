import React from "react";
import { useTranslations } from "next-intl";
import { footer } from "@/api";
import Link from "next/link";

const CopyRight = () => {
  const t = useTranslations("footer");

  return (
    <div className="w-full md:w-[1170px] mx-auto flex justify-between">
      <p className="text-white text-sm font-medium barlow">{t("copyright")}</p>
      <ul className="flex gap-6 text-white text-sm font-medium barlow">
        <li>
          <Link href={footer.siteMap}>{t("siteMap")}</Link>
        </li>
        <li>
          <Link href={footer.termsAndConditions}>
            {t("termsAndConditions")}
          </Link>
        </li>
        <li>
          <Link href={footer.privacyPolicy}>{t("privacyPolicy")}</Link>
        </li>
        <li>
          <Link href={footer.refundPolicy}>{t("refundPolicy")}</Link>
        </li>
      </ul>
    </div>
  );
};

export default CopyRight;
