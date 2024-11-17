import createNextIntlPlugin from "next-intl/plugin";
import { default as createBundleAnalyzer } from "@next/bundle-analyzer";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      process.env.NEXT_PUBLIC_IMAGE_DOMAIN_NAME || "dev-bmet.amiprobashi.com",
      "dev-fileservice.amiprobashi.com",
      process.env.NEXT_PUBLIC_WORDPRESS_IMAGE_DOMAIN_NAME ||
        "ami-probashi-wp.dev-polygontech.xyz",
      "dnq4a6incipq3.cloudfront.net",
    ],
  },
  output: "standalone",
};

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(withNextIntl(nextConfig));
