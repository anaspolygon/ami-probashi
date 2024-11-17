import React from "react";
import Home from "./Home";
import { Metadata, ResolvingMetadata } from "next";
import { getCmsUrl } from "@/api";
import { redirect } from "next/navigation";

export async function generateMetadata() {
  const metadata = await fetch(getCmsUrl("/1")).then((res) => res.json());
  console.log(metadata);

  return {
    title: metadata.page.seo.title,
    description: metadata.page.seo.description,
    keywords: metadata.page.seo.keywords,
  };
}

const page = () => {
  return redirect("career-consultancy.html");
};

export default page;
