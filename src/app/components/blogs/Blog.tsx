"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import "./Blog.css";
import { useLocale, useTranslations } from "next-intl";
import AOS from "aos";
import "aos/dist/aos.css";
import { _get, wordpress } from "@/api";
import {
  extractFirstBnThreeSentences,
  getFirstSentences,
  removeHtmlTags,
} from "@/helpers/helpers";

interface Blog {
  title: string;
  date: string;
  text: string;
  link: string;
  image: string;
}

const Blog = () => {
  // const blogs = [
  //   {
  //     title: "The best marketing strategy for company",
  //     date: "April 01, 2022",
  //     text: "One may not need charts and graphs at this point to know that in the past couple of years expecially,  at this point to know that in the past couple of years expecially, the buying and selling on....",
  //     link: "https://tailwindcss.com/docs/box-shadow",
  //     image: "/assets/images/blogs/blog_1.png",
  //   },
  //   {
  //     title: "The best marketing strategy for company",
  //     date: "April 01, 2022",
  //     text: "One may not need charts and graphs at this point to know that in the past couple of ",
  //     link: "https://tailwindcss.com/docs/box-shadow",
  //     image: "/assets/images/blogs/blog_2.png",
  //   },
  //   {
  //     title: "The best marketing strategy for company",
  //     date: "April 01, 2022",
  //     text: "One may not need charts and graphs at this point to know that in the past couple of years expecially",
  //     link: "https://tailwindcss.com/docs/box-shadow",
  //     image: "/assets/images/blogs/blog_3.png",
  //   },
  // ];
  const [blogs, setBlogs] = useState<Array<Blog> | null>(null);
  const t = useTranslations("blog");
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const locale = useLocale();
  useEffect(() => {
    const url =
      locale === "en"
        ? (process.env.NEXT_PUBLIC_WORDPRESS_BLOG_EN_API as string) ??
          wordpress.blogEnApi
        : (process.env.NEXT_PUBLIC_WORDPRESS_BLOG_BN_API as string) ??
          wordpress.blogBnApi;

    const localeDateString = locale === "en" ? "en-US" : "bn-BD";

    _get(url).then((res) => {
      const data = res.data.map((item: any) => ({
        title: item.title.rendered,
        date: new Date(item.date).toLocaleDateString(localeDateString, {
          year: "numeric",
          month: "long",
          day: "2-digit",
        }),
        text:
          locale === "en"
            ? getFirstSentences(removeHtmlTags(item.excerpt.rendered))
            : extractFirstBnThreeSentences(
                removeHtmlTags(item.excerpt.rendered)
              ),
        link: item.link,
        image: item.better_featured_image.media_details.sizes.medium.source_url,
      }));
      setBlogs(data ?? null);
    });
  }, [locale]);

  return (
    <div className="md:relative">
      <div className="px-4 pt-8 pb-12 md:pt-0 md:pb-0 w-full md:w-[1170px] md:mx-auto md:relative md:z-20">
        <div>
          <div className="flex  justify-between mb-[15px] md:mb-10 md:pt-12">
            <h2 className="barlow text-black md:text-white font-semibold text-2xl md:text-[32px] leading-[28.8px] md:leading-[38.4px]">
              {t("title")}
            </h2>
            <a
              className="hidden md:flex gap-2 items-center"
              href={
                process.env.NEXT_PUBLIC_WORDPRESS_BLOG_URL ?? wordpress.blogUrl
              }
              target="_blank"
            >
              <p className="barlow text-white text-xl font-medium leading-[24px]">
                {t("viewAll")}
              </p>
              <Image
                src="/assets/images/blogs/white_arrow.svg"
                width={24}
                height={24}
                alt=""
              />
            </a>
          </div>
          <div
            className="flex flex-col md:flex-row gap-[30px] justify-center"
            data-aos="fade-up"
          >
            {(blogs ?? []).map((blog, index) => (
              <BlogCard key={`blog_card_${index}`} blog={{ ...blog, index }} />
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:block w-full  absolute top-0 z-10 min-h-[415px]  home-blog-bg"></div>
    </div>
  );
};

export default Blog;
