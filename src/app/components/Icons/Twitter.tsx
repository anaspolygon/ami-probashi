import React from "react";

interface Props {
  className: string;
}

const Twitter = ({ className }: Props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4069_6229)">
        <path d="M11.8618 8.46864L19.1472 0H17.4208L11.0949 7.3532L6.04244 0H0.215027L7.85533 11.1193L0.215027 20H1.94152L8.6218 12.2348L13.9576 20H19.785L11.8614 8.46864H11.8618ZM9.49714 11.2173L8.72301 10.1101L2.5636 1.29967H5.21539L10.1861 8.40994L10.9602 9.51718L17.4216 18.7594H14.7698L9.49714 11.2177V11.2173Z" />
      </g>
      <defs>
        <clipPath id="clip0_4069_6229">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Twitter;
