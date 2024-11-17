import Image from "next/image";
import React from "react";

const Training = () => {
  return (
    <div className="px-4 md:px-0 flex flex-col md:flex-row md:mt-8">
      <div className="flex-1">
        <p className="mb-8 roboto font-normal text-sm md:text-lg leading-5 md:leading-8 text-[#475569]">
        Ami Probashi offers a range of general training courses and Pre-Departure Orientation (PDO) courses throughout 120 technical training centers nationwide. These training programs cover various essential skills and courses, enabling individuals acquire better employment opportunities
        </p>

        <p className="mb-8 roboto font-normal text-sm md:text-lg leading-5 md:leading-8 text-[#475569]">
        We have streamlined the training process through digital enrollment, biometric attendance, and QR code certification. Real-time updates and online grading provide immediate feedback to participants.
        </p>

        <p className="mb-8 roboto font-normal text-sm md:text-lg leading-5 md:leading-8 text-[#475569]">
        With over 2.5 million PDO and 350,000 general training enrollments, Ami Probashi has revolutionized migrant training access. Our efficient class management and paperless grading system have significantly streamlined government operations
          <a
            className="text-[#187E7D] text-sm md:text-lg font-semibold underline"
            href=""
          >
            {" "}
            Learn More
          </a>
        </p>
      </div>
      <div className="min-w-full md:min-w-[493px]">
        <Image
          className="w-full md:w-[493px] h-auto"
          src="/assets/images/stackholders/training_centers.svg"
          width={493}
          height={470}
          alt=""
        />
      </div>
    </div>
  );
};

export default Training;
