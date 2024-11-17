import Image from "next/image";

interface HeroImgProps {
    imgURL: string;
}

export default function HeroImg({ imgURL }: HeroImgProps) {
  return (
    <div id="about-hero">
      <Image
        src={imgURL}
        height={600}
        width={1920}
        alt="Hero Image"
        className="w-full h-auto"
      />
    </div>
  );
}
