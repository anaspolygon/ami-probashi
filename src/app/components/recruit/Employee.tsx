import React, { useEffect } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Employee.css";
import AOS from "aos";
import "aos/dist/aos.css";

interface Props {
  title?: string;
  text?: string;
  images: Array<string>;
  content?: any;
  signup?: string;
  learnMore?: string;
}

const Employee = ({ employee }: { employee: Props }) => {
  const { title, text, images, learnMore, content } = employee;
  const t = useTranslations("common");
  const locale = useLocale();
  const isBn = locale === "bn";
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="px-4 py-6 md:pb-4 py-md:py-8 md:pl-10 md:pr-[50px] md:rounded-[24px] employee-bg mt-[4%] md:mt-8">
      <div className="flex flex-col md:flex-row md:gap-[64px]">
        <div className="md:w-[515px]  order-1  md:mb-0" data-aos="fade-up">
          <Swiper
            spaceBetween={50}
            modules={[Autoplay, Pagination]}
            centeredSlides={false}
            loop={true}
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="recruit-slider"
          >
            {images?.map((image, index) => (
              <SwiperSlide
                className="min-h-[275px] md:min-h-[385px]"
                key={`recruit_slider_image_${index}`}
              >
                <Image
                  className="w-[348px] h-auto md:w-full md:h-auto mx-auto"
                  src={image ?? ""}
                  width={515}
                  height={358}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex-1 flex items-center order-2 ">
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: isBn
                  ? content?.recruit_tab_desc_bn ?? ""
                  : content?.recruit_tab_desc_en ?? "",
              }}
              className="recruit-item"
            >
              {/* <h2 className="text-2xl md:text-8.5 text-white leading-[28.8px] md:leading-[40.8px] mb-2 md:mb-3 barlow">
              {title}
            </h2> */}
              {/* <Link href={learnMore}>
              <p className="text-base md:text-xl text-white font-normal leading-[26px] md:leading-8 roboto mb-4 md:mb-8">
                {text}{" "}
                <span className="text-orange underline underline-offset-4">
                  {t("learnmore")}
                </span>
              </p>
            </Link> */}
              {/* <Link href={employee.signup}>
              <button className="bg-white text-xl text-primary roboto flex items-center justify-center gap-2.5 rounded-50 w-37.5 h-13">
                <span>{t("signup")}</span>
                <Image
                  src="/assets/icons/arrow.svg"
                  width={24}
                  height={24}
                  alt=""
                />
              </button>
            </Link> */}
            </div>
            <Link href={content?.button_link ?? " "}>
              <button className="bg-white text-xl text-primary roboto flex items-center justify-center gap-2.5 rounded-50 w-37.5 h-13">
                {/* <span>{t("signup")}</span> */}
                <span>
                  {isBn ? content?.button_title_bn : content?.button_title_en}
                </span>
                <Image
                  src="/assets/icons/arrow.svg"
                  width={24}
                  height={24}
                  alt=""
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
