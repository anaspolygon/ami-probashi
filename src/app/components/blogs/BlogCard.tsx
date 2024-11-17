import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
interface Blog {
  title: string;
  date: string;
  text: string;
  link: string;
  image: string;
  index: number;
}
const BlogCard = ({ blog }: { blog: Blog }) => {
  const { title, date, text, link, image, index } = blog;
  const images = [
    "bg-[url('/assets/images/blogs/blog_bg_1.png')]",
    "bg-[url('/assets/images/blogs/blog_bg_2.png')]",
    "bg-[url('/assets/images/blogs/blog_bg_3.png')]",
  ];
  const removeHtmlTags = (str: string) => {
    return str.replace(/<\/?[^>]+(>|$)/g, "");
  };

  const getFirstSentences = (str: string, sentenceCount = 3) => {
    const sentences = str.match(/[^.!?]+[.!?]+/g) || [];
    const selectedSentences = sentences.slice(0, sentenceCount);
    return selectedSentences.join(" ");
  };

  function extractFirstThreeSentences(text: string) {
    // Split the text by Bangla and English sentence-ending punctuation
    const sentences = text.split(/(?<=[।\.])\s*/);

    // Take the first three sentences and join them back into a single string
    const firstThree = sentences.slice(0, 3).join(" ");

    return firstThree.trim(); // Return the trimmed result
  }

  const t = useTranslations("common");

  const locale = useLocale();

  return (
    <div
      className={`pb-4 md:pb-[34px] w-full md:w-[370px] min-h-[446px] md:min-h-[518px] bg-white rounded-lg md:rounded-xl flex flex-col shadow-lg  bg-no-repeat bg-right-top`}
    >
      <div className="w-full min-h-[210px]  md:min-h-[230px] mb-3 md:mb-4">
        <Image
          src={image}
          className="w-full h-auto"
          width={338}
          height={230}
          alt=""
        />
      </div>
      <div className="flex flex-col flex-1 justify-between px-4">
        <div className="mb-4">
          <h2 className="barlow text-black font-semibold text-[20px] md:text-2xl leading-[24px] md:leading-[28.8px] mb-2.5 md:mb-3">
            {title}
          </h2>
          <h3 className="barlwo text-black text-sm md:text-base font-medium leading-[16.41px] md:leading-[18.75px] mb-3 md:mb-4">
            {date}
          </h3>
          <p className="text-[#585858] roboto text-sm md:text-base font-normal leading-[26px] md:pr-4">
            {/* {locale === "bn"
              ? extractFirstThreeSentences(removeHtmlTags(text))
              : getFirstSentences(removeHtmlTags(text))} */}
            {/* {getFirstSentences(removeHtmlTags(text))} */}
            {text}
          </p>
        </div>
        <div>
          <a href={link} target="_blank" className="flex items-center gap-2">
            <p className="barlow text-[#187E7D] font-semibold text-base md:text-lg leading-[19.5px] md:leading-[22px]">
              {t("learnmore")}
            </p>
            <Image
              className="w-5 h-5"
              src="/assets/images/newspaper/green_arrow.svg"
              width={20}
              height={20}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
