import { getImageUrl } from "@/helpers/helpers";
import Image from "next/image";

interface Mission {
  image_1: string;
  image_2: string;
  image_3: string;
  image_4: string;
  title_bn: string;
  title_en: string;
  description_bn: string;
}

type Props = {
  mission: Mission;
  imageUrl: string;
};
export default function AboutGallery({ mission, imageUrl }: Props) {
  console.log(mission);

  return (
    <div className="barlow px-6 md:px-0 pb-8  md:pt-0 md:pb-0 w-full md:w-[1170px] md:mx-auto">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="flex-1 min-h-[300px]  md:min-h-[400px] rounded-2xl bg-[#EEEEEE]">
          <Image
            // src={"/assets/images/about/images_1.webp"}
            src={mission ? getImageUrl(imageUrl, mission?.image_1) : ""}
            width={1920}
            height={1080}
            alt="About Gallery Image 1"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 md:justify-between">
          <div className="w-full rounded-2xl min-h-[172px] md:min-h-[188px] bg-[#EEEEEE]">
            <Image
              // src={"/assets/images/about/images_2.webp"}
              src={mission ? getImageUrl(imageUrl, mission?.image_2) : ""}
              width={1920}
              height={1080}
              alt="About Gallery Image 2"
            />
          </div>
          <div className="w-full rounded-2xl min-h-[172px] md:min-h-[188px] bg-[#EEEEEE]">
            <Image
              // src={"/assets/images/about/images_3.webp"}
              src={mission ? getImageUrl(imageUrl, mission?.image_3) : ""}
              width={1920}
              height={1080}
              alt="About Gallery Image 3"
            />
          </div>
        </div>
        <div className="flex-1 min-h-[300px]  md:min-h-[400px] rounded-2xl bg-[#EEEEEE]">
          <Image
            // src={"/assets/images/about/images_4.webp"}
            src={mission ? getImageUrl(imageUrl, mission?.image_4) : ""}
            width={1920}
            height={1080}
            alt="About Gallery Image 4"
          />
        </div>
      </div>
    </div>
  );
}
