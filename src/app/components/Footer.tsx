import FooterUpper from "./FooterUpper";
import FooterBottom from "./FooterBottom";
import CopyRight from "./CopyRight";
import Image from "next/image";
import FooterMobile from "./FooterMobile";
const Footer = () => {
  return (
    <div>
      <div className="min-h-120 w-full linear-background hidden md:block">
        <div className="w-full md:w-[1170px] mx-auto" id="footer">
          <FooterUpper />
          <FooterBottom />
        </div>
        <div className="bg-primary  py-3.5 mt-12">
          <CopyRight />
        </div>
      </div>
      {/* footer mobile */}
      <FooterMobile />
    </div>
  );
};

export default Footer;
