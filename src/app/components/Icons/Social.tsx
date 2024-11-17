import React from "react";
import SVG from "./SVG";
import In from "./In";
import Facebook from "./Facebook";
import Twitter from "./Twitter";
import Youtube from "./Youtube";
import { footer, socials } from "@/api";
import Instagram from "@/app/components/Icons/Instagram";
import Link from "next/link";

const Social = () => {
  return (
    <div className="flex gap-3">
      <Link target="_blank" href={socials.in}>
        <SVG>
          <In className="svg-icon" />
        </SVG>
      </Link>
      <Link target="_blank" href={socials.facebook}>
        <SVG>
          <Facebook className="svg-icon" />
        </SVG>
      </Link>
      <Link target="_blank" href={socials.instagram}>
        <SVG>
          <Instagram className="svg-icon" />
        </SVG>
      </Link>
      <Link target="_blank" href={socials.youtube}>
        <SVG>
          <Youtube className="svg-icon" />
        </SVG>
      </Link>
    </div>
  );
};

export default Social;
